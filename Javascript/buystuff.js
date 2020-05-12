function buyAccelerator(autobuyer=false){
	var autobuyamount = 0;
	if(autobuyer){autobuyamount = 1000}
	var buythisamount = Math.max(player.coinbuyamount, autobuyamount)
	while(player.coins.greaterThanOrEqualTo(player.acceleratorCost) && ticker < buythisamount) {

		player.coins = player.coins.sub(player.acceleratorCost);
		player.acceleratorCost = player.acceleratorCost.times(4);
		player.acceleratorCost = player.acceleratorCost.dividedBy(costDivisor);
		player.acceleratorBought += 1;
	
		if (player.acceleratorBought > (125 + 5 * player.challengecompletions.four)){
		player.acceleratorCost = player.acceleratorCost.times(4 * player.acceleratorBought - (500 + 20 * player.challengecompletions.four))
		}
		if (player.acceleratorBought > (2000 + 5 * player.challengecompletions.four)){
		player.acceleratorCost = player.acceleratorCost.times(Decimal.pow(2, player.acceleratorBought - (2000 + 5 * player.challengecompletions.four)))
		}

		if (player.currentChallenge == "four") {
		player.acceleratorCost = player.acceleratorCost.times(Decimal.pow(10, player.acceleratorBought))
        }
        if (player.currentChallengeRein == "eight"){
        player.acceleratorCost = player.acceleratorCost.times(Decimal.pow(1e50, player.acceleratorBought))
        }

		ticker++
	}
		ticker = 0;
		player.prestigenoaccelerator = false;
		player.transcendnoaccelerator = false;
		player.reincarnatenoaccelerator = false;
        updateAllTick();
        if (player.acceleratorBought >= 5 && player.achievements[148] == 0){achievementaward(148)} 
        if (player.acceleratorBought >= 25 && player.achievements[149] == 0){achievementaward(149)} 
        if (player.acceleratorBought >= 100 && player.achievements[150] == 0){achievementaward(150)} 
        if (player.acceleratorBought >= 666 && player.achievements[151] == 0){achievementaward(151)} 
        if (player.acceleratorBought >= 2000 && player.achievements[152] == 0){achievementaward(152)} 
        if (player.acceleratorBought >= 12500 && player.achievements[153] == 0){achievementaward(153)} 
        if (player.acceleratorBought >= 100000 && player.achievements[154] == 0){achievementaward(154)} 

	}

function buyMultiplier(autobuyer=false){
	var autobuyamount = 0;
	if(autobuyer){autobuyamount = 1000}
	var buythisamount = Math.max(player.coinbuyamount, autobuyamount)
	while(player.coins.greaterThanOrEqualTo(player.multiplierCost) && ticker < buythisamount) {
		player.coins = player.coins.sub(player.multiplierCost);
		player.multiplierBought += 1;
		player.multiplierCost = player.multiplierCost.times(10);
		player.multiplierCost = player.multiplierCost.dividedBy(costDivisor);

		if (player.multiplierBought > (75 + 2 * player.challengecompletions.four)){
		player.multiplierCost = player.multiplierCost.times(10 * player.multiplierBought - (750 + 20 * player.challengecompletions.four))
		}
		if (player.multiplierBought > (2000 + 2 * player.challengecompletions.four)){
		player.multiplierCost = player.multiplierCost.times(Decimal.pow(2, player.multiplierBought - (2000 + 2 * player.challengecompletions.four)))
		}
		if (player.currentChallenge == "four") {
		player.multiplierCost = player.multiplierCost.times(Decimal.pow(10, player.multiplierBought))
        }
        if (player.currentChallengeRein == "eight") {
        player.multiplierCost = player.multiplierCost.times(Decimal.pow(1e50, player.multiplierBought))
        }
		ticker++
	}
		ticker = 0;
		player.prestigenomultiplier = false;
		player.transcendnomultiplier = false;
		player.reincarnatenomultiplier = false;

        updateAllMultiplier();
        if (player.multiplierBought >= 2 && player.achievements[155] == 0){achievementaward(155)}
        if (player.multiplierBought >= 20 && player.achievements[156] == 0){achievementaward(156)}
        if (player.multiplierBought >= 100 && player.achievements[157] == 0){achievementaward(157)}
        if (player.multiplierBought >= 500 && player.achievements[158] == 0){achievementaward(158)}
        if (player.multiplierBought >= 2000 && player.achievements[159] == 0){achievementaward(159)}
        if (player.multiplierBought >= 12500 && player.achievements[160] == 0){achievementaward(160)}
        if (player.multiplierBought >= 100000 && player.achievements[161] == 0){achievementaward(161)}

	}
	
