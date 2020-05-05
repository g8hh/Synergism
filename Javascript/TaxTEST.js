function calculatetax() {
    var a = new Decimal(0);
    var b = new Decimal(0);
    var c = 0;
    var d = 0;
    var e = 1;
    var f = 1;
    a = Math.floor(Decimal.log(player.coins.add(1), 10));
    b = Math.floor(Decimal.log(player.coins.add(1), 10));
    if (player.currentChallengeRein == "six") {
        e = 100 * (1 + player.challengecompletions.six / 10)
    }
    if (player.challengecompletions.six > 0.5) {
        f /= 1.075
    }
    if (a >= 1) {
        c = Math.floor(a * (a + 1) / 220)
    }
    if (b >= 500000) {
        d = (b - 500000) * 1000
    }
    taxdivisor = Decimal.pow(1.01, (c + d) * e * (1 - 1 / 20 * player.researches[51] - 1 / 40 * player.researches[52] - 1 / 80 * player.researches[53] - 1 / 160 * player.researches[54] - 1 / 320 * player.researches[55]) * (1 - 0.05 / 1800 * (player.achievements[45] + player.achievements[46] + 2 * player.achievements[47]) * Math.min(1800, player.prestigecounter)) * (1 - 0.02 * player.challengecompletions.six * Math.min(3.75 / 2, buildingPower - 1)) * (1 - 0.075 * Math.ceil(player.challengecompletions.six / 100)) * (Math.pow(10, 0 - player.runelevels[1] / 500)))
}

// Note that, for E < 1000 the tax is just 0, so we leave a 1.00 multiplier. For 1000 < E < 500,000 we denote tax as a dynamic progression from 1.01 to 5.00.
//If E > 500,000 we always want tax to be 5.