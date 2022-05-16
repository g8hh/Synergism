import { DOMCacheGetOrSet } from './Cache/DOM'
import { format, player } from './Synergism'
import type { Player } from './types/Synergism'
import { Alert, Prompt } from './UpdateHTML'
import { toOrdinal } from './Utility'

/**
 *
 * Updates all statistics related to Singularities in the Singularity Tab.
 *
 */
export const updateSingularityStats = (): void => {
    const str = `您目前已进入了${toOrdinal(player.singularityCount)}次奇点，并拥有${format(player.goldenQuarks,0,true)}金夸克。
                 全局速度除以${format(calculateSingularityDebuff('Global Speed'), 2, true)}。
                 飞升的速度除以${format(calculateSingularityDebuff('Ascension Speed'), 2, true)}。
                 祭品获取数量除以${format(calculateSingularityDebuff('Offering'), 2, true)}。
                 难得素获取数量除以${format(calculateSingularityDebuff('Obtainium'), 2, true)}。
                 所有类型的方盒及立方获取数量除以${format(calculateSingularityDebuff('Cubes'), 2, true)}。
                 研究花费乘以${format(calculateSingularityDebuff('Researches'), 2, true)}。
                 方盒升级花费(饼干升级除外)乘以${format(calculateSingularityDebuff('Cube Upgrades'), 2, true)}。
                 蚁神之古物${(player.runelevels[6] > 0) ? '已' : '未'}购买。奇点相关惩罚${(player.runelevels[6] > 0) ? '已' : '未'}驱散！`

    DOMCacheGetOrSet('singularityMultiline').textContent = str;
}

export interface ISingularityData {
    name: string
    description: string
    level?: number
    maxLevel: number
    costPerLevel: number
    toggleBuy?: number
    goldenQuarksInvested?: number
    minimumSingularity?: number
}

/**
 * Singularity Upgrades are bought in the singularity tab, and all have their own
 * name, description, level and maxlevel, plus a feature to toggle buy on each.
 */
export class SingularityUpgrade {

    // Field Initialization
    private readonly name: string;
    private readonly description: string;
    public level = 0;
    private readonly maxLevel: number; //-1 = infinitely levelable
    private readonly costPerLevel: number;
    public toggleBuy = 1; //-1 = buy MAX (or 1000 in case of infinity levels!)
    public goldenQuarksInvested = 0;
    private readonly minimumSingularity: number;

    public constructor(data: ISingularityData) {
        this.name = data.name;
        this.description = data.description;
        this.level = data.level ?? this.level;
        this.maxLevel = data.maxLevel;
        this.costPerLevel = data.costPerLevel;
        this.toggleBuy = data.toggleBuy ?? 1;
        this.goldenQuarksInvested = data.goldenQuarksInvested ?? 0;
        this.minimumSingularity = data.minimumSingularity ?? 0;
    }

