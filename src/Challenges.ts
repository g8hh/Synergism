import Decimal from 'break_infinity.js';
import { player, format, resetCheck } from './Synergism';
import { toggleAutoChallengeModeText, toggleChallenges } from './Toggles';
import { Globals as G } from './Variables';
import { calculateRuneLevels } from './Calculate';
import { hepteractEffective } from './Hepteracts';
import { productContents } from './Utility';
import { DOMCacheGetOrSet } from './Cache/DOM';

export const getMaxChallenges = (i: number) => {
    let maxChallenge = 0;
    //Transcension Challenges
    if (i <= 5) {
        //Start with base 25 max completions
        maxChallenge = 25;
        //Check Research 5x5 ('Infinite' T. Challenges)
        if (player.researches[105] > 0) {
            return 9001
        }
        //Max T. Challenge depends on researches 3x16 to 3x20
        maxChallenge += 5 * player.researches[65 + i]
        return maxChallenge
    }
    //Reincarnation Challenges
    if (i <= 10 && i > 5) {
        //Start with base of 40 max completions
        maxChallenge = 40;
        //Cube Upgrade 2x9: +4/level
        maxChallenge += 4 * player.cubeUpgrades[29];
        //Shop Upgrade "Challenge Extension": +2/level
        maxChallenge += 2 * player.shopUpgrades.challengeExtension;
        //Platonic Upgrade 5 (ALPHA): +10
        if (player.platonicUpgrades[5] > 0) {
            maxChallenge += 10;
        }
        //Platonic Upgrade 10 (BETA): +10
        if (player.platonicUpgrades[10] > 0) {
            maxChallenge += 10;
        }
        //Platonic Upgrade 15 (OMEGA): +30
        if (player.platonicUpgrades[15] > 0) {
            maxChallenge += 30;
        }

        maxChallenge += 2 * +player.singularityUpgrades.singChallengeExtension.getEffect().bonus
        maxChallenge += 2 * +player.singularityUpgrades.singChallengeExtension2.getEffect().bonus
        maxChallenge += 2 * +player.singularityUpgrades.singChallengeExtension3.getEffect().bonus
        return maxChallenge
    }
    //Ascension Challenge
    if (i <= 15 && i > 10) {
        //Challenge 15 has no formal cap, so return 9001.
        if (i === 15) {
            return 9001
        }
        //Start with base of 30 max completions
        maxChallenge = 30;
        //Platonic Upgrade 5 (ALPHA): +5
        if (player.platonicUpgrades[5] > 0) {
            maxChallenge += 5;
        }
        //Platonic Upgrade 10 (BETA): +5
        if (player.platonicUpgrades[10] > 0) {
            maxChallenge += 5;
        }
        //Platonic Upgrade 15 (OMEGA): +20
        if (player.platonicUpgrades[15] > 0) {
            maxChallenge += 20;
        }

        maxChallenge += +player.singularityUpgrades.singChallengeExtension.getEffect().bonus
        maxChallenge += +player.singularityUpgrades.singChallengeExtension2.getEffect().bonus
        maxChallenge += +player.singularityUpgrades.singChallengeExtension3.getEffect().bonus
        return maxChallenge
    }

    return maxChallenge;
}

