import { DOMCacheGetOrSet } from './Cache/DOM'
import type { IUpgradeData } from './DynamicUpgrade';
import { DynamicUpgrade } from './DynamicUpgrade'
import { format, player } from './Synergism'
import type { Player } from './types/Synergism'
import { Alert, Prompt, revealStuff } from './UpdateHTML'
import { toOrdinal } from './Utility'

export const updateSingularityPenalties = (): void => {
    const singularityCount = player.singularityCount;
    const color = player.runelevels[6] > 0 ? 'var(--green-text-color)' : 'var(--red-text-color)';
    const platonic = (singularityCount > 36) ? `<span style="color: var(--orchid-text-color)">PLATONIC方盒升级</span>花费乘以<span style="color: var(--orchid-text-color)">${format(calculateSingularityDebuff('Platonic Costs', singularityCount), 2, true)}</span>。` : '<span class="grayText">????????？？？？？？？？</span> <span class="redText">(第37次进入奇点)</span>';
    const hepteract = (singularityCount > 50) ? `<span style="color: Pink">七阶立方锻炉</span>花费乘以<span style="color: Pink">${format(calculateSingularityDebuff('Hepteract Costs', singularityCount), 2, true)}</span>。` : '<span class="grayText">？？？？？？？？？？</span> <span class="redText">(第51次进入奇点)</span>';
    const str = getSingularityOridnalText(singularityCount) +
                `<br><span style="color: RoyalBlue">全局速度</span>除以<span style="color: RoyalBlue">${format(calculateSingularityDebuff('Global Speed', singularityCount), 2, true)}</span>。
                 <span style="color: Orange">飞升的速度</span>除以<span style="color: Orange">${format(calculateSingularityDebuff('Ascension Speed', singularityCount), 2, true)}</span>。
                 <span style="color: Gold">祭品获取数量</span>除以<span style="color: Gold">${format(calculateSingularityDebuff('Offering', singularityCount), 2, true)}</span>。
                 <span style="color: Steelblue">难得素获取数量</span>除以<span style="color: Steelblue">${format(calculateSingularityDebuff('Obtainium', singularityCount), 2, true)}</span>。
                 <span style="color: Yellow">所有类型的方盒及立方获取数量</span>除以<span style="color: Yellow">${format(calculateSingularityDebuff('Cubes', singularityCount), 2, true)}</span>。
                 <span style="color: var(--green-text-color)">研究花费</span>乘以<span style="color: var(--green-text-color)">${format(calculateSingularityDebuff('Researches', singularityCount), 2, true)}</span>。
                 <span style="color: Silver">方盒升级花费</span>(饼干升级除外)乘以<span style="color: Silver">${format(calculateSingularityDebuff('Cube Upgrades', singularityCount), 2, true)}</span>。
                 ${platonic}
                 ${hepteract}
                 惩罚将${singularityCount >= 230 ? '永远平滑地增加下去。' : `在<span class="redText">第${format(calculateNextSpike(player.singularityCount), 0, true)}次进入奇点</span>后大幅增加。`}
                 <span style='color: ${color}'>Antiquities of Ant God is ${(player.runelevels[6] > 0) ? '' : 'NOT'} purchased. Penalties are ${(player.runelevels[6] > 0) ? '' : 'NOT'} dispelled!</span>`

    DOMCacheGetOrSet('singularityPenaltiesMultiline').innerHTML = str;
}

function getSingularityOridnalText(singularityCount: number): string {
    return 'You are in the <span style="color: gold">' + toOrdinal(singularityCount) + '次奇点</span>';
}

// Need a better way of handling the ones without a special formulae than 'Default' variant
type SingularitySpecialCostFormulae = 'Default' | 'Quadratic' | 'Cubic' | 'Exponential2'

export interface ISingularityData extends IUpgradeData {
    goldenQuarksInvested?: number
    minimumSingularity?: number
    canExceedCap?: boolean
    specialCostForm?: SingularitySpecialCostFormulae
    qualityOfLife?: boolean
}

/**
 * Singularity Upgrades are bought in the Shop of the singularity tab, and all have their own
 * name, description, level and maxlevel, plus a feature to toggle buy on each.
 */
export class SingularityUpgrade extends DynamicUpgrade {

    // Field Initialization
    public goldenQuarksInvested = 0;
    public minimumSingularity: number;
    public canExceedCap: boolean;
    public specialCostForm: SingularitySpecialCostFormulae
    public qualityOfLife: boolean

    public constructor(data: ISingularityData) {
        super(data)
        this.goldenQuarksInvested = data.goldenQuarksInvested ?? 0;
        this.minimumSingularity = data.minimumSingularity ?? 0;
        this.canExceedCap = data.canExceedCap ?? false;
        this.specialCostForm = data.specialCostForm ?? 'Default';
        this.qualityOfLife = data.qualityOfLife ?? false;
    }

    /**
     * Given an upgrade, give a concise information regarding its data.
     * @returns A string that details the name, description, level statistic, and next level cost.
     */
    toString(): string {
        const costNextLevel = this.getCostTNL();
        const maxLevel = this.maxLevel === -1
            ? ''
            : `/${format(this.computeMaxLevel(), 0 , true)}`;
        const color = this.computeMaxLevel() === this.level ? 'plum' : 'white';
        const minReqColor = player.highestSingularityCount < this.minimumSingularity ? 'var(--crimson-text-color)' : 'var(--green-text-color)';
        const minimumSingularity = this.minimumSingularity > 0
            ? `最少需要进入奇点次数：${this.minimumSingularity}`
            : '无进入奇点次数要求'

        let freeLevelInfo = this.freeLevels > 0 ?
            `<span style="color: orange"> [+${format(this.freeLevels, 2, true)}]</span>` : ''

        if (this.freeLevels > this.level) {
            freeLevelInfo = freeLevelInfo + '<span style="color: var(--maroon-text-color)"> (Softcapped) </span>'
        }

        return `<span style="color: gold">${this.name}</span>
                <span style="color: lightblue">${this.description}</span>
                <span style="color: ${minReqColor}">${minimumSingularity}</span>
                <span style="color: ${color}">等级 ${format(this.level, 0 , true)}${maxLevel}${freeLevelInfo}</span>
                <span style="color: gold">${this.getEffect().desc}</span>
                <i></i>下一级的花费：${format(costNextLevel,0,true)}金夸克。<i></i>
                <i></i>已花费金夸克数量：${format(this.goldenQuarksInvested, 0, true)}<i></i>`
    }

    public updateUpgradeHTML(): void {
        DOMCacheGetOrSet('testingMultiline').innerHTML = this.toString()
    }

    /**
     * Retrieves the cost for upgrading the singularity upgrade once. Return 0 if maxed.
     * @returns A number representing how many Golden Quarks a player must have to upgrade once.
     */
    getCostTNL(): number {

        let costMultiplier = 1
        if (this.computeMaxLevel() > this.maxLevel && this.level >= this.maxLevel) {
            costMultiplier *= Math.pow(4, this.level - this.maxLevel + 1)
        }

        if (this.specialCostForm === 'Exponential2') {
            return this.costPerLevel * Math.sqrt(costMultiplier) * Math.pow(2, this.level)
        }

        if (this.specialCostForm === 'Cubic') {
            return this.costPerLevel * costMultiplier * (Math.pow(this.level + 1, 3) - Math.pow(this.level, 3))
        }

        if (this.specialCostForm === 'Quadratic') {
            return this.costPerLevel * costMultiplier * (Math.pow(this.level + 1, 2) - Math.pow(this.level, 2))
        }

        costMultiplier *= (this.maxLevel === -1 && this.level >= 100) ? this.level / 50 : 1;
        costMultiplier *= (this.maxLevel === -1 && this.level >= 400) ? this.level / 100 : 1;

        return (this.computeMaxLevel() === this.level) ? 0: Math.ceil(this.costPerLevel * (1 + this.level) * costMultiplier);
    }

