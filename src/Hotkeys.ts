import { sacrificeAnts } from './Ants';
import { buyAccelerator, boostAccelerator, buyMultiplier } from './Buy';
import { player, resetCheck, synergismHotkeys } from './Synergism';
import { keyboardTabChange, toggleAutoChallengeRun, toggleCorruptionLevel, confirmReply } from './Toggles';
import { Alert, Prompt, Confirm } from './UpdateHTML';
import { Globals as G } from './Variables';
import { DOMCacheGetOrSet } from './Cache/DOM';
import { useConsumable } from  './Shop';
import { promocodes } from './ImportExport';

export const defaultHotkeys = new Map<string, [string,() => unknown, boolean]>([
    ['A', ['Buy Accelerators', () => buyAccelerator(), false]],
    ['B', ['Boost Accelerator', () => boostAccelerator(), false]],
    ['C', ['Auto Challenge', () => {
        toggleChallengeSweep()
    }, false]],
    ['E', ['Exit T / R Challenge', () => {
        if (player.autoChallengeRunning) {
            toggleChallengeSweep()
        } else {
            exitTranscendAndPrestigeChallenge()
        }
    }, false]],
    ['M', ['Multipliers', () => buyMultiplier(), false]],
    ['N', ['No (Cancel)', () => confirmReply(false), true]],
    ['P', ['Reset Prestige', () => resetCheck('prestige'), false]],
    ['R', ['Reset Reincarnate', () => resetCheck('reincarnation'), false]],
    ['S', ['Sacrifice Ants', () => sacrificeAnts(), false]],
    ['T', ['Reset Transcend', () => resetCheck('transcension'), false]],
    ['Y', ['Yes (OK)', () => confirmReply(true), true]],
    ['ARROWLEFT', ['Back a tab', () => keyboardTabChange(-1), false]],
    ['ARROWRIGHT', ['Next tab', () => keyboardTabChange(1), false]],
    ['ARROWUP', ['Back a subtab', () => keyboardTabChange(-1, false), false]],
    ['ARROWDOWN', ['Next subtab', () => keyboardTabChange(1, false), false]],
    ['SHIFT+A', ['Reset Ascend', () => resetCheck('ascension'), false]],
    ['SHIFT+C', ['Cleanse Corruptions', () => toggleCorruptionLevel(10, 999), false]],
    ['SHIFT+D', ['Spec. Action Add x1', () => promocodes('add', 1), false]],
    ['SHIFT+E', ['Exit Asc. Challenge', () => resetCheck('ascensionChallenge'), false]], // Its already checks if inside Asc. Challenge
    ['SHIFT+O', ['Use Off. Potion', () => useConsumable('offeringPotion'), false]],
    ['SHIFT+P', ['Use Obt. Potion', () => useConsumable('obtainiumPotion'), false]],
    ['SHIFT+S', ['Reset Singularity', () => resetCheck('singularity'), false]]
]);

export let hotkeysEnabled = false;

export let hotkeys = new Map<string, [string,() => unknown, boolean]>(defaultHotkeys);

const toggleChallengeSweep = (): void => {
    if (player.researches[150] > 0) {
        toggleAutoChallengeRun()
        if (!player.autoChallengeRunning) {
            exitTranscendAndPrestigeChallenge()
        }
    }
}

const exitTranscendAndPrestigeChallenge = () => {
    if (player.currentChallenge.reincarnation !== 0) {
        void resetCheck('reincarnationChallenge', undefined, true)
    }
    if (player.currentChallenge.transcension !== 0) {
        void resetCheck('transcensionChallenge', undefined, true)
    }
}

const eventHotkeys = (event: KeyboardEvent): void => {
    if (!hotkeysEnabled || player.toggles[39] === false) {
        // There was a race condition where a user could spam Shift + S + Enter to
        // Singularity which would cause a bug when rune 7 was bought. To prevent this,
        // the game disables hotkeys when on the offline progress screen, and re-
        // enables them when the user leaves.
        return;
    }

    if (document.activeElement?.localName === 'input') {
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
        // finally fixes the bug where hotkeys would be activated when typing in an input field
        return event.stopPropagation();
    }

    synergismHotkeys(event, event.code.replace(/^(Digit|Numpad)/, '').toUpperCase());

    let keyPrefix = '';
    if (event.ctrlKey) {
        keyPrefix += 'CTRL+';
    }
    if (event.shiftKey) {
        keyPrefix += 'SHIFT+';
    }
    if (event.altKey) {
        keyPrefix += 'ALT+';
    }
    const key = keyPrefix + event.key.toUpperCase();

    // Disable the TAB key as it may allow unexpected operations
    if (key === 'TAB') {
        event.preventDefault();
    }

    // Disable hotkeys if notifications are occurring
    if (key !== 'ENTER' && DOMCacheGetOrSet('transparentBG').style.display === 'block') {
        if (hotkeys.has(key) && (hotkeys.get(key)![2] !== true)) {
            return;
        }
    }

    let hotkeyName = '';
    if (hotkeys.has(key)) {
        hotkeyName = '' + hotkeys.get(key)![0];
        hotkeys.get(key)![1]();
        event.preventDefault();
    }

    if (G['currentTab'] === 'settings' && player.subtabNumber === 5) {
        DOMCacheGetOrSet('lastHotkey').textContent = key;
        DOMCacheGetOrSet('lastHotkeyName').textContent = hotkeyName;
    }
}

