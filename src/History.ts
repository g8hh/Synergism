import { player, format, formatTimeShort } from './Synergism';
import Decimal, { DecimalSource } from 'break_infinity.js';
import { antSacrificePointsToMultiplier } from './Ants';
import { Synergism } from './Events';
import { DOMCacheGetOrSet } from './Cache/DOM';
import { Globals as G } from './Variables';

// The categories are the different tables & storages for each type.
export type Category = 'ants' | 'reset' | 'ascend';
// The kinds are the different contents.
export type Kind = 'antsacrifice' | 'prestige' | 'transcend' | 'reincarnate' | 'ascend';

// Common to every kind
type ResetHistoryEntryBase = {
    date: number
    seconds: number
    kind: Kind
};

export type ResetHistoryEntryAntSacrifice = ResetHistoryEntryBase & {
    antSacrificePointsAfter: number
    antSacrificePointsBefore: number
    baseELO: number
    crumbs: string
    crumbsPerSecond: string
    effectiveELO: number
    obtainium: number
    offerings: number
    kind: 'antsacrifice'
};

export type ResetHistoryEntryPrestige = ResetHistoryEntryBase & {
    offerings: number
    diamonds: string
    kind: 'prestige'
}
export type ResetHistoryEntryTranscend = ResetHistoryEntryBase & {
    offerings: number
    mythos: string
    kind: 'transcend'
}
export type ResetHistoryEntryReincarnate = ResetHistoryEntryBase & {
    offerings: number
    particles: string
    obtainium: number
    kind: 'reincarnate'
}

export type ResetHistoryEntryAscend = ResetHistoryEntryBase & {
    c10Completions: number
    usedCorruptions: number[]
    corruptionScore: number
    wowCubes: number
    wowTesseracts: number
    wowHypercubes: number
    wowPlatonicCubes: number
    wowHepteracts: number
    currentChallenge?: number
    kind: 'ascend'
}

// The set of common fields (in practice this is equal to the Base).
export type ResetHistoryEntryUnion =
    ResetHistoryEntryAntSacrifice
    | ResetHistoryEntryPrestige
    | ResetHistoryEntryTranscend
    | ResetHistoryEntryReincarnate
    | ResetHistoryEntryAscend

// The intersection of all of these types is invalid ("never") because of the conflicting `kind` field declarations.
// Luckily, we can filter the more specific `kind` fields and still end up with a valid type declaration by using
// the `kind` field from the base.
// Fun fact: This exact field name also happens to be the example in the TypeScript documentation.
type RemoveKindField<T> = {
    [K in keyof T as Exclude<K, "kind">]: T[K]
};

// The intersection of all possible fields we can possibly find in a history row. We'll keep the kind field from the
// base, which is a simple string.
type ResetHistoryEntryIntersect =
    ResetHistoryEntryBase
    & Partial<RemoveKindField<ResetHistoryEntryAntSacrifice>>
    & Partial<RemoveKindField<ResetHistoryEntryPrestige>>
    & Partial<RemoveKindField<ResetHistoryEntryTranscend>>
    & Partial<RemoveKindField<ResetHistoryEntryReincarnate>>
    & Partial<RemoveKindField<ResetHistoryEntryAscend>>

// The subset of keys that we'll directly print out using generic code.
export type ResetHistoryGainType = keyof Pick<ResetHistoryEntryIntersect,
    "offerings"
    | "obtainium"
    | "particles"
    | "diamonds"
    | "mythos"
    | "wowCubes"
    | "wowTesseracts"
    | "wowHypercubes"
    | "wowPlatonicCubes"
    | "wowHepteracts">

// A formatter that allows formatting a string. The string should be in a form parsable by break_infinity.js.
const formatDecimalSource = (numOrStr: DecimalSource) => {
    return format(typeof numOrStr === "string" ? new Decimal(numOrStr) : numOrStr);
}