function buyProducer(pos,type,num,autobuyer=false) {
	var autobuyamount = 0;
    var r = 1;
    var tag = ""
	r += 1/400 * player.runelevels[3]
	r += 1/200 * (player.researches[56] + player.researches[57] + player.researches[58] + player.researches[59] + player.researches[60])
	r += 1/200 * player.challengecompletions.four
	if (type == 'Diamonds'){tag = "prestigePoints"; var amounttype = "crystal"}
	if (type == 'Mythos'){tag = "transcendPoints"; var amounttype = "mythos"}
	if (type == 'Particles') {tag = "reincarnationPoints"; var amounttype = "particle"}
	if (type == "Coin") {tag = "coins"; var amounttype = "coin"}
	if (autobuyer){autobuyamount = 1000}
	var buythisamount = Math.max(autobuyamount, player[amounttype + 'buyamount'])
		while(player[tag].greaterThanOrEqualTo(player[pos + 'Cost' + type]) && ticker < buythisamount) {
			player[tag] = player[tag].sub(player[pos + 'Cost' + type]);
			player[pos + 'Owned' + type] += 1;
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(1.25, num));
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].add(1);
			if (player[pos + 'Owned' + type] >= (1000 * r)){
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(player[pos + 'Owned' + type]).dividedBy(1000).times(1 + num/2);
			}
			if (player[pos + 'Owned' + type] >= (5000 * r)){
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(player[pos + 'Owned' + type]).times(10).times(10 + num * 10);
			 }  
			if (player[pos + 'Owned' + type] >= (20000 * r)){
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(player[pos + 'Owned' + type], 3)).times(100000).times(100 + num * 100)  
			 }
			if (player.currentChallenge == "four" && (type == "Coin" || type == "Diamonds")) {
				 player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Math.pow(100 * player[pos + 'Owned' + type] + 10000, 1.25 + 1/4 * player.challengecompletions.four));
				 if (player[pos + 'Owned' + type] >= 1000 - (10 * player.challengecompletions.four)) {
					player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(1.25, player[pos + 'Owned' + type]));
				 }
                 }
            if (player.currentChallengeRein == "eight" && (type == "Coin" || type == "Diamonds" || type == "Mythos")){
                player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(100, player[pos + 'Owned' + type]));
            }
				 ticker += 1;
			 }
			 ticker = 0;
			if (player.firstOwnedCoin >= 1 && player.achievements[1] < 0.5) {achievementaward(1)}
			if (player.firstOwnedCoin >= 10 && player.achievements[2] < 0.5) {achievementaward(2)}
			if (player.firstOwnedCoin >= 100 && player.achievements[3] < 0.5) {achievementaward(3)}
			if (player.firstOwnedCoin >= 1000 && player.achievements[4] < 0.5) {achievementaward(4)}
			if (player.firstOwnedCoin >= 5000 && player.achievements[5] < 0.5) {achievementaward(5)}
			if (player.firstOwnedCoin >= 10000 && player.achievements[6] < 0.5) {achievementaward(6)}
			if (player.firstOwnedCoin >= 20000 && player.achievements[7] < 0.5) {achievementaward(7)}
			if (player.secondOwnedCoin >= 1 && player.achievements[8] < 0.5) {achievementaward(8)}
            if (player.secondOwnedCoin >= 10 && player.achievements[9] < 0.5) {achievementaward(9)}
            if (player.secondOwnedCoin >= 100 && player.achievements[10] < 0.5) {achievementaward(10)}
            if (player.secondOwnedCoin >= 1000 && player.achievements[11] < 0.5) {achievementaward(11)}
            if (player.secondOwnedCoin >= 5000 && player.achievements[12] < 0.5) {achievementaward(12)}
            if (player.secondOwnedCoin >= 10000 && player.achievements[13] < 0.5) {achievementaward(13)}
			if (player.secondOwnedCoin >= 20000 && player.achievements[14] < 0.5) {achievementaward(14)}
			if (player.thirdOwnedCoin >= 1 && player.achievements[15] < 0.5) {achievementaward(15)}
            if (player.thirdOwnedCoin >= 10 && player.achievements[16] < 0.5) {achievementaward(16)}
            if (player.thirdOwnedCoin >= 100 && player.achievements[17] < 0.5) {achievementaward(17)}
            if (player.thirdOwnedCoin >= 1000 && player.achievements[18] < 0.5) {achievementaward(18)}
            if (player.thirdOwnedCoin >= 5000 && player.achievements[19] < 0.5) {achievementaward(19)}
            if (player.thirdOwnedCoin >= 10000 && player.achievements[20] < 0.5) {achievementaward(20)}
			if (player.thirdOwnedCoin >= 20000 && player.achievements[21] < 0.5) {achievementaward(21)}
			if (player.fourthOwnedCoin >= 1 && player.achievements[22] < 0.5) {achievementaward(22)}
            if (player.fourthOwnedCoin >= 10 && player.achievements[23] < 0.5) {achievementaward(23)}
            if (player.fourthOwnedCoin >= 100 && player.achievements[24] < 0.5) {achievementaward(24)}
            if (player.fourthOwnedCoin >= 1000 && player.achievements[25] < 0.5) {achievementaward(25)}
            if (player.fourthOwnedCoin >= 5000 && player.achievements[26] < 0.5) {achievementaward(26)}
            if (player.fourthOwnedCoin >= 10000 && player.achievements[27] < 0.5) {achievementaward(27)}
			if (player.fourthOwnedCoin >= 20000 && player.achievements[28] < 0.5) {achievementaward(28)}
			if (player.fifthOwnedCoin >= 1 && player.achievements[29] < 0.5) {achievementaward(29)}
            if (player.fifthOwnedCoin >= 10 && player.achievements[30] < 0.5) {achievementaward(30)}
            if (player.fifthOwnedCoin >= 66 && player.achievements[31] < 0.5) {achievementaward(31)}
            if (player.fifthOwnedCoin >= 666 && player.achievements[32] < 0.5) {achievementaward(32)}
            if (player.fifthOwnedCoin >= 6666 && player.achievements[33] < 0.5) {achievementaward(33)}
            if (player.fifthOwnedCoin >= 17777 && player.achievements[34] < 0.5) {achievementaward(34)}
			if (player.fifthOwnedCoin >= 42777 && player.achievements[35] < 0.5) {achievementaward(35)}
	}