    /**
     * Buy levels up until togglebuy or maxed.
     * @returns An alert indicating cannot afford, already maxed or purchased with how many
     *          levels purchased
     */
    public async buyLevel(event: MouseEvent): Promise<void> {
        let purchased = 0;
        let maxPurchasable = 1
        let GQBudget = player.goldenQuarks

        if (event.shiftKey) {
            maxPurchasable = 100000
            const buy = Number(await Prompt(`How many Golden Quarks would you like to spend? You have ${format(player.goldenQuarks, 0, true)} GQ. Type -1 to use max!`))

            if (isNaN(buy) || !isFinite(buy) || !Number.isInteger(buy)) { // nan + Infinity checks
                return Alert('Value must be a finite number!');
            }

            if (buy === -1) {
                GQBudget = player.goldenQuarks
            } else if (buy <= 0) {
                return Alert('Purchase cancelled!')
            } else {
                GQBudget = buy
            }
            GQBudget = Math.min(player.goldenQuarks, GQBudget)
        }

        if (this.maxLevel > 0) {
            maxPurchasable = Math.min(maxPurchasable, this.computeMaxLevel() - this.level)
        }

        if (maxPurchasable === 0) {
            return Alert('Hey! You have already maxed this upgrade. :D')
        }

        if (player.highestSingularityCount < this.minimumSingularity) {
            return Alert('You\'re not powerful enough to purchase this yet.')
        }
        while (maxPurchasable > 0) {
            const cost = this.getCostTNL();
            if (player.goldenQuarks < cost || GQBudget < cost) {
                break;
            } else {
                player.goldenQuarks -= cost;
                GQBudget -= cost;
                this.goldenQuarksInvested += cost;
                this.level += 1;
                purchased += 1;
                maxPurchasable -= 1;
            }
            if (this.name === player.singularityUpgrades.oneMind.name) {
                player.ascensionCounter = 0
                player.ascensionCounterReal = 0
                player.ascensionCounterRealReal = 0
                void Alert('You have succumbed to the cult. Your ascension progress was reset as a one-time precaution...')
            }

            if (this.name === player.singularityUpgrades.singCitadel2.name) {
                player.singularityUpgrades.singCitadel.freeLevels = player.singularityUpgrades.singCitadel2.level
            }
        }

        if (purchased === 0) {
            return Alert('You cannot afford this upgrade. Sorry!')
        }
        if (purchased > 1) {
            void Alert(`Purchased ${format(purchased)} levels, thanks to Multi Buy!`)
        }

        this.updateUpgradeHTML();
        updateSingularityPenalties();
        updateSingularityPerks();
        revealStuff();
    }

    public computeFreeLevelSoftcap(): number {
        return Math.min(this.level, this.freeLevels) + Math.sqrt(Math.max(0, this.freeLevels - this.level))
    }

    public computeMaxLevel(): number {
        if (!this.canExceedCap) {
            return this.maxLevel
        } else {
            let cap = this.maxLevel
            const overclockPerks = [50, 60, 75, 100, 125, 150, 175, 200, 225, 250]
            for (let i = 0; i < overclockPerks.length; i++) {
                if (player.highestSingularityCount >= overclockPerks[i]) {
                    cap += 1
                } else {
                    break
                }
            }
            cap += +player.octeractUpgrades.octeractSingUpgradeCap.getEffect().bonus
            return cap
        }
    }

    public actualTotalLevels(): number {
        if (player.singularityChallenges.noSingularityUpgrades.enabled && !this.qualityOfLife) {
            return 0
        }

        if (player.singularityChallenges.limitedAscensions.enabled && this.name === player.singularityUpgrades.platonicDelta.name) {
            return 0
        }

        const actualFreeLevels = this.computeFreeLevelSoftcap();
        const linearLevels = this.level + actualFreeLevels
        let polynomialLevels = 0
        if (player.octeractUpgrades.octeractImprovedFree.getEffect().bonus) {
            let exponent = 0.6
            exponent += +player.octeractUpgrades.octeractImprovedFree2.getEffect().bonus;
            exponent += +player.octeractUpgrades.octeractImprovedFree3.getEffect().bonus;
            exponent += +player.octeractUpgrades.octeractImprovedFree4.getEffect().bonus;
            polynomialLevels = Math.pow(this.level * actualFreeLevels, exponent)
        }

        return Math.max(linearLevels, polynomialLevels)
    }

    public getEffect(): { bonus: number | boolean, desc: string } {
        return this.effect(this.actualTotalLevels())
    }

    public refund(): void {
        player.goldenQuarks += this.goldenQuarksInvested;
        this.level = 0;
        this.goldenQuarksInvested = 0;
    }
}

