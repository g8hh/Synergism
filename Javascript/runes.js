
    function resettimers() {
        player.prestigecounter += 0.05;
        player.transcendcounter += 0.05;
        player.reincarnationcounter += 0.05;
    }
    
    function displayruneinformation(i,updatelevelup) {
        updatelevelup = (updatelevelup === null || updatelevelup === undefined) ? true : updatelevelup;
        
        var m = effectiveLevelMult
        let SIMult1 = (1 + player.researches[83]/50);
        let SILevelMult = (1 + player.researches[84]/1000)
        let mult1 = (1 + player.researches[91]/100);
        let mult2 = (1 + player.researches[92]/100);
        let recycleMult = 1/(1 - 0.05 * player.achievements[80] - 0.05 * player.achievements[87] - 0.05 * player.achievements[94] - 0.05 * player.achievements[101] - 0.05 * player.achievements[108] - 0.05 * player.achievements[115] - 0.075 * player.achievements[122] - 0.075 * player.achievements[129] - 0.05 * player.upgrades[61] - Math.min(0.25,player.runelevels[3]/800))
        let s = 0;
        if (player.upgrades[71] == 1 && i == 1){s = player.runelevels[0]}
        if (player.upgrades[71] == 1 && i == 2){s = player.runelevels[1]}
        if (player.upgrades[71] == 1 && i == 3){s = player.runelevels[2]}
        if (player.upgrades[71] == 1 && i == 4){s = player.runelevels[3]}
        if (player.upgrades[71] == 1 && i == 5){s = player.runelevels[4]}
        

        if (i == 1) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "+1 Accelerator, +0.5% Accelerators per level. +1 Accelerator Boost every 10 levels!"}
            document.getElementById("runeshowpower1").textContent = "Speed Rune Bonus: " + "+" + format(Math.floor(player.runelevels[0] * m)) + " Accelerators, +" + (player.runelevels[0]/2  * m).toPrecision(4) +"% Accelerators, +" + format(Math.floor(player.runelevels[0]/10 * m)) + " Accelerator Boosts."
            if (updatelevelup)document.getElementById("runedisplayexp").textContent = "+" + format(recycleMult * mult1 * mult2 * (1 + player.researches[78]/250) * (25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s)) + " EXP per offering."
        }
        if (i == 2) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "~(floor(Level/10)) Multipliers every 10 levels, +0.5% Multipliers per level. Tax growth is delayed more for each level!"}
            document.getElementById("runeshowpower2").textContent = "Duplication Rune Bonus: " + "+" + format(Math.floor(player.runelevels[1] * m / 10) * Math.floor(10 + player.runelevels[1] * m /10) / 2) + " Multipliers, +" + format(m *player.runelevels[1]/2) +"% Multipliers, -" + (100 * (1 - Math.pow(6, - (player.runelevels[1] * m)/500))).toPrecision(4)  + "% Tax Growth."
            if (updatelevelup)document.getElementById("runedisplayexp").textContent = "+" + format(recycleMult * mult1 * mult2 * (1 + player.researches[80]/250) * (25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s)) + " EXP per offering."
        }
        if (i == 3) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "~(1 + Level^2 * 2^Level / 256)x Crystal Production. +1 free level for each Crystal upgrade per 10 levels!"}
            document.getElementById("runeshowpower3").textContent = "Prism Rune Bonus: " + "All Crystal Producer production multiplied by " + format(Decimal.pow(player.runelevels[2] * m, 2).times(Decimal.pow(2, player.runelevels[2] * m - 8).add(1))) + ", gain +" + format(Math.floor(player.runelevels[2]/10 * m)) + " free crystal levels."
            if (updatelevelup)document.getElementById("runedisplayexp").textContent = "+" + format(recycleMult * mult1 * mult2 * (1 + player.researches[79]/250) * (25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s)) + " EXP per offering."
        }
        if (i == 4) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "+0.25% building cost growth delay per level, +0.125% offering recycle chance per level [MAX: 25%], 2^((200 - Level)/550) Tax growth multiplier AFTER level 200"}
            document.getElementById("runeshowpower4").textContent = "Thrift Rune Bonus: " + "Delay all producer cost increases by " + (player.runelevels[3]/4 * m).toPrecision(3) + "%. Offering recycle chance +: " + Math.min(25,player.runelevels[3]/8) + "%. -" + (100 * (1 - Math.pow(4, Math.min(0, (200 - player.runelevels[3])/550)))).toPrecision(4) + "% Tax Growth"
            if (updatelevelup)document.getElementById("runedisplayexp").textContent = "+" + format(recycleMult * mult1 * mult2 * (1 + player.researches[77]/250) * (25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s)) + " EXP per offering."
        }
        if (i == 5) {
            if (updatelevelup) {document.getElementById("runeshowlevelup").textContent = "~(2^(level/150) * (1 + level/500))x Obtainium, Level^1.5 Ant Hatch Speed, +0.125 Base Reincarnation offerings"}
            document.getElementById("runeshowpower5").textContent = "S. Intellect Rune Bonus: " + "Obtainium gain +" + (100 * (1 + player.runelevels[4]/500 * m * SILevelMult) * Math.pow(2, player.runelevels[4] * m * SILevelMult/150) - 100).toPrecision(3) + "%. Ant Speed: x" + format(Math.pow(player.runelevels[4] * m * SILevelMult, 1.5)) + ". Offering timer extension: +" + (player.runelevels[4] * 0.4).toFixed(2) + " seconds."
            if (updatelevelup)document.getElementById("runedisplayexp").textContent = "+" + format(recycleMult * SIMult1 * mult1 * mult2 * (25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s)) + " EXP per offering."
        }
       
        
    }


    function resetofferings(i) {
        var q = 0
        var a = 0
        var b = 0
        var c = 0
        let persecond = 0;
        if (i >= 3) {
            a += 15
            if (player.achievements[52] > 0.5) {
                a += (25 * Math.min(player.reincarnationcounter/1800, 1))
            }
            if (player.upgrades[62] > 0.5) {
                a += 1 / 5 * (player.challengecompletions.one + player.challengecompletions.two + player.challengecompletions.three + player.challengecompletions.four + player.challengecompletions.five + player.challengecompletions.six + player.challengecompletions.seven + player.challengecompletions.eight)
            }
            a += 3 * player.researches[25]
            if (player.researches[95] == 1){
                a += 40
            }
            a *= Math.pow(player.reincarnationcounter / 600 * Math.pow(Math.min(optimalOfferingTimer/400, player.reincarnationcounter / 400), 1), 0.7)
    
        }
        if (i >= 2) {
            b += 3
            if (player.reincarnationCount > 0) {b += 7}
            if (player.achievements[44] > 0.5) {b += (15 * Math.min(1, player.transcendcounter/1800))}
            b += 1 * player.researches[24]
            b *= Math.pow(player.transcendcounter/540 * Math.pow(Math.min(optimalOfferingTimer/480, player.transcendcounter/480), 1), 0.6)
        }
        if (i >= 1) {
            c += 1
            if (player.transcendCount > 0 || player.reincarnationCount > 0) {c += 2}
            if (player.reincarnationCount > 0) {c += 2}
            if (player.achievements[37] > 0.5) {c += (15 * Math.min(1, player.prestigecounter/1800))}
            c += 1 * player.researches[24]
            c *= Math.pow(player.prestigecounter/480 * Math.pow(Math.min(optimalOfferingTimer/600, player.prestigecounter/600), 1), 0.5)
        }
        q = a + b + c
        if (player.achievements[33] > 0.5) {q *= 1.10}
        if (player.achievements[34] > 0.5) {q *= 1.15}
        if (player.achievements[35] > 0.5) {q *= 1.25}
        if (player.upgrades[75] > 0.5 && player.maxobtainium !== undefined) {q *= (1 + 2 * Math.min(1, Math.pow(player.maxobtainium/30000000, 0.5)))}
        q *= (1 + 1/50 * player.shopUpgrades.offeringAutoLevel);
        q *= (1 + 1/100 * player.shopUpgrades.cashGrabLevel);
        q = Math.floor(q) * 100/100
        player.runeshards += q

        if (i==1){persecond = q / (1 + player.prestigecounter);}
        if (i==2){persecond = q / (1 + player.transcendcounter);}
        if (i==3){persecond = q / (1 + player.reincarnationcounter);}

        if (persecond > player.offeringpersecond){
            player.offeringpersecond = persecond;
        }
    }

    function redeemshards(i,auto=false) {
        u = i - 1;
        let res1mult = 1;
        let SIMult1 = 1;
        let res2mult = (1 + player.researches[91]/400);
        let res3mult = (1 + player.researches[92]/400);
        let amount = Math.min(player.runeshards, player.offeringbuyamount);
        if (auto){amount = Math.min(player.runeshards, Math.pow(2, 1 + player.shopUpgrades.offeringAutoLevel))}
        let recycleMult = 1/(1 - 0.05 * player.achievements[80] - 0.05 * player.achievements[87] - 0.05 * player.achievements[94] - 0.05 * player.achievements[101] - 0.05 * player.achievements[108] - 0.05 * player.achievements[115] - 0.075 * player.achievements[122] - 0.075 * player.achievements[129] - 0.05 * player.upgrades[61] - Math.min(0.25,player.runelevels[3]/800));
        let num = 0;
        if (u == 0){res1mult = (1 + player.researches[78]/250); num = 78};
        if (u == 1){res1mult = (1 + player.researches[80]/250); num = 80};
        if (u == 2){res1mult = (1 + player.researches[79]/250); num = 79};
        if (u == 3){res1mult = (1 + player.researches[77]/250); num = 77};
        if (u == 4){res1mult = 1; SIMult1 = (1 + player.researches[83]/50)};
        if (player.runeshards >= 1) {
        var r = 1;
        var s = 0;
        if (u == 0 || (u == 1 && player.achievements[38] == 1) || (u == 2 && player.achievements[44] == 1) || (u == 3 && player.achievements[102] == 1) || (u == 4 && player.researches[82] == 1)){    
        if (player.challengecompletions.six > 0.5 && u == 3) {r -= 0.02 * player.challengecompletions.six};
        if (player.challengecompletions.seven > 0.5 && (u == 0 || u == 1)) {r -= 0.02 * player.challengecompletions.seven};
        if (player.upgrades[71] > 0.5) {s += player.runelevels[u]}

        player.runeshards -= amount;
        player.runeexp[u] += amount * recycleMult * Math.floor((25 + 3 * player.researches[22] + 2 * player.researches[23] + 5 * player.upgrades[61] + s) * res1mult * res2mult * res3mult * SIMult1);
            if (player.upgrades[66] > 0.5) {
                player.runeexp[0] += 3 * amount * recycleMult
                if (player.achievements[38] > 0.5) {player.runeexp[1] += 3 * amount * recycleMult}
                if (player.achievements[44] > 0.5) {player.runeexp[2] += 3 * amount * recycleMult}
                if (player.achievements[102] > 0.5) {player.runeexp[3] += 3 * amount * recycleMult}
                if (player.researches[82] > 0.5){player.runeexp[4] += 3 * amount + recycleMult}
                for (var k = 0; k < 5; k++){
                    var m = 1
                    if (player.challengecompletions.six > 0.5 && k == 3) {m -= 0.02 * player.challengecompletions.six}
                    if (player.challengecompletions.seven > 0.5 && (k == 0 || k == 1)) {m -= 0.02 * player.challengecompletions.seven}

                    if (player.runeexp[k] >= (runeexpbase[k] * Math.pow(player.runelevels[k], 3) * ((4 * player.runelevels[k]) + 100)/500 * m) * Math.max(1, (player.runelevels[k] - 500)/25) * Math.max(1, (player.runelevels[k] - 600)/30) * Math.max(1, (player.runelevels[k]-700)/25) && player.runelevels[k] < 500) {
                        player.runelevels[k] += 1; var p = k + 1; displayruneinformation(p, false);
                    }
                }  
            }
        
        while (player.runeexp[u] >= (runeexpbase[u] * Math.pow(player.runelevels[u], 3) * ((4 * player.runelevels[u]) + 100)/500 * r) * Math.max(1, (player.runelevels[u] - 500)/25) * Math.max(1, (player.runelevels[u] - 600)/30) * Math.max(1, (player.runelevels[u]-700)/25) && player.runelevels[u] < (500 + player.researches[num])){
            player.runelevels[u] += 1;
        }
        displayruneinformation(i)
    }
    }

    }