function buyResearch(index) {
    let buyamount = 1;
    let i = 1;
    if (maxbuyresearch){buyamount = 1000}
		while(player.researches[index] < researchMaxLevels[index] && player.researchPoints >= (researchBaseCosts[index]) && buyamount >= i) {
			player.researchPoints -= researchBaseCosts[index]
			player.researches[index] += 1;
			researchfiller2 = "Level: " + player.researches[index] + "/" + researchMaxLevels[index]
			researchdescriptions(index)

			if (index == 47 && player.unlocks.rrow1 == false) {player.unlocks.rrow1 = true; revealStuff()}
			if (index == 48 && player.unlocks.rrow2 == false) {player.unlocks.rrow2 = true; revealStuff()}
			if (index == 49 && player.unlocks.rrow3 == false) {player.unlocks.rrow3 = true; revealStuff()}
			if (index == 50 && player.unlocks.rrow4 == false) {player.unlocks.rrow4 = true; revealStuff()}
            i++
        }
    }

function buyUpgrades(type, pos, state) {
		var addendum = ""
		if (type == "prestige" || type == "transcend" || type == "reincarnation") {
			addendum = "Point"
		} 		
		if (player[type + addendum + 's'].greaterThanOrEqualTo(Decimal.pow(10, upgradeCosts[pos])) && player.upgrades[pos] < 0.5) {
			player[type + addendum + 's'] = player[type + addendum + 's'].sub(Decimal.pow(10, upgradeCosts[pos]))
			player.upgrades[pos] = 1;
			upgradeupdate(pos, state)
		}

		if (type == "transcend") {
			player.reincarnatenocoinprestigeortranscendupgrades = false;
			player.reincarnatenocoinprestigetranscendorgeneratorupgrades = false;
		}
		if (type == "prestige") {
			player.transcendnocoinorprestigeupgrades = false;
			player.reincarnatenocoinorprestigeupgrades = false;
			player.reincarnatenocoinprestigeortranscendupgrades = false;
			player.reincarnatenocoinprestigetranscendorgeneratorupgrades = false;
		}
		if (type == "coin") {
			player.prestigenocoinupgrades = false;
			player.transcendnocoinupgrades = false;
			player.transcendnocoinorprestigeupgrades = false;
			player.reincarnatenocoinupgrades = false;
			player.reincarnatenocoinorprestigeupgrades = false;
			player.reincarnatenocoinprestigeortranscendupgrades = false;
			player.reincarnatenocoinprestigetranscendorgeneratorupgrades = false;
		}

	}
	