    /**
     * Given an upgrade, give a concise information regarding its data.
     * @returns A string that details the name, description, level statistic, and next level cost.
     */
    toString(): string {
        const costNextLevel = this.getCostTNL();
        const maxLevel = this.maxLevel === -1
            ? ''
            : `/${this.maxLevel}`;
        let CN_name = this.name;
        let CN_desc = this.description;
        if (CN_name == 'Golden Quarks I'){
            CN_name = '金夸克 I';
        } else if  (CN_name == 'Golden Quarks II'){
            CN_name = '金夸克 II';
        } else if  (CN_name == 'Golden Quarks III'){
            CN_name = '金夸克 III';
        } else if  (CN_name == 'Starter Pack'){
            CN_name = '新手大礼包';
        } else if  (CN_name == 'Wow Pass Unlock'){
            CN_name = '季票解锁';
        } else if  (CN_name == 'Cookie Recipes I'){
            CN_name = '饼干配方 I';
        } else if  (CN_name == 'Cookie Recipes II'){
            CN_name = '饼干配方 II';
        } else if  (CN_name == 'Cookie Recipes III'){
            CN_name = '饼干配方 III';
        } else if  (CN_name == 'Cookie Recipes IV'){
            CN_name = '饼干配方 IV';
        } else if  (CN_name == 'Improved Ascension Gain'){
            CN_name = '更多飞升次数';
        } else if  (CN_name == 'Level Fourteen Corruptions'){
            CN_name = '腐化等级-十四';
        } else if  (CN_name == 'Level Fifteen Corruptions'){
            CN_name = '腐化等级-十五';
        } else if  (CN_name == 'Offering Charge'){
            CN_name = '祭品增压';
        } else if  (CN_name == 'Offering Storm'){
            CN_name = '祭品风暴';
        } else if  (CN_name == 'Offering Tempest'){
            CN_name = '祭品狂风';
        } else if  (CN_name == 'Obtainium Wave'){
            CN_name = '难得素波浪';
        } else if  (CN_name == 'Obtainium Flood'){
            CN_name = '难得素洪峰';
        } else if  (CN_name == 'Obtainium Tsunami'){
            CN_name = '难得素海啸';
        } else if  (CN_name == 'Cube Flame'){
            CN_name = '方盒之焰';
        } else if  (CN_name == 'Cube Blaze'){
            CN_name = '方盒烈火';
        } else if  (CN_name == 'Cube Inferno'){
            CN_name = '方盒炼狱';
        } else if  (CN_name == 'Octeracts ;) (WIP)'){
            CN_name = '惊奇八阶立方;)(未实装)';
        } else if  (CN_name == 'Offering Lootzifer (WIP)'){
            CN_name = '祭品自动获取(未实装)';
        } else if  (CN_name == 'Intermediate Pack'){
            CN_name = '中级礼包';
        } else if  (CN_name == 'Advanced Pack'){
            CN_name = '高级礼包';
        } else if  (CN_name == 'Expert Pack'){
            CN_name = '专家礼包';
        } else if  (CN_name == 'Master Pack'){
            CN_name = '大师礼包';
        } else if  (CN_name == 'Divine Pack'){
            CN_name = '神圣礼包';
        }

        if (CN_desc == 'In the future, you will gain 5% more Golden Quarks on singularities! This also reduces the cost to buy Golden Quarks in the shop by 500 per level.'){
            CN_desc = '每级使进入奇点的金夸克获取数量增加5%！同时每级使商店购买金夸克的花费减少500。';
        } else if  (CN_desc == 'If you buy this, you will gain 2% more Golden Quarks on singularities. This also reduces the cost to buy Golden Quarks in the shop by 200 per level. Stacks with the first upgrade.'){
            CN_desc = '每级使进入奇点的金夸克获取数量增加2%。同时每级使商店购买金夸克的花费减少200。效果与第一个升级叠加。';
        } else if  (CN_desc == 'If you buy this, you will gain 1 Golden Quark per hour from Exports. Also reduces the cost to buy Golden Quarks in the shop by 1,000 per level.'){
            CN_desc = '购买后，每级使每小时导出存档奖励增加1金夸克。同时每级使商店购买金夸克的花费减少1000。';
        } else if  (CN_desc == 'Buy this! Buy This! Cube gain is permanently multiplied by 5, and gain 6x the Obtainium and Offerings from all sources, post-corruption.'){
            CN_desc = '买这个就对了！使所有类型的方盒及立方获取数量乘以5，并使最终难得素获取数量和祭品获取数量(计算腐化后)变为6倍。';
        } else if  (CN_desc == 'This upgrade will convince the seal merchant to sell you more Wow Passes, which even persist on Singularity!.'){
            CN_desc = '购买后，印记商人将向您出售更多季票，这些季票在进入奇点后等级仍然保留！';
        } else if  (CN_desc == 'For just a few golden quarks, re-open Wow! Bakery, adding five cookie-related cube upgrades.'){
            CN_desc = '花费一点金夸克就可以让惊奇烘焙坊重新开张，增加5个跟饼干有关的方盒升级。';
        } else if  (CN_desc == 'Diversify Wow! Bakery into cooking slightly more exotic cookies, adding five more cookie-related cube upgrades..'){
            CN_desc = '让惊奇烘焙坊制造更有异国风味的饼干，再增加5个跟饼干有关的方盒升级……';
        } else if  (CN_desc == 'Your Bakers threaten to quit without a higher pay. If you do pay them, they will bake even more fancy cookies.'){
            CN_desc = '烘焙师们表示不加薪就辞职了。如果给他们加薪，他们会为您制造更棒的饼干。';
        } else if  (CN_desc == 'This is a small price to pay for Salvation.'){
            CN_desc = '天下没有免费的饼干。';
        } else if  (CN_desc == 'Buying this, you will gain +2% Ascension Count forever, per level! Every 20 levels grants an additional, multiplicative +1% Ascension Count.'){
            CN_desc = '购买后，每级使飞升次数获取数量增加2%！每20级还可以使飞升次数获取数量额外乘以1.01。';
        } else if  (CN_desc == 'Buy this to unlock level fourteen corruptions :).'){
            CN_desc = '购买后解锁腐化等级14。:)';
        } else if  (CN_desc == 'This doesn\'t *really* raise the corruption limit. Rather, it adds one FREE level to corruption multipliers, no matter what (can exceed cap). :)'){
            CN_desc = '购买后并*不*会*使腐化等级上限增加，而是使腐化的相关加成倍率直接视为增加1级(可以超过上限)。:)';
        } else if  (CN_desc == 'Upgrade this to get +2% offerings per level, forever!'){
            CN_desc = '购买后，每级使祭品获取数量永久增加2%！';
        } else if  (CN_desc == 'Apparently, you can use this bar to attract more offerings. +8% per level, to be precise.'){
            CN_desc = '很显然，它可以吸引更多祭品。每级使祭品获取数量永久增加8%。';
        } else if  (CN_desc == 'This bar is so prestine, it\'ll make anyone submit their offerings. +4% per level, to be precise.'){
            CN_desc = '它会让所有人乖乖把祭品奉上。每级使祭品获取数量永久增加4%。';
        } else if  (CN_desc == 'Upgrade this to get +2% obtainium per level, forever!'){
            CN_desc = '购买后，每级使难得素获取数量永久增加2%！';
        } else if  (CN_desc == 'Holy crap, water bending! +8% gained obtainium per level.'){
            CN_desc = '传说中的御水术？！每级使难得素获取数量永久增加8%。';
        } else if  (CN_desc == 'A rising tide lifts all boats. +4% gained obtainium per level.'){
            CN_desc = '它卷起了所有船只。每级使难得素获取数量永久增加4%。';
        } else if  (CN_desc == 'Upgrade this to get +2% Cubes per level, forever!'){
            CN_desc = '购买后，每级使所有类型的方盒及立方获取数量永久增加2%！';
        } else if  (CN_desc == 'Burn some more Golden Quarks! +8% gained Cubes per level.'){
            CN_desc = '再挥霍一些金夸克吧！每级使所有类型的方盒及立方获取数量永久增加8%。';
        } else if  (CN_desc == 'Even Dante is impressed. +4% gained Cubes per level.'){
            CN_desc = '连但丁都会为之而惊讶。每级使所有类型的方盒及立方获取数量永久增加4%。';
        } else if  (CN_desc == 'Hey!!! What are you trying to do?!?'){
            CN_desc = '喂！！！您到底要做什么？！？';
        } else if  (CN_desc == 'Black Magic. Don\'t make deals with the devil. Each second, you get +2% of offering gain automatically per level. Also +10% Offerings!'){
            CN_desc = '利用黑暗魔法强化自身。别和魔鬼做交易。每级使您自动获得祭品获取数量2%的祭品。另外还使祭品获取数量增加10%！';
        } else if  (CN_desc == 'Double Global Speed, Multiply Ascension speed by 1.5, and gain +2% Quarks forever. Yum... 2% Quark Milk.'){
            CN_desc = '使全局速度翻倍，飞升的速度变为1.5倍，夸克获取数量增加2%。';
        } else if  (CN_desc == 'Now we\'re cooking with kerosene! Gain +4% Quarks stack with intermediate, +0.33 to all corruption score multipliers, regardless of level!'){
            CN_desc = '好上加好！使夸克获取数量增加4%(可以与中级礼包叠加)，并使所有腐化(等级不限)的分数倍率增加0.33！';
        } else if  (CN_desc == 'That\'s a handful! Gain +6% Quarks stack with advanced, 1.5x Ascension Score, Code \'add\' gives 1.2x Ascension Timer.'){
            CN_desc = '越来越难控制了！使夸克获取数量增加6%(可以与高级礼包叠加)，飞升分数变为1.5倍，输入代码 add 的飞升时间奖励变为1.2倍。';
        } else if  (CN_desc == 'A tad insane. Gain +8% Quarks stack with expert, for every level 14 corruption, ascension score is multiplied by 1.1.'){
            CN_desc = '有点疯狂了。使夸克获取数量增加8%(可以与专家礼包叠加)，每有一个腐化等级达到14，就使飞升分数变为1.1倍。';
        } else if  (CN_desc == 'OHHHHH. Gain +10% Quarks stack with master, and multiply Octeract gain by 7.77 if corruptions are all set to 14. Also unlock Platonic Upgrade autobuyers!'){
            CN_desc = '哦—————使夸克获取数量增加10%(可以与大师礼包叠加)，如果腐化等级全部为14，则使八阶立方获取数量变为7.77倍。解锁PLATONIC方盒升级自动购买！';
        }

        const minimumSingularity = this.minimumSingularity > 0
            ? `最少需要进入奇点次数：${this.minimumSingularity}`
            : '无进入奇点次数要求'

        return `${CN_name}
                ${CN_desc}
                ${minimumSingularity}
                等级 ${this.level}${maxLevel}
                下一级的花费：${format(costNextLevel)}金夸克。
                已花费金夸克数量：${format(this.goldenQuarksInvested, 0, true)}`
    }

