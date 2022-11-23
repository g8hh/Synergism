// August 22, 2022: Creation of Exportable Statistics.

import { totalachievementpoints } from './Achievements'
import { calculateAscensionAcceleration, calculateGoldenQuarkGain, calculateMaxRunes, calculateTimeAcceleration, calculateTotalOcteractCubeBonus, calculateTotalOcteractQuarkBonus, octeractGainPerSecond } from './Calculate'
import { getMaxChallenges } from './Challenges'
import { version } from './Config'
import { saveFilename } from './ImportExport'
import { friendlyShopName, isShopUpgradeUnlocked, shopData, shopUpgradeTypes } from './Shop'
import { calculateEffectiveSingularities } from './singularity'
import { format, player } from './Synergism'
import type { Player } from './types/Synergism'
import { Alert } from './UpdateHTML'
import { formatS, sumContents } from './Utility'
import { Globals as G } from './Variables'
import ClipboardJS from 'clipboard'

export const generateExportSummary = async():Promise<void> => {
    const titleText = '===== 统计数据 ====='
    const time = `生成时间：${(new Date()).toString()}`
    const ver = `版本：${version}`

    const subCategoryDivisor = '-----+-----\n'

    const firstPlayed = `开始游戏时间：${player.firstPlayed}\n`

    let resources = '===== 资源 =====\n'
    resources = resources + (player.reincarnationCount > 0 || player.highestSingularityCount > 0 ? `夸克：${format(Number(player.worlds), 0, true)}\n` : '')
    resources = resources + (player.highestSingularityCount > 0 ? `金夸克：${format(player.goldenQuarks, 2, true)}\n` : '')
    resources = resources + subCategoryDivisor
    resources = resources + `金币：${format(player.coins, 2, true)}\n`
    if (player.prestigeCount > 0 || player.singularityCount > 0) {
        resources = resources + `钻石：${format(player.prestigePoints, 2, true)}\n`
        resources = resources + `水晶：${format(player.prestigeShards, 2, true)}\n`
        resources = resources + `祭品：${format(player.runeshards, 0, true)}\n`
    }
    if (player.transcendCount > 0 || player.singularityCount > 0) {
        resources = resources + `神话：${format(player.transcendPoints, 2, true)}\n`
        resources = resources + `神话碎片：${format(player.transcendShards, 2, true)}\n`
    }
    if (player.reincarnationCount > 0 || player.singularityCount > 0) {
        resources = resources + `粒子：${format(player.reincarnationPoints, 2, true)}\n`
        resources = resources + `原子：${format(player.reincarnationShards, 2, true)}\n`
        resources = resources + `难得素：${format(player.researchPoints, 0, true)}\n`
    }
    if (player.ascensionCount > 0 || player.singularityCount > 0) {
        const cubeArray = [null, player.cubeBlessings.accelerator, player.cubeBlessings.multiplier, player.cubeBlessings.offering, player.cubeBlessings.runeExp, player.cubeBlessings.obtainium, player.cubeBlessings.antSpeed, player.cubeBlessings.antSacrifice, player.cubeBlessings.antELO, player.cubeBlessings.talismanBonus, player.cubeBlessings.globalSpeed]
        const tesseractArray = [null, player.tesseractBlessings.accelerator, player.tesseractBlessings.multiplier, player.tesseractBlessings.offering, player.tesseractBlessings.runeExp, player.tesseractBlessings.obtainium, player.tesseractBlessings.antSpeed, player.tesseractBlessings.antSacrifice, player.tesseractBlessings.antELO, player.tesseractBlessings.talismanBonus, player.tesseractBlessings.globalSpeed]
        const hypercubeArray = [null, player.hypercubeBlessings.accelerator, player.hypercubeBlessings.multiplier, player.hypercubeBlessings.offering, player.hypercubeBlessings.runeExp, player.hypercubeBlessings.obtainium, player.hypercubeBlessings.antSpeed, player.hypercubeBlessings.antSacrifice, player.hypercubeBlessings.antELO, player.hypercubeBlessings.talismanBonus, player.hypercubeBlessings.globalSpeed]
        const platonicArray = [player.platonicBlessings.cubes, player.platonicBlessings.tesseracts, player.platonicBlessings.hypercubes, player.platonicBlessings.platonics, player.platonicBlessings.hypercubeBonus, player.platonicBlessings.taxes, player.platonicBlessings.scoreBonus, player.platonicBlessings.globalSpeed]
        const cubeSum = format(sumContents(cubeArray.slice(1) as number[]), 0, true)
        const tesseractSum = format(sumContents(tesseractArray.slice(1) as number[]), 0, true)
        const hypercubeSum = format(sumContents(hypercubeArray.slice(1) as number[]), 0, true)
        const platonicSum = format(sumContents(platonicArray), 0, true)

        resources = resources + subCategoryDivisor
        resources = resources + `惊奇方盒：${format(Number(player.wowCubes), 0, true)} -+- 贡品总数：${cubeSum}\n`
        resources = resources + `惊奇超立方：${format(Number(player.wowTesseracts), 0, true)} -+- 赠礼总数：${tesseractSum}\n`
        resources = resources + `惊奇五阶立方：${format(Number(player.wowHypercubes), 0, true)} -+- 恩赐总数：${hypercubeSum}\n`
        resources = resources + `PLATONIC方盒：${format(Number(player.wowPlatonicCubes), 0, true)} -+- 已开启总数：${platonicSum}\n`
        resources = resources + `惊奇七阶立方：${format(player.wowAbyssals, 0, true)}\n`
        if (player.singularityUpgrades.octeractUnlock.getEffect().bonus) {
            resources = resources + `惊奇八阶方块：${format(player.wowOcteracts, 0, true)}\n`
        }
    }

    // Octeract Subportion!
    let octeract = ''
    if (player.singularityUpgrades.octeractUnlock.getEffect().bonus) {
        octeract = '===== 惊奇八阶方块 =====\n'
        octeract = octeract + `目前拥有惊奇八阶方块数量：${format(player.wowOcteracts, 2, true)}\n`
        octeract = octeract + `目前每秒产量：${format(octeractGainPerSecond(), 2, true)}\n`
        octeract = octeract + `共产生八阶方块数量：${format(player.totalWowOcteracts, 2, true)}\n`
        octeract = octeract + `惊奇方盒至惊奇七阶立方获取数量加成：${format(100 * (calculateTotalOcteractCubeBonus() - 1), 2, true)}%\n`
        octeract = octeract + `夸克获取数量加成：${format(100 * (calculateTotalOcteractQuarkBonus() - 1), 2, true)}%\n`
    }

    // Singularity Subportion!
    let singularity = ''
    if (player.highestSingularityCount > 0) {
        singularity = '===== 奇点 =====\n'
        singularity = singularity + `目前奇点次数：${player.singularityCount}\n`
        singularity = singularity + `最高奇点次数：${player.highestSingularityCount}\n`
        singularity = singularity + `金夸克数量：${format(player.goldenQuarks, 2, true)}\n`
        singularity = singularity + `本次奇点中获得金夸克数量：${format(calculateGoldenQuarkGain(), 2, true)}\n`
        singularity = singularity + `本次奇点时间：${formatS(player.singularityCounter)}\n`
        singularity = singularity + `奇点有效值[用于计算惩罚]：${format(calculateEffectiveSingularities(), 2, true)}\n`
        singularity = singularity + `蚁神之古物是否已升级：${(player.runelevels[6] > 0) ? '✔': '✖'}\n`
    }

    // Ascension Subportion!
    let ascension = ''
    if (player.ascensionCount > 0 || player.highestSingularityCount > 0) {
        ascension = '===== 飞升 ===== \n'
        ascension = ascension + `飞升次数：${format(player.ascensionCount, 0, true)}\n`
        ascension = ascension + `飞升时间：${formatS(player.ascensionCounter)}\n`
        ascension = ascension + `现实飞升时间：${formatS(player.ascensionCounterReal)}\n`
        ascension = ascension + `真正的现实飞升时间：${formatS(player.ascensionCounterRealReal)}\n`
        ascension = ascension + `飞升的速度倍率：${format(calculateAscensionAcceleration(), 2, true)}\n`
        ascension = ascension + `挑战11完成次数：${player.challengecompletions[11]}/${getMaxChallenges(11)}\n`
        ascension = ascension + `挑战12完成次数：${player.challengecompletions[12]}/${getMaxChallenges(12)}\n`
        ascension = ascension + `挑战13完成次数：${player.challengecompletions[13]}/${getMaxChallenges(13)}\n`
        ascension = ascension + `挑战14完成次数：${player.challengecompletions[14]}/${getMaxChallenges(14)}\n`
        if (player.highestchallengecompletions[14] > 0 || player.highestSingularityCount > 0) {
            ascension = ascension + `挑战15指数：${format(player.challenge15Exponent, 2, true)}\n`
            ascension = ascension + `研究[8x25]是否升级满：${(player.researches[200] === 1e5) ? '✔' : '✖'}\n`
            ascension = ascension + `方盒升级[5x10]是否升级满：${(player.cubeUpgrades[50] === 1e5) ? '✔' : '✖'}\n`
            ascension = ascension + `Platonic α是否已升级：${player.platonicUpgrades[5] > 0 ? '✔' : '✖'}\n`
            ascension = ascension + `Platonic β是否已升级：${player.platonicUpgrades[10] > 0 ? '✔' : '✖'}\n`
            ascension = ascension + `Platonic Ω是否已升级：${player.platonicUpgrades[15] > 0 ? '✔' : '✖'}\n`
        }
        if (player.challenge15Exponent >= 1e15 || player.highestSingularityCount > 0) {
            ascension = ascension + '----- 惊奇七阶立方 -----\n'
            ascension = ascension + `惊奇七阶立方·时光库存：${format(player.hepteractCrafts.chronos.BAL,0,true)}/${format(player.hepteractCrafts.chronos.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·超真实库存：${format(player.hepteractCrafts.hyperrealism.BAL,0,true)}/${format(player.hepteractCrafts.hyperrealism.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·夸克库存：${format(player.hepteractCrafts.quark.BAL,0,true)}/${format(player.hepteractCrafts.quark.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·挑战库存：${format(player.hepteractCrafts.challenge.BAL,0,true)}/${format(player.hepteractCrafts.challenge.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·深渊库存：${format(player.hepteractCrafts.abyss.BAL,0,true)}/${format(player.hepteractCrafts.abyss.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·加速器库存：${format(player.hepteractCrafts.accelerator.BAL,0,true)}/${format(player.hepteractCrafts.accelerator.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·加速器加成库存：${format(player.hepteractCrafts.acceleratorBoost.BAL,0,true)}/${format(player.hepteractCrafts.acceleratorBoost.CAP, 0, true)}\n`
            ascension = ascension + `惊奇七阶立方·加倍器库存：${format(player.hepteractCrafts.multiplier.BAL,0,true)}/${format(player.hepteractCrafts.multiplier.CAP, 0, true)}\n`
            ascension = ascension + '----- 超通量珠及超通量珠 -----\n'
            ascension = ascension + `超通量珠数量：${format(player.overfluxOrbs, 0, true)}\n`
            ascension = ascension + `超通量粉数量：${format(player.overfluxPowder, 2, true)}\n`
        }
    }

    // Reincarnation Portion!
    let reincarnation = ''
    if (player.reincarnationCount > 0 || player.highestSingularityCount > 0) {
        reincarnation = '===== 转世 =====\n'
        reincarnation = reincarnation + `转世次数：${format(player.reincarnationCount, 0, true)}\n`
        reincarnation = reincarnation + `转世时间：${formatS(player.reincarnationcounter)}\n`
        reincarnation = reincarnation + `最快转世时间：${formatS(player.fastestreincarnate)}\n`
        reincarnation = reincarnation + `全局速度倍率：${format(calculateTimeAcceleration(), 2, true)}\n`
        reincarnation = reincarnation + `挑战6完成次数：${player.highestchallengecompletions[6]}/${getMaxChallenges(6)}\n`
        reincarnation = reincarnation + `挑战7完成次数：${player.highestchallengecompletions[7]}/${getMaxChallenges(7)}\n`
        reincarnation = reincarnation + `挑战8完成次数：${player.highestchallengecompletions[8]}/${getMaxChallenges(8)}\n`
        reincarnation = reincarnation + `挑战9完成次数：${player.highestchallengecompletions[9]}/${getMaxChallenges(9)}\n`
        reincarnation = reincarnation + `挑战10完成次数：${player.highestchallengecompletions[10]}/${getMaxChallenges(10)}\n`
    }

    // Transcension Portion!
    let transcension = ''
    if (player.transcendCount > 0 || player.highestSingularityCount > 0) {
        transcension = '===== 超越 =====\n'
        transcension = transcension + `超越次数：${format(player.transcendCount, 0, true)}\n`
        transcension = transcension + `超越时间：${formatS(player.transcendcounter)}\n`
        transcension = transcension + `最快超越时间：${formatS(player.fastesttranscend)}\n`
        transcension = transcension + `挑战1完成次数：${player.highestchallengecompletions[1]}/${getMaxChallenges(1)}\n`
        transcension = transcension + `挑战2完成次数：${player.highestchallengecompletions[2]}/${getMaxChallenges(2)}\n`
        transcension = transcension + `挑战3完成次数：${player.highestchallengecompletions[3]}/${getMaxChallenges(3)}\n`
        transcension = transcension + `挑战4完成次数：${player.highestchallengecompletions[4]}/${getMaxChallenges(4)}\n`
        transcension = transcension + `挑战5完成次数：${player.highestchallengecompletions[5]}/${getMaxChallenges(5)}\n`
    }

    // Prestige Portion!
    let prestige = ''
    if (player.prestigeCount > 0 || player.highestSingularityCount > 0) {
        prestige = '===== 转生及符文 =====\n'
        prestige = prestige + `转生次数：${format(player.prestigeCount, 0, true)}\n`
        prestige = prestige + `转生时间：${formatS(player.prestigecounter)}\n`
        prestige = prestige + `最快转生时间：${formatS(player.fastestprestige)}\n`
        prestige = prestige + `成就点数：${format(player.achievementPoints, 0, true)}/${format(totalachievementpoints, 0, true)}\n`
        prestige = prestige + `加速符文：等级${format(player.runelevels[0],0,true)}/${format(calculateMaxRunes(1))}[额外等级：${format(G['rune1level'] - player.runelevels[0], 0, true)}]\n`
        if (player.achievements[38] > 0 || player.highestSingularityCount > 0) {
            prestige = prestige + `重叠符文：等级${format(player.runelevels[1],0,true)}/${format(calculateMaxRunes(2))}[额外等级：${format(G['rune2level'] - player.runelevels[1], 0, true)}]\n`
        }
        if (player.achievements[44] > 0 || player.highestSingularityCount > 0) {
            prestige = prestige + `棱柱符文：等级${format(player.runelevels[2],0,true)}/${format(calculateMaxRunes(3))}[额外等级：${format(G['rune3level'] - player.runelevels[2], 0, true)}]\n`
        }
        if (player.achievements[102] > 0 || player.highestSingularityCount > 0) {
            prestige = prestige + `节俭符文：等级${format(player.runelevels[3],0,true)}/${format(calculateMaxRunes(4))}[额外等级：${format(G['rune4level'] - player.runelevels[3], 0, true)}]\n`
        }
        if (player.researches[82] > 0 || player.highestSingularityCount > 0) {
            prestige = prestige + `卓越智慧：等级${format(player.runelevels[4],0,true)}/${format(calculateMaxRunes(5))}[额外等级：${format(G['rune5level'] - player.runelevels[4], 0, true)}]\n`
        }
        if (player.shopUpgrades.infiniteAscent > 0 || player.highestSingularityCount > 0) {
            prestige = prestige + `无限晋升：等级${format(player.runelevels[5],0,true)}/${format(calculateMaxRunes(6))}\n`
        }
        if (player.platonicUpgrades[20] > 0 || player.highestSingularityCount > 0) {
            prestige = prestige + `蚁神之古物：等级${format(player.runelevels[6],0,true)}/${format(calculateMaxRunes(7))}\n`
        }
    }

    // Create Shop Stuffs
    let shopUpgradeStats = '\n'
    if (player.reincarnationCount > 0 || player.highestSingularityCount > 0) {
        shopUpgradeStats = '===== 商店升级 =====\n - [★]：达到最大等级 - \n - [✔]：升级已解锁 - \n - [✖]：升级未解锁 - \n'
        const shopUpgrade = Object.keys(player.shopUpgrades) as (keyof Player['shopUpgrades'])[]
        let totalShopUpgradeCount = 0
        let totalShopUpgradeUnlocked = 0
        let totalShopUpgradeMax = 0
        let totalQuarksSpent = 0

        for (const key of shopUpgrade) {

            const shopUpg = player.shopUpgrades[key]
            let upgradeText = ''

            if (shopData[key].type !== shopUpgradeTypes.CONSUMABLE) {
                totalShopUpgradeCount += 1
                if (isShopUpgradeUnlocked(key)) {
                    totalShopUpgradeUnlocked += 1
                }
                if (shopUpg === shopData[key].maxLevel) {
                    totalShopUpgradeMax += 1
                }
            }

            totalQuarksSpent += shopData[key].price * shopUpg +
                                shopData[key].priceIncrease * shopUpg * (shopUpg - 1) / 2

            upgradeText = upgradeText + (isShopUpgradeUnlocked(key) ?
                (shopUpg === shopData[key].maxLevel ? '[★]' : '[✔]'):
                '[✖]')

            upgradeText = upgradeText + `${friendlyShopName(key)}：`
            upgradeText = upgradeText + `${(shopData[key].type !== shopUpgradeTypes.CONSUMABLE) ?
                `等级${shopUpg}/${shopData[key].maxLevel}`:
                `${shopUpg}/${shopData[key].maxLevel}`}`

            upgradeText = upgradeText + '\n'
            shopUpgradeStats = shopUpgradeStats + upgradeText
        }
        shopUpgradeStats = shopUpgradeStats + subCategoryDivisor
        shopUpgradeStats = shopUpgradeStats + `解锁升级总数：${totalShopUpgradeUnlocked}/${totalShopUpgradeCount}\n`
        shopUpgradeStats = shopUpgradeStats + `达到最大等级的升级数量：${totalShopUpgradeMax}/${totalShopUpgradeCount}\n`
        shopUpgradeStats = shopUpgradeStats + `在商店中花费的夸克数量：${format(totalQuarksSpent, 0, true)}\n`
        shopUpgradeStats = shopUpgradeStats + subCategoryDivisor
    }

    // Create Singularity Stuffs
    let singularityUpgradeStats = '\n'
    if (player.highestSingularityCount > 0) {
        singularityUpgradeStats = '===== 奇点升级 =====\n - [★]：达到最大等级 - \n - [∞]：升级无上限 - \n - [✔]：升级已解锁 - \n - [✖]：升级未解锁 - \n'
        const singUpgrade = Object.keys(player.singularityUpgrades) as (keyof Player['singularityUpgrades'])[]
        let totalSingUpgradeCount = -1 // One upgrade cannot ever be leveled, by design, so subtract that from the actual count
        let totalSingInfiniteLevel = 0
        let totalSingUpgradeUnlocked = 0
        let totalSingUpgradeMax = 0
        let totalGoldenQuarksSpent = 0
        for (const key of singUpgrade) {
            let upgradeText = ''
            const singUpg = player.singularityUpgrades[key]

            totalSingUpgradeCount += 1
            if (singUpg.maxLevel === -1) {
                totalSingInfiniteLevel += 1
            }
            if (singUpg.level === singUpg.maxLevel) {
                totalSingUpgradeMax += 1
            }
            if (player.singularityCount >= singUpg.minimumSingularity) {
                totalSingUpgradeUnlocked += 1
            }

            totalGoldenQuarksSpent += singUpg.goldenQuarksInvested

            let unicodeSymbol = '[✖]'
            if (player.singularityCount >= singUpg.minimumSingularity) {
                if (singUpg.maxLevel === -1) {
                    unicodeSymbol = '[∞]'
                } else if (singUpg.level === singUpg.maxLevel) {
                    unicodeSymbol = '[★]'
                } else {
                    unicodeSymbol = '[✔]'
                }
            }

            let CNsingname = singUpg.name
            switch (CNsingname) {
                case '[1] Golden Quarks I':
                    CNsingname ='[1] 金夸克 I';
                    break;
                case '[2] Golden Quarks II':
                    CNsingname ='[2] 金夸克 II';
                    break;
                case '[3] Golden Quarks III':
                    CNsingname ='[3] 金夸克 III';
                    break;
                case '[4] Starter Pack':
                    CNsingname ='[4] 新手大礼包';
                    break;
                case '[5] Shop Bonanza':
                    CNsingname ='[5] 商店促销';
                    break;
                case '[6] Cookie Recipes I':
                    CNsingname ='[6] 饼干配方 I';
                    break;
                case '[7] Cookie Recipes II':
                    CNsingname ='[7] 饼干配方 II';
                    break;
                case '[8] Cookie Recipes III':
                    CNsingname ='[8] 饼干配方 III';
                    break;
                case '[9] Cookie Recipes IV':
                    CNsingname ='[9] 饼干配方 IV';
                    break;
                case '[11] Improved Ascension Gain':
                    CNsingname ='[11] 更多飞升次数';
                    break;
                case '[12] Level Fourteen Corruptions':
                    CNsingname ='[12] 腐化等级-十四';
                    break;
                case '[13] Level Fifteen Corruptions':
                    CNsingname ='[13] 腐化等级-十五';
                    break;
                case '[14] Offering Charge':
                    CNsingname ='[14] 祭品增压';
                    break;
                case '[15] Offering Storm':
                    CNsingname ='[15] 祭品风暴';
                    break;
                case '[16] Offering Tempest':
                    CNsingname ='[16] 祭品狂风';
                    break;
                case '[17] Obtainium Wave':
                    CNsingname ='[17] 难得素波浪';
                    break;
                case '[18] Obtainium Flood':
                    CNsingname ='[18] 难得素洪峰';
                    break;
                case '[19] Obtainium Tsunami':
                    CNsingname ='[19] 难得素海啸';
                    break;
                case '[20] Cube Flame':
                    CNsingname ='[20] 方盒之焰';
                    break;
                case '[21] Cube Blaze':
                    CNsingname ='[21] 方盒烈火';
                    break;
                case '[22] Cube Inferno':
                    CNsingname ='[22] 方盒炼狱';
                    break;
                case '[23] Citadel of Singularity':
                    CNsingname ='[23] 奇点堡垒';
                    break;
                case '[24] Octeracts':
                    CNsingname ='[24] 惊奇八阶方块';
                    break;
                case '[25] Platonic $ells out!!!':
                    CNsingname ='[25] Platonic脱销！！！';
                    break;
                case '[26] Offering Lootzifer (Depreciated)':
                    CNsingname ='[26] 祭品自动获取(贬值)';
                    break;
                case '[27] Intermediate Pack':
                    CNsingname ='[27] 中级礼包';
                    break;
                case '[28] Advanced Pack':
                    CNsingname ='[28] 高级礼包';
                    break;
                case '[29] Expert Pack':
                    CNsingname ='[29] 专家礼包';
                    break;
                case '[30] Master Pack':
                    CNsingname ='[30] 大师礼包';
                    break;
                case '[31] Divine Pack':
                    CNsingname ='[31] 神圣礼包';
                    break;
                case '[32] Shop Liquidation Sale':
                    CNsingname ='[32] 商店清仓大甩卖';
                    break;
                case '[33] Potion Decanter of Enlightenment':
                    CNsingname ='[33] 启迪药水瓶';
                    break;
                case '[34] Potion Decanter of Inquisition':
                    CNsingname ='[34] 审查药水瓶';
                    break;
                case '[35] Potion Decanter of Maddening Instability':
                    CNsingname ='[35] 暴躁不稳定药水瓶';
                    break;
                case '[36] Bigger Challenge Caps':
                    CNsingname ='[36] 挑战上限增加';
                    break;
                case '[37] Biggerer Challenge Caps':
                    CNsingname ='[37] 挑战上限再度增加';
                    break;
                case '[38] BiggererEST Challenge Caps':
                    CNsingname ='[38] 挑战上限超级增加';
                    break;
                case '[39] Marginal Quark Gain Improver Thingy':
                    CNsingname ='[39] 略微增加夸克获取数量的小装置';
                    break;
                case '[40] I wish my Quark Hepteract was marginally better.':
                    CNsingname ='[40] 我希望惊奇七阶立方·夸克的效果略微增加。';
                    break;
                case '[41] I wish my Quark Hepteract was marginally better II.':
                    CNsingname ='[41] 我希望惊奇七阶立方·夸克的效果略微增加 II。';
                    break;
                case '[42] I wish my Quark Hepteract was marginally better III.':
                    CNsingname ='[42] 我希望惊奇七阶立方·夸克的效果略微增加 III。';
                    break;
                case '[43] Octeract Absinthe':
                    CNsingname ='[43] 惊奇八阶方块苦艾酒';
                    break;
                case '[44] Pieces of Eight':
                    CNsingname ='[44] 八个里亚尔';
                    break;
                case '[45] The Obelisk Shaped like an Octagon.':
                    CNsingname ='[45] 八角方尖碑';
                    break;
                case '[46] Octahedral Synthesis':
                    CNsingname ='[46] 八面合成';
                    break;
                case '[47] The Eighth Wonder of the World':
                    CNsingname ='[47] 世界第八大奇迹';
                    break;
                case '[48] QUAAAACK':
                    CNsingname ='[48] 夸夸夸夸克';
                    break;
                case '[49] The Ultimate Pen':
                    CNsingname ='[49] 终级妙笔';
                    break;
                case '[50] Platonic TAU':
                    CNsingname ='[50] PLATONIC·陶';
                    break;
                case '[51] Platonic ALPHA...?':
                    CNsingname ='[51] PLATONIC·阿 尔 法……？';
                    break;
                case '[52] Platonic DELTA':
                    CNsingname ='[52] PLATONIC·德尔塔';
                    break;
                case '[53] Platonic PHI':
                    CNsingname ='[53] PLATONIC·斐';
                    break;
                case '[54] Etherflux Singularities':
                    CNsingname ='[54] 以太通量·奇点';
                    break;
                case '[55] Aetherflux Singularities':
                    CNsingname ='[55] 超以太通量·奇点';
                    break;
                case '[56] A hecking good ascension speedup!':
                    CNsingname ='[56] 飞升的速度强力提升！';
                    break;
                case '[57] A mediocre ascension speedup!':
                    CNsingname ='[57] 飞升的速度普通提升！';
                    break;
                case '[58] ONE MIND':
                    CNsingname ='[58] 一心';
                    break;
                case '[59] QUQUQUQUAAKCKCKKCKKCKK':
                    CNsingname ='[59] 夸夸夸夸克克克克克克';
                    break;
                case '[NEW!] Golden Quarks I':
                    CNsingname ='[新！] 金夸克 I';
                    break;
                case '[NEW!] Golden Quarks II':
                    CNsingname ='[新！] 金夸克 II';
                    break;
                case '[NEW!] Golden Quarks III':
                    CNsingname ='[新！] 金夸克 III';
                    break;
                case '[NEW!] Starter Pack':
                    CNsingname ='[新！] 新手大礼包';
                    break;
                case '[NEW!] Shop Bonanza':
                    CNsingname ='[新！] 商店促销';
                    break;
                case '[NEW!] Cookie Recipes I':
                    CNsingname ='[新！] 饼干配方 I';
                    break;
                case '[NEW!] Cookie Recipes II':
                    CNsingname ='[新！] 饼干配方 II';
                    break;
                case '[NEW!] Cookie Recipes III':
                    CNsingname ='[新！] 饼干配方 III';
                    break;
                case '[NEW!] Cookie Recipes IV':
                    CNsingname ='[新！] 饼干配方 IV';
                    break;
                case '[NEW!] Improved Ascension Gain':
                    CNsingname ='[新！] 更多飞升次数';
                    break;
                case '[NEW!] Level Fourteen Corruptions':
                    CNsingname ='[新！] 腐化等级-十四';
                    break;
                case '[NEW!] Level Fifteen Corruptions':
                    CNsingname ='[新！] 腐化等级-十五';
                    break;
                case '[NEW!] Offering Charge':
                    CNsingname ='[新！] 祭品增压';
                    break;
                case '[NEW!] Offering Storm':
                    CNsingname ='[新！] 祭品风暴';
                    break;
                case '[NEW!] Offering Tempest':
                    CNsingname ='[新！] 祭品狂风';
                    break;
                case '[NEW!] Obtainium Wave':
                    CNsingname ='[新！] 难得素波浪';
                    break;
                case '[NEW!] Obtainium Flood':
                    CNsingname ='[新！] 难得素洪峰';
                    break;
                case '[NEW!] Obtainium Tsunami':
                    CNsingname ='[新！] 难得素海啸';
                    break;
                case '[NEW!] Cube Flame':
                    CNsingname ='[新！] 方盒之焰';
                    break;
                case '[NEW!] Cube Blaze':
                    CNsingname ='[新！] 方盒烈火';
                    break;
                case '[NEW!] Cube Inferno':
                    CNsingname ='[新！] 方盒炼狱';
                    break;
                case '[NEW!] Citadel of Singularity':
                    CNsingname ='[新！] 奇点堡垒';
                    break;
                case '[NEW!] Octeracts':
                    CNsingname ='[新！] 惊奇八阶方块';
                    break;
                case '[NEW!] Platonic $ells out!!!':
                    CNsingname ='[新！] Platonic脱销！！！';
                    break;
                case '[NEW!] Offering Lootzifer (Depreciated)':
                    CNsingname ='[新！] 祭品自动获取(贬值)';
                    break;
                case '[NEW!] Intermediate Pack':
                    CNsingname ='[新！] 中级礼包';
                    break;
                case '[NEW!] Advanced Pack':
                    CNsingname ='[新！] 高级礼包';
                    break;
                case '[NEW!] Expert Pack':
                    CNsingname ='[新！] 专家礼包';
                    break;
                case '[NEW!] Master Pack':
                    CNsingname ='[新！] 大师礼包';
                    break;
                case '[NEW!] Divine Pack':
                    CNsingname ='[新！] 神圣礼包';
                    break;
                case '[NEW!] Shop Liquidation Sale':
                    CNsingname ='[新！] 商店清仓大甩卖';
                    break;
                case '[NEW!] Potion Decanter of Enlightenment':
                    CNsingname ='[新！] 启迪药水瓶';
                    break;
                case '[NEW!] Potion Decanter of Inquisition':
                    CNsingname ='[新！] 审查药水瓶';
                    break;
                case '[NEW!] Potion Decanter of Maddening Instability':
                    CNsingname ='[新！] 暴躁不稳定药水瓶';
                    break;
                case '[NEW!] Bigger Challenge Caps':
                    CNsingname ='[新！] 挑战上限增加';
                    break;
                case '[NEW!] Biggerer Challenge Caps':
                    CNsingname ='[新！] 挑战上限再度增加';
                    break;
                case '[NEW!] BiggererEST Challenge Caps':
                    CNsingname ='[新！] 挑战上限超级增加';
                    break;
                case '[NEW!] Marginal Quark Gain Improver Thingy':
                    CNsingname ='[新！] 略微增加夸克获取数量的小装置';
                    break;
                case '[NEW!] I wish my Quark Hepteract was marginally better.':
                    CNsingname ='[新！] 我希望惊奇七阶立方·夸克的效果略微增加。';
                    break;
                case '[NEW!] I wish my Quark Hepteract was marginally better II.':
                    CNsingname ='[新！] 我希望惊奇七阶立方·夸克的效果略微增加 II。';
                    break;
                case '[NEW!] I wish my Quark Hepteract was marginally better III.':
                    CNsingname ='[新！] 我希望惊奇七阶立方·夸克的效果略微增加 III。';
                    break;
                case '[NEW!] Octeract Absinthe':
                    CNsingname ='[新！] 惊奇八阶方块苦艾酒';
                    break;
                case '[NEW!] Pieces of Eight':
                    CNsingname ='[新！] 八个里亚尔';
                    break;
                case '[NEW!] The Obelisk Shaped like an Octagon.':
                    CNsingname ='[新！] 八角方尖碑';
                    break;
                case '[NEW!] Octahedral Synthesis':
                    CNsingname ='[新！] 八面合成';
                    break;
                case '[NEW!] The Eighth Wonder of the World':
                    CNsingname ='[新！] 世界第八大奇迹';
                    break;
                case '[NEW!] QUAAAACK':
                    CNsingname ='[新！] 夸夸夸夸克';
                    break;
                case '[NEW!] The Ultimate Pen':
                    CNsingname ='[新！] 终级妙笔';
                    break;
                case '[NEW!] Platonic TAU':
                    CNsingname ='[新！] PLATONIC·陶';
                    break;
                case '[NEW!] Platonic ALPHA...?':
                    CNsingname ='[新！] PLATONIC·阿 尔 法……？';
                    break;
                case '[NEW!] Platonic DELTA':
                    CNsingname ='[新！] PLATONIC·德尔塔';
                    break;
                case '[NEW!] Platonic PHI':
                    CNsingname ='[新！] PLATONIC·斐';
                    break;
                case '[NEW!] Etherflux Singularities':
                    CNsingname ='[新！] 以太通量·奇点';
                    break;
                case '[NEW!] Aetherflux Singularities':
                    CNsingname ='[新！] 超以太通量·奇点';
                    break;
                case '[NEW!] A hecking good ascension speedup!':
                    CNsingname ='[新！] 飞升的速度强力提升！';
                    break;
                case '[NEW!] A mediocre ascension speedup!':
                    CNsingname ='[新！] 飞升的速度普通提升！';
                    break;
                case '[NEW!] ONE MIND':
                    CNsingname ='[新！] 一心';
                    break;
                case '[NEW!] QUQUQUQUAAKCKCKKCKKCKK':
                    CNsingname ='[新！] 夸夸夸夸克克克克克克';
                    break;
            }

            upgradeText = upgradeText + unicodeSymbol
            upgradeText = upgradeText + `${CNsingname}：`
            upgradeText = upgradeText + (singUpg.maxLevel === -1 ?
                `等级${singUpg.level}`:
                `等级${singUpg.level}/${singUpg.maxLevel}`)
            upgradeText = upgradeText + (singUpg.freeLevels > 0 ?
                ` [+${format(singUpg.computeFreeLevelSoftcap(), 2, true)}]`:
                '')

            upgradeText = upgradeText + (singUpg.freeLevels > 0 ?
                ` =+= 有效等级：${format(singUpg.actualTotalLevels(), 2, true)}`:
                '')

            upgradeText =  upgradeText + '\n'
            singularityUpgradeStats = singularityUpgradeStats + upgradeText
        }
        singularityUpgradeStats = singularityUpgradeStats + subCategoryDivisor
        singularityUpgradeStats = singularityUpgradeStats + `解锁升级总数：${totalSingUpgradeUnlocked}/${totalSingUpgradeCount}\n`
        singularityUpgradeStats = singularityUpgradeStats + `达到最大等级的升级数量：${totalSingUpgradeMax}/${totalSingUpgradeCount - totalSingInfiniteLevel}\n`
        singularityUpgradeStats = singularityUpgradeStats + `花费在升级上的金夸克数量：${format(totalGoldenQuarksSpent, 0, true)}\n`
        singularityUpgradeStats = singularityUpgradeStats + subCategoryDivisor
    }

    // Create Octeract Stuff
    let octeractUpgradeStats =  '\n'
    if (player.singularityUpgrades.octeractUnlock.getEffect().bonus) {
        octeractUpgradeStats =  '===== 惊奇八阶方块升级 =====\n - [★]：达到最大等级 - \n - [∞]：升级无上限 - \n - [ ]：升级未完成 - \n'
        const octUpgrade = Object.keys(player.octeractUpgrades) as (keyof Player['octeractUpgrades'])[]
        let totalOctUpgradeCount = 0
        let totalOctUpgradeMax = 0
        let totalOcteractsSpent = 0

        for (const key of octUpgrade) {
            let upgradeText = ''
            const octUpg = player.octeractUpgrades[key]

            if (octUpg.maxLevel !== -1) {
                totalOctUpgradeCount += 1
            }
            if (octUpg.level === octUpg.maxLevel) {
                totalOctUpgradeMax += 1
            }
            totalOcteractsSpent += octUpg.octeractsInvested

            let unicodeSymbol = '[ ]'
            if (octUpg.maxLevel === -1) {
                unicodeSymbol = '[∞]'
            } else if (octUpg.level === octUpg.maxLevel) {
                unicodeSymbol = '[★]'
            }

            let CNoctname = octUpg.name
            switch (CNoctname) {
                case '[1] Octeracts for Dummies':
                    CNoctname = '[1] 萌新的惊奇八阶方块';
                    break;
                case '[2] Octeract Cogenesis':
                    CNoctname = '[2] 惊奇八阶方块同生';
                    break;
                case '[3] Octeract Trigenesis':
                    CNoctname = '[3] 惊奇八阶方块三度起源';
                    break;
                case '[4] Quark Octeract':
                    CNoctname = '[4] 惊奇八阶方块·夸克';
                    break;
                case '[5] Octo-Hepteract Primality Synergism':
                    CNoctname = '[5] 七-八阶原始协同';
                    break;
                case '[6] EXTRA CHONKY Corruptions':
                    CNoctname = '[6] 更多腐化';
                    break;
                case '[7] EXTRA WIMPY Golden Quark Costs!':
                    CNoctname = '[7] 金夸克购买花费再度降低';
                    break;
                case '[8] Improved Download Speeds':
                    CNoctname = '[8] 改善下载速度';
                    break;
                case '[9] CHONKER Daily Code':
                    CNoctname = '[9] 加强“Daily”代码效果';
                    break;
                case '[10] CHONKERER Daily Code':
                    CNoctname = '[10] 再度加强“Daily”代码效果';
                    break;
                case '[11] CHONKEREREST Daily Code':
                    CNoctname = '[11] 超级加强“Daily”代码效果';
                    break;
                case '[12] I wish for even better Quark Hepteracts.':
                    CNoctname = '[12] 我希望惊奇七阶立方·夸克的效果还能增加。';
                    break;
                case '[13] The forbidden clock of time':
                    CNoctname = '[13] 禁忌时钟';
                    break;
                case '[14] Abstract Photokinetics':
                    CNoctname = '[14] 抽象趋光性';
                    break;
                case '[15] Abstract Exokinetics':
                    CNoctname = '[15] 抽象外动力';
                    break;
                case '[16] Wow! I want free upgrades to be better.':
                    CNoctname = '[16] 真惊奇！我希望免费升级效果变得更好。';
                    break;
                case '[17] Wow! Free upgrades still suck.':
                    CNoctname = '[17] 真惊奇！免费升级还是不够给力。';
                    break;
                case '[18] Wow! Make free upgrades good already, Platonic!':
                    CNoctname = '[18] 真惊奇！PLATONIC，让免费升级再度强大吧！';
                    break;
                case '[19] Coupon of Ultimate Penniless Derpsmiths':
                    CNoctname = '[19] 身无分文的Derpsmith之终级兑换券';
                    break;
                case '[20] Overwriting Pointers':
                    CNoctname = '[20] 重写指针';
                    break;
                case '[21] Offering Electrolosis':
                    CNoctname = '[21] 祭品电解';
                    break;
                case '[22] Obtainium Deluge':
                    CNoctname = '[22] 难得素之涌';
                    break;
                case '[23] Voided Warranty':
                    CNoctname = '[23] 保修失效';
                    break;
                case '[24] Hidden Late Fees':
                    CNoctname = '[24] 隐藏滞纳金';
                    break;
                case '[25] Digital Octeract Accumulator':
                    CNoctname = '[25] 八进制数码累加器';
                    break;
                case '[26] Derpsmith\'s Singularity Discombobulator':
                    CNoctname = '[26] Derpsmith的奇点小玩意';
                    break;
                case '[27] Pill of Increased Thirst':
                    CNoctname = '[27] 口渴药片';
                    break;
                case '[28] Vitamin O Infusion':
                    CNoctname = '[28] 维生素O灌注';
                    break;
                case '[29] Infinite Transcription of the One Mind':
                    CNoctname = '[29] 无限转录一心';
                    break;
                case '[NEW!] Octeracts for Dummies':
                    CNoctname = '[新！] 萌新的惊奇八阶方块';
                    break;
                case '[NEW!] Octeract Cogenesis':
                    CNoctname = '[新！] 惊奇八阶方块同生';
                    break;
                case '[NEW!] Octeract Trigenesis':
                    CNoctname = '[新！] 惊奇八阶方块三度起源';
                    break;
                case '[NEW!] Quark Octeract':
                    CNoctname = '[新！] 惊奇八阶方块·夸克';
                    break;
                case '[NEW!] Octo-Hepteract Primality Synergism':
                    CNoctname = '[新！] 七-八阶原始协同';
                    break;
                case '[NEW!] EXTRA CHONKY Corruptions':
                    CNoctname = '[新！] 更多腐化';
                    break;
                case '[NEW!] EXTRA WIMPY Golden Quark Costs!':
                    CNoctname = '[新！] 金夸克购买花费再度降低';
                    break;
                case '[NEW!] Improved Download Speeds':
                    CNoctname = '[新！] 改善下载速度';
                    break;
                case '[NEW!] CHONKER Daily Code':
                    CNoctname = '[新！] 加强“Daily”代码效果';
                    break;
                case '[NEW!] CHONKERER Daily Code':
                    CNoctname = '[新！] 再度加强“Daily”代码效果';
                    break;
                case '[NEW!] CHONKEREREST Daily Code':
                    CNoctname = '[新！] 超级加强“Daily”代码效果';
                    break;
                case '[NEW!] I wish for even better Quark Hepteracts.':
                    CNoctname = '[新！] 我希望惊奇七阶立方·夸克的效果还能增加。';
                    break;
                case '[NEW!] The forbidden clock of time':
                    CNoctname = '[新！] 禁忌时钟';
                    break;
                case '[NEW!] Abstract Photokinetics':
                    CNoctname = '[新！] 抽象趋光性';
                    break;
                case '[NEW!] Abstract Exokinetics':
                    CNoctname = '[新！] 抽象外动力';
                    break;
                case '[NEW!] Wow! I want free upgrades to be better.':
                    CNoctname = '[新！] 真惊奇！我希望免费升级效果变得更好。';
                    break;
                case '[NEW!] Wow! Free upgrades still suck.':
                    CNoctname = '[新！] 真惊奇！免费升级还是不够给力。';
                    break;
                case '[NEW!] Wow! Make free upgrades good already, Platonic!':
                    CNoctname = '[新！] 真惊奇！PLATONIC，让免费升级再度强大吧！';
                    break;
                case '[NEW!] Coupon of Ultimate Penniless Derpsmiths':
                    CNoctname = '[新！] 身无分文的Derpsmith之终级兑换券';
                    break;
                case '[NEW!] Overwriting Pointers':
                    CNoctname = '[新！] 重写指针';
                    break;
                case '[NEW!] Offering Electrolosis':
                    CNoctname = '[新！] 祭品电解';
                    break;
                case '[NEW!] Obtainium Deluge':
                    CNoctname = '[新！] 难得素之涌';
                    break;
                case '[NEW!] Voided Warranty':
                    CNoctname = '[新！] 保修失效';
                    break;
                case '[NEW!] Hidden Late Fees':
                    CNoctname = '[新！] 隐藏滞纳金';
                    break;
                case '[NEW!] Digital Octeract Accumulator':
                    CNoctname = '[新！] 八进制数码累加器';
                    break;
                case '[NEW!] Derpsmith\'s Singularity Discombobulator':
                    CNoctname = '[新！] Derpsmith的奇点小玩意';
                    break;
                case '[NEW!] Pill of Increased Thirst':
                    CNoctname = '[新！] 口渴药片';
                    break;
                case '[NEW!] Vitamin O Infusion':
                    CNoctname = '[新！] 维生素O灌注';
                    break;
                case '[NEW!] Infinite Transcription of the One Mind':
                    CNoctname = '[新！] 无限转录一心';
                    break;
            }

            upgradeText = upgradeText + unicodeSymbol
            upgradeText = upgradeText + CNoctname + '：'
            upgradeText = upgradeText + (octUpg.maxLevel === -1 ?
                `等级${octUpg.level}`:
                `等级${octUpg.level}/${octUpg.maxLevel}`)
            upgradeText = upgradeText + (octUpg.freeLevels > 0 ?
                ` [+${format(octUpg.computeFreeLevelSoftcap(), 2, true)}]`:
                '')

            upgradeText = upgradeText + (octUpg.freeLevels > 0 ?
                ` =+= 有效等级：${format(octUpg.actualTotalLevels(), 2, true)}`:
                '')

            upgradeText =  upgradeText + '\n'
            octeractUpgradeStats = octeractUpgradeStats + upgradeText
        }
        octeractUpgradeStats = octeractUpgradeStats + subCategoryDivisor
        octeractUpgradeStats = octeractUpgradeStats + `达到最大等级的升级数量：${totalOctUpgradeMax}/${totalOctUpgradeCount}\n`
        octeractUpgradeStats = octeractUpgradeStats + `花费在升级上的惊奇八阶方块数量：${format(totalOcteractsSpent, 0, true)}\n`
        octeractUpgradeStats = octeractUpgradeStats + subCategoryDivisor
    }


    const returnString = titleText + '\n' + time + '\n' + ver + '\n' + firstPlayed +
                        resources + octeract + singularity + ascension +
                        reincarnation + transcension + prestige +
                        shopUpgradeStats + singularityUpgradeStats + octeractUpgradeStats


    try {
        await navigator.clipboard.writeText(returnString)
    } catch (err) {
        // So we fallback to the deprecated way of doing it,
        // which isn't limited by any browser other than Safari
        // because Apple is ran by a monkey in a human skin suit.

        // Old/bad browsers (legacy Edge, Safari because of limitations)
        const textArea = document.createElement('textarea');

        textArea.setAttribute('style', 'top: 0; left: 0; position: fixed;')
        textArea.setAttribute('data-clipboard-text', returnString)

        document.body.appendChild(textArea);
        textArea.focus()
        textArea.select()

        const clipboard = new ClipboardJS(textArea)

        const cleanup = () => {
            clipboard.destroy()
            document.body.removeChild(textArea)
        }

        clipboard.on('success', () => {
            document.getElementById('exportinfo')!.textContent = 'Copied save to clipboard!'
            cleanup()
        })

        clipboard.on('error', () => {
            void Alert('Unable to write the save to clipboard.').finally(cleanup)
        })
    }

    const a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(returnString));
    a.setAttribute('download', `Statistics-${saveFilename()}`);
    a.setAttribute('id', 'downloadSave');
    // "Starting in Firefox 75, the click() function works even when the element is not attached to a DOM tree."
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click
    // so let's have it work on older versions of Firefox, doesn't change functionality.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return Alert('Summary Stats saved to clipboard! We also gave you a file, for easy sharing, if that is available on your browser.')
}