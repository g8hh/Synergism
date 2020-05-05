
    function resettimers() {
        player.prestigecounter += 0.05;
        player.transcendcounter += 0.05;
        player.reincarnationcounter += 0.05;
    }
    
    function displayruneinformation(i,updatelevelup = true) {
        var m = 1;
            m *= (1 + player.researches[4]/10) * (1 + player.researches[21]/800)
        if (i == 1) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "+1 Accelerator, +0.5% Accelerators per level. +1 Accelerator Boost every 10 levels!"}
            document.getElementById("runeshowpower1").textContent = "Speed Rune Bonus: " + "+" + format(Math.floor(player.runelevels[0] * m)) + " Accelerators, +" + (player.runelevels[0]/2  * m).toPrecision(2) +"% Accelerators, +" + format(Math.floor(player.runelevels[0]/10 * m)) + " Accelerator Boosts."
        }
        if (i == 2) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "~(Level^2/100) Multipliers, +0.5% Multipliers per level. Tax growth is delayed more for each level!"}
            document.getElementById("runeshowpower2").textContent = "Duplication Rune Bonus: " + "+" + format(Math.floor(player.runelevels[1] * m / 10) * Math.floor(10 + player.runelevels[1] * m /10) / 2) + " Multipliers, +" + format(m *player.runelevels[1]/2) +"% Multipliers, -" + (100 * (1 - Math.pow(10, - player.runelevels[1]/500))).toPrecision(4)  + "% Tax Growth."
        }
        if (i == 3) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "~(1 + Level^2 * 2^Level / 256)x Crystal Production. +1 free level for each Crystal upgrade per 10 levels!"}
            document.getElementById("runeshowpower3").textContent = "Prism Rune Bonus: " + "All Crystal Producer production multiplied by " + format(Decimal.pow(player.runelevels[2] * m, 2).times(Decimal.pow(2, player.runelevels[2] * m - 8).add(1))) + ", gain +" + format(Math.floor(player.runelevels[2]/10 * m)) + " free crystal levels."
        }
        if (i == 4) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "+0.25% building cost growth delay per level, +0.125% offering recycle chance per level [MAX: 25%]"}
            document.getElementById("runeshowpower4").textContent = "Thrift Rune Bonus: " + "Delay all producer cost increases by " + (player.runelevels[3]/4 * m).toPrecision(3) + "% buildings. Increase offering recycling chance: " + player.runelevels[3]/8 + "%."
        }
       
        
    }


    function resetofferings(i) {
        var q = 0
        var a = 0
        var b = 0
        var c = 0
        if (i >= 3) {
            a += 15 
            if (player.achievements[51] > 0.5) {a += (25 * Math.min(1, player.reincarnationcounter/1800))}
            if (player.upgrades[62] > 0.5) {a += 1/5 * (player.challengecompletions.one + player.challengecompletions.two + player.challengecompletions.three + player.challengecompletions.four + player.challengecompletions.five + player.challengecompletions.six + player.challengecompletions.seven + player.challengecompletions.eight)}
            a += 3 * player.researches[25]
            a *= Math.pow(player.reincarnationcounter/600 * Math.pow(Math.min(1.5, player.reincarnationcounter/400),1), 0.7)
        }
        if (i >= 2) {
            b += 3
            if (player.reincarnationCount > 0) {b += 7}
            if (player.achievements[44] > 0.5) {b += (15 * Math.min(1, player.transcendcounter/1800))}
            b += 1 * player.researches[24]
            b *= Math.pow(player.transcendcounter/540 * Math.pow(Math.min(1.25, player.transcendcounter/480), 1), 0.6)
        }
        if (i >= 1) {
            c += 1
            if (player.transcendCount > 0 || player.reincarnationCount > 0) {c += 2}
            if (player.reincarnationCount > 0) {c += 2}
            if (player.achievements[37] > 0.5) {c += (15 * Math.min(1, player.prestigecounter/1800))}
            c += 1 * player.researches[24]
            c *= Math.pow(player.prestigecounter/480 * Math.pow(Math.min(1, player.prestigecounter/600), 1), 0.5)
        }
        q = a + b + c
        if (player.achievements[33] > 0.5) {q *= 1.10}
        if (player.achievements[34] > 0.5) {q *= 1.15}
        if (player.achievements[35] > 0.5) {q *= 1.25}
        if (player.upgrades[75] > 0.5) {q *= (1 + 2 * Math.min(1, Math.pow(player.researchPoints/100000, 0.5)))}
        q = Math.floor(q) * 100/100
        player.runeshards += q
    }

    function redeemshards(i) {
        u = i - 1;
        for (var f = 1; f <= player.offeringbuyamount; f++) {
        if (player.runeshards >= 1) {
        var r = 1;
        var s = 0;
        if (u == 0 || (u == 1 && player.achievements[38] == 1) || (u == 2 && player.achievements[44] == 1) || (u == 3 && player.achievements[102] == 1)){    
        if (player.challengecompletions.six > 0.5 && u == 3) {r -= 0.02 * player.challengecompletions.six}
        if (player.challengecompletions.seven > 0.5 && (u == 0 || u == 1)) {r -= 0.02 * player.challengecompletions.seven}
        if (player.upgrades[71] > 0.5) {s += player.runelevels[u]}

        player.runeshards -= 1;
        player.runeexp[u] += 25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s;
            if (player.upgrades[66] > 0.5) {
                player.runeexp[0] += 3
                if (player.achievements[38] > 0.5) {player.runeexp[1] += 3}
                if (player.achievements[44] > 0.5) {player.runeexp[2] += 3}
                if (player.achievements[102] > 0.5) {player.runeexp[3] += 3}
                for (var k = 0; k < 4; k++) {if (player.runeexp[k] >= (runeexpbase[k] * Math.pow(player.runelevels[k], 3) * ((4 * player.runelevels[k]) + 100)/500 * r) && player.runelevels[k] < 200) {player.runelevels[k] += 1; var p = k + 1; displayruneinformation(p, false); submitRuneStats(p)}}  
            }
        
        var a = Math.random()
        if (a > 1 - 0.05 * player.achievements[79] - 0.05 * player.achievements[86] - 0.05 * player.achievements[93] - 0.05 * player.achievements[100] - 0.05 * player.achievements[107] - 0.05 * player.achievements[114] - 0.10 * player.achievements[121] - 0.10 * player.achievements[128] - 0.05 * player.upgrades[61] - player.runelevels[3]/800) {player.runeshards += 1}
        while (player.runeexp[u] >= (runeexpbase[u] * Math.pow(player.runelevels[u], 3) * ((4 * player.runelevels[u]) + 100)/500 * r) && player.runelevels[u] < 500){
            player.runelevels[u] += 1; submitRuneStats(i)
        }
        displayruneinformation(i)
    }
    }
    }
}

function submitRuneStats(i) {
    if (i == 1){kongregate.stats.submit("runeone", player.runelevels[0])}
    if (i == 2){kongregate.stats.submit("runetwo", player.runelevels[1])}
    if (i == 3){kongregate.stats.submit("runethree", player.runelevels[2])}
    if (i == 4){kongregate.stats.submit("runefour", player.runelevels[3])}
}