    public updateUpgradeHTML(): void {
        DOMCacheGetOrSet('testingMultiline').textContent = this.toString()
    }

    /**
     * Retrieves the cost for upgrading the singularity upgrade once. Return 0 if maxed.
     * @returns A number representing how many Golden Quarks a player must have to upgrade once.
     */
    private getCostTNL(): number {
        return (this.maxLevel === this.level) ? 0: this.costPerLevel * (1 + this.level);
    }

    /**
     * Buy levels up until togglebuy or maxxed.
     * @returns An alert indicating cannot afford, already maxxed or purchased with how many
     *          levels purchased
     */
    public async buyLevel(): Promise<void> {
        let purchased = 0;
        let maxPurchasable = (this.maxLevel === -1)
            ? ((this.toggleBuy === -1)
                ? 1000
                : this.toggleBuy)
            : Math.min(this.toggleBuy, this.maxLevel - this.level);

        if (maxPurchasable === 0) {
            return Alert('hey! You have already maxxed this upgrade. :D')
        }

        if (player.singularityCount < this.minimumSingularity) {
            return Alert('you\'re not powerful enough to purchase this yet.')
        }
        while (maxPurchasable > 0) {
            const cost = this.getCostTNL();
            if (player.goldenQuarks < cost) {
                break;
            } else {
                player.goldenQuarks -= cost;
                this.goldenQuarksInvested += cost;
                this.level += 1;
                purchased += 1;
                maxPurchasable -= 1;
            }
        }

        if (purchased === 0) {
            return Alert('You cannot afford this upgrade. Sorry!')
        }

        this.updateUpgradeHTML();
        updateSingularityStats();
    }

