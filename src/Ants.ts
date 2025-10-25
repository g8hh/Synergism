import {
  calculateAnts,
  calculateAntSacrificeMultiplier,
  calculateAntSacrificeObtainiumMultiplier,
  calculateAntSacrificeOfferingMultiplier,
  calculateAntSacrificeRewards,
  calculateBaseAntELO,
  calculateEffectiveAntELO,
  calculateSigmoid,
  calculateSigmoidExponential
} from './Calculate'
import { format, player } from './Synergism'
import { Globals as G } from './Variables'

import type { DecimalSource } from 'break_infinity.js'
import Decimal from 'break_infinity.js'
import i18next from 'i18next'
import { awardAchievementGroup, awardUngroupedAchievement, getAchievementReward } from './Achievements'
import { DOMCacheGetOrSet } from './Cache/DOM'
import { resetHistoryAdd, type ResetHistoryEntryAntSacrifice } from './History'
import { resetAnts } from './Reset'
import { offeringObtainiumTimeModifiers } from './Statistics'
import { Tabs } from './Tabs'
import { updateTalismanInventory } from './Talismans'
import { clearInterval, setInterval } from './Timers'
import type { FirstToEighth, ZeroToSeven } from './types/Synergism'
import { Confirm, revealStuff } from './UpdateHTML'
import { smallestInc } from './Utility'

const antspecies: Record<`antspecies${number}`, string> = {
  antspecies1: 'Inceptus Formicidae',
  antspecies2: 'Fortunae Formicidae',
  antspecies3: 'Tributum Formicidae',
  antspecies4: 'Celeritas Formicidae',
  antspecies5: 'Multa Formicidae',
  antspecies6: 'Sacrificium Formicidae',
  antspecies7: 'Hic Formicidae',
  antspecies8: 'Experientia Formicidae',
  antspecies9: 'Praemoenio Formicidae',
  antspecies10: 'Scientia Formicidae',
  antspecies11: 'Phylacterium Formicidae',
  antspecies12: 'Mortuus Est Formicidae'
}

export const calculateCrumbToCoinExp = () => {
  const exponent = player.currentChallenge.ascension !== 15
    ? 100000 + calculateSigmoidExponential(49900000, (player.antUpgrades[2 - 1]! + G.bonusant2) / 5000 * 500 / 499)
    : 1 / 10000
      * (100000 + calculateSigmoidExponential(49900000, (player.antUpgrades[2 - 1]! + G.bonusant2) / 5000 * 500 / 499))

  return exponent
}

const antUpgradeTexts = [
  () => format(Decimal.pow(1.12 + 1 / 1000 * player.researches[101], player.antUpgrades[1 - 1]! + G.bonusant1), 2),
  () => format(calculateCrumbToCoinExp()),
  () => format(0.005 + 0.995 * Math.pow(0.99, player.antUpgrades[3 - 1]! + G.bonusant3), 4),
  () =>
    format(100 * (calculateSigmoidExponential(20, (player.antUpgrades[4 - 1]! + G.bonusant4) / 1000 * 20 / 19) - 1), 3),
  () =>
    format(100 * (calculateSigmoidExponential(40, (player.antUpgrades[5 - 1]! + G.bonusant5) / 1000 * 40 / 39) - 1), 3),
  () => format(1 + Math.pow(player.antUpgrades[6 - 1]! + G.bonusant6, 0.66), 4),
  () => format(Math.min(9999999, 3 * player.antUpgrades[7 - 1]! + 3 * G.bonusant7), 0, true),
  () =>
    format(calculateSigmoidExponential(999, 1 / 10000 * Math.pow(player.antUpgrades[8 - 1]! + G.bonusant8, 1.1)), 3),
  () => format(1 * Math.min(3000, player.antUpgrades[9 - 1]! + G.bonusant9), 0, true),
  () => format(1 + 2 * Math.pow((player.antUpgrades[10 - 1]! + G.bonusant10) / 50, 0.75), 4),
  () => format(1 + 2 * (1 - Math.pow(2, -(player.antUpgrades[11 - 1]! + G.bonusant11) / 125)), 4),
  () => format(calculateSigmoid(2, player.antUpgrades[12 - 1]! + G.bonusant12, 69), 4)
]