export const singularityData: Record<keyof Player['singularityUpgrades'], ISingularityData> = {
    goldenQuarks1: {
        name: 'Golden Quarks I',
        description: 'In the future, you will gain 10% more Golden Quarks on Singularities per level!',
        maxLevel: 15,
        costPerLevel: 12,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.10 * n,
                desc: `Permanently gain ${format(10 * n, 0, true)}% more Golden Quarks on Singularities.`
            }
        },
        qualityOfLife: true
    },
    goldenQuarks2: {
        name: 'Golden Quarks II',
        description: 'Buying GQ is 0.2% cheaper per level! [After 50%, effect grows much slower]',
        maxLevel: 75,
        costPerLevel: 60,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: (n > 250) ? 1 / Math.log2(n / 62.5) : 1 - Math.min(0.5, n / 500),
                desc: `Purchasing Golden Quarks in the shop is ${(n > 250)? format(100 - 100 / Math.log2(n / 62.5), 2, true) : format(Math.min(50, n / 5),2,true)}% cheaper.`
            }
        },
        qualityOfLife: true
    },
    goldenQuarks3: {
        name: 'Golden Quarks III',
        description: 'If you buy this, you will gain Golden Quarks per hour from Exports. Leveling up gives (level) additional per hour!',
        maxLevel: 1000,
        costPerLevel: 1000,
        effect: (n: number) => {
            return {
                bonus: n * (n + 1) / 2,
                desc: `Every hour, you gain ${format(n * (n + 1) / 2)} Golden Quarks from exporting.`
            }
        }
    },
    starterPack: {
        name: 'Starter Pack',
        description: 'Buy this! Buy This! Cube gain is permanently multiplied by 5, and gain 6x the Obtainium and Offerings from all sources, post-corruption.',
        maxLevel: 1,
        costPerLevel: 10,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} unlocked a 5x multiplier to Cubes and 6x multiplier to Obtainium and Offerings.`
            }
        }
    },
    wowPass: {
        name: 'Shop Bonanza',
        description: 'This upgrade will convince the seal merchant to sell you more cool stuff, which even persist on Singularity!',
        maxLevel: 1,
        costPerLevel: 350,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} unlocked the Shop Bonanza.`
            }
        },
        qualityOfLife: true
    },
    cookies: {
        name: 'Cookie Recipes I',
        description: 'For just a few Golden Quarks, re-open Wow! Bakery, adding five cookie-related Cube upgrades.',
        maxLevel: 1,
        costPerLevel: 100,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} unlocked volume 1 of the recipe book.`
            }
        },
        qualityOfLife: true
    },
    cookies2: {
        name: 'Cookie Recipes II',
        description: 'Diversify Wow! Bakery into cooking slightly more exotic cookies, adding five more cookie-related Cube upgrades.',
        maxLevel: 1,
        costPerLevel: 500,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} unlocked volume 2 of the recipe book.`
            }
        },
        qualityOfLife: true
    },
    cookies3: {
        name: 'Cookie Recipes III',
        description: 'Your Bakers threaten to quit without a higher pay. If you do pay them, they will bake even more fancy cookies.',
        maxLevel: 1,
        costPerLevel: 24999,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} appeased the union of Bakers.`
            }
        },
        qualityOfLife: true
    },
    cookies4: {
        name: 'Cookie Recipes IV',
        description: 'This is a small price to pay for Salvation.',
        maxLevel: 1,
        costPerLevel: 499999,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} paid your price for salvation.`
            }
        },
        qualityOfLife: true
    },
    cookies5: {
        name: 'Cookie Recipes V (WIP)',
        description: 'The worst atrocity a man can commit is witnessing, without anguish, the suffering of others.',
        maxLevel: 1,
        costPerLevel: 1.66e15,
        minimumSingularity: 215,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have' : 'have not'} paid witness to the suffering of the masses.`
            }
        },
        qualityOfLife: true
    },
    ascensions: {
        name: 'Improved Ascension Gain',
        description: 'Buying this, you will gain +2% Ascension Count forever, per level! Every 10 levels grants an additional, multiplicative +1% Ascension Count.',
        maxLevel: -1,
        costPerLevel: 5,
        effect: (n: number) => {
            return {
                bonus: (1 + 2 * n / 100) * (1 + Math.floor(n / 10) / 100),
                desc: `Ascension Count increases ${format((100 + 2 * n) * (1 + Math.floor(n/10) / 100) - 100, 1, true)}% faster.`
            }
        }
    },
    corruptionFourteen: {
        name: 'Level Fourteen Corruptions',
        description: 'Buy this to unlock level fourteen corruptions. :)',
        maxLevel: 1,
        costPerLevel: 1000,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} gained the ability to use level 14 corruptions. ${(n > 0)? ':)': ':('}`
            }
        }
    },
    corruptionFifteen: {
        name: 'Level Fifteen Corruptions',
        description: 'This doesn\'t *really* raise the corruption limit. Rather, it adds one FREE level to corruption multipliers, no matter what (can exceed cap). :)',
        maxLevel: 1,
        costPerLevel: 40000,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} gained a free corruption level. ${(n > 0)? ':)': ':('}`
            }
        }
    },
    singOfferings1: {
        name: 'Offering Charge',
        description: 'Upgrade this to get +2% Offerings per level, forever!',
        maxLevel: -1,
        costPerLevel: 1,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.02 * n,
                desc: `Permanently gain ${format(2 * n, 0, true)}% more Offerings.`
            }
        }

    },
    singOfferings2: {
        name: 'Offering Storm',
        description: 'Apparently, you can use this bar to attract more Offerings. +8% per level, to be precise.',
        maxLevel: 25,
        costPerLevel: 25,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.08 * n,
                desc: `Permanently gain ${format(8 * n, 0, true)}% more Offerings.`
            }
        }
    },
    singOfferings3: {
        name: 'Offering Tempest',
        description: 'This bar is so pristine, it\'ll make anyone submit their Offerings. +4% per level, to be precise.',
        maxLevel: 40,
        costPerLevel: 500,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.04 * n,
                desc: `Permanently gain ${format(4 * n, 0, true)}% more Offerings.`
            }
        }
    },
    singObtainium1: {
        name: 'Obtainium Wave',
        description: 'Upgrade this to get +2% Obtainium per level, forever!',
        maxLevel: -1,
        costPerLevel: 1,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.02 * n,
                desc: `Permanently gain ${format(2 * n, 0, true)}% more Obtainium.`
            }
        }
    },
    singObtainium2: {
        name: 'Obtainium Flood',
        description: 'Holy crap, water bending! +8% gained Obtainium per level.',
        maxLevel: 25,
        costPerLevel: 25,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.08 * n,
                desc: `Permanently gain ${format(8 * n, 0, true)}% more Obtainium.`
            }
        }
    },
    singObtainium3: {
        name: 'Obtainium Tsunami',
        description: 'A rising tide lifts all boats. +4% gained Obtainium per level.',
        maxLevel: 40,
        costPerLevel: 500,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.04 * n,
                desc: `Permanently gain ${format(4 * n, 0, true)}% more Obtainium.`
            }
        }
    },
    singCubes1: {
        name: 'Cube Flame',
        description: 'Upgrade this to get +2% Cubes per level, forever!',
        maxLevel: -1,
        costPerLevel: 1,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.02 * n,
                desc: `Permanently gain ${format(2 * n, 0, true)}% more Cubes.`
            }
        }
    },
    singCubes2: {
        name: 'Cube Blaze',
        description: 'Burn some more Golden Quarks! +8% gained Cubes per level.',
        maxLevel: 25,
        costPerLevel: 25,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.08 * n,
                desc: `Permanently gain ${format(8 * n, 0, true)}% more Cubes.`
            }
        }
    },
    singCubes3: {
        name: 'Cube Inferno',
        description: 'Even Dante is impressed. +4% gained Cubes per level.',
        maxLevel: 40,
        costPerLevel: 500,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.04 * n,
                desc: `Permanently gain ${format(4 * n, 0, true)}% more Cubes.`
            }
        }
    },
    singCitadel: {
        name: 'Citadel of Singularity',
        description: 'What a unique structual phenomenon... but it gives +2% Obtainium, Offerings, and 3-7D cubes per level! +1% Additional for every 10 levels!',
        maxLevel: -1,
        costPerLevel: 500000,
        minimumSingularity: 100,
        effect: (n: number) => {
            return {
                bonus: (1 + 0.02 * n) * (1 + Math.floor(n / 10) / 100),
                desc: `Obtainium, Offerings, and 3-7D Cubes +${format(100 * ((1 + 0.02 * n) * (1 + Math.floor(n/10)/100) - 1))}%, forever!`
            }
        }
    },
    singCitadel2: {
        name: 'Citadel of Singularity: The Real Edition',
        description: 'This actual Citadel gives +2% Obtainium, Offerings, and 3-7D cubes per level! +1% Additional for every 10 levels! Also sets the free level of the fake citadel to whatever level this is.',
        maxLevel: 100,
        costPerLevel: 1e14,
        minimumSingularity: 210,
        specialCostForm: 'Quadratic',
        effect: (n: number) => {
            return {
                bonus: (1 + 0.02 * n) * (1 + Math.floor(n / 10) / 100),
                desc: `Obtainium, Offerings, and 3-7D Cubes +${format(100 * ((1 + 0.02 * n) * (1 + Math.floor(n/10)/100) - 1))}%, forever!`
            }
        }
    },
    octeractUnlock: {
        name: 'Octeracts',
        description: 'Hey!!! What are you trying to do?!?',
        maxLevel: 1,
        costPerLevel: 8888,
        minimumSingularity: 8,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} bought into the Octeract hype.`
            }
        },
        qualityOfLife: true
    },
    singOcteractPatreonBonus: {
        name: 'Platonic $ells out!!!',
        description: 'You know that Patreon bonus? Yeah, that\'s cool and all, but what if it also boosted Octeract production by the same amount?',
        maxLevel: 1,
        costPerLevel: 9999,
        minimumSingularity: 12,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `Octeract production is ${n}% faster for every $10 per month on the Patreon! Same as the Quark bonus which already exists.`
            }
        }
    },
    offeringAutomatic: {
        name: 'Blueberry Shards! (WIP)',
        description: 'The legends are true. \n The Prophecies are fulfilled. \n Ant God has heard your prayers. \n Let there be blueberries! \n And they were good.',
        maxLevel: -1,
        costPerLevel: 1e14,
        minimumSingularity: 222,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: `You have purchased ${n} tasty blueberries.`
            }
        }
    },
    intermediatePack: {
        name: 'Intermediate Pack',
        description: 'Double Global Speed, Multiply Ascension speed by 1.5, and gain +2% Quarks forever. Yum... 2% Quark Milk.',
        maxLevel: 1,
        costPerLevel: 1,
        minimumSingularity: 4,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} upgraded your package to intermediate.`
            }
        }
    },
    advancedPack: {
        name: 'Advanced Pack',
        description: 'Now we\'re cooking with kerosene! Gain +4% Quarks stack with intermediate, +0.33 to all corruption score multipliers, regardless of level!',
        maxLevel: 1,
        costPerLevel: 200,
        minimumSingularity: 9,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} bought our advanced package.`
            }
        }
    },
    expertPack: {
        name: 'Expert Pack',
        description: 'That\'s a handful! Gain +6% Quarks stack with advanced, 1.5x Ascension Score, Code \'add\' gives 1.2x Ascension Timer.',
        maxLevel: 1,
        costPerLevel: 800,
        minimumSingularity: 16,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} switched to the expert provider.`
            }
        }
    },
    masterPack: {
        name: 'Master Pack',
        description: 'A tad insane. Gain +8% Quarks stack with expert, for every level 14 corruption, Ascension score is multiplied by 1.1.',
        maxLevel: 1,
        costPerLevel: 3200,
        minimumSingularity: 25,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} mastered your inner chakras.`
            }
        }
    },
    divinePack: {
        name: 'Divine Pack',
        description: 'OHHHHH. Gain +10% Quarks stack with master, and multiply Octeract gain by 7.77 if corruptions are all set to 14.',
        maxLevel: 1,
        costPerLevel: 12800,
        minimumSingularity: 36,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} found the reason for existence${(n > 0) ? '' : ' just yet'}.`
            }
        }
    },
    wowPass2: {
        name: 'Shop Liquidation Sale',
        description: 'The Seal Merchant needs to get rid of some exotic goods. Only for a steep price. I do not think that is how sales work.',
        maxLevel: 1,
        costPerLevel: 19999,
        minimumSingularity: 11,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} triggered the Liquidation event!`
            }
        },
        qualityOfLife: true
    },
    wowPass3: {
        name: 'QUAAAACK',
        description: 'QUAAAAAAAACK. The Merchant has gone crazy for your QUARKS!',
        maxLevel: 1,
        costPerLevel: 3e7 - 1,
        minimumSingularity: 83,
        effect: (n: number) => {
            return {
                bonus: (n > 0),
                desc: `You ${(n > 0) ? 'have': 'have not'} triggered the QUACKSTRAVAGANZA!!`
            }
        },
        qualityOfLife: true
    },
    potionBuff: {
        name: 'Potion Decanter of Enlightenment',
        description: 'Purported to actually be the fountain of youth, this item powers up potions considerably!',
        maxLevel: 10,
        costPerLevel: 999,
        minimumSingularity: 4,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: Math.max(1, 10 * Math.pow(n, 2)),
                desc: `Potions currently give ${format(Math.max(1, 10 * Math.pow(n, 2)), 0, true)}x items!`
            }
        }
    },
    potionBuff2: {
        name: 'Potion Decanter of Inquisition',
        description: 'Staring at the glass, you aren\'t actually sure what this potion is.',
        maxLevel: 10,
        costPerLevel: 1e8,
        minimumSingularity: 121,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: Math.max(1, 2 * n),
                desc: `Potions currently give ${format(Math.max(1, 2 * n), 0, true)}x items!`
            }
        }
    },
    potionBuff3: {
        name: 'Potion Decanter of Maddening Instability',
        description: 'SHE\'S GONNA BLOW!!!! Said Midas, the Golden Quark Salesman. Oh yeah, did we mention he\'s in the game?',
        maxLevel: 10,
        costPerLevel: 1e12,
        minimumSingularity: 196,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: Math.max(1, 1 + 0.5 * n),
                desc: `Potions currently give ${format(Math.max(1, 1 + 0.5 * n), 2, true)}x items!`
            }
        }
    },
    singChallengeExtension: {
        name: 'Bigger Challenge Caps',
        description: 'Need more Challenges? Well, add 2 more Reincarnation Challenges and 1 Ascension Challenge to the cap, per level.',
        maxLevel: 4,
        costPerLevel: 999,
        minimumSingularity: 11,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: `You feel motivated enough to complete ${2 * n} more Reincarnation Challenges, and ${n} more Ascension Challenges.`
            }
        }
    },
    singChallengeExtension2: {
        name: 'Biggerer Challenge Caps',
        description: 'Need even more Challenges? Well, add 2 more Reincarnation Challenges and 1 Ascension Challenge to the cap, per level.',
        maxLevel: 3,
        costPerLevel: 29999,
        minimumSingularity: 26,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: `You feel motivated enough to complete ${2 * n} more Reincarnation Challenges, and ${n} more Ascension Challenges.`
            }
        }
    },
    singChallengeExtension3: {
        name: 'BiggererEST Challenge Caps',
        description: 'Need even MORE Challenges? Well, add 2 more Reincarnation Challenges and 1 Ascension Challenge to the cap, per level. Does it not seem excessive?',
        maxLevel: 3,
        costPerLevel: 749999,
        minimumSingularity: 51,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: `You feel motivated enough to complete ${2 * n} more Reincarnation Challenges, and ${n} more Ascension Challenges.`
            }
        }
    },
    singQuarkImprover1: {
        name: 'Marginal Quark Gain Improver Thingy',
        description: 'A doohickey that I forgot what it looked like. +0.5% Quarks per level, multiplicative with all other bonuses! Seems like it grows in cost a lot faster than anything else though. Also, did you know these descriptions can be arbitarily long?',
        maxLevel: 30,
        costPerLevel: 1,
        minimumSingularity: 177,
        canExceedCap: true,
        specialCostForm: 'Exponential2',
        effect: (n: number) => {
            return {
                bonus: n/200,
                desc: `You gain ${format(n/2, 2, true)}% more Quarks!`
            }
        },
        qualityOfLife: true
    },
    singQuarkHepteract: {
        name: 'I wish my Quark Hepteract was marginally better.',
        description: 'Wrong game, oops. Anyway, would you like a very slightly better DR exponent on Quark Hepteract?',
        maxLevel: 1,
        costPerLevel: 14999,
        minimumSingularity: 5,
        effect: (n: number) => {
            return {
                bonus: n/100,
                desc: `The DR exponent is now ${format(2 *n, 2, true)}% larger!`
            }
        },
        qualityOfLife: true
    },
    singQuarkHepteract2: {
        name: 'I wish my Quark Hepteract was marginally better II.',
        description: 'Still not the right game. Same as the previous upgrade.',
        maxLevel: 1,
        costPerLevel: 449999,
        minimumSingularity: 30,
        effect: (n: number) => {
            return {
                bonus: n/100,
                desc: `The DR exponent is now ${format(2 * n, 2, true)}% larger!`
            }
        },
        qualityOfLife: true
    },
    singQuarkHepteract3: {
        name: 'I wish my Quark Hepteract was marginally better III.',
        description: 'I AM NOT THE GODMOTHER YOU ARE LOOKING FOR, DYLAN!',
        maxLevel: 1,
        costPerLevel: 13370000,
        minimumSingularity: 61,
        effect: (n: number) => {
            return {
                bonus: n/100,
                desc: `The DR exponent is now ${format(2 * n, 2, true)}% larger!`
            }
        },
        qualityOfLife: true
    },
    singOcteractGain: {
        name: 'Octeract Absinthe',
        description: 'You would have never known this tonic can boost your Octeracts! [+1% per level, in fact!]',
        maxLevel: -1,
        costPerLevel: 20000,
        minimumSingularity: 36,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.01 * n,
                desc: `Octeract Gain +${format(n, 0, true)}%`
            }
        }
    },
    singOcteractGain2: {
        name: 'Pieces of Eight',
        description: 'There is indeed eight of them, but each only gives +0.5% bonus, so each level gives +4% Octeract per level.',
        maxLevel: 25,
        costPerLevel: 40000,
        minimumSingularity: 36,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.04 * n,
                desc: `Octeract Gain +${format(4*n, 0, true)}%`
            }
        }
    },
    singOcteractGain3: {
        name: 'The Obelisk Shaped like an Octagon.',
        description: 'Platonic had to reach pretty far here. +2% Octeracts yeah!',
        maxLevel: 50,
        costPerLevel: 250000,
        minimumSingularity: 55,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.02 * n,
                desc: `Octeract Gain +${format(2 * n, 0, true)}%`
            }
        }
    },
    singOcteractGain4: {
        name: 'Octahedral Synthesis',
        description: 'How does this even work!?? +1% Octeracts, you bet!',
        maxLevel: 100,
        costPerLevel: 750000,
        minimumSingularity: 77,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.01 * n,
                desc: `Octeract Gain +${format(n, 0, true)}%`
            }
        }
    },
    singOcteractGain5: {
        name: 'The Eighth Wonder of the World',
        description: 'is the wonder of the world we live in. [+0.5% Octeracts. Platonic, this is so stingy! but, he does not care one bit.]',
        maxLevel: 200,
        costPerLevel: 7777777,
        minimumSingularity: 100,
        canExceedCap: true,
        effect: (n: number) => {
            return {
                bonus: 1 + 0.005 * n,
                desc: `Octeract Gain +${format(n / 2, 1, true)}%`
            }
        }
    },
    platonicTau: {
        name: 'Platonic TAU',
        description: 'Placed in the wrong upgrade section, this will remove any restrictions on corruptions or corruption level caps! Also raises 3d cube gain to the power of 1.01!',
        maxLevel: 1,
        costPerLevel: 100000,
        minimumSingularity: 29,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `This upgrade has ${n > 0 ? '' : 'NOT'} been purchased!`
            }
        },
        qualityOfLife: true
    },
    platonicAlpha: {
        name: 'Platonic ALPHA...?',
        description: 'Confusion ensues as to why there are two of these. This one is capitalized, so buying this ensures Platonic Alpha is always maxed!',
        maxLevel: 1,
        costPerLevel: 2e7,
        minimumSingularity: 70,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `This upgrade has ${n > 0 ? '' : 'NOT'} been purchased!`
            }
        },
        qualityOfLife: true
    },
    platonicDelta: {
        name: 'Platonic DELTA',
        description: 'Time follows you towards the future, after getting this bad boy. Gain +100% more cubes per day in your current singularity, up to +900% at day 9.',
        maxLevel: 1,
        costPerLevel: 5e9,
        minimumSingularity: 111,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `This upgrade has ${n > 0 ? '' : 'NOT'} been purchased!`
            }
        }
    },
    platonicPhi: {
        name: 'Platonic PHI',
        description: 'Time follows you toward the past as well. Gain 5 additional free Singularity Upgrades per day in your singularity from code daily, up to +50 after 10 days.',
        maxLevel: 1,
        costPerLevel: 2e11,
        minimumSingularity: 152,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `This upgrade has ${n > 0 ? '' : 'NOT'} been purchased!`
            }
        },
        qualityOfLife: true
    },
    singFastForward: {
        name: 'Etherflux Singularities',
        description: 'Golden Quark gained by Singularity is increased by 100% (additive), and going singular at your all time highest count gives +1 singularity count!',
        maxLevel: 1,
        costPerLevel: 7e6 - 1,
        minimumSingularity: 50,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `You've ${n > 0 ? '' : 'NOT'} transformed the Etherflux!`
            }
        },
        qualityOfLife: true
    },
    singFastForward2: {
        name: 'Aetherflux Singularities',
        description: 'Golden Quark gained by Singularity is increased by 100% (additive) and going singular at your all time highest count gives +1 singularity count! It\'s like Etherflux but with an A.',
        maxLevel: 1,
        costPerLevel: 1e11 - 1,
        minimumSingularity: 150,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `You've ${n > 0 ? '' : 'NOT'} transformed the Aetherflux!`
            }
        },
        qualityOfLife: true
    },
    singAscensionSpeed: {
        name: 'A hecking good ascension speedup!',
        description: 'Ascension Speed is raised to the power of 1.03, raised to 0.97 if less than 1x.',
        maxLevel: 1,
        costPerLevel: 1e10,
        minimumSingularity: 130,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: `Ascension Speed ^${format(1 + 0.03 * n, 2, true)}, ^${format(1 - 0.03 * n, 2, true)} if < 1x` // TODO
            }
        }
    },
    singAscensionSpeed2: {
        name: 'A mediocre ascension speedup!',
        description: 'Ascension speed is multiplied by 6 if you have not purchased Antiquities in your current Singularity.',
        maxLevel: 1,
        costPerLevel: 1e12,
        minimumSingularity: 150,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: 'The effect is clear!' // TODO
            }
        }
    },
    WIP: {
        name: 'WIP TEMPLATE',
        description: 'This is a template! Bottom Text.',
        maxLevel: 100,
        costPerLevel: 1e300,
        minimumSingularity: 251,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: 'Update this description at a later time!!!!!!!!!!' // TODO
            }
        }
    },
    ultimatePen: {
        name: 'The Ultimate Pen',
        description: 'You. It is you who is the author of your own story!',
        maxLevel: 1,
        costPerLevel: 2.22e22,
        minimumSingularity: 300,
        effect: (n: number) => {
            return {
                bonus: n > 0,
                desc: `You do ${n > 0 ? '' : 'NOT'} own the Ultimate Pen. ${n > 0 ? ' However, the pen just ran out of ink. How will you get more?' : ''}`
            }
        }
    },
    oneMind: {
        name: 'ONE MIND',
        description: 'A note, you found on the ground: seems like an advertisement for a cult. "Lock your ascension speed to 10x, and multiply all cubes based on the difference." Hmm...',
        maxLevel: 1,
        costPerLevel: 1.66e13,
        minimumSingularity: 166,
        effect: (n : number) => {
            return {
                bonus: n > 0,
                desc: `You have ${n > 0 ? '' : 'NOT'} joined the cult!`
            }
        },
        qualityOfLife: true
    },
    wowPass4: {
        name: 'QUQUQUQUAAKCKCKKCKKCKK',
        description: 'Deals that\'ll cost you a beak and a wing!',
        maxLevel: 1,
        costPerLevel: 66666666666,
        minimumSingularity: 150,
        effect: (n : number) => {
            return {
                bonus: n > 0,
                desc: `You have ${n > 0 ? '' : 'NOT'} quacked your last QUARK`
            }
        },
        qualityOfLife: true
    },
    blueberries: {
        name: 'Blueberry Shards! (WIP)',
        description: 'Blueberries! Yeah, Platonic is out of ideas. Well, each Blueberry gives a 0.01% chance per second to generate some Ambrosia!',
        maxLevel: -1,
        costPerLevel: 1e16,
        minimumSingularity: 222,
        effect: (n: number) => {
            return {
                bonus: n,
                desc: `You have purchased ${n} tasty blueberries.`
            }
        },
        specialCostForm: 'Exponential2'
    }
}