// A formatter that, if given a number, allows the data to be divided by the amount of seconds spent.
const conditionalFormatPerSecond = (numOrStr: DecimalSource, data: ResetHistoryEntryBase) => {
    // Strings (decimals) are currently not supported.
    if (typeof numOrStr === "string") {
        return formatDecimalSource(numOrStr);
    }

    if (typeof (numOrStr) === "number" && player.historyShowPerSecond && data.seconds !== 0) {
        if (numOrStr === 0) { // work around format(0, 3) return 0 instead of 0.000, for consistency
            return "0.000/s";
        }
        // Use "long" display for smaller numbers, but once it exceeds 1000, use the "short" display.
        // This'll keep decimals intact until 1000 instead of 10 without creating unwieldy numbers between e6-e13.
        return format(numOrStr / data.seconds, 3, numOrStr < 1000) + "/s";
    }
    return format(numOrStr);
}

// Metadata and formatting tools for simple table cells (gains).
const historyGains: Record<
    ResetHistoryGainType,
    {
        img: string
        imgTitle: string
        formatter: (str: DecimalSource, data: ResetHistoryEntryUnion) => string,
        onlyif?: (data: ResetHistoryEntryUnion) => boolean
    }
> = {
    offerings: {
        img: "Pictures/Offering.png", 
        formatter: formatDecimalSource,
        imgTitle: "祭品"
    },
    obtainium: {
        img: "Pictures/Obtainium.png", 
        formatter: formatDecimalSource,
        imgTitle: "难得素"
    },
    particles: {
        img: "Pictures/Particle.png",
        formatter: formatDecimalSource,
        imgTitle: "粒子"
    },
    diamonds: {
        img: "Pictures/Diamond.png",
        formatter: formatDecimalSource,
        imgTitle: "钻石"
    },
    mythos: {
        img: "Pictures/Mythos.png",
        formatter: formatDecimalSource,
        imgTitle: "神话"
    },
    wowTesseracts: {
        img: "Pictures/WowTessaract.png",
        formatter: conditionalFormatPerSecond,
        imgTitle: "惊奇超立方"
    },
    wowHypercubes: {
        img: "Pictures/WowHypercube.png",
        formatter: conditionalFormatPerSecond,
        imgTitle: "惊奇五阶立方",
        onlyif: () => player.challengecompletions[13] > 0
    },
    wowCubes: {
        img: "Pictures/WowCube.png",
        formatter: conditionalFormatPerSecond,
        imgTitle: "惊奇方盒"
    },
    wowPlatonicCubes: {
        img: "Pictures/Platonic Cube.png",
        formatter: conditionalFormatPerSecond,
        imgTitle: "PLATONIC方盒",
        onlyif: () => player.challengecompletions[14] > 0,
    },
    wowHepteracts: {
        img: "Pictures/Hepteract.png",
        formatter: conditionalFormatPerSecond,
        imgTitle: "惊奇七阶立方",
        onlyif: () => player.achievements[255] > 0,
    },
};

// Order in which to display the above
const historyGainsOrder: ResetHistoryGainType[] = [
    "offerings", "obtainium",
    "particles", "diamonds", "mythos",
    "wowCubes", "wowTesseracts", "wowHypercubes", "wowPlatonicCubes", "wowHepteracts"
];

// The various kinds and their associated images.
const historyKinds: Record<Kind, { img: string }> = {
    "antsacrifice": {img: "Pictures/AntSacrifice.png"},
    "prestige": {img: "Pictures/Transparent Pics/Prestige.png"},
    "transcend": {img: "Pictures/Transparent Pics/Transcend.png"},
    "reincarnate": {img: "Pictures/Transparent Pics/Reincarnate.png"},
    "ascend": {img: "Pictures/questionable.png"},
};

// List of categories and the IDs of the associated table in the DOM.
const resetHistoryTableMapping: Record<Category, string> = {
    "ants": "historyAntsTable",
    "reset": "historyResetTable",
    "ascend": "historyAscendTable",
};