let repeatAnt: number

export const antRepeat = (i: number) => {
  clearInterval(repeatAnt)
  repeatAnt = +setInterval(() => updateAntDescription(i), 50)
}

export const updateAntDescription = (i: number) => {
  if (G.currentTab !== Tabs.AntHill) {
    return
  }
  const el = DOMCacheGetOrSet('anttierdescription')
  const la = DOMCacheGetOrSet('antprice')
  const ti = DOMCacheGetOrSet('antquantity')
  const me = DOMCacheGetOrSet('generateant')

  let priceType = 'ants.costGalacticCrumbs'
  let tier: FirstToEighth = 'first'
  let x!: string
  el.textContent = i18next.t(`ants.descriptions.${i}`)

  switch (i) {
    case 1:
      priceType = 'ants.costParticles'
      tier = 'first'
      x = format(G.antOneProduce, 5)
      break
    case 2:
      tier = 'second'
      x = format(G.antTwoProduce, 5)
      break
    case 3:
      tier = 'third'
      x = format(G.antThreeProduce, 5)
      break
    case 4:
      tier = 'fourth'
      x = format(G.antFourProduce, 5)
      break
    case 5:
      tier = 'fifth'
      x = format(G.antFiveProduce, 5)
      break
    case 6:
      tier = 'sixth'
      x = format(G.antSixProduce, 5)
      break
    case 7:
      tier = 'seventh'
      x = format(G.antSevenProduce, 5)
      break
    case 8:
      tier = 'eighth'
      x = format(G.antEightProduce, 5)
      break
  }

  me.textContent = i18next.t(`ants.generates.${i}`, { x })
  la.textContent = i18next.t(priceType, { x: format(player[`${tier}CostAnts` as const]) })
  ti.textContent = i18next.t('ants.owned', {
    x: format(player[`${tier}OwnedAnts` as const]),
    y: format(player[`${tier}GeneratedAnts` as const], 2)
  })
}

const getAntCost = (originalCost: Decimal, buyTo: number, index: number) => {
  ;--buyTo

  // Determine how much the cost is for buyTo
  const cost = originalCost
    .times(Decimal.pow(G.antCostGrowth[index - 1], buyTo))
    .add(1 * buyTo)

  return cost
}

export const getAntUpgradeCost = (originalCost: Decimal, buyTo: number, index: number) => {
  ;--buyTo

  const cost = originalCost.times(Decimal.pow(G.antUpgradeCostIncreases[index - 1], buyTo))
  return cost
}

// Note to self: REWRITE THIS SHIT Kevin :3
export const buyAntProducers = (pos: FirstToEighth, originalCost: DecimalSource, index: number) => {
  // This is a fucking cool function. This will buymax ants cus why not

  // Things we need: the position of producers, the costvalues, and input var i
  originalCost = new Decimal(originalCost)
  // Initiate type of resource used
  const tag = index === 1 ? 'reincarnationPoints' : 'antPoints'
  const key = `${pos}OwnedAnts` as const

  const buydefault = player[key] + smallestInc(player[key])
  let buyTo = buydefault
  let cashToBuy = getAntCost(originalCost, buyTo, index)
  while (player[tag].gte(cashToBuy)) {
    // Multiply by 4 until the desired amount. Iterate from there
    buyTo = buyTo * 4
    cashToBuy = getAntCost(originalCost, buyTo, index)
  }
  let stepdown = Math.floor(buyTo / 8)
  while (stepdown >= smallestInc(buyTo)) {
    if (getAntCost(originalCost, buyTo - stepdown, index).lte(player[tag])) {
      stepdown = Math.floor(stepdown / 2)
    } else {
      buyTo = buyTo - Math.max(smallestInc(buyTo), stepdown)
    }
  }

  if (!player.antMax) {
    if (buydefault < buyTo) {
      buyTo = buydefault
    }
  }
  // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
  let buyFrom = Math.max(buyTo - 6 - smallestInc(buyTo), buydefault)
  let thisCost = getAntCost(originalCost, buyFrom, index)
  while (buyFrom <= buyTo && player[tag].gte(thisCost)) {
    player[tag] = player[tag].sub(thisCost)
    player[key] = buyFrom
    buyFrom = buyFrom + smallestInc(buyFrom)
    thisCost = getAntCost(originalCost, buyFrom, index)
    player[`${pos}CostAnts` as const] = thisCost
  }
  if (player.reincarnationPoints.lt(0)) {
    player.reincarnationPoints = new Decimal('0')
  }
  if (player.antPoints.lt(0)) {
    player.antPoints = new Decimal('0')
  }

  awardAchievementGroup('sacMult')

  if (player.firstOwnedAnts > 6.9e7) {
    player.firstOwnedAnts = 6.9e7
  }
}

