import { DOMCacheGetOrSet } from "./Cache/DOM"
import { format, player } from "./Synergism"
import { Player } from "./types/Synergism"
import { Alert, Prompt } from "./UpdateHTML"
import { toOrdinal } from "./Utility"

/**
 * 
 * Updates all statistics related to Singularities in the Singularity Tab.
 * 
 */
export const updateSingularityStats = ():void => {
    const str = `您目前已进入了${toOrdinal(player.singularityCount)}次奇点，并拥有${format(player.goldenQuarks,0,true)}金夸克。
                 全局速度除以${format(calculateSingularityDebuff("Global Speed"), 2, true)}.
                 飞升的速度除以${format(calculateSingularityDebuff("Ascension Speed"), 2, true)}
                 祭品获取数量除以${format(calculateSingularityDebuff("Offering"), 2, true)}
                 难得素获取数量除以${format(calculateSingularityDebuff("Obtainium"), 2, true)}
                 所有类型的方盒及立方获取数量除以${format(calculateSingularityDebuff("Cubes"), 2, true)}.
                 研究花费乘以${format(calculateSingularityDebuff("Researches"), 2, true)}.
                 方盒升级花费(饼干升级除外)乘以${format(calculateSingularityDebuff("Cube Upgrades"), 2, true)}.
                 蚁神之古物${(player.runelevels[6] > 0) ? "已" : "未"}购买。奇点相关惩罚${(player.runelevels[6] > 0) ? "已" : "未"}驱散！`
                 
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

    public constructor(data: ISingularityData) {
        this.name = data.name;
        this.description = data.description;
        this.level = data.level ?? this.level;
        this.maxLevel = data.maxLevel;
        this.costPerLevel = data.costPerLevel;
        this.toggleBuy = data.toggleBuy ?? 1;
        this.goldenQuarksInvested = data.goldenQuarksInvested ?? 0;
    }

    /**
     * Given an upgrade, give a concise information regarding its data.
     * @returns A string that details the name, description, level statistic, and next level cost.
     */
    toString() {
        const costNextLevel = this.getCostTNL();
        const maxLevel = this.maxLevel === -1
            ? ''
            : `/${this.maxLevel}`;

        return `${this.name}
                ${this.description}
                等级 ${this.level}${maxLevel}
                下一级的花费：${format(costNextLevel)}金夸克。
                已花费金夸克数量：${format(this.goldenQuarksInvested, 0, true)}`
    }

    public updateUpgradeHTML() {
        DOMCacheGetOrSet('testingMultiline').textContent = this.toString()
    }

    /**
     * Retrieves the cost for upgrading the singularity upgrade once. Return 0 if maxed.
     * @returns A number representing how many Golden Quarks a player must have to upgrade once.
     */
    private getCostTNL() {
        return (this.maxLevel === this.level) ? 0: this.costPerLevel * (1 + this.level);
    }

    /**
     * Buy levels up until togglebuy or maxxed.
     * @returns An alert indicating cannot afford, already maxxed or purchased with how many
     *          levels purchased
     */
    public async buyLevel() {
        let purchased = 0;
        let maxPurchasable = (this.maxLevel === -1)
            ? ((this.toggleBuy === -1)
                ? 1000
                : this.toggleBuy)
            : Math.min(this.toggleBuy, this.maxLevel - this.level);

        if (maxPurchasable === 0)
            return Alert("hey! You have already maxxed this upgrade. :D")

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
        
        if (purchased === 0)
            return Alert(`You cannot afford this upgrade. Sorry!`)

        this.updateUpgradeHTML();
        updateSingularityStats();
    }

    public async changeToggle() {

        // Is null unless given an explicit number
        const newToggle = await Prompt(`
        Set maximum purchase amount per click for the ${this.name} upgrade.

        type -1 to set to MAX by default.
        `);
        const newToggleAmount = Number(newToggle);

        if (newToggle === null)
            return Alert(`Toggle kept at ${format(this.toggleBuy)}.`)

        if (!Number.isInteger(newToggle))
            return Alert("Toggle value must be a whole number!");
        if (newToggleAmount < -1)
            return Alert("The only valid negative number for toggle is -1.");
        if (newToggleAmount === 0)
            return Alert("You cannot set the toggle to 0.");

        this.toggleBuy = newToggleAmount;
        const m = newToggleAmount === -1
            ? `Your toggle is now set to MAX`
            : `Your toggle is now set to ${format(this.toggleBuy)}`;
            
        return Alert(m);
    }
}