export const challengeDisplay = (i: number, changefocus = true) => {
    let quarksMultiplier = 1;

    if (changefocus) {
        G['challengefocus'] = i;
        DOMCacheGetOrSet('oneChallengeDetails').style.display = 'flex';
        DOMCacheGetOrSet('startChallenge').style.display = 'block';
        DOMCacheGetOrSet('retryChallenge').style.display = 'block';
        G['triggerChallenge'] = i
    }

    const maxChallenges = getMaxChallenges(i);
    if (i <= 5 && changefocus){
        if (player.challengecompletions[i] >= 100){
            DOMCacheGetOrSet('completionSoftcap').textContent = '|| Softcapped past 100! Effective completion count: ' + CalcECC('transcend',player.challengecompletions[i])
        } else {
            DOMCacheGetOrSet('completionSoftcap').textContent = ''
        }
    }


    if (i > 5 && i <= 10) {
        quarksMultiplier = 10;
        if (player.challengecompletions[i] >= 25 && changefocus){
            DOMCacheGetOrSet('completionSoftcap').textContent = '|| Softcapped past 25! Effective completion count: ' + format(CalcECC('reincarnation',player.challengecompletions[i]),2,true)
        } else {
            DOMCacheGetOrSet('completionSoftcap').textContent = ''
        }
    }
    if (i > 10) {
        if (player.challengecompletions[i] >= 10){
            DOMCacheGetOrSet('completionSoftcap').textContent = '|| Softcapped past 10! Effective completion count: ' + format(CalcECC('ascension',player.challengecompletions[i]),2,true)
        } else {
            DOMCacheGetOrSet('completionSoftcap').textContent = ''
        }
    }
    let descriptor = ''
    const a = DOMCacheGetOrSet('challengeName');
    const b = DOMCacheGetOrSet('challengeFlavor');
    const c = DOMCacheGetOrSet('challengeRestrictions');
    const d = DOMCacheGetOrSet('challengeGoal');
    const e = DOMCacheGetOrSet('challengePer1').childNodes[0];
    const f = DOMCacheGetOrSet('challengePer2').childNodes[0];
    const g = DOMCacheGetOrSet('challengePer3').childNodes[0];
    const h = DOMCacheGetOrSet('challengeFirst1');
    const j = DOMCacheGetOrSet('challengeQuarkBonus');
    const k = DOMCacheGetOrSet('startChallenge');
    const l = DOMCacheGetOrSet('challengeCurrent1');
    const m = DOMCacheGetOrSet('challengeCurrent2');
    const n = DOMCacheGetOrSet('challengeCurrent3');


    if (i === 1 && G['challengefocus'] === 1) {
        a.textContent = '无加倍器挑战 || 完成' + player.challengecompletions[1] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'Multipliers make the game a little too fast. Let\'s take them out!'
        c.textContent = 'Transcend and reach the goal except Multipliers do nothing but act like Accelerators, which are nerfed by 50%!'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i])) + '金币。'
        e.textContent = '基础加倍器加成增加10个！[效果增加0.05！]当前效果：'
        f.textContent = '总加倍器加成增加10%！当前效果：'
        g.textContent = '每个祭品的基础符文经验值增加0.04！当前效果：'
        h.textContent = '免费加倍器增加1个！每个祭品的基础符文经验值增加1！'
        k.textContent = 'Start [No Multipliers]'
        l.textContent = '增加' + format(10 * CalcECC('transcend', player.challengecompletions[1])) + '个'
        m.textContent = '增加' + format(10 * CalcECC('transcend', player.challengecompletions[1])) + '%'
        n.textContent = '增加' + format(0.04 * CalcECC('transcend', player.challengecompletions[1]), 2, true) + '[取最高完成次数]'
    }
    if (i === 2 && G['challengefocus'] === 2) {
        a.textContent = '无加速器挑战 || 完成' + player.challengecompletions[2] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'Who needs accelerators? They do basically nothing now.'
        c.textContent = 'Transcend and reach the goal except Accelerators do nothing! Multipliers are nerfed a bit as well.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i])) + '金币。'
        e.textContent = '免费加速器增加5个！当前效果：'
        f.textContent = '加速器加成效果增加5%！当前效果：'
        g.textContent = '加速器效果增加0.25%！当前效果：'
        h.textContent = '转生和超越的基础祭品获取数量增加1。'
        k.textContent = 'Start [No Accelerators]'
        l.textContent = '加速器增加' + format(5 * CalcECC('transcend', player.challengecompletions[2])) + '个'
        m.textContent = '加速器加成效果增加' + format(5 * CalcECC('transcend', player.challengecompletions[2])) + '%'
        n.textContent = '加速器效果增加' + format(0.25 * CalcECC('transcend', player.challengecompletions[2]), 2, true) + '%'
    }
    if (i === 3 && G['challengefocus'] === 3) {
        a.textContent = '无碎片挑战 || 完成' + player.challengecompletions[3] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'Alright, now you\'re thinking, how else can I make the game harder?'
        c.textContent = 'Transcend and reach the goal except you do not produce Crystals or Mythos Shards.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i])) + '金币。'
        e.textContent = 'Crystal --> Coin conversion exponent +0.04! Current: '
        f.textContent = '每购买1个神话生产者，就使宗师产量增加0.5%。当前效果：'
        g.textContent = 'When you use a rune, all other runes gain +0.01 EXP. Current: '
        h.textContent = 'Gain an offering automatically every 2 seconds!'
        k.textContent = 'Start [No Shards]'
        l.textContent = 'Exponent +' + format(0.04 * player.challengecompletions[3], 2, true)
        m.textContent = '增加' + format(0.5 * CalcECC('transcend', player.challengecompletions[3]), 2, true) + '%'
        n.textContent = '经验值增加' + format(0.01 * CalcECC('transcend', player.challengecompletions[3]), 2, true) + ''
    }
    if (i === 4 && G['challengefocus'] === 4) {
        a.textContent = '花费增加挑战 || 完成' + player.challengecompletions[4] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'You\'re getting rich now, but inflation hasn\'t happened yet? I don\'t think so!'
        c.textContent = 'Transcend and reach the goal except Coin/Crystal producers, Accelerators and Multipliers cost more. [Gets harder each time!]'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i])) + '金币。'
        e.textContent = 'Accelerator Cost scale slows down by +5 purchases. Current: '
        f.textContent = 'Multiplier Cost scale slows down by +2 purchases. Current: '
        g.textContent = 'Building Cost Delay +0.5%. Current: '
        h.textContent = 'None'
        k.textContent = 'Start [Cost+]'
        l.textContent = '加速器减缓' + format(5 * CalcECC('transcend', player.challengecompletions[4])) + '次'
        m.textContent = '加倍器减缓' + format(2 * CalcECC('transcend', player.challengecompletions[4])) + '次'
        n.textContent = '建筑成本增长减缓' + format(0.5 * CalcECC('transcend', player.challengecompletions[4]), 2, true) + '%'
    }
    if (i === 5 && G['challengefocus'] === 5) {
        a.textContent = '钻石减少挑战 || 完成' + player.challengecompletions[5] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'You ever wonder how you get so many diamonds?'
        c.textContent = 'Transcend and reach the goal except you gain far fewer Diamonds from all sources [Gets harder each time!]'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i])) + '金币。'
        e.textContent = '转生时金币对钻石的转换指数增加0.01！当前效果：'
        f.textContent = 'Multiply Crystal production by 10! Current: '
        g.textContent = ''
        h.textContent = 'None'
        k.textContent = 'Start [Reduced Diamonds]'
        l.textContent = 'Exponent = ^' + format(0.5 + CalcECC('transcend', player.challengecompletions[5]) / 100, 2, true)
        m.textContent = '水晶产量变为' + format(Math.pow(10, CalcECC('transcend', player.challengecompletions[5]))) + '倍'
        n.textContent = ''
    }
    if (i === 6 && G['challengefocus'] === 6) {
        a.textContent = '税收增加挑战 || 完成' + player.challengecompletions[6] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'The tax man caught wind that you reincarnated recently...'
        c.textContent = 'Reincarnate and reach the goal except tax has a lower cap, and Coin production is divided by 1e250.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i], 6)) + '神话碎片。'
        e.textContent = '税收减少3.5%[效果叠乘]！当前效果：'
        f.textContent = 'Thrift Rune Exp +10%! Current: '
        g.textContent = 'Prestige Offerings +2%! Current: '
        h.textContent = '税收减少7.5%！'
        k.textContent = 'Start <Higher Tax>'
        l.textContent = '税收变为' + format(Math.pow(0.965, CalcECC('reincarnation', player.challengecompletions[6])), 3, true) + '倍'
        m.textContent = '经验值增加' + format(10 * CalcECC('reincarnation', player.challengecompletions[6])) + '%'
        n.textContent = '转生相关的祭品数量增加' + format(2 * CalcECC('reincarnation', player.challengecompletions[6])) + '%'
    }
    if (i === 7 && G['challengefocus'] === 7) {
        a.textContent = '无加倍器/加速器挑战 || 完成' + player.challengecompletions[7] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'You\'re really going to hate this one.'
        c.textContent = 'Reincarnate and reach the goal except Accelerators and Multipliers do nothing. Coin Production is divided by 1e1,250.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i],7)) + '神话碎片。'
        e.textContent = 'Accelerator/Multiplier boost power exponent +0.04! Current: '
        f.textContent = 'Speed Rune Exp +10%! Current: '
        g.textContent = 'Duplication Rune Exp +10%! Current: '
        h.textContent = 'Multiplier Boost power +25%! The first Discord-Booster Global Diamond Upgrade.'
        k.textContent = 'Start <No Multipliers/Accelerators>'
        l.textContent = 'Exponent = ^' + format(1 + 0.04 * CalcECC('reincarnation', player.challengecompletions[7]), 2, true)
        m.textContent = '经验值增加' + format(10 * CalcECC('reincarnation', player.challengecompletions[7])) + '%'
        n.textContent = '经验值增加' + format(10 * CalcECC('reincarnation', player.challengecompletions[7])) + '%'
    }
    if (i === 8 && G['challengefocus'] === 8) {
        a.textContent = '花费暴增挑战 || 完成' + player.challengecompletions[8] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'You thought you could outgrow inflation by Reincarnating?'
        c.textContent = 'Reincarnate and reach the goal except Cost Scaling for producers and Accelerators/Multipliers scale much, much faster.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i],8)) + '神话碎片。'
        e.textContent = 'Base Building Power +0.25! Current: '
        f.textContent = 'Prism Rune Exp +20%! Current: '
        g.textContent = 'Transcend Offerings +4%! Current: '
        h.textContent = 'Unlock the Anthill feature! Includes 20 new Researches. A Global Diamond Upgrade.'
        k.textContent = 'Start <Cost++>'
        l.textContent = '增加' + format(0.25 * CalcECC('reincarnation', player.challengecompletions[8]), 2, true)
        m.textContent = '经验值增加' + format(20 * CalcECC('reincarnation', player.challengecompletions[8]), 2, true) + '%'
        n.textContent = '超越相关的祭品数量增加' + format(4 * CalcECC('reincarnation', player.challengecompletions[8]), 2, true) + '%'
    }
    if (i === 9 && G['challengefocus'] === 9) {
        a.textContent = '无符文挑战 || 完成' + player.challengecompletions[9] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'You\'ll never complain about Prism being bad again.'
        c.textContent = 'Reincarnate and reach the goal except runes always have level 1 effects. All coin production is divided by e2,000,000.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i], 9)) + '金币。'
        e.textContent = '免费蚂蚁等级增加1！当前效果：'
        f.textContent = '蚂蚁速度增加10%[效果叠乘！]当前效果：'
        g.textContent = 'SI Rune Exp +20%! Current: '
        h.textContent = 'Unlock the Talismans feature! [In Runes tab]. A Global Diamond Upgrade.'
        k.textContent = 'Start <No Runes>'
        l.textContent = '免费等级增加' + format(CalcECC('reincarnation', player.challengecompletions[9])) + ''
        m.textContent = '蚂蚁速度变为' + format(Math.pow(1.1, CalcECC('reincarnation', player.challengecompletions[9])), 2, true) + '倍'
        n.textContent = '经验值增加' + format(20 * CalcECC('reincarnation', player.challengecompletions[9]), 2, true) + '%'
    }
    if (i === 10 && G['challengefocus'] === 10) {
        a.textContent = '虐待狂挑战 I || 完成' + player.challengecompletions[10] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'I\'m sorry for what I\'ve unleashed onto the world.'
        c.textContent = 'Reincarnate and reach the goal except run the first five challenges AT THE SAME TIME! Coin Production /e12,500,000.'
        d.textContent = '目标：在挑战中达到' + format(challengeRequirement(i, player.challengecompletions[i], 10)) + '金币。'
        e.textContent = '蚂蚁基础强度分增加100！当前效果：'
        f.textContent = '蚂蚁献祭奖励增加2%！当前效果：'
        g.textContent = 'Reincarnation Offerings +10%! Current: '
        h.textContent = 'Unlock the Ascension Reset Tier!'
        k.textContent = 'Start <Sadistic I>'
        l.textContent = '蚂蚁强度分增加' + format(100 * CalcECC('reincarnation', player.challengecompletions[10])) + ''
        m.textContent = '蚂蚁献祭奖励增加' + format(2 * CalcECC('reincarnation', player.challengecompletions[10])) + '%'
        n.textContent = '转世相关的祭品数量增加' + format(10 * CalcECC('reincarnation', player.challengecompletions[10]), 2, true) + '%'
    }
    if (i === 11 && G['challengefocus'] === 11) {
        a.textContent = '蚂蚁减少挑战 || 完成' + player.challengecompletions[11] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'The great Ant War of \'21 wiped off all of the skilled ants.'
        c.textContent = 'Ascend and reach the goal but only get free ant upgrades and from Challenge8/9 completions. FOR ASCENSION CHALLENGES YOU MUST CLEAR CHALLENGE 10 TO ATTEMPT THEM.'
        d.textContent = '目标：在挑战中完成' + format(challengeRequirement(i, player.challengecompletions[i])) + '次挑战10<虐待狂挑战 I>。'
        e.textContent = '免费蚂蚁等级增加12！当前效果：'
        f.textContent = 'Ant Speed x(1e5)^completions! Current: '
        g.textContent = '符文等级上限增加80！当前效果：'
        h.textContent = 'Unlock 15 Researches, and unlock the ability to open Tesseracts! You also get to toggle Corruptions ;)'
        k.textContent = 'Start <[(Reduced Ants)]>'
        l.textContent = '免费蚂蚁等级增加' + format(12 * CalcECC('ascension', player.challengecompletions[11])) + ''
        m.textContent = '蚂蚁速度变为' + format(Decimal.pow(1e5, CalcECC('ascension', player.challengecompletions[11]))) + '倍'
        n.textContent = '符文等级上限增加' + format(80 * CalcECC('ascension', player.challengecompletions[11])) + ''
    }
    if (i === 12 && G['challengefocus'] === 12) {
        a.textContent = '无转世挑战 || 完成' + player.challengecompletions[12] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'For some reason, you just can\'t do it.'
        c.textContent = 'Ascend and reach the goal but you do not gain Particles and you cannot Reincarnate at all! Ant production ^0.5.'
        d.textContent = '目标：在挑战中完成' + format(challengeRequirement(i, player.challengecompletions[i])) + '次挑战10<虐待狂挑战 I>。'
        e.textContent = '难得素获取数量增加50%！当前效果：'
        f.textContent = '祭品获取数量增加12%！当前效果：'
        g.textContent = '打开每个方盒的贡品获取数量增加1！当前效果：'
        h.textContent = 'Unlock 15 Researches, and unlock the mystical Spirit Power! Find these in the Runes tab. Increase Corruption Cap by 2 levels. Finally, unlock two new corruptions! ;)'
        k.textContent = 'Start <[(No Reincarnation)]>'
        l.textContent = '难得素获取数量增加' + format(50 * CalcECC('ascension', player.challengecompletions[12])) + '%'
        m.textContent = '祭品获取数量增加' + format(12 * CalcECC('ascension', player.challengecompletions[12])) + '%'
        n.textContent = '方盒的贡品获取数量增加' + format(CalcECC('ascension', player.challengecompletions[12])) + '个'
    }
    if (i === 13 && G['challengefocus'] === 13) {
        a.textContent = '税收激增挑战 || 完成' + player.challengecompletions[13] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'Good luck with the IRS, buddy.'
        c.textContent = 'Ascend and reach the goal, but taxes are much higher and grow with challenge completions. Ant production ^0.23'
        d.textContent = '目标：在挑战中完成' + format(challengeRequirement(i, player.challengecompletions[i])) + '次挑战10<虐待狂挑战 I>。'
        e.textContent = 'Taxes -3.33%! Multiplicative! Current: '
        f.textContent = '护身符等级上限增加6级！当前效果：'
        g.textContent = '魂灵能量效果增加3%！当前效果：'
        h.textContent = 'Unlock 15 Researches, and unlock the power of the Hypercube! Increase Corruption Cap by 2 levels, to 9! Finally, unlock two new corruptions! ;)'
        k.textContent = 'Start <[(Tax+++)]>'
        l.textContent = '腐化税收减少' + format(100 - 100 * Math.pow(0.966, CalcECC('ascension', player.challengecompletions[13])),3,true) + '%'
        m.textContent = '护身符等级上限增加' + format(6 * CalcECC('ascension', player.challengecompletions[13])) + '级'
        n.textContent = '效果增加' + format(3 * CalcECC('ascension', player.challengecompletions[13])) + '%'
    }
    if (i === 14 && G['challengefocus'] === 14) {
        a.textContent = '无研究挑战 || 完成' + player.challengecompletions[14] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'The dimension that never progressed past the dark ages. Many fear to even step foot.'
        c.textContent = 'Ascend and reach the goal but you do not gain Obtainium nor are any researches purchasable. Ant production ^0.2.'
        d.textContent = '目标：在挑战中完成' + format(challengeRequirement(i, player.challengecompletions[i])) + '次挑战10<虐待狂挑战 I>。'
        e.textContent = '研究1x1至研究1x5的效果增加50%。当前效果：'
        f.textContent = '每个时刻自动购买的研究数量增加1！当前效果：'
        g.textContent = '符文等级上限增加200！当前效果：'
        h.textContent = 'Unlock 15 Researches, and a way to coalesce your power into the Singularity. Increase Corruption Cap by 2 levels, to 11! Finally, unlock two new corruptions! ;)'
        k.textContent = 'Start <[(No Research)]>'
        l.textContent = '效果增加' + format(50 * CalcECC('ascension', player.challengecompletions[14])) + '%'
        m.textContent = '每个时刻自动购买' + format(1 * player.challengecompletions[14]) + '个研究'
        n.textContent = '符文等级上限增加' + format(200 * CalcECC('ascension', player.challengecompletions[14])) + ''
    }
    if (i === 15 && G['challengefocus'] === 15) {
        a.textContent = '虐待狂挑战 II || 完成' + player.challengecompletions[15] + '次，次数上限为' + format(maxChallenges)
        b.textContent = 'The worst sin a man can do is making others suffer.'
        c.textContent = 'Ascend and reach the goal but you\'re stuck in all corruptions level 11 and must stay that way.'
        d.textContent = '目标：' + format(challengeRequirement(i, player.challengecompletions[i], 15)) + '金币，根据您在此挑战中的最高金币数量获得奖励。'
        e.textContent = 'You have no idea '
        f.textContent = 'what you have just done '
        g.textContent = 'the Ant God shakes their mighty head '
        h.textContent = 'Who knows. Platonic sure doesn\'t.'
        k.textContent = 'Start <[(Sadistic Challenge II)]>'
        l.textContent = ''
        m.textContent = ''
        n.textContent = ''
    }
    const scoreArray1 = [0, 8, 10, 12, 15, 20, 60, 80, 120, 180, 300]
    const scoreArray2 = [0, 10, 12, 15, 20, 30, 80, 120, 180, 300, 450]
    const scoreArray3 = [0, 20, 30, 50, 100, 200, 250, 300, 400, 500, 750];
    let scoreDisplay = 0;
    if (i <= 5){
        if (player.highestchallengecompletions[i] >= 750){
            scoreDisplay = scoreArray3[i]
        } else if (player.highestchallengecompletions[i] >= 75){
            scoreDisplay = scoreArray2[i]
        } else {
            scoreDisplay = scoreArray1[i]
        }
    }
    if (i > 5 && i <= 10){
        if (player.highestchallengecompletions[i] >= 60){
            scoreDisplay = scoreArray3[i]
        } else if (player.highestchallengecompletions[i] >= 25){
            scoreDisplay = scoreArray2[i]
        } else {
            scoreDisplay = scoreArray1[i]
        }
    }
    if (changefocus) {
        j.textContent = ''
    }
    if (player.ascensionCount === 0) {
        descriptor = 'Quarks';
        j.style.color = 'cyan'
    }
    if (player.challengecompletions[i] >= player.highestchallengecompletions[i] && player.highestchallengecompletions[i] < maxChallenges && changefocus && player.ascensionCount < 1) {
        j.textContent = 'Gain ' + Math.floor(quarksMultiplier * player.highestchallengecompletions[i] / 10 + 1 + player.cubeUpgrades[1] + player.cubeUpgrades[11] + player.cubeUpgrades[21] + player.cubeUpgrades[31] + player.cubeUpgrades[41]) + ' ' + descriptor + ' for completing this challenge [First Time Bonus]!'
    }
    if (player.challengecompletions[i] >= player.highestchallengecompletions[i] && player.highestchallengecompletions[i] < maxChallenges && changefocus && player.ascensionCount >= 1){
        j.textContent = 'Completing the challenge adds ' + ((i > 5) ? 2 : 1) + ' to Ascension Bank and increase base Score by ' + scoreDisplay + '.'
    }
    if (player.challengecompletions[i] >= player.highestchallengecompletions[i] && player.highestchallengecompletions[i] < 10 && i > 10) {
        j.textContent = 'Gain 1 Wow! HYPERCUBE for completing this challenge (First Time Bonus)'
    }

    (i <= 10 && player.researches[150] > 0) ?
        (DOMCacheGetOrSet('toggleAutoChallengeIgnore').style.display = 'block', DOMCacheGetOrSet('toggleAutoChallengeIgnore').style.border = '2px solid green') :
        DOMCacheGetOrSet('toggleAutoChallengeIgnore').style.display = 'none';

    let constructor = 'ON'
    if (!player.autoChallengeToggles[i]) {
        constructor = 'OFF';
        DOMCacheGetOrSet('toggleAutoChallengeIgnore').style.border = '2px solid red'
    }
    DOMCacheGetOrSet('toggleAutoChallengeIgnore').textContent = 'Automatically Run Chal.' + i + ' [' + constructor + ']'

    const ella = DOMCacheGetOrSet('toggleAutoChallengeStart');
    (player.autoChallengeRunning) ?
        (ella.textContent = 'Auto Challenge Sweep [ON]', ella.style.border = '2px solid gold') :
        (ella.textContent = 'Auto Challenge Sweep [OFF]', ella.style.border = '2px solid red');
}