export const buyAntUpgrade = (originalCost: DecimalSource, auto: boolean, index: number) => {
  if (player.currentChallenge.ascension !== 11) {
    originalCost = new Decimal(originalCost)
    const buydefault = player.antUpgrades[index - 1]! + smallestInc(player.antUpgrades[index - 1]!)
    let buyTo = buydefault
    let cashToBuy = getAntUpgradeCost(originalCost, buyTo, index)
    while (player.antPoints.gte(cashToBuy)) {
      // Multiply by 4 until the desired amount. Iterate from there
      buyTo = buyTo * 4
      cashToBuy = getAntUpgradeCost(originalCost, buyTo, index)
    }
    let stepdown = Math.floor(buyTo / 8)
    while (stepdown >= smallestInc(buyTo)) {
      if (getAntUpgradeCost(originalCost, buyTo - stepdown, index).lte(player.antPoints)) {
        stepdown = Math.floor(stepdown / 2)
      } else {
        buyTo = buyTo - Math.max(smallestInc(buyTo), stepdown)
      }
    }
    if (!player.antMax) {
      if (buydefault < buyTo) {
        buyTo = buydefault
      }
    }
    // go down by 7 steps below the last one able to be bought and spend the cost of 25 up to the one that you started with and stop if coin goes below requirement
    let buyFrom = Math.max(buyTo - 6 - smallestInc(buyTo), buydefault)
    let thisCost = getAntUpgradeCost(originalCost, buyFrom, index)
    while (buyFrom <= buyTo && player.antPoints.gte(thisCost)) {
      player.antPoints = player.antPoints.sub(thisCost)
      player.antUpgrades[index - 1] = buyFrom
      buyFrom = buyFrom + smallestInc(buyFrom)
      thisCost = getAntUpgradeCost(originalCost, buyFrom, index)
    }
    calculateAnts()
    if (!auto) {
      antUpgradeDescription(index)
    }
    if (player.antUpgrades[12 - 1] === 1 && index === 12) {
      revealStuff()
    }
  }
}

export const antUpgradeDescription = (i: number) => {
  const el = DOMCacheGetOrSet('antspecies')
  const al = DOMCacheGetOrSet('antlevelbonus')
  const la = DOMCacheGetOrSet('antupgradedescription')
  const ti = DOMCacheGetOrSet('antupgradecost')
  const me = DOMCacheGetOrSet('antupgradeeffect')

  const content1 = antspecies[`antspecies${i}`]
  const content2 = i18next.t(`ants.upgrades.${i}`)
  const bonuslevel = G[`bonusant${i}` as keyof typeof G] as typeof G['bonusant1']

  const c11 = player.currentChallenge.ascension === 11 ? 999 : 0

  el.childNodes[0].textContent = `${content1} Level ${format(player.antUpgrades[i - 1])}`
  al.textContent = ` [+${format(Math.min(player.antUpgrades[i - 1]! + c11, bonuslevel))}]`
  la.textContent = content2
  ti.textContent = i18next.t('ants.costGalacticCrumbs', {
    x: format(
      Decimal.pow(
        G.antUpgradeCostIncreases[i - 1],
        player.antUpgrades[i - 1]!
      ).times(G.antUpgradeBaseCost[i - 1])
    )
  })
  me.textContent = i18next.t(`ants.rewards.${i}`, {
    x: antUpgradeTexts[i - 1]()
  })
}