    public async changeToggle(): Promise<void> {

        // Is null unless given an explicit number
        const newToggle = await Prompt(`
        Set maximum purchase amount per click for the ${this.name} upgrade.

        type -1 to set to MAX by default.
        `);
        const newToggleAmount = Number(newToggle);

        if (newToggle === null) {
            return Alert(`Toggle kept at ${format(this.toggleBuy)}.`)
        }

        if (!Number.isInteger(newToggle)) {
            return Alert('Toggle value must be a whole number!');
        }
        if (newToggleAmount < -1) {
            return Alert('The only valid negative number for toggle is -1.');
        }
        if (newToggleAmount === 0) {
            return Alert('You cannot set the toggle to 0.');
        }

        this.toggleBuy = newToggleAmount;
        const m = newToggleAmount === -1
            ? 'Your toggle is now set to MAX'
            : `Your toggle is now set to ${format(this.toggleBuy)}`;

        return Alert(m);
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
        description: 'In the future, you will gain 5% more Golden Quarks on singularities! This also reduces the cost to buy Golden Quarks in the shop by 500 per level.',
        maxLevel: 10,
        costPerLevel: 12
    },
    goldenQuarks2: {
        name: 'Golden Quarks II',
        description: 'If you buy this, you will gain 2% more Golden Quarks on singularities. This also reduces the cost to buy Golden Quarks in the shop by 200 per level. Stacks with the first upgrade.',
        maxLevel: 25,
        costPerLevel: 60
    },
    goldenQuarks3: {
        name: 'Golden Quarks III',
        description: 'If you buy this, you will gain 1 Golden Quark per hour from Exports. Also reduces the cost to buy Golden Quarks in the shop by 1,000 per level.',
        maxLevel: 5,
        costPerLevel: 1000
    },
    starterPack: {
        name: 'Starter Pack',
        description: 'Buy this! Buy This! Cube gain is permanently multiplied by 5, and gain 6x the Obtainium and Offerings from all sources, post-corruption.',
        maxLevel: 1,
        costPerLevel: 10
    },
    wowPass: {
        name: 'Wow Pass Unlock',
        description: 'This upgrade will convince the seal merchant to sell you more Wow Passes, which even persist on Singularity!.',
        maxLevel: 1,
        costPerLevel: 500
    },
    cookies: {
        name: 'Cookie Recipes I',
        description: 'For just a few golden quarks, re-open Wow! Bakery, adding five cookie-related cube upgrades.',
        maxLevel: 1,
        costPerLevel: 100
    },
    cookies2: {
        name: 'Cookie Recipes II',
        description: 'Diversify Wow! Bakery into cooking slightly more exotic cookies, adding five more cookie-related cube upgrades..',
        maxLevel: 1,
        costPerLevel: 500
    },
    cookies3: {
        name: 'Cookie Recipes III',
        description: 'Your Bakers threaten to quit without a higher pay. If you do pay them, they will bake even more fancy cookies.',
        maxLevel: 1,
        costPerLevel: 24999
    },
    cookies4: {
        name: 'Cookie Recipes IV',
        description: 'This is a small price to pay for Salvation.',
        maxLevel: 1,
        costPerLevel: 199999
    },
    ascensions: {
        name: 'Improved Ascension Gain',
        description: 'Buying this, you will gain +2% Ascension Count forever, per level! Every 20 levels grants an additional, multiplicative +1% Ascension Count.',
        maxLevel: -1,
        costPerLevel: 5
    },
    corruptionFourteen: {
        name: 'Level Fourteen Corruptions',
        description: 'Buy this to unlock level fourteen corruptions :).',
        maxLevel: 1,
        costPerLevel: 1000
    },
    corruptionFifteen: {
        name: 'Level Fifteen Corruptions',
        description: 'This doesn\'t *really* raise the corruption limit. Rather, it adds one FREE level to corruption multipliers, no matter what (can exceed cap). :)',
        maxLevel: 1,
        costPerLevel: 40000
    },
    singOfferings1: {
        name: 'Offering Charge',
        description: 'Upgrade this to get +2% offerings per level, forever!',
        maxLevel: -1,
        costPerLevel: 1
    },
    singOfferings2: {
        name: 'Offering Storm',
        description: 'Apparently, you can use this bar to attract more offerings. +8% per level, to be precise.',
        maxLevel: 25,
        costPerLevel: 25
    },
    singOfferings3: {
        name: 'Offering Tempest',
        description: 'This bar is so prestine, it\'ll make anyone submit their offerings. +4% per level, to be precise.',
        maxLevel: 40,
        costPerLevel: 500
    },
    singObtainium1: {
        name: 'Obtainium Wave',
        description: 'Upgrade this to get +2% obtainium per level, forever!',
        maxLevel: -1,
        costPerLevel: 1
    },
    singObtainium2: {
        name: 'Obtainium Flood',
        description: 'Holy crap, water bending! +8% gained obtainium per level.',
        maxLevel: 25,
        costPerLevel: 25
    },
    singObtainium3: {
        name: 'Obtainium Tsunami',
        description: 'A rising tide lifts all boats. +4% gained obtainium per level.',
        maxLevel: 40,
        costPerLevel: 500
    },
    singCubes1: {
        name: 'Cube Flame',
        description: 'Upgrade this to get +2% Cubes per level, forever!',
        maxLevel: -1,
        costPerLevel: 1
    },
    singCubes2: {
        name: 'Cube Blaze',
        description: 'Burn some more Golden Quarks! +8% gained Cubes per level.',
        maxLevel: 25,
        costPerLevel: 25
    },
    singCubes3: {
        name: 'Cube Inferno',
        description: 'Even Dante is impressed. +4% gained Cubes per level.',
        maxLevel: 40,
        costPerLevel: 500
    },
    octeractUnlock: {
        name: 'Octeracts ;) (WIP)',
        description: 'Hey!!! What are you trying to do?!?',
        maxLevel: 1,
        costPerLevel: 8888,
        minimumSingularity: 10
    },
    offeringAutomatic: {
        name: 'Offering Lootzifer (WIP)',
        description: 'Black Magic. Don\'t make deals with the devil. Each second, you get +2% of offering gain automatically per level. Also +10% Offerings!',
        maxLevel: 50,
        costPerLevel: 2000,
        minimumSingularity: 6
    },
    intermediatePack: {
        name: 'Intermediate Pack',
        description: 'Double Global Speed, Multiply Ascension speed by 1.5, and gain +2% Quarks forever. Yum... 2% Quark Milk.',
        maxLevel: 1,
        costPerLevel: 1,
        minimumSingularity: 4
    },
    advancedPack: {
        name: 'Advanced Pack',
        description: 'Now we\'re cooking with kerosene! Gain +4% Quarks stack with intermediate, +0.33 to all corruption score multipliers, regardless of level!',
        maxLevel: 1,
        costPerLevel: 200,
        minimumSingularity: 9
    },
    expertPack: {
        name: 'Expert Pack',
        description: 'That\'s a handful! Gain +6% Quarks stack with advanced, 1.5x Ascension Score, Code \'add\' gives 1.2x Ascension Timer.',
        maxLevel: 1,
        costPerLevel: 800,
        minimumSingularity: 16
    },
    masterPack: {
        name: 'Master Pack',
        description: 'A tad insane. Gain +8% Quarks stack with expert, for every level 14 corruption, ascension score is multiplied by 1.1.',
        maxLevel: 1,
        costPerLevel: 3200,
        minimumSingularity: 25
    },
    divinePack: {
        name: 'Divine Pack',
        description: 'OHHHHH. Gain +10% Quarks stack with master, and multiply Octeract gain by 7.77 if corruptions are all set to 14. Also unlock Platonic Upgrade autobuyers!',
        maxLevel: 1,
        costPerLevel: 12800,
        minimumSingularity: 36
    }
}