/**
 * Singularity Perks are automatically obtained and upgraded, based on player.singularityCount
 * They can have one or several levels with a description for each level
 */
export class SingularityPerk {
    public readonly name: string
    public readonly levels: number[]
    public readonly description: (n: number, levels: number[]) => string

    public constructor(perk: SingularityPerk) {
        this.name = perk.name;
        this.levels = perk.levels;
        this.description = perk.description;
    }
}

// List of Singularity Perks based on player.highestSingularityCount
// The list is ordered on first level acquisition, so be careful when inserting a new one ;)
export const singularityPerks: SingularityPerk[] = [
    {
        name: '“daily”代码额外奖励',
        levels: [1, 20, 200],
        description: (n: number, levels: number[]) => {
            if (n >= levels[2]) {
                return '输入“daily”代码后可以获得金夸克和随机奇点升级的免费等级，额外获得0.2级金夸克 I，0.2级金夸克 II和1级金夸克 III，另外再使获得的免费等级数量翻倍！'
            } else if (n >= levels[1]) {
                return '输入“daily”代码后可以获得金夸克和随机奇点升级的免费等级，还可以额外获得0.2级金夸克 I，0.2级金夸克 II和1级金夸克 III。'
            } else {
                return '输入“daily”代码后可以获得金夸克和随机奇点升级的免费等级，且效果随着奇点次数而增长！'
            }
        }
    },
    {
        name: '无限成长',
        levels: [1],
        description: () => {
            return `每进入1次奇点，夸克获取数量和飞升次数获取数量就增加10%(目前增加了${format(10*player.singularityCount)}%)`
        }
    },
    {
        name: '金币之雨',
        levels: [1],
        description: () => {
            return '根据未花费的金夸克增加金币产量。每次奇点的飞升前阶段效果最好'
        }
    },
    {
        name: '七阶立方自动锻造',
        levels: [1],
        description: () => {
            return '可以自动进行七阶立方锻造'
        }
    },
    {
        name: '慷慨之珠',
        levels: [1, 2, 5, 10, 15, 20, 25, 30, 35],
        description: (n: number, levels: number[]) => {
            const overfluxBonus = {
                8: 700, // How to read: levels[8] -> Sing 35 gives 700%
                7: 500,
                6: 415,
                5: 360,
                4: 315,
                3: 280,
                2: 255,
                1: 230
            } as const;

            for (let i = 8; i > 0; i--) {
                if (n >= levels[i]) {
                    return `超通量珠加成夸克获取数量的效果上限变为${overfluxBonus[i as keyof typeof overfluxBonus]}%`
                }
            }
            return '超通量珠加成夸克获取数量的效果上限变为215%'
        }
    },
    {
        name: '傻瓜式研究教学',
        levels: [1, 11],
        description: (n: number, levels: number[]) => {
            if (n >= levels[1]) {
                return '您可以保留更好的自动研究，即方盒升级[1x9]'
            } else {
                return '您可以使用鼠标停留购买升级研究'
            }
        }
    },
    {
        name: '超级初始',
        levels: [2, 3, 4, 7, 15],
        description: (n: number, levels: number[]) => {
            if (n >= levels[4]) {
                return '飞升后初始获得1次超越，1次转世，1001神话，2.22e2222粒子和500难得素'
            } else if (n >= levels[3]) {
                return '飞升后初始获得1次超越，1次转世，1001神话，1e100粒子和500难得素'
            } else if (n >= levels[2]) {
                return '飞升后初始获得1次超越，1次转世，1001神话，1e16粒子和500难得素'
            } else if (n >= levels[1]) {
                return '飞升后初始获得1次超越，1次转世，1001神话和10粒子'
            } else {
                return '飞升后初始获得1次超越和1001神话'
            }
        }
    },
    {
        name: '这就是挑战？',
        levels: [4, 7, 10, 15, 20],
        description: (n: number, levels: number[]) => {
            if (n >= levels[4]) {
                return '飞升后初始完成5次挑战8，1次挑战6、挑战7和挑战9'
            } else if (n >= levels[3]) {
                return '飞升后初始完成5次挑战8，1次挑战6和挑战7'
            } else if (n >= levels[2]) {
                return '飞升后初始完成1次挑战6、挑战7和挑战8'
            } else if (n >= levels[1]) {
                return '飞升后初始完成1次挑战6和挑战7'
            } else {
                return '飞升后初始完成1次挑战6'
            }
        }
    },
    {
        name: '永久保留自动升级',
        levels: [5, 10, 15, 25, 30, 100],
        description: (n: number, levels: number[]) => {
            if (n >= levels[5]) {
                return '您常时获得方盒升级1x4至1x8和方盒升级2x10。您常时自动加强和升阶护身符，常时自动购买死神蚁。您常时自动购买自动化升级！100次进入奇点后，您永远记住了巧克力曲奇饼干(方盒升级Cx1)的味道，并可以永久保留它的效果！'
            } else if (n >= levels[4]) {
                return '您常时获得方盒升级1x4至1x8和方盒升级2x10。您常时自动加强和升阶护身符，常时自动购买死神蚁。您常时自动购买自动化升级！'
            } else if (n >= levels[3]) {
                return '您常时获得方盒升级1x4至1x8和方盒升级2x10。您常时自动购买自动化升级！'
            } else if (n >= levels[2]) {
                return '您常时获得方盒升级1x4至1x8和方盒升级2x10。'
            } else if (n >= levels[1]) {
                return '您常时获得方盒升级1x4至1x8。'
            } else {
                return '您常时获得方盒升级1x7(粒子建筑自动购买)。'
            }
        }
    },
    {
        name: '更多夸克',
        levels: [5, 20, 35, 50, 65, 80, 90, 100, 121, 144, 150, 160, 166, 169, 170, 175, 180, 190, 196, 200, 200, 201, 202, 203, 204, 205, 210, 212, 214, 216, 218, 220, 225, 250],
        description: (n: number, levels: number[]) => {

            for (let i = levels.length - 1; i >= 0; i--) {
                if (n >= levels[i]) {
                    return `夸克获取数量额外${i+1}次增加5%(相互叠乘)！总加成：${format(100 * (Math.pow(1.05, i+1) - 1), 2)}%`
                }
            }
            return 'This is a bug! Contact Platonic if you see this message, somehow.'
        }
    },
    {
        name: '商店特惠',
        levels: [5, 20, 51],
        description: (n: number, levels: number[]) => {
            if (n >= levels[2]) {
                return '您常时获得商店的EX额外祭品、AUTO自动献祭祭品、EX额外难得素、AUTO难得素自动研究、蚂蚁速度、昂贵物品至满级，常时保留商店的季票1、季票2、季票3、季票Y、飞升的速度1%加成、飞升的速度0.5%加成'
            } else if (n >= levels[1]) {
                return '您常时获得商店的EX额外祭品、AUTO自动献祭祭品、EX额外难得素、AUTO难得素自动研究、蚂蚁速度、昂贵物品至满级'
            } else {
                return '进入奇点后您直接获得商店的EX额外祭品、AUTO自动献祭祭品、EX额外难得素、AUTO难得素自动研究、蚂蚁速度、昂贵物品各10级，可以重置这些升级获得夸克'
            }
        }
    },
    {
        name: '自动使用药剂',
        levels: [6],
        description: () => {
            return '每180秒自动各使用一瓶难得素药剂和一瓶祭品药剂！每次奇点使时间间隔减少3%。'
        }
    },
    {
        name: '别了，洗点！',
        levels: [7],
        description: () => {
            return '护身符的额外等级对所有符文均生效！'
        }
    },
    {
        name: '看在(蚁)神的份上',
        levels: [10, 15, 25],
        description: (n: number, levels: number[]) => {
            if (n >= levels[2]) {
                return '您可以保留所有蚂蚁自动购买，飞升后初始获得一只神使蚁'
            } else if (n >= levels[1]) {
                return '您可以保留所有蚂蚁自动购买，飞升后初始获得一只蚁后'
            } else {
                return '您可以保留所有蚂蚁自动购买，飞升后初始获得一只工蚁'
            }
        }
    },
    {
        name: '集腋成裘',
        levels: [10, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 235, 240],
        description: (n: number, levels: number[]) => {
            for (let i = levels.length - 1; i >= 0; i--) {
                if (n >= levels[i]) {
                    return `使用“add”代码的奖励除以${format(1 + (i+1)/5, 2, true)}，但恢复时间也除以${format(1 + (i+1)/5, 2, true)}，且使用次数上限乘以${format(1 + (i+1)/5, 2, true)}(向上取整)。`
                }
            }
            return 'BUG!!!'
        }
    },
    {
        name: '自动魔法符文',
        levels: [15, 30, 40, 50],
        description: (n: number, levels: number[]) => {
            if (n >= levels[3]) {
                return '开启自动符文时您可以自动购买祝福、魂灵、护身符的所有碎片，并会将祭品分配给符文6 - 无限晋升和符文7 - 蚁神之古物'
            } else if (n >= levels[2]) {
                return '开启自动符文时您可以自动购买祝福、魂灵、护身符的所有碎片，并会将祭品分配给符文6 - 无限晋升'
            } else if (n >= levels[1]) {
                return '开启自动符文时您可以自动购买祝福和魂灵，并会将祭品分配给符文6 - 无限晋升'
            } else {
                return '开启自动符文时您可以自动购买祝福和魂灵'
            }
        }
    },
    {
        name: '拔擢成就',
        levels: [25],
        description: () => {
            return '解锁新的，更加困难的成就！获取方式与其余的成就不同……(制作中)'
        }
    },
    {
        name: 'Derpsmith的聚宝盆',
        levels: [18, 38, 58, 78, 88, 98, 118, 148, 178, 188, 198, 208, 218, 228, 238, 248],
        description: (n: number, levels: number[]) => {
            let counter = 0
            for (const singCount of levels) {
                if (n >= singCount) {
                    counter += 1
                }
            }

            return `Derpsmith祝福了您，每次奇点可以多获得${counter}%惊奇八阶方块！`
        }
    },
    {
        name: '酷炫的开盒体验',
        levels: [25, 35],
        description: (n: number, levels: number[]) => {
            if (n >= levels[1]) {
                return '飞升时，研究6x13、7x3、7x18、8x8、8x23不再重置，并可以自动开启特定比例的方盒及立方！'
            } else {
                return '飞升时，研究6x13、7x3、7x18、8x8、8x23不再重置'
            }
        }
    },
    {
        name: '永恒飞升',
        levels: [25, 101],
        description: (n: number, levels: number[]) => {
            if (n >= levels[1]) {
                return '您可以根据现实时间自动飞升了，并且购买立即完成挑战 2后，可以自动扫荡飞升挑战！'
            } else {
                return '您可以根据现实时间自动飞升了'
            }
        }
    },
    {
        name: '蚁神的聚宝盆',
        levels: [30, 70, 100],
        description: (n: number, levels: number[]) => {
            if (n >= levels[2]) {
                return '蚂蚁速度变为1e12倍！该效果不受任何等级的任何腐化影响。'
            } else if (n >= levels[1]) {
                return '蚂蚁速度变为1e6倍！该效果不受任何等级的任何腐化影响。'
            } else {
                return '蚂蚁速度变为1000倍！该效果不受任何等级的任何腐化影响。'
            }
        }
    },
    {
        name: '超载',
        levels: [50, 60, 75, 100, 125, 150, 175, 200, 225, 250],
        description: (n: number, levels: number[]) => {
            for (let i = levels.length - 1; i >= 0; i--) {
                if (n >= levels[i]) {
                    return `特定奇点升级的等级上限增加${i+1}！`
                }
            }
            return 'This is a bug! Contact Platonic if you see this message, somehow.'
        }
    },
    {
        name: '惊奇方盒自动运输',
        levels: [50, 150],
        description: (n: number, levels: number[]) => {
            if (n >= levels[1]) {
                return '每次飞升自动购买方盒升级！'
            } else {
                return '每次飞升自动购买方盒升级，只在奇点挑战中有效'
            }
        }
    },
    {
        name: '金之革命',
        levels: [100],
        description: () => {
            return `每次奇点使进入奇点的金夸克获取数量增加0.4%。目前增加了${format(Math.min(100, 0.4*player.singularityCount), 1)}%(最高增加100%)`
        }
    },
    {
        name: '金之革命 II',
        levels: [100],
        description: () => {
            return `每次奇点使商店购买金夸克的花费减少0.2%。目前减少了${format(Math.min(50, 0.2*player.singularityCount), 1)}%(最高减少50%)`
        }
    },
    {
        name: '金之革命 III',
        levels: [100],
        description: () => {
            return `每次奇点使每小时导出存档的金夸克奖励增加2%。目前增加了${format(Math.min(500, 2*player.singularityCount))}%(最高增加500%)`
        }
    },
    {
        name: 'PLATONIC桌面点击之克隆',
        levels: [100, 200],
        description: (n: number, levels: number[]) => {
            if (n >= levels[1]) {
                return '每次飞升自动购买PLATONIC升级，且不花费难得素和祭品！'
            } else {
                return '每次飞升自动购买PLATONIC升级，且不花费难得素和祭品，只在奇点挑战中有效'
            }
        }
    },
    {
        name: 'PL-AT Σ',
        levels: [125, 200],
        description: (n: number, levels: number[]) => {
            let counter = 0
            for (const singCount of levels) {
                if (n >= singCount) {
                    counter += 0.125
                }
            }
            return `对于每次奇点，每级特权使“add”代码的使用次数加快${counter}%恢复。目前加快了${format(Math.min(50, counter*player.singularityCount), 1)}%(最高使恢复时间减少60%)`
        }
    },
    {
        name: '米达斯的千年之金',
        levels: [150],
        description: () => {
            return '每次使用“add”代码后还可以使金夸克 I的免费等级增加0.01，金夸克 III的免费等级增加0.05。'
        }
    },
    {
        name: '金之革命 IV',
        levels: [160, 173, 185, 194, 204, 210, 219, 229, 240, 249],
        description: (n: number, levels: number[]) => {
            const perSecond = 1000000
            let divisor = 0
            for (const singCount of levels) {
                if (n >= singCount) {
                    divisor += 1
                }
            }
            return `每个时刻获得惊奇八阶方块时，也自动获得金夸克，数量为奇点的金夸克获取数量的1/${format(perSecond / divisor, 0, true)}！`
        }
    },
    {
        name: '八阶方块世代交替',
        levels: [200, 205],
        description: (n: number, levels: number[]) => {
            if (n >= levels[1]) {
                return '每次使用“daily”代码后可以使惊奇八阶方块同生和惊奇八阶方块三度起源的免费等级增加当前等级的1%！'
            } else {
                return '每次使用“daily”代码后可以使惊奇八阶方块同生的免费等级增加当前等级的1%！'
            }
        }
    },
    {
        name: '完美炼金术',
        levels: [200, 208, 221],
        description: (n: number, levels: number[]) => {
            if (n >= levels[2]) {
                return '从第200次奇点开始，增加奇点次数的升级不再生效！但使您的金夸克获取数量变为8倍，并使购买金夸克的花费除以8。'
            } else if (n >= levels[1]) {
                return '从第200次奇点开始，增加奇点次数的升级不再生效！但使您的金夸克获取数量变为5倍，并使购买金夸克的花费除以5。'
            } else {
                return '从第200次奇点开始，增加奇点次数的升级不再生效！但使您的金夸克获取数量变为3倍，并使购买金夸克的花费除以3。'
            }
        }
    },
    {
        name: '克夸',
        levels: [200],
        description: () => {
            const amt = Math.pow((player.singularityCount - 179) / 20, 2)
            return `使夸克获取数量变为((奇点次数-179)/20)的平方倍。目前倍率为${format(amt)}……是的，就是这么好。`
        }
    }
]