const makeSlot = (key: string, descr: string) => {
    const div = document.createElement('div');
    div.classList.add('hotkeyItem');

    const span = document.createElement('span');
    span.id = 'actualHotkey';
    span.textContent = key;
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    span.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;
        const oldKey = target.textContent!.toUpperCase();
        const name =
            hotkeys.get(oldKey)?.[0] ??
            target.nextSibling?.textContent;

        // new value to set key as, unformatted
        const newKey = await Prompt(`Enter the new key you want to activate ${name} with. MDN has a list of values for "special keys" if you would like to use one: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values You can also prefix your hotkey with [Ctrl,Shift,Alt]+<key>`);

        if (typeof newKey !== 'string') {
            return;
        }

        const toSet = newKey.toUpperCase();

        if (newKey.length === 0) {
            return void Alert('You didn\'t enter anything, canceled!');
        }

        if (!isNaN(Number(newKey))) {
            return void Alert('Number keys are currently unavailable!');
        }

        if (hotkeys.has(toSet) || oldKey === toSet) {
            return void Alert('That key is already binded to an action, use another key instead!');
        } else if (hotkeys.has(oldKey)) {
            const old = hotkeys.get(oldKey)!;

            hotkeys.set(toSet, old);
            hotkeys.delete(oldKey);

            const keys = Object.keys(player.hotkeys);
            player.hotkeys[keys.length] = [oldKey, toSet];

            target.textContent = toSet;

            enableHotkeys();
        } else {
            return void Alert(`No hotkey is triggered by ${oldKey}!`);
        }
    });

    const p = document.createElement('p');
    p.id = 'hotKeyDesc';
    p.textContent = descr;

    div.appendChild(span);
    div.appendChild(p);

    return div;
}

export const disableHotkeys = () => hotkeysEnabled = false;

export const enableHotkeys = () => {
    changeHotkeys();

    const hotkey = document.querySelector('.hotkeys')!;

    for (const child of Array.from(hotkey.children)) {
        hotkey.removeChild(child);
    }

    for (const [key, [descr]] of [...hotkeys.entries()]) {
        const div = makeSlot(key, descr);

        hotkey.appendChild(div);
    }

    hotkeysEnabled = true;
}

export const changeHotkeys = () => {
    hotkeys = new Map(defaultHotkeys);

    for (const key in player.hotkeys) {
        const oldKey = player.hotkeys[key][0];
        const toSet = player.hotkeys[key][1];
        if (hotkeys.has(oldKey)) {
            const old = hotkeys.get(oldKey)!;
            hotkeys.set(toSet, old);
            hotkeys.delete(oldKey);
        } else {
            delete player.hotkeys[key];
        }
    }
}

export const resetHotkeys = async () => {
    enableHotkeys();

    const keys = Object.keys(player.hotkeys);
    if (keys.length === 0) {
        return await Alert('You haven\'t changed the hotkey');
    }

    let settext = '';
    const hotkey = new Map(defaultHotkeys);
    for (const key in player.hotkeys) {
        const oldKey = player.hotkeys[key][0];
        const toSet = player.hotkeys[key][1];
        if (hotkey.has(oldKey)) {
            const old = hotkey.get(oldKey)!;
            let CHold = old[0];
            switch (CHold) {
                case "Buy Accelerators": CHold ="购买加速器"; break;
                case "Boost Accelerator": CHold ="加速器加成"; break;
                case "Auto Challenge": CHold ="自动扫荡挑战"; break;
                case "Exit T / R Challenge": CHold ="退出超越/转世挑战"; break;
                case "Multipliers": CHold ="加倍器"; break;
                case "No (Cancel)": CHold ="否(取消"; break;
                case "Reset Prestige": CHold ="转生重置"; break;
                case "Reset Reincarnate": CHold ="转世重置"; break;
                case "Sacrifice Ants": CHold ="蚂蚁献祭"; break;
                case "Reset Transcend": CHold ="超越重置"; break;
                case "Yes (OK)": CHold ="是(确定"; break;
                case "Back a tab": CHold ="切换到前一个选项卡"; break;
                case "Next tab": CHold ="切换到后一个选项卡"; break;
                case "Back a subtab": CHold ="切换到前一个子选项卡"; break;
                case "Next subtab": CHold ="切换到后一个子选项卡"; break;
                case "Reset Ascend": CHold ="飞升重置"; break;
                case "Cleanse Corruptions": CHold ="清除腐化"; break;
                case "Spec. Action Add x1": CHold ="使用Add代码x1"; break;
                case "Exit Asc. Challenge": CHold ="退出飞升挑战"; break;
                case "Use Off. Potion": CHold ="使用祭品药剂"; break;
                case "Use Obt. Potion": CHold ="使用难得素药剂"; break;
                case "Reset Singularity": CHold ="奇点重置"; break;
            }
            settext += `\t${oldKey}[${CHold}]改为了${toSet}，`;
            hotkey.set(toSet, old);
            hotkey.delete(oldKey);
        }
    }
    settext = settext.slice(0, -1) + "。";

    const confirmed = await Confirm(`您确定要将所有快捷键重置为默认按键吗？\n以下为您改变过的快捷键\n\n${settext}`);
    if (confirmed) {
        hotkeys = new Map(defaultHotkeys);
        player.hotkeys = {};
        enableHotkeys();
    }
}

document.addEventListener('keydown', eventHotkeys);