export const getChallengeConditions = (i?: number) => {
    if (player.currentChallenge.reincarnation === 9) {
        G['rune1level'] = 1;
        G['rune2level'] = 1;
        G['rune3level'] = 1;
        G['rune4level'] = 1;
        G['rune5level'] = 1;
        player.crystalUpgrades = [0, 0, 0, 0, 0, 0, 0, 0]
    }
    G['prestigePointGain'] = new Decimal('0')
    if (typeof i === 'number') {
        if (i >= 6){
            G['transcendPointGain'] = new Decimal('0')
        }
        if (i >= 11){
            G['reincarnationPointGain'] = new Decimal('0')
        }
    }
    calculateRuneLevels();
}

export const toggleRetryChallenges = () => {
    DOMCacheGetOrSet('retryChallenge').textContent = player.retrychallenges
        ? 'Retry Challenges: OFF'
        : 'Retry Challenges: ON';

    player.retrychallenges = !player.retrychallenges;
}

export const highestChallengeRewards = (chalNum: number, highestValue: number) => {
    let multiplier = 1 / 10
    if (chalNum >= 6) {
        multiplier = 1;
    }
    if (player.ascensionCount === 0) {
        player.worlds.add(1 + Math.floor(highestValue * multiplier) * 100 / 100)
    }
}