export const updateSingularityPerks = (): void => {
    const singularityCount = player.highestSingularityCount;
    const str = `The highest Singularity you've reached is the <span style="color: gold">${toOrdinal(singularityCount)} Singularity.</span><br/>以下是您在奇点中获得的特权<br/>(鼠标停留在特权上可以查看效果。<span class="newPerk">gold text</span> were added or improved in this Singularity)<br/>`
                + getAvailablePerksDescription(singularityCount)

    DOMCacheGetOrSet('singularityPerksMultiline').innerHTML = str;
}

export interface ISingularityPerkDisplayInfo {
    name: string
    description: string
    currentLevel: number
    lastUpgraded: number
    nextUpgrade: number | null
    acquired: number
}

/*
* Indicate current level of the Perk and when it was reached
*/
const getLastUpgradeInfo = (perk: SingularityPerk, singularityCount: number): {level: number, singularity: number, next: number | null} => {
    for (let i=perk.levels.length - 1; i >= 0; i--) {
        if (singularityCount >= perk.levels[i]) {
            return {
                level: i + 1,
                singularity: perk.levels[i],
                next: i < perk.levels.length - 1 ? perk.levels[i + 1] : null
            };
        }
    }

    return { level: 0, singularity: perk.levels[0], next: perk.levels[0] };
}

