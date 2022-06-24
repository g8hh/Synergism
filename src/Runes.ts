import { player, format } from './Synergism';
import { calculateRuneExpGiven, calculateCorruptionPoints, calculateOfferings, calculateMaxRunes, calculateRuneExpToLevel, calculateRuneLevels, calculateEffectiveIALevel } from './Calculate';
import { Globals as G } from './Variables';

import Decimal from 'break_infinity.js';
import type { resetNames } from './types/Synergism';
import { DOMCacheGetOrSet } from './Cache/DOM';

export const displayRuneInformation = (i: number, updatelevelup = true) => {
    const m = G['effectiveLevelMult']
    const SILevelMult = (1 + player.researches[84] / 200 * (1 + 1 * G['effectiveRuneSpiritPower'][5] * calculateCorruptionPoints()/400))
    const amountPerOffering = calculateRuneExpGiven(i - 1, false, player.runelevels[i - 1]);


    if (i === 1) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '使加速器数量增加(等级/4)^1.25，且每级再增加0.25%。每20级使加速器加成数量增加1！'
        }
        DOMCacheGetOrSet('runeshowpower1').textContent = '加速符文奖励：使加速器数量增加' + format(Math.floor(Math.pow(G['rune1level'] * m / 4, 1.25))) + '，再增加' + format((G['rune1level'] / 4 * m), 2, true) + '%，加速器加成数量增加' + format(Math.floor(G['rune1level'] / 20 * m)) + '。'
    }
    if (i === 2) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '每10级使加倍器数量增加(等级/10)，且每级再增加0.25%。每级使税收增长减缓更多！'
        }
        DOMCacheGetOrSet('runeshowpower2').textContent = '重叠符文奖励：使加倍器数量增加' + format(Math.floor(G['rune2level'] * m / 10) * Math.floor(1 + G['rune2level'] * m / 10) / 2) + '，再增加' + format(m * G['rune2level'] / 4, 1, true) + '%，税收增长减缓' + (99.9 * (1 - Math.pow(6, -(G['rune2level'] * m) / 1000))).toPrecision(4) + '%。'
    }
    if (i === 3) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '使水晶产量变为[1+(等级/2)^2*2^(等级/2)/256]倍。每16级使每个水晶升级免费增加1级！'
        }
        DOMCacheGetOrSet('runeshowpower3').textContent = '棱柱符文奖励：使水晶产量变为' + format(Decimal.pow(G['rune3level'] * m / 2, 2).times(Decimal.pow(2, G['rune3level'] * m / 2 - 8)).add(1), 3) + '倍，每个水晶升级免费增加' + format(Math.floor(G['rune3level'] / 16 * m)) + '级。'
    }
    if (i === 4) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '每级使建筑成本增长减缓0.125%，每级使祭品回收概率增加0.0625%[上限：25%]。另外当等级超过400以后，还可以使税收增长倍率变为2^[(1000-等级)/1100]倍'
        }
        DOMCacheGetOrSet('runeshowpower4').textContent = '节俭符文奖励：使所有建筑成本增长减缓' + (G['rune4level'] / 8 * m).toPrecision(3) + '%。祭品回收概率增加' + Math.min(25, G['rune4level'] / 16) + '%。税收增长减缓' + (99 * (1 - Math.pow(4, Math.min(0, (400 - G['rune4level']) / 1100)))).toPrecision(4) + '%。'
    }
    if (i === 5) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '使难得素获取数量变为(1+等级/200)倍，蚂蚁速度变为(1+等级^2/2500)倍，每级使每一阶重置的基础祭品数量增加0.005'
        }
        DOMCacheGetOrSet('runeshowpower5').textContent = '卓越智慧符文奖励：使难得素获取数量变为' + format((1 + G['rune5level'] / 200 * m * SILevelMult), 2, true) + '倍，蚂蚁速度变为' + format(1 + Math.pow(G['rune5level'] * m * SILevelMult, 2) / 2500) + '倍，基础祭品数量增加' + format((G['rune5level'] * m * SILevelMult * 0.005), 3, true)
    }
    if (i === 6) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '每级使夸克获取数量增加0.2%，所有类型的方盒及立方获取数量增加1%！初始状态下使夸克获取数量增加10%。'
        }
        DOMCacheGetOrSet('runeshowpower6').textContent = '无限晋升符文奖励：使夸克获取数量增加' + format(10 + 15/75 * calculateEffectiveIALevel(), 1, true) + '%，飞升时所有类型的方盒及立方获取数量增加' + format(1 * calculateEffectiveIALevel(), 0, true) + '%。'
    }

    if (i === 7) {
        if (updatelevelup) {
            DOMCacheGetOrSet('runeshowlevelup').textContent = '如果给它' + format(1e256 * (1 + player.singularityCount)) + '符文经验值，或许会发生什么事情。'
        }
        DOMCacheGetOrSet('runeshowpower7').textContent = 'You cannot grasp the true form of Ant God\'s treasure.'
    }

    if (updatelevelup) {
        const arr = calculateOfferingsToLevelXTimes(i - 1, player.runelevels[i - 1], player.offeringbuyamount);
        let offerings = 0;
        let j = 0;
        while (offerings < player.runeshards && j < arr.length) {
            offerings += arr[j]
            j++;
        }
        const check = player.offeringbuyamount === j && offerings <= player.runeshards
        const s = player.offeringbuyamount === 1 ? '1级' : `${check ? j : Math.max(j - 1, 0)}级`
        DOMCacheGetOrSet('runeDisplayInfo').textContent = `每个祭品增加${format(amountPerOffering)}经验值。需要${format(offerings)}祭品以提升${s}。`
    }

}