//Works to mitigate the difficulty of calculating challenge multipliers when considering softcapping
export const calculateChallengeRequirementMultiplier = (
    type: 'transcend' | 'reincarnation' | 'ascension',
    completions: number,
    special = 0
) => {
    let requirementMultiplier = Math.max(
        1,
        G['hyperchallengedMultiplier'][player.usedCorruptions[4]] / (1 + player.platonicUpgrades[8] / 2.5)
    );
    if (type === 'ascension') {
        //Normalize back to 1 if looking at ascension challenges in particular.
        requirementMultiplier = 1;
    }
    switch (type) {
        case 'transcend':
            requirementMultiplier *= G['challenge15Rewards'].transcendChallengeReduction;

            (completions >= 75) ?
                requirementMultiplier *= Math.pow(1 + completions, 12) / Math.pow(75, 8) :
                requirementMultiplier *= Math.pow(1 + completions, 2);

            if (completions >= 1000) {
                requirementMultiplier *= 10 * Math.pow(completions / 1000, 3)
            }
            if (completions >= 9000) {
                requirementMultiplier *= 1337
            }
            return (requirementMultiplier)
        case 'reincarnation':
            if (completions >= 100 && (special === 9 || special === 10)) {
                requirementMultiplier *= Math.pow(1.05, (completions - 100) * (1 + (completions - 100) / 20))
            }
            if (completions >= 90) {
                if (special === 6) {
                    requirementMultiplier *= 100
                } else if (special == 7) {
                    requirementMultiplier *= 50
                } else if (special == 8) {
                    requirementMultiplier *= 10
                } else {
                    requirementMultiplier *= 4
                }
            }
            if (completions >= 80) {
                if (special === 6) {
                    requirementMultiplier *= 50
                } else if (special === 7) {
                    requirementMultiplier *= 20
                } else if (special === 8) {
                    requirementMultiplier *= 4
                } else {
                    requirementMultiplier *= 2
                }
            }
            if (completions >= 70){
                if (special === 6) {
                    // Multiplier is reduced significantly for challenges requiring mythos shards
                    requirementMultiplier *= 20
                } else if (special === 7) {
                    requirementMultiplier *= 10
                } else if (special === 8) {
                    requirementMultiplier *= 2
                } else {
                    requirementMultiplier *= 1
                }
            }
            if (completions >= 60){
                if (special === 9 || special === 10) {
                    requirementMultiplier *= Math.pow(1000, (completions - 60) * (1 - 0.01 * player.shopUpgrades.challengeTome - 0.01 * player.shopUpgrades.challengeTome2) / 10)
                }
            }
            if (completions >= 25){
                requirementMultiplier *= Math.pow(1 + completions, 5) / 625
            }
            if (completions < 25){
                requirementMultiplier *= Math.min(Math.pow(1 + completions, 2), Math.pow(1.3797, completions));
            }
            requirementMultiplier *= G['challenge15Rewards'].reincarnationChallengeReduction
            return requirementMultiplier
        case 'ascension':
            if (special !== 15) {
                (completions >= 10) ?
                    requirementMultiplier *= (2 * (1 + completions) - 10) :
                    requirementMultiplier *= (1 + completions);
            } else {
                requirementMultiplier *= Math.pow(1.10, completions);
            }
            return (requirementMultiplier)
    }
}