const getAvailablePerksDescription = (singularityCount: number): string => {
    let perksText = '';
    let availablePerks: ISingularityPerkDisplayInfo[] = [];
    const nextUpgrades: number[] = [];
    let singularityCountForNextPerk: number | null = null;
    for (const perk of singularityPerks) {
        const upgradeInfo = getLastUpgradeInfo(perk, singularityCount);
        if (upgradeInfo.level > 0) {
            availablePerks.push({
                name: perk.name,
                description: perk.description(singularityCount, perk.levels),
                currentLevel: upgradeInfo.level,
                lastUpgraded: upgradeInfo.singularity,
                nextUpgrade: upgradeInfo.next,
                acquired: perk.levels[0]
            });
            if (upgradeInfo.next) {
                nextUpgrades.push(upgradeInfo.next);
            }
        } else {
            singularityCountForNextPerk = upgradeInfo.singularity;
            break;
        }
    }

    // We want to sort the perks so that the most recently upgraded or lastUpgraded are listed first
    availablePerks = availablePerks.sort((p1, p2) => {
        if (p1.acquired == p2.acquired && p1.lastUpgraded == p2.lastUpgraded) {
            return 0;
        }
        if (p1.lastUpgraded > p2.lastUpgraded) {
            return -1;
        } else if (p1.lastUpgraded == p2.lastUpgraded && p1.acquired > p2.acquired) {
            return -1;
        }
        return 1;
    })

    for (const availablePerk of availablePerks) {
        perksText += '<br/>' + formatPerkDescription(availablePerk, singularityCount);
    }
    perksText += '<br/>';
    if (singularityCountForNextPerk) {
        perksText += '<br/>第' + singularityCountForNextPerk + '次进入奇点后将解锁新特权';
    }
    const singularityCountForNextPerkUpgrade = nextUpgrades.reduce((a, b) => Math.min(a, +b), Infinity);
    if (singularityCountForNextPerkUpgrade < Infinity) {
        perksText += '<br/>第' + singularityCountForNextPerkUpgrade + '次进入奇点后将有特权加强';
    }
    return perksText;
}