export const antSacrificePointsToMultiplier = (points: number) => {
  const base = 1 + points / 5000
  const maxExponent = 4
  const exponent = Math.min(maxExponent, 1.5 + 0.2 * Math.log(1 + points / 10000))
  if (points > 0) {
    return Decimal.pow(base, exponent).times(2)
  }
  return new Decimal(1)
}

export const showSacrifice = () => {
  const sacRewards = calculateAntSacrificeRewards()
  DOMCacheGetOrSet('antSacrificeSummary').style.display = 'block'

  const baseELO = calculateBaseAntELO()
  const effectiveELO = calculateEffectiveAntELO(baseELO)

  const timeMultiplier = offeringObtainiumTimeModifiers(player.antSacrificeTimer, true).reduce(
    (a, b) => a * b.stat(),
    1
  )
  DOMCacheGetOrSet('ELO').innerHTML = i18next.t('ants.yourAntELO', {
    x: format(effectiveELO, 2, true)
  })

  DOMCacheGetOrSet('SacrificeMultiplier').innerHTML = i18next.t('ants.antSacMultiplier', {
    y: format(antSacrificePointsToMultiplier(player.antSacrificePoints), 3, false),
    x: format(antSacrificePointsToMultiplier(player.antSacrificePoints + sacRewards.antSacrificePoints), 3, false)
  })

  DOMCacheGetOrSet('SacrificeUpgradeMultiplier').innerHTML = i18next.t('ants.upgradeMultiplier', {
    x: format(calculateAntSacrificeMultiplier(), 3, true)
  })

  DOMCacheGetOrSet('SacrificeTimeMultiplier').innerHTML = i18next.t('ants.timeMultiplier', {
    x: format(timeMultiplier, 3, true)
  })

  DOMCacheGetOrSet('immortalELO').innerHTML = i18next.t('ants.immortalELO', {
    x: format(player.antSacrificePoints, 0, true)
  })
  DOMCacheGetOrSet('immortalELOAntSpeed').innerHTML = i18next.t('ants.immortalELOAntSpeed', {
    x: format(antSacrificePointsToMultiplier(player.antSacrificePoints), 3, false)
  })

  DOMCacheGetOrSet('immortalELOGain').innerHTML = i18next.t('ants.immortalELOGain', {
    x: format(sacRewards.antSacrificePoints, 0, true)
  })

  DOMCacheGetOrSet('SacrificeOfferingMultiplier').innerHTML = i18next.t('ants.offeringMultiplier', {
    x: format(calculateAntSacrificeOfferingMultiplier().plus(1), 3, true)
  })

  DOMCacheGetOrSet('SacrificeObtainiumMultiplier').innerHTML = i18next.t('ants.obtainiumMultiplier', {
    x: format(calculateAntSacrificeObtainiumMultiplier().plus(1), 3, true)
  })

  DOMCacheGetOrSet('antSacrificeOffering').textContent = `+${format(sacRewards.offerings)}`
  DOMCacheGetOrSet('antSacrificeObtainium').textContent = `+${format(sacRewards.obtainium)}`
  if (player.challengecompletions[9] > 0) {
    DOMCacheGetOrSet('antSacrificeTalismanShard').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.talismanShards),
      y: 500
    })
    DOMCacheGetOrSet('antSacrificeCommonFragment').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.commonFragments),
      y: 750
    })
    DOMCacheGetOrSet('antSacrificeUncommonFragment').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.uncommonFragments),
      y: 1000
    })
    DOMCacheGetOrSet('antSacrificeRareFragment').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.rareFragments),
      y: 1500
    })
    DOMCacheGetOrSet('antSacrificeEpicFragment').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.epicFragments),
      y: 2000
    })
    DOMCacheGetOrSet('antSacrificeLegendaryFragment').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.legendaryFragments),
      y: 3000
    })
    DOMCacheGetOrSet('antSacrificeMythicalFragment').textContent = i18next.t('ants.elo', {
      x: format(sacRewards.mythicalFragments),
      y: 5000
    })
  }
}