export const resetofferings = (input: resetNames) => {
    player.runeshards += calculateOfferings(input);
}

export const redeemShards = (runeIndexPlusOne: number, auto = false, cubeUpgraded = 0) => {
    // if automated && 2x10 cube upgrade bought, this will be >0.
    // runeIndex, the rune being added to
    const runeIndex = runeIndexPlusOne - 1;

    // Whether or not a rune is unlocked array
    const unlockedRune = [
        true,
        player.achievements[38] > 0.5,
        player.achievements[44] > 0.5,
        player.achievements[102] > 0.5,
        player.researches[82] > 0.5,
        player.shopUpgrades.infiniteAscent,
        player.platonicUpgrades[20] > 0
    ];

    let levelsToAdd = player.offeringbuyamount
    if (auto) {
        levelsToAdd = Math.pow(2, player.shopUpgrades.offeringAuto);
    }
    if (auto && cubeUpgraded > 0) {
        levelsToAdd = Math.min(1e4, calculateMaxRunes(runeIndex + 1)) // limit to max 10k levels per call so the execution doesn't take too long if things get stuck
    }
    let levelsAdded = 0
    if (player.runeshards > 0 && player.runelevels[runeIndex] < calculateMaxRunes(runeIndex + 1) && unlockedRune[runeIndex]) {
        let all = 0
        const maxLevel = calculateMaxRunes(runeIndex + 1)
        const amountArr = calculateOfferingsToLevelXTimes(runeIndex, player.runelevels[runeIndex], levelsToAdd)
        let toSpendTotal = Math.min(player.runeshards, amountArr.reduce((x, y) => x + y, 0))
        if (cubeUpgraded > 0) {
            toSpendTotal = Math.min(player.runeshards, cubeUpgraded)
        }
        const fact = calculateRuneExpGiven(runeIndex, false, player.runelevels[runeIndex], true)
        const a = player.upgrades[71] / 25
        const add = fact[0] - a * player.runelevels[runeIndex]
        const mult = fact.slice(1, fact.length).reduce((x, y) => x * y, 1)
        while (toSpendTotal > 0 && levelsAdded < levelsToAdd && player.runelevels[runeIndex] < maxLevel) {
            const exp = calculateRuneExpToLevel(runeIndex, player.runelevels[runeIndex]) - player.runeexp[runeIndex]
            const expPerOff = (add + a * player.runelevels[runeIndex]) * mult;
            let toSpend = Math.min(toSpendTotal, Math.ceil(exp / expPerOff))
            if (isNaN(toSpend)) {
                toSpend = toSpendTotal
            }
            toSpendTotal -= toSpend
            player.runeshards -= toSpend
            player.runeexp[runeIndex] += toSpend * expPerOff
            all += toSpend
            while (player.runeexp[runeIndex] >= calculateRuneExpToLevel(runeIndex) && player.runelevels[runeIndex] < maxLevel) {
                player.runelevels[runeIndex] += 1;
                levelsAdded++;
            }
        }
        for (let runeToUpdate = 0; runeToUpdate < 5; ++runeToUpdate) {
            if (unlockedRune[runeToUpdate]) {
                if (runeToUpdate !== runeIndex) {
                    player.runeexp[runeToUpdate] += all * calculateRuneExpGiven(runeToUpdate, true)
                }
                while (player.runeexp[runeToUpdate] >= calculateRuneExpToLevel(runeToUpdate) && player.runelevels[runeToUpdate] < calculateMaxRunes(runeToUpdate + 1)) {
                    player.runelevels[runeToUpdate] += 1;
                }
            }
        }
        displayRuneInformation(runeIndexPlusOne);
    }
    calculateRuneLevels();
    if (player.runeshards < 0 || !player.runeshards) {
        player.runeshards = 0
    }
}

export const calculateOfferingsToLevelXTimes = (runeIndex: number, runeLevel: number, levels: number) => {
    let exp = calculateRuneExpToLevel(runeIndex, runeLevel) - player.runeexp[runeIndex]
    const maxLevel = calculateMaxRunes(runeIndex + 1)
    const arr = []
    let sum = 0
    const off = player.runeshards
    let levelsAdded = 0
    const fact = calculateRuneExpGiven(runeIndex, false, runeLevel, true);
    const a = player.upgrades[71] / 25
    const add = fact[0] - a * runeLevel
    const mult = fact.slice(1, fact.length).reduce((x, y) => x * y, 1)
    while (levelsAdded < levels && runeLevel + levelsAdded < maxLevel && sum < off) {
        const expPerOff = (add + a * (runeLevel + levelsAdded)) * mult
        const amount = Math.ceil(exp / expPerOff)
        sum += amount
        arr.push(amount)
        levelsAdded += 1
        exp = calculateRuneExpToLevel(runeIndex, runeLevel + levelsAdded)
            - calculateRuneExpToLevel(runeIndex, runeLevel + levelsAdded - 1)
    }
    return arr;
}