export const singularityData: Record<keyof Player['singularityUpgrades'], ISingularityData> = {
    goldenQuarks1: {
        name: "金夸克 I",
        description: "每级使进入奇点的金夸克获取数量增加5%！同时每级使商店购买金夸克的花费减少500。",
        maxLevel: 10,
        costPerLevel: 12,
    },
    goldenQuarks2: {
        name: "金夸克 II",
        description: "每级使进入奇点的金夸克获取数量增加2%。同时每级使商店购买金夸克的花费减少200。效果与第一个升级叠加。",
        maxLevel: 25,
        costPerLevel: 60,
    },
    goldenQuarks3: {
        name: "金夸克 III",
        description: "购买后，每级使每小时导出存档奖励增加1金夸克。同时每级使商店购买金夸克的花费减少1000。",
        maxLevel: 5,
        costPerLevel: 1000,
    },
    starterPack: {
        name: "新手大礼包",
        description: "买这个就对了！使所有类型的方盒及立方获取数量乘以5，并使最终难得素获取数量和祭品获取数量(计算腐化后)变为6倍。",
        maxLevel: 1,
        costPerLevel: 10,
    },
    wowPass: {
        name: "季票解锁 (暂时如此)",
        description: "购买后，印记商人将向您出售更多季票，这些季票在进入奇点后等级仍然保留！",
        maxLevel: 1,
        costPerLevel: 500,
    },
    cookies: {
        name: "饼干配方 I",
        description: "花费一点金夸克就可以让惊奇烘焙坊重新开张，增加5个跟饼干有关的方盒升级。",
        maxLevel: 1,
        costPerLevel: 100,
    },
    cookies2: {
        name: "饼干配方 II",
        description: "让惊奇烘焙坊制造更有异国风味的饼干，再增加5个跟饼干有关的方盒升级……",
        maxLevel: 1,
        costPerLevel: 500,
    },
    cookies3: {
        name: "饼干配方 III",
        description: "烘焙师们表示不加薪就辞职了。如果给他们加薪，他们会为您制造更棒的饼干。",
        maxLevel: 1,
        costPerLevel: 5000,
    },
    cookies4: {
        name: "饼干配方 IV",
        description: "天下没有免费的饼干。",
        maxLevel: 1,
        costPerLevel: 50000,
    },
    ascensions: {
        name: "更多飞升次数",
        description: "购买后，每级使飞升次数获取数量增加2%！每20级还可以使飞升次数获取数量额外乘以1.01。",
        maxLevel: -1,
        costPerLevel: 5,
    },
    corruptionFourteen: {
        name: "腐化等级-十四",
        description: "购买后解锁腐化等级14。:)",
        maxLevel: 1,
        costPerLevel: 1000,
    },
    corruptionFifteen: {
        name: "腐化等级-十五",
        description: "购买后并*不*会*使腐化等级上限增加，而是使腐化的相关加成倍率直接视为增加1级(可以超过上限)。:)",
        maxLevel: 1,
        costPerLevel: 40000,
    },
    singOfferings1: {
        name: "祭品充能",
        description: "购买后，每级使祭品获取数量永久增加2%！",
        maxLevel: -1,
        costPerLevel: 1
    },
    singOfferings2: {
        name: "祭品风暴",
        description: "很显然，它可以吸引更多祭品。每级使祭品获取数量永久增加8%。",
        maxLevel: 25,
        costPerLevel: 25
    },
    singOfferings3: {
        name: "祭品狂风",
        description: "它会让所有人乖乖把祭品奉上。每级使祭品获取数量永久增加4%。",
        maxLevel: 40,
        costPerLevel: 500
    },
    singObtainium1: {
        name: "难得素波浪",
        description: "购买后，每级使难得素获取数量永久增加2%！",
        maxLevel: -1,
        costPerLevel: 1
    },
    singObtainium2: {
        name: "难得素洪峰",
        description: "传说中的御水术？！每级使难得素获取数量永久增加8%。",
        maxLevel: 25,
        costPerLevel: 25
    },
    singObtainium3: {
        name: "难得素海啸",
        description: "它卷起了所有船只。每级使难得素获取数量永久增加4%。",
        maxLevel: 40,
        costPerLevel: 500
    },
    singCubes1: {
        name: "方盒之焰",
        description: "购买后，每级使所有类型的方盒及立方获取数量永久增加2%！",
        maxLevel: -1,
        costPerLevel: 1
    },
    singCubes2: {
        name: "方盒烈火",
        description: "再挥霍一些金夸克吧！每级使所有类型的方盒及立方获取数量永久增加8%。",
        maxLevel: 25,
        costPerLevel: 25
    },
    singCubes3: {
        name: "方盒炼狱",
        description: "连但丁都会为之而惊讶。每级使所有类型的方盒及立方获取数量永久增加4%。",
        maxLevel: 40,
        costPerLevel: 500
    },
}