// Images associated with the various corruptions.
const resetHistoryCorruptionImages = [
    "Pictures/Divisiveness Level 7.png",
    "Pictures/Maladaption Lvl 7.png",
    "Pictures/Laziness Lvl 7.png",
    "Pictures/Hyperchallenged Lvl 7.png",
    "Pictures/Scientific Illiteracy Lvl 7.png",
    "Pictures/Deflation Lvl 7.png",
    "Pictures/Extinction Lvl 7.png",
    "Pictures/Drought Lvl 7.png",
    "Pictures/Financial Collapse Lvl 7.png"
];

const resetHistoryCorruptionTitles = [
    "腐化：分歧[加倍器]",
    "腐化：适应不良[加速器]",
    "腐化：空间膨胀[时间速度]",
    "腐化：极致挑战[挑战需求]",
    "腐化：科盲[难得素]",
    "腐化：市场通缩[钻石]",
    "腐化：灭绝[蚂蚁]",
    "腐化：干旱[祭品经验值]",
    "腐化：经济衰退[金币]"
];

// A formatting aid that removes the mantissa from a formatted string. Converts "2.5e1000" to "e1000".
const extractStringExponent = (str: string) => {
    let m: RegExpMatchArray | null;
    return (m = /e\+?(.+)/.exec(str)) !== null ? `e${m[1]}` : str;
}

// Add an entry to the history. This can be called via the event system.
const resetHistoryAdd = (category: Category, data: ResetHistoryEntryUnion) => {
    if (player.history[category] === undefined) {
        player.history[category] = [];
    }

    while (player.history[category].length > (G['historyCountMax'] - 1)) {
        player.history[category].shift();
    }

    player.history[category].push(data);
    resetHistoryPushNewRow(category, data);
}

Synergism.on('historyAdd', resetHistoryAdd);

// Add a row to the table, shifting out old ones as required.
const resetHistoryPushNewRow = (category: Category, data: ResetHistoryEntryUnion) => {
    const row = resetHistoryRenderRow(category, data);
    const table = DOMCacheGetOrSet(resetHistoryTableMapping[category]);
    const tbody = table.querySelector("tbody");
    tbody.insertBefore(row, tbody.childNodes[0]);
    while (tbody.childNodes.length > G['historyCountMax']) {
        tbody.removeChild(tbody.lastChild);
    }
}

// Render a table row.
const resetHistoryRenderRow = (
    _category: Category, 
    data: ResetHistoryEntryUnion
) => {
    let colsUsed = 1;
    const row = document.createElement("tr");
    let rowContentHtml = "";

    const kindMeta = historyKinds[data.kind];

    const localDate = new Date(data.date).toLocaleString();
    rowContentHtml += `<td class="history-seconds" title="${localDate}"><img src="${kindMeta.img}">${formatTimeShort(data.seconds, 60)}</td>`;

    // Carefully loop through everything we need to print in the right order, and add it to the gains array if present.
    const gains: string[] = [];
    const dataIntersection = data as ResetHistoryEntryIntersect;
    historyGainsOrder.forEach((listable) => {
        if (Object.prototype.hasOwnProperty.call(data, listable)) {
            const gainInfo = historyGains[listable];
            if (gainInfo.onlyif && !gainInfo.onlyif(data)) {
                return;
            }
            const formatter = gainInfo.formatter || (() => {/* If no formatter is specified, don't display. */});
            const str = `<img alt="${gainInfo.imgTitle}" src="${gainInfo.img}" title="${gainInfo.imgTitle}">${formatter(dataIntersection[listable], data)}`;

            gains.push(str);
        }
    });

    // Kind-dependent rendering goes here. TypeScript will automatically cast to the appropriate structure based on
    // the kind check.
    const extra: string[] = [];
    if (data.kind === "antsacrifice") {
        const oldMulti = antSacrificePointsToMultiplier(data.antSacrificePointsBefore);
        const newMulti = antSacrificePointsToMultiplier(data.antSacrificePointsAfter);
        const diff = newMulti - oldMulti;
        extra.push(
            `<span title="蚂蚁倍率：${format(oldMulti, 3, false)}--&gt;${format(newMulti, 3, false)}"><img src="Pictures/Multiplier.png" alt="Ant Multiplier">+${format(diff, 3, false)}</span>`,
            `<span title="每秒增加${formatDecimalSource(data.crumbsPerSecond)}银河碎屑"><img src="Pictures/GalacticCrumbs.png" alt="Crumbs">${extractStringExponent(formatDecimalSource(data.crumbs))}</span>`,
            `<span title="基础值为${format(data.baseELO)}"><img src="Pictures/Transparent Pics/ELO.png" alt="ELO">${format(data.effectiveELO)}</span>`
        );
    } else if (data.kind === "ascend") {
        extra.push(
            `<img alt="C10" src="Pictures/Transparent Pics/ChallengeTen.png" title="挑战10完成次数">${data.c10Completions}`
        );

        const corruptions = resetHistoryFormatCorruptions(data);
        if (corruptions !== null) {
            extra.push(corruptions[0]);
            extra.push(corruptions[1]);
        }
    }

    // This rendering is done this way so that all rows should have the same number of columns, which makes rows
    // equal size and prevents bad rendering. We do 2 of these so that the history doesn't shift when
    // hypercubes or platcubes get added as players unlock them.
    // The 6 and 4 numbers are arbitrary but should never be less than the actual amount of columns that can be
    // realistically displayed; you can increase them if more gains are added.

    // Render the gains plus the gains filler
    colsUsed += gains.length;
    rowContentHtml += gains.reduce((acc, value) => {
        return `${acc}<td class="history-gain">${value}</td>`;
    }, "");
    rowContentHtml += `<td class="history-filler" colspan="${7 - colsUsed}"></td>`;

    // Render the other stuff
    rowContentHtml += extra.reduce((acc, value) => {
        return `${acc}<td class="history-extra">${value}</td>`;
    }, "");
    rowContentHtml += `<td class="history-filler" colspan="${4 - extra.length}"></td>`;

    row.innerHTML = rowContentHtml;
    return row;
}