export const getGoldenQuarkCost = (): {
    cost: number
    costReduction: number
} => {
    const baseCost = 100000

    let costReduction = 0
    costReduction += 2 * Math.min(player.achievementPoints, 5000)
    costReduction += 1 * Math.max(0, player.achievementPoints - 5000)
    costReduction += player.cubeUpgrades[60]
    costReduction += 500 * player.singularityUpgrades.goldenQuarks1.level
    costReduction += 200 * player.singularityUpgrades.goldenQuarks2.level
    costReduction += 1000 * player.singularityUpgrades.goldenQuarks3.level


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
    const buyPrompt = await Prompt(`You can buy golden quarks here for ${format(goldenQuarkCost.cost)} Quarks (Discounted by ${format(goldenQuarkCost.costReduction)})! You can buy up to ${format(maxBuy)}. How many do you want? Type -1 to buy max!`)
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
        return Alert('Sorry, I cannnot sell you this many golden quarks! Try buying fewer of them or typing -1 to buy max!')
    } else if (Math.floor(buyAmount) !== buyAmount) {
        // non integer
        return Alert('Sorry. I only sell whole Golden Quarks. None of that fractional transaction!')
    }

    if (buyAmount === -1) {
        const cost = maxBuy * goldenQuarkCost.cost
        player.worlds.sub(cost)
        player.goldenQuarks += maxBuy
        return Alert(`Transaction of ${format(maxBuy)} golden quarks successful! [-${format(cost,0,true)} Quarks]`)
    } else {
        const cost = buyAmount * goldenQuarkCost.cost
        player.worlds.sub(cost)
        player.goldenQuarks += buyAmount
        return Alert(`Transaction of ${format(buyAmount)} golden quarks successful! [-${format(cost, 0, true)} Quarks]`)
    }
}