export const getGoldenQuarkCost = () => {
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

export async function buyGoldenQuarks() {
    const goldenQuarkCost = getGoldenQuarkCost()
    const maxBuy = Math.floor(+player.worlds / goldenQuarkCost.cost)
    let buyAmount = null

    if (maxBuy === 0)
        return Alert("Sorry, I can't give credit. Come back when you're a little... mmm... richer!")
    const buyPrompt = await Prompt(`You can buy golden quarks here for ${format(goldenQuarkCost.cost)} Quarks (Discounted by ${format(goldenQuarkCost.costReduction)})! You can buy up to ${format(maxBuy)}. How many do you want? Type -1 to buy max!`)
    if (buyPrompt === null) // Number(null) is 0. Yeah..
        return Alert('Okay, maybe next time.');

    buyAmount = Number(buyPrompt)
    //Check these lol
    if (Number.isNaN(buyAmount) || !Number.isFinite(buyAmount)) // nan + Infinity checks
        return Alert('Value must be a finite number!');
    else if (buyAmount <= 0 && buyAmount != -1) // 0 or less selected
        return Alert('You can\'t craft a nonpositive amount of these, you monster!');
    else if (buyAmount > maxBuy)
        return Alert('Sorry, I cannnot sell you this many golden quarks! Try buying fewer of them or typing -1 to buy max!')
    else if (Math.floor(buyAmount) !== buyAmount) // non integer
        return Alert('Sorry. I only sell whole Golden Quarks. None of that fractional transaction!')

    if (buyAmount === -1) {
        const cost = maxBuy * goldenQuarkCost.cost
        player.worlds.sub(cost)
        player.goldenQuarks += maxBuy
        return Alert(`Transaction of ${format(maxBuy)} golden quarks successful! [-${format(cost,0,true)} Quarks]`)
    }

    else {
        const cost = buyAmount * goldenQuarkCost.cost
        player.worlds.sub(cost)
        player.goldenQuarks += buyAmount
        return Alert(`Transaction of ${format(buyAmount)} golden quarks successful! [-${format(cost, 0, true)} Quarks]`)
    }
    

    
}

export type SingularityDebuffs = "Offering" | "Obtainium" | "Global Speed" | "Researches" | "Ascension Speed" | "Cubes" | "Cube Upgrades"

export const calculateSingularityDebuff = (debuff: SingularityDebuffs) => {
    if (player.singularityCount === 0) {return 1}
    if (player.runelevels[6] > 0) {return 1}

    let effectiveSingularities = player.singularityCount;
    if (player.singularityCount > 10)
        effectiveSingularities *= Math.min(2, player.singularityCount / 10)
    if (player.singularityCount > 25)
        effectiveSingularities *= Math.min(2, player.singularityCount / 25)
    if (player.singularityCount > 50)
        effectiveSingularities *= Math.min(2, player.singularityCount / 50)
    if (player.singularityCount > 100)
        effectiveSingularities *= player.singularityCount / 100
    if (player.singularityCount > 250)
        effectiveSingularities *= player.singularityCount / 250

    if (debuff === "Offering")
        return Math.sqrt(effectiveSingularities + 1)
    else if (debuff === "Global Speed")
        return 1 + Math.sqrt(effectiveSingularities) / 4
    else if (debuff === "Obtainium")
        return Math.sqrt(effectiveSingularities + 1)
    else if (debuff === "Researches")
        return 1 + Math.sqrt(effectiveSingularities) / 2
    else if (debuff === "Ascension Speed")
        return 1 + Math.sqrt(effectiveSingularities) / 5
    else if (debuff === "Cubes")
        return 1 + Math.sqrt(effectiveSingularities) / 4
    else // Cube upgrades
        return Math.cbrt(effectiveSingularities + 1)
}