// Render a category into a given table.
const resetHistoryRenderFullTable = (categoryToRender: Category, targetTable: HTMLElement) => {
    const tbody = targetTable.querySelector("tbody");
    tbody.innerHTML = "";

    if (!player.history[categoryToRender]) {
        return;
    }

    if (player.history[categoryToRender].length > 0) {
        for (let i = player.history[categoryToRender].length - 1; i >= 0; --i) {
            const row = resetHistoryRenderRow(categoryToRender, player.history[categoryToRender][i]);
            tbody.appendChild(row);
        }
    }
}

// Render every category into their associated table.
export const resetHistoryRenderAllTables = () => {
    (Object.keys(resetHistoryTableMapping) as Category[]).forEach(
        key => resetHistoryRenderFullTable(key, DOMCacheGetOrSet(resetHistoryTableMapping[key]))
    );
}

// Toggle the "per second" display for the ascension table.
export const resetHistoryTogglePerSecond = () => {
    player.historyShowPerSecond = !player.historyShowPerSecond;
    resetHistoryRenderAllTables();
    const button = DOMCacheGetOrSet("historyTogglePerSecondButton");
    button.textContent = "Per second: " + (player.historyShowPerSecond ? "ON" : "OFF");
    button.style.borderColor = player.historyShowPerSecond ? "green" : "red";
}

// Helper function to format the corruption display in the ascension table.
const resetHistoryFormatCorruptions = (data: ResetHistoryEntryAscend): [string, string] => {
    let score = "Score: " + format(data.corruptionScore, 0, false);
    let corruptions = "";
    for (let i = 0; i < resetHistoryCorruptionImages.length; ++i) {
        const corruptionIdx = i + 1;
        if (corruptionIdx in data.usedCorruptions && data.usedCorruptions[corruptionIdx] !== 0) {
            corruptions += ` <img alt="${resetHistoryCorruptionTitles[i]}" src="${resetHistoryCorruptionImages[i]}" title="${resetHistoryCorruptionTitles[i]}">${data.usedCorruptions[corruptionIdx]}`;
        }
    }
    if (data.currentChallenge !== undefined) {
        score += ` / C${data.currentChallenge}`;
    }

    return [score, corruptions];
}