function formatPerkDescription(perkData: ISingularityPerkDisplayInfo, singularityCount: number): string {
    const singTolerance = getFastForwardTotalMultiplier();
    const isNew = (singularityCount - perkData.lastUpgraded <= singTolerance);
    const levelInfo = perkData.currentLevel > 1 ? ' - ' + perkData.currentLevel + '级' : '';
    //const acquiredUpgraded = ' / Acq ' + perkData.acquired + ' / Upg ' + perkData.lastUpgraded;
    return `<span${isNew?' class="newPerk"':''} title="${perkData.description}">${perkData.name}${levelInfo}</span>`;
}

// Indicates the number of extra Singularity count gained on Singularity reset
export const getFastForwardTotalMultiplier = (): number => {
    let fastForward = 0;
    fastForward += +player.singularityUpgrades.singFastForward.getEffect().bonus
    fastForward += +player.singularityUpgrades.singFastForward2.getEffect().bonus
    fastForward += +player.octeractUpgrades.octeractFastForward.getEffect().bonus

    // Stop at sing 200 even if you include fast forward
    fastForward = Math.max(0, Math.min(fastForward, 200 - player.singularityCount - 1));

    // Please for the love of god don't allow FF during a challenge
    if (player.insideSingularityChallenge) {
        return 0
    }

    // If the next singularityCount is greater than the highestSingularityCount, fast forward to be equal to the highestSingularityCount
    if (player.highestSingularityCount !== player.singularityCount && player.singularityCount + fastForward + 1 >= player.highestSingularityCount) {
        return Math.max(0, Math.min(fastForward, player.highestSingularityCount - player.singularityCount - 1))
    }

    return fastForward;
}