export const sacrificeAnts = async (auto = false) => {
  let p = true

  if (player.antPoints.gte('1e40')) {
    if (!auto && player.toggles[32]) {
      p = await Confirm(i18next.t('ants.autoReset'))
    }
    if (p) {
      const antSacrificePointsBefore = player.antSacrificePoints

      const sacRewards = calculateAntSacrificeRewards()
      player.antSacrificePoints += sacRewards.antSacrificePoints
      player.offerings = player.offerings.add(sacRewards.offerings)

      if (player.currentChallenge.ascension !== 14) {
        player.obtainium = player.obtainium.add(sacRewards.obtainium)
      }

      const baseELO = calculateBaseAntELO()
      const effectiveELO = calculateEffectiveAntELO(baseELO)

      const historyEntry: ResetHistoryEntryAntSacrifice = {
        date: Date.now(),
        seconds: player.antSacrificeTimer,
        kind: 'antsacrifice',
        offerings: sacRewards.offerings,
        obtainium: sacRewards.obtainium,
        antSacrificePointsBefore,
        antSacrificePointsAfter: player.antSacrificePoints,
        baseELO: baseELO,
        effectiveELO: effectiveELO,
        crumbs: player.antPoints.toString(),
        crumbsPerSecond: G.antOneProduce.toString()
      }

      if (player.challengecompletions[9] > 0) {
        player.talismanShards = player.talismanShards.add(sacRewards.talismanShards)
        player.commonFragments = player.commonFragments.add(sacRewards.commonFragments)
        player.uncommonFragments = player.uncommonFragments.add(sacRewards.uncommonFragments)
        player.rareFragments = player.rareFragments.add(sacRewards.rareFragments)
        player.epicFragments = player.epicFragments.add(sacRewards.epicFragments)
        player.legendaryFragments = player.legendaryFragments.add(sacRewards.legendaryFragments)
        player.mythicalFragments = player.mythicalFragments.add(sacRewards.mythicalFragments)
      }

      // Now we're safe to reset the ants.
      resetAnts()
      player.antSacrificeTimer = 0
      player.antSacrificeTimerReal = 0
      updateTalismanInventory()
      resetHistoryAdd('ants', historyEntry)
    }
  }

  if (player.mythicalFragments.gte(1e11) && player.currentChallenge.ascension === 14) {
    awardUngroupedAchievement('seeingRedNoBlue')
  }
}

export const autoBuyAnts = () => {
  const canAffordUpgrade = (x: number, m: DecimalSource) =>
    player.antPoints.gte(
      getAntUpgradeCost(new Decimal(G.antUpgradeBaseCost[x - 1]), player.antUpgrades[x - 1]! + 1, x).times(m)
    )

  const cost = ['100', '100', '1000', '1000', '1e5', '1e6', '1e8', '1e11', '1e15', '1e20', '1e40', '1e100']
  if (player.currentChallenge.ascension !== 11) {
    for (let i = 1; i <= 12; i++) {
      const check = i === 12 ? player.researches[145] > 0 : +getAchievementReward('antUpgradeAutobuyers') >= i
      if (check && canAffordUpgrade(i, 2)) {
        buyAntUpgrade(cost[i - 1], true, i)
      }
    }
  }

  const _cost = ['1e700', '3', '100', '10000', '1e12', '1e36', '1e100', '1e300']
  for (let i = 1; i <= 8; i++) {
    const res = i === 1 ? player.reincarnationPoints : player.antPoints
    const m = i === 1 ? 1 : 2 // no multiplier on the first ant cost because it costs particles
    if (
      +getAchievementReward('antAutobuyers') >= i
      && res.gte(player[`${G.ordinals[i - 1 as ZeroToSeven]}CostAnts` as const].times(m))
    ) {
      buyAntProducers(
        G.ordinals[i - 1] as Parameters<typeof buyAntProducers>[0],
        _cost[i - 1],
        i
      )
    }
  }
}