/**
 * Works to mitigate the difficulty of calculating challenge reward multipliers when considering softcapping
 */
export const CalcECC = (type: 'transcend' | 'reincarnation' | 'ascension', completions: number) => { // ECC stands for "Effective Challenge Completions"
    let effective = 0;
    switch (type) {
        case 'transcend':
            effective += Math.min(100, completions);
            effective += 1 / 20 * (Math.min(1000, Math.max(100, completions)) - 100);
            effective += 1 / 100 * (Math.max(1000, completions) - 1000)
            return (effective);
        case 'reincarnation':
            effective += Math.min(25, completions);
            effective += 1 / 2 * (Math.min(75, Math.max(25, completions)) - 25);
            effective += 1 / 10 * (Math.max(75, completions) - 75)
            return (effective);
        case 'ascension':
            effective += Math.min(10, completions);
            effective += 1 / 2 * (Math.max(10, completions) - 10);
            return (effective);
    }
}

export const challengeRequirement = (challenge: number, completion: number, special = 0) => {
    const base = G['challengeBaseRequirements'][challenge-1];
    if (challenge <= 5) {
        return Decimal.pow(10, base * calculateChallengeRequirementMultiplier('transcend', completion, special))
    } else if (challenge <= 10) {
        let c10Reduction = 0;
        if (challenge === 10) {
            c10Reduction = (1e8 * (player.researches[140] + player.researches[155] + player.researches[170] + player.researches[185]) + 2e7 * (player.shopUpgrades.challengeTome + player.shopUpgrades.challengeTome2))
        }
        return Decimal.pow(10, (base - c10Reduction) * calculateChallengeRequirementMultiplier('reincarnation', completion, special))
    } else if (challenge <= 14) {
        return calculateChallengeRequirementMultiplier('ascension', completion, special)
    } else if (challenge === 15) {
        return Decimal.pow(10, 1 * Math.pow(10, 33) * calculateChallengeRequirementMultiplier('ascension', completion, special))
    } else {
        return 0
    }
}

/**
 * Function that handles the autochallenge feature.
 * Currently includes ability to enter a challenge, leave a challenge
 * and start a challenge loop with specified challenges from index 1 to 10.
 * @param dt
 * @returns none
 */
export const runChallengeSweep = (dt: number) => {
    // Do not run if any of these conditions hold
    if (
        player.researches[150] === 0 || // Research 6x25 is 0
        !player.autoChallengeRunning // Auto challenge is toggled off
    ) {
        return
    }

    // Increment auto challenge timer
    G['autoChallengeTimerIncrement'] += dt;

    // Determine what Action you can take with the current state of the savefile
    let action = 'none';
    if (player.currentChallenge.reincarnation !== 0 ||
        player.currentChallenge.transcension !== 0) {
        // If you are in a challenge, you'd only want the automation to exit the challenge
        action = 'exit';
    } else if (player.autoChallengeIndex === 1) {
        // If the index is set to 1, then you are at the start of a loop
        action = 'start';
    } else {
        // If neither of the above are true, automation will want to enter a challenge
        action = 'enter';
    }

    // Action: Exit challenge
    if (G['autoChallengeTimerIncrement'] >= player.autoChallengeTimer.exit && action === 'exit') {

        // Determine if you're in a reincarnation or transcension challenge
        const challengeType = player.currentChallenge.reincarnation !== 0 ? 'reincarnation' : 'transcension';

        // Reset our autochallenge timer
        G['autoChallengeTimerIncrement'] = 0;

        // Increment our challenge index for when we enter (or start) next challenge
        const nowChallenge = player.autoChallengeIndex;
        const nextChallenge = getNextChallenge(nowChallenge + 1);

        // If the next challenge is a same challenge, you do not need to change it.
        if (nowChallenge === nextChallenge) {
            return;
        }

        // Reset based on challenge type
        if (challengeType === 'transcension') {
            void resetCheck('transcensionChallenge', undefined, true);
        }
        if (challengeType === 'reincarnation') {
            void resetCheck('reincarnationChallenge', undefined, true);
        }

        // If you don't need to start all the challenges, the challenges will end.
        if (nextChallenge <= 10) {
            /* If the next challenge is before the current challenge,
               it will be in 'START' mode, otherwise it will be in 'ENTER' mode. */
            if (nextChallenge < nowChallenge) {
                player.autoChallengeIndex = 1;
                toggleAutoChallengeModeText('START');
            } else {
                player.autoChallengeIndex = nextChallenge;
                toggleAutoChallengeModeText('ENTER');
            }
        }
        return;
    }

    // Action: Enter a challenge (not inside one)
    if ((G['autoChallengeTimerIncrement'] >= player.autoChallengeTimer.start && action === 'start') || (G['autoChallengeTimerIncrement'] >= player.autoChallengeTimer.enter && action === 'enter')) {

        // Reset our autochallenge timer
        G['autoChallengeTimerIncrement'] = 0;

        // This calculates which challenge this algorithm will run first, based on
        // the first challenge which has automation toggled ON
        const nowChallenge = player.autoChallengeIndex;
        const nextChallenge = getNextChallenge(nowChallenge);

        // Do not start the challenge if all the challenges have been completed.
        if (nextChallenge === 11) {
            return;
        }

        // Set our index to calculated starting challenge and run the challenge
        player.autoChallengeIndex = nextChallenge;
        toggleChallenges(player.autoChallengeIndex, true);

        // Sets Mode to "EXIT" as displayed in the challenge tab
        toggleAutoChallengeModeText('EXIT');
        return;
    }
}

// Look for the next uncompleted challenge.
const getNextChallenge = (startChallenge: number) => {
    let nextChallenge = startChallenge;
    /* Calculate the smallest challenge index we want to enter.
       Our minimum is the current index, but if that challenge is fully completed
       or toggled off we shouldn't run it, so we increment upwards in these cases. */
    for (let index = nextChallenge; index <= 10; index++) {
        if (!player.autoChallengeToggles[index] ||
            player.highestchallengecompletions[index] >= getMaxChallenges(index)) {
            nextChallenge += 1;
        } else {
            break;
        }
    }

    /* If the above algorithm sets the index above 10, the loop is complete
       and thus do not need to enter more challenges. This sets our index to 1
       so in the next iteration it knows we want to start a loop. */
    if (nextChallenge > 10) {
        // If the challenge reaches 11 or higher, return it to 1 and check again.
        nextChallenge = 1;
        for (let index = nextChallenge; index <= 10; index++) {
            if (!player.autoChallengeToggles[index] ||
                player.highestchallengecompletions[index] >= getMaxChallenges(index)) {
                nextChallenge += 1;
            } else {
                break;
            }
        }
    }
    return nextChallenge;
}

export const challenge15ScoreMultiplier = () => {
    const arr = [
        1 + 5/10000 * hepteractEffective('challenge'), // Challenge Hepteract
        1 + 0.25 * player.platonicUpgrades[15] // Omega Upgrade
    ]
    return productContents(arr)
}