function buyCrystalUpgrades(i) {
	var u = i - 1
	var c = 0
	c += Math.floor(player.runelevels[2]/10 * (1 + player.researches[5] /10) * (1 + player.researches[21]/800)) * 100/100
	if (player.upgrades[73] > 0.5 && player.currentChallengeRein !== "") {c += 10}
	if (player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[u] + crystalUpgradeCostIncrement[u] * Math.floor(Math.pow(player.crystalUpgrades[u] + 0.5 - c, 2) /2))))) {
		player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[u] + crystalUpgradeCostIncrement[u] * Math.floor(Math.pow(player.crystalUpgrades[u] + 0.5 -c, 2)/2))));
		player.crystalUpgrades[u] += 1;

	}
	crystalupgradedescriptions(i)
}	
function boostAccelerator(automated = false) {
	var buyamount = 1;
	if (player.upgrades[46] == 1) {
	buyamount = player.coinbuyamount;
	if (automated == true) {buyamount = 9999};
	}
		while(player.prestigePoints.greaterThanOrEqualTo(player.acceleratorBoostCost) && ticker < buyamount) {
				if (player.prestigePoints.greaterThanOrEqualTo(player.acceleratorBoostCost)) {
					player.acceleratorBoostBought += 1;
					player.acceleratorBoostCost = player.acceleratorBoostCost.times(1e10).times(Decimal.pow(10, player.acceleratorBoostBought));
					if (player.acceleratorBoostBought > 1000) {player.acceleratorBoostCost = player.acceleratorBoostCost.times(Decimal.pow(10, Math.pow(player.acceleratorBoostBought - 1000, 2)))}
					player.transcendnoaccelerator = false;
					player.reincarnatenoaccelerator = false;
					if (player.upgrades[46] < 0.5) {
						var j
						for (j = 21; j < 41; j++) {
							player.upgrades[j] = 0;
						}
						reset(1);
						player.prestigePoints = new Decimal(0);
					}
				}
				ticker++
			}
                ticker = 0;
    if (player.acceleratorBoostBought >= 2 && player.achievements[162] == 0){achievementaward(162)}
    if (player.acceleratorBoostBought >= 10 && player.achievements[163] == 0){achievementaward(163)}
    if (player.acceleratorBoostBought >= 50 && player.achievements[164] == 0){achievementaward(164)}
    if (player.acceleratorBoostBought >= 200 && player.achievements[165] == 0){achievementaward(165)}
    if (player.acceleratorBoostBought >= 1000 && player.achievements[166] == 0){achievementaward(166)}
    if (player.acceleratorBoostBought >= 5000 && player.achievements[167] == 0){achievementaward(167)}
    if (player.acceleratorBoostBought >= 15000 && player.achievements[168] == 0){achievementaward(168)}


	}