export const getGoldenQuarkCost = (): {
    cost: number
    costReduction: number
} => {
    const baseCost = 10000

    let costReduction = 10000 // We will construct our cost reduction by subtracting 10000 - this value.

    costReduction *= (1 - 0.10 * Math.min(1, player.achievementPoints / 10000))
    costReduction *= (1 - 0.3 * player.cubeUpgrades[60] / 10000)
    costReduction *= +player.singularityUpgrades.goldenQuarks2.getEffect().bonus
    costReduction *= +player.octeractUpgrades.octeractGQCostReduce.getEffect().bonus
    costReduction *= (player.highestSingularityCount >= 100 ? 1 - 0.5 * player.highestSingularityCount / 250 : 1)

    let perkDivisor = 1
    if (player.highestSingularityCount >= 200) {
        perkDivisor = 3
    }
    if (player.highestSingularityCount >= 208) {
        perkDivisor = 5
    }
    if (player.highestSingularityCount >= 221) {
        perkDivisor = 8
    }
    costReduction /= perkDivisor

    costReduction = 10000 - costReduction

    return {
        cost: baseCost - costReduction,
        costReduction: costReduction
    }

}

export async function buyGoldenQuarks(): Promise<void> {
    const goldenQuarkCost = getGoldenQuarkCost()
    const maxBuy = Math.floor(+player.worlds / goldenQuarkCost.cost)
    let buyAmount = null

    if (maxBuy === 0) {
        return Alert('Sorry, I can\'t give credit. Come back when you\'re a little... mmm... richer!')
    }
    const buyPrompt = await Prompt(`You can buy Golden Quarks here for ${format(goldenQuarkCost.cost, 0, true)} Quarks (Discounted by ${format(goldenQuarkCost.costReduction, 0, true)})! You can buy up to ${format(maxBuy, 0, true)}. How many do you want? Type -1 to buy max!`)
    if (buyPrompt === null) {
        // Number(null) is 0. Yeah..
        return Alert('Okay, maybe next time.');
    }

    buyAmount = Number(buyPrompt)
    //Check these lol
    if (Number.isNaN(buyAmount) || !Number.isFinite(buyAmount)) {
        // nan + Infinity checks
        return Alert('Value must be a finite number!');
    } else if (buyAmount <= 0 && buyAmount != -1) {
        // 0 or less selected
        return Alert('You can\'t craft a nonpositive amount of these, you monster!');
    } else if (buyAmount > maxBuy) {
        return Alert('Sorry, I cannnot sell you this many Golden Quarks! Try buying fewer of them or typing -1 to buy max!')
    } else if (Math.floor(buyAmount) !== buyAmount) {
        // non integer
        return Alert('Sorry. I only sell whole Golden Quarks. None of that fractional transaction!')
    }

    if (buyAmount === -1) {
        const cost = maxBuy * goldenQuarkCost.cost
        player.worlds.sub(cost)
        player.goldenQuarks += maxBuy
        return Alert(`Transaction of ${format(maxBuy, 0, true)} Golden Quarks successful! [-${format(cost,0,true)} Quarks]`)
    } else {
        const cost = buyAmount * goldenQuarkCost.cost
        player.worlds.sub(cost)
        player.goldenQuarks += buyAmount
        return Alert(`Transaction of ${format(buyAmount, 0, true)} Golden Quarks successful! [-${format(cost, 0, true)} Quarks]`)
    }
}

export type SingularityDebuffs = 'Offering' | 'Obtainium' | 'Global Speed' | 'Researches' | 'Ascension Speed' | 'Cubes' | 'Cube Upgrades' |
                                 'Platonic Costs' | 'Hepteract Costs'

export const calculateEffectiveSingularities = (singularityCount: number = player.singularityCount): number => {
    let effectiveSingularities = singularityCount;
    effectiveSingularities *= Math.min(4.75, 0.75 * singularityCount / 10 + 1)

    if (player.insideSingularityChallenge) {
        if (player.singularityChallenges.noOcteracts.enabled) {
            effectiveSingularities *= Math.pow(player.singularityChallenges.noOcteracts.completions + 1, 3)
        }
    }

    if (singularityCount > 10) {
        effectiveSingularities *= 1.5
        effectiveSingularities *= Math.min(4, 1.25 * singularityCount / 10 - 0.25)
    }
    if (singularityCount > 25) {
        effectiveSingularities *= 2.5
        effectiveSingularities *= Math.min(6, 1.5 * singularityCount / 25 - 0.5)
    }
    if (singularityCount > 36) {
        effectiveSingularities *= 4
        effectiveSingularities *= Math.min(5, singularityCount / 18 - 1)
        effectiveSingularities *= Math.pow(1.1, Math.min(singularityCount - 36, 64))
    }
    if (singularityCount > 50) {
        effectiveSingularities *= 5
        effectiveSingularities *= Math.min(8, 2 * singularityCount / 50 - 1)
        effectiveSingularities *= Math.pow(1.1, Math.min(singularityCount - 50, 50))
    }
    if (singularityCount > 100) {
        effectiveSingularities *= 2
        effectiveSingularities *= singularityCount / 25
        effectiveSingularities *= Math.pow(1.1, singularityCount - 100)
    }
    if (singularityCount > 150) {
        effectiveSingularities *= 2
        effectiveSingularities *= Math.pow(1.05, singularityCount - 150)
    }
    if (singularityCount > 200) {
        effectiveSingularities *= 1.5
        effectiveSingularities *= Math.pow(1.275, singularityCount - 200)
    }
    if (singularityCount > 215) {
        effectiveSingularities *= 1.25
        effectiveSingularities *= Math.pow(1.2, singularityCount - 215)
    }
    if (singularityCount > 230) {
        effectiveSingularities *= 2
    }

    return effectiveSingularities
}
export const calculateNextSpike = (singularityCount: number = player.singularityCount): number => {
    const singularityPenaltyThreshold = [11, 26, 37, 51, 101, 151, 201, 216, 230];
    let penaltyDebuff = 0
    penaltyDebuff += player.shopUpgrades.shopSingularityPenaltyDebuff

    for (const sing of singularityPenaltyThreshold) {
        if (sing + penaltyDebuff > singularityCount) {
            return (sing + penaltyDebuff);
        }
    }
    return -1;
}
export const calculateSingularityDebuff = (debuff: SingularityDebuffs, singularityCount: number=player.singularityCount) => {
    if (singularityCount === 0) {
        return 1
    }
    if (player.runelevels[6] > 0) {
        return 1
    }

    let constitutiveSingularityCount = singularityCount
    constitutiveSingularityCount -= player.shopUpgrades.shopSingularityPenaltyDebuff

    const effectiveSingularities = calculateEffectiveSingularities(constitutiveSingularityCount);

    if (debuff === 'Offering') {
        return Math.sqrt(Math.min(effectiveSingularities, calculateEffectiveSingularities(150)) + 1)
    } else if (debuff === 'Global Speed') {
        return 1 + Math.sqrt(effectiveSingularities) / 4
    } else if (debuff === 'Obtainium') {
        return Math.sqrt(Math.min(effectiveSingularities, calculateEffectiveSingularities(150))  + 1)
    } else if (debuff === 'Researches') {
        return 1 + Math.sqrt(effectiveSingularities) / 2
    } else if (debuff === 'Ascension Speed') {
        return (singularityCount < 150) ?
            1 + Math.sqrt(effectiveSingularities) / 5:
            1 + Math.pow(effectiveSingularities, 0.75) / 10000
    } else if (debuff === 'Cubes') {
        return (player.singularityCount < 150) ?
            1 + Math.sqrt(effectiveSingularities) / 4:
            1 + Math.pow(effectiveSingularities, 0.75) / 1000
    } else if (debuff === 'Platonic Costs') {
        return (singularityCount > 36) ? 1 + Math.pow(effectiveSingularities, 3/10) / 12 : 1
    } else if (debuff === 'Hepteract Costs') {
        return (singularityCount > 50) ? 1 + Math.pow(effectiveSingularities, 11/50) / 25 : 1
    } else {
        // Cube upgrades
        return Math.cbrt(effectiveSingularities + 1)
    }
}