export type SingularityDebuffs = 'Offering' | 'Obtainium' | 'Global Speed' | 'Researches' | 'Ascension Speed' | 'Cubes' | 'Cube Upgrades'

export const calculateSingularityDebuff = (debuff: SingularityDebuffs) => {
    if (player.singularityCount === 0) {
        return 1
    }
    if (player.runelevels[6] > 0) {
        return 1
    }

    let effectiveSingularities = player.singularityCount;
    effectiveSingularities *= Math.min(4.75, 0.75 * player.singularityCount / 10 + 1)
    if (player.singularityCount > 10) {
        effectiveSingularities *= 1.5
        effectiveSingularities *= Math.min(4, 1.25 * player.singularityCount / 10 - 0.25)
    }
    if (player.singularityCount > 25) {
        effectiveSingularities *= 2
        effectiveSingularities *= Math.min(4, 1.5 * player.singularityCount / 25 - 0.5)
    }
    if (player.singularityCount > 50) {
        effectiveSingularities *= 4
        effectiveSingularities *= Math.min(4, 2 * player.singularityCount / 50 - 1)
    }
    if (player.singularityCount > 100) {
        effectiveSingularities *= player.singularityCount / 25
    }
    if (player.singularityCount > 250) {
        effectiveSingularities *= player.singularityCount / 62.5
    }

    if (debuff === 'Offering') {
        return Math.sqrt(effectiveSingularities + 1)
    } else if (debuff === 'Global Speed') {
        return 1 + Math.sqrt(effectiveSingularities) / 4
    } else if (debuff === 'Obtainium') {
        return Math.sqrt(effectiveSingularities + 1)
    } else if (debuff === 'Researches') {
        return 1 + Math.sqrt(effectiveSingularities) / 2
    } else if (debuff === 'Ascension Speed') {
        return 1 + Math.sqrt(effectiveSingularities) / 5
    } else if (debuff === 'Cubes') {
        return 1 + Math.sqrt(effectiveSingularities) / 4
    } else {
        // Cube upgrades
        return Math.cbrt(effectiveSingularities + 1)
    }
}