function toggleTabs(i) {
    currentTab = i;
    revealStuff();
    hideStuff();
}

function toggleSettings(i) {
    i++
    if (player.toggles[i] === true) {
        player.toggles[i] = false
    } else {
        player.toggles[i] = true
    }
    toggleauto();
}

function toggleChallenges(i, auto) {
    auto = auto || false
    if (player.currentChallenge.transcension === 0 && (i <= 5)) {
        player.currentChallenge.transcension = i;
        reset(2, false, "enterChallenge");
        player.transcendCount -= 1;
    }
    if ((player.currentChallenge.transcension === 0 && player.currentChallenge.reincarnation === 0) && (i >= 6 && i < 11)) {
        player.currentChallenge.reincarnation = i;
        reset(3, false, "enterChallenge");
        player.reincarnationCount -= 1;
    }
    if (player.challengecompletions[10] > 0) {
        if ((player.currentChallenge.transcension === 0 && player.currentChallenge.reincarnation === 0 && player.currentChallenge.ascension === 0) && (i >= 11)) {
            reset(4, false, "enterChallenge");
            player.currentChallenge.ascension = i;
            player.ascensionCount -= 1;

            if (player.currentChallenge.ascension === 12) {
                player.antPoints = new Decimal("8")
            }
            if (player.currentChallenge.ascension === 15){
                player.usedCorruptions[0] = 0;
                player.prototypeCorruptions[0] = 0;
                for (var i = 1; i <= 9; i++){
                    player.usedCorruptions[i] = 10;
                }
            }
        }
    }
    updateChallengeDisplay();
    getChallengeConditions();

    if (!auto && player.autoChallengeRunning) {
        toggleAutoChallengeRun();
    }

    if (player.currentChallenge.transcension !== 0 && player.currentChallenge.reincarnation !== 0 && player.currentChallenge.ascension !== 0 && player.achievements[238] < 1) {
        achievementaward(238)
    }
}


function toggleBuyAmount(quantity, type) {
    player[type + 'buyamount'] = quantity
    let a = ""
    if (quantity === 1) {
        a = "one"
    }
    if (quantity === 10) {
        a = "ten"
    }
    if (quantity === 100) {
        a = "hundred"
    }
    if (quantity === 1000) {
        a = "thousand"
    }


    let c = type + a
    let d = ""
    d = d + c

    document.getElementById(d).style.backgroundColor = "Green";
    if (quantity !== 1) {
        a = "one"
        d = type + a
        document.getElementById(d).style.backgroundColor = "Black"
    }
    if (quantity !== 10) {
        a = "ten"
        d = type + a
        document.getElementById(d).style.backgroundColor = "Black"
    }
    if (quantity !== 100) {
        a = "hundred"
        d = type + a
        document.getElementById(d).style.backgroundColor = "Black"
    }
    if (quantity !== 1000) {
        a = "thousand"
        d = type + a
        document.getElementById(d).style.backgroundColor = "Black"
    }
}

function toggleShops(i) {
    if (i === 1 && player.shoptoggles.coin === false) {
        player.shoptoggles.coin = true;
        document.getElementById("shoptogglecoin").textContent = "Auto: ON"
    } else if (i === 1 && player.shoptoggles.coin === true) {
        player.shoptoggles.coin = false;
        document.getElementById("shoptogglecoin").textContent = "Auto: OFF"
    }
    if (i === 2 && player.shoptoggles.prestige === false) {
        player.shoptoggles.prestige = true;
        document.getElementById("shoptoggleprestige").textContent = "Auto: ON"
    } else if (i === 2 && player.shoptoggles.prestige === true) {
        player.shoptoggles.prestige = false;
        document.getElementById("shoptoggleprestige").textContent = "Auto: OFF"
    }
    if (i === 3 && player.shoptoggles.transcend === false) {
        player.shoptoggles.transcend = true;
        document.getElementById("shoptoggletranscend").textContent = "Auto: ON"
    } else if (i === 3 && player.shoptoggles.transcend === true) {
        player.shoptoggles.transcend = false;
        document.getElementById("shoptoggletranscend").textContent = "Auto: OFF"
    }
    if (i === 4 && player.shoptoggles.generators === false) {
        player.shoptoggles.generators = true;
        document.getElementById("shoptogglegenerator").textContent = "Auto: ON"
    } else if (i === 4 && player.shoptoggles.generators === true) {
        player.shoptoggles.generators = false;
        document.getElementById("shoptogglegenerator").textContent = "Auto: OFF"
    }
    if (i === 5 && player.shoptoggles.reincarnate === false) {
        player.shoptoggles.reincarnate = true;
        document.getElementById("particleAutoUpgrade").textContent = "Auto: ON"
    } else if (i === 5 && player.shoptoggles.reincarnate === true) {
        player.shoptoggles.reincarnate = false;
        document.getElementById("particleAutoUpgrade").textContent = "Auto: OFF"
    }
}

function keyboardtabchange(i) {
    let q = 3;
    if (player.unlocks.coinfour === true) {
        q += 1
    }
    if (player.unlocks.prestige === true) {
        q += 1
    }
    if (player.unlocks.transcend === true) {
        q += 1
    }
    if (player.unlocks.reincarnate === true) {
        q += 1
    }
    if (player.challengecompletions[8] > 0) {
        q += 1
    }
    if (player.achievements[183]) {
        q++;
    }
    if (player.achievements[185]) {
        q++;
    }
    player.tabnumber += i
    if (player.tabnumber === q) {
        player.tabnumber = 1
    }
    if (player.tabnumber === 0) {
        player.tabnumber = q - 1
    }

    if (player.tabnumber === 1) {
        toggleTabs("buildings")
    }
    if (player.tabnumber === 2) {
        toggleTabs("upgrades")
    }
    if (player.tabnumber === 3) {
        toggleTabs("achievements")
    }
    if (player.tabnumber === 4) {
        toggleTabs("runes")
    }
    if (player.tabnumber === 5) {
        toggleTabs("challenges")
    }
    if (player.tabnumber === 6) {
        toggleTabs("researches")
    }
    if (player.tabnumber === 7) {
        toggleTabs("ants")
    }
    if (player.tabnumber === 8) {
        toggleTabs("cubes")
    }
    if (player.tabnumber === 9) {
        toggleTabs("traits")
    }
}

function toggleautoreset(i) {
    if (i === 1) {
        if (player.resettoggle1 === 1 || player.resettoggle1 === 0) {
            player.resettoggle1 = 2;
            document.getElementById("prestigeautotoggle").textContent = "Mode: TIME"
        } else {
            player.resettoggle1 = 1;
            document.getElementById("prestigeautotoggle").textContent = "Mode: AMOUNT"
        }
    } else if (i === 2) {
        if (player.resettoggle2 === 1 || player.resettoggle2 === 0) {
            player.resettoggle2 = 2;
            document.getElementById("transcendautotoggle").textContent = "Mode: TIME"
        } else {
            player.resettoggle2 = 1;
            document.getElementById("transcendautotoggle").textContent = "Mode: AMOUNT"
        }
    } else if (i === 3) {
        if (player.resettoggle3 === 1 || player.resettoggle3 === 0) {
            player.resettoggle3 = 2;
            document.getElementById("reincarnateautotoggle").textContent = "Mode: TIME"
        } else {
            player.resettoggle3 = 1;
            document.getElementById("reincarnateautotoggle").textContent = "Mode: AMOUNT"
        }
    } else if (i === 4) {
        // To be ascend toggle
    }
}


function toggleauto() {
    const autos = document.getElementsByClassName("auto");
    for (const auto of autos) {
        const format = auto.getAttribute("format") || 'Auto [$]';
        const toggleId = auto.getAttribute("toggleId");
        if (toggleId === undefined || toggleId === null) {
            continue;
        }

        const finishedString = format.replace('$', player.toggles[toggleId] ? "ON" : "OFF")
        auto.textContent = finishedString;
        auto.style.border = "2px solid " + (player.toggles[toggleId] ? "green" : "red");
    }
}

function toggleResearchBuy() {
    if (maxbuyresearch) {
        maxbuyresearch = false;
        document.getElementById("toggleresearchbuy").textContent = "Upgrade: 1 Level"
    } else {
        maxbuyresearch = true;
        document.getElementById("toggleresearchbuy").textContent = "Upgrade: MAX [if possible]"
    }
}

/*function toggleFocus(i) {
    if (i==1){document.getElementById("prestigeamount").focus();}
    if (i==2){document.getElementById("transcendamount").focus();}
    if (i==3){document.getElementById("reincarnationamount").focus();}
}*/

function toggleAutoResearch() {
    let el = document.getElementById("toggleautoresearch")
    if (player.autoResearchToggle) {
        player.autoResearchToggle = false;
        el.textContent = "Automatic: OFF";
        player.autoResearch = 0;
    } else {
        player.autoResearchToggle = true;
        el.textContent = "Automatic: ON"
    }


    if (!player.autoResearchToggle) {
        for (let i = 1; i <= maxRoombaResearchIndex(player); i++) {
            let l = document.getElementById("res" + i)
            if (player.researches[i] === 0) {
                l.style.backgroundColor = "black"
            }
            if (0 < player.researches[i] && player.researches[i] < researchMaxLevels[i]) {
                l.style.backgroundColor = "purple"
            }
            if (player.researches[i] === researchMaxLevels[i]) {
                l.style.backgroundColor = "green"
            }
        }
    }

    if (player.autoResearchToggle && player.cubeUpgrades[9] === 1) {
        player.autoResearch = researchOrderByCost[player.roombaResearchIndex]
        let doc = document.getElementById("res" + player.autoResearch)
        if (doc)
            doc.style.backgroundColor = "orange"
    }


}

function toggleAutoSacrifice(index) {
    let el = document.getElementById("toggleautosacrifice")
    if (index === 0) {
        if (player.autoSacrificeToggle) {
            player.autoSacrificeToggle = false;
            el.textContent = "Automatic: OFF";
            player.autoSacrifice = 0;
        } else {
            player.autoSacrificeToggle = true;
            el.textContent = "Automatic: ON"
        }
    }
    if (player.autoSacrificeToggle && player.shopUpgrades.offeringAutoLevel > 0.5) {
        switch (index) {
            case 1:
                player.autoSacrifice = 1;
                break;
            case 2:
                player.autoSacrifice = 2;
                break;
            case 3:
                player.autoSacrifice = 3;
                break;
            case 4:
                player.autoSacrifice = 4;
                break;
            case 5:
                player.autoSacrifice = 5;
                break;
        }
    }
    for (let i = 1; i <= 5; i++) {
        if (player.autoSacrifice === i) {
            document.getElementById("rune" + i).style.backgroundColor = "orange"
        } else {
            document.getElementById("rune" + i).style.backgroundColor = "black"
        }
    }
    calculateRuneLevels();
}

function toggleBuildingScreen(input) {
    buildingSubTab = input
    let la = document.getElementById("coinBuildings");
    let el = document.getElementById("prestige");
    let ti = document.getElementById("transcension");
    let ella = document.getElementById("reincarnation");
    let ellos = document.getElementById("ascension");
    let a = document.getElementById("switchToCoinBuilding");
    let b = document.getElementById("switchToDiamondBuilding");
    let c = document.getElementById("switchToMythosBuilding");
    let d = document.getElementById("switchToParticleBuilding");
    let e = document.getElementById("switchToTesseractBuilding");
    buildingSubTab === "coin" ?
        (la.style.display = "block", a.style.backgroundColor = "crimson") :
        (la.style.display = "none", a.style.backgroundColor = "#171717");
    buildingSubTab === "diamond" ?
        (el.style.display = "block", b.style.backgroundColor = "crimson") :
        (el.style.display = "none", b.style.backgroundColor = "#171717");
    buildingSubTab === "mythos" ?
        (ti.style.display = "block", c.style.backgroundColor = "crimson") :
        (ti.style.display = "none", c.style.backgroundColor = "#171717");
    buildingSubTab === "particle" ?
        (ella.style.display = "block", d.style.backgroundColor = "crimson") :
        (ella.style.display = "none", d.style.backgroundColor = "#171717");
    buildingSubTab === "tesseract" ?
        (ellos.style.display = "block", e.style.backgroundColor = "crimson") :
        (ellos.style.display = "none", e.style.backgroundColor = "#171717");
}

function toggleRuneScreen(index) {
    switch (index) {
        case 1:
            runescreen = "runes";
            break;
        case 2:
            runescreen = "talismans";
            break;
        case 3:
            runescreen = "blessings";
            CSSRuneBlessings()
            break;
        case 4:
            runescreen = "spirits";
            CSSRuneBlessings()
            break;
    }
    let a
    let b
    for (let i = 1; i <= 4; i++) {
        a = document.getElementById("toggleRuneSubTab" + i);
        b = document.getElementById("runeContainer" + i);
        (i === index) ?
            (a.style.border = "2px solid gold", a.style.backgroundColor = "crimson", b.style.display = "block") :
            (a.style.border = "2px solid silver", a.style.backgroundColor = "#171717", b.style.display = "none");
    }
}

function setActiveSettingScreen(subtab, clickedButton) {
    let subtabEl = document.getElementById(subtab);
    if (subtabEl.classList.contains("subtabActive")) {
        return;
    }

    let switcherEl = clickedButton.parentNode;
    switcherEl.querySelectorAll(".buttonActive").forEach(b => b.classList.remove("buttonActive"));
    clickedButton.classList.add("buttonActive");

    subtabEl.parentNode.querySelectorAll(".subtabActive").forEach(subtab => subtab.classList.remove("subtabActive"));
    subtabEl.classList.add("subtabActive");

    if (subtab === "statisticsSubTab") {
        let id = interval(refreshStats, 1000)

        function refreshStats() {
            if (currentTab !== "settings") {
                clearInt(id);
            }
            loadStatisticsAccelerator();
            loadStatisticsMultiplier();
            loadStatisticsCubeMultipliers();
            if (!subtabEl.classList.contains("subtabActive"))
                clearInt(id);
        }

        refreshStats();
    }
}

function toggleShopConfirmation() {
    let el = document.getElementById("toggleConfirmShop")
    if (shopConfirmation) {
        shopConfirmation = false;
        el.textContent = "Shop Confirmations: OFF"
    } else {
        shopConfirmation = true;
        el.textContent = "Shop Confirmations: ON"
    }
}

function toggleAntMaxBuy() {
    let el = document.getElementById("toggleAntMax");
    if (player.antMax) {
        player.antMax = false;
        el.textContent = "Buy Max: OFF";
    } else {
        player.antMax = true;
        el.textContent = "Buy Max: ON";
    }
}

function toggleAntAutoSacrifice(mode = 0) {
    if (mode === 0) {
        let el = document.getElementById("toggleAutoSacrificeAnt");
        if (player.autoAntSacrifice) {
            player.autoAntSacrifice = false;
            el.textContent = "Auto Sacrifice: OFF"
        } else {
            player.autoAntSacrifice = true;
            el.textContent = "Auto Sacrifice: ON"
        }
    } else if (mode === 1) {
        let el = document.getElementById("autoSacrificeAntMode");
        if (player.autoAntSacrificeMode === 1 || player.autoAntSacrificeMode === 0) {
            player.autoAntSacrificeMode = 2;
            el.textContent = "Mode: Real time";
        } else {
            player.autoAntSacrificeMode = 1;
            el.textContent = "Mode: In-game time";
        }
    }
}

function toggleMaxBuyCube() {
    let el = document.getElementById("toggleCubeBuy")
    if (buyMaxCubeUpgrades) {
        buyMaxCubeUpgrades = false;
        el.textContent = "Upgrade: 1 Level wow"
    } else {
        buyMaxCubeUpgrades = true;
        el.textContent = "Upgrade: MAX [if possible wow]"
    }
}

function toggleCubeSubTab(i) {
    let a = document.getElementById("switchCubeSubTab1")
    let b = document.getElementById("switchCubeSubTab2")
    let c = document.getElementById("switchCubeSubTab3")
    let d = document.getElementById("switchCubeSubTab4")

    for (let j = 1; j <= 4; j++) {
        if (document.getElementById("cubeTab" + j).style.display === "block" && j !== i) {
            document.getElementById("cubeTab" + j).style.display = "none"
        }
        if (document.getElementById("cubeTab" + j).style.display === "none" && j === i) {
            document.getElementById("cubeTab" + j).style.display = "block"
        }
    }

    i === 1 ?
        (a.style.backgroundColor = "crimson", calculateCubeBlessings()) :
        (a.style.backgroundColor = "black");
    i === 2 ?
        (b.style.backgroundColor = "crimson", calculateTesseractBlessings()) :
        (b.style.backgroundColor = "black");
    i === 3 ?
        (c.style.backgroundColor = "crimson", calculateHypercubeBlessings()) :
        (c.style.backgroundColor = "black");
    i === 4 ?
        (d.style.backgroundColor = "crimson") :
        (d.style.backgroundColor = "black");
}

function updateAutoChallenge(i) {
    let t
    switch (i) {
        case 1:
            t = parseFloat(document.getElementById('startAutoChallengeTimerInput').value)
            t = t || 0;
            player.autoChallengeTimer.start = Math.max(t, 0);
            document.getElementById("startTimerValue").textContent = format(player.autoChallengeTimer.start, 2, true) + "s";
            break;
        case 2:
            t = parseFloat(document.getElementById('exitAutoChallengeTimerInput').value)
            t = t || 0;
            player.autoChallengeTimer.exit = Math.max(t, 0);
            document.getElementById("exitTimerValue").textContent = format(player.autoChallengeTimer.exit, 2, true) + "s";
            break;
        case 3:
            t = parseFloat(document.getElementById('enterAutoChallengeTimerInput').value)
            t = t || 0;
            player.autoChallengeTimer.enter = Math.max(t, 0);
            document.getElementById("enterTimerValue").textContent = format(player.autoChallengeTimer.enter, 2, true) + "s";
            break;
    }
}

function toggleAutoChallengesIgnore(i) {
    let el = document.getElementById("toggleAutoChallengeIgnore");
    if (player.autoChallengeToggles[i]) {
        player.autoChallengeToggles[i] = false;
        el.style.border = "2px solid red";
        el.textContent = "Automatically Run Chal." + i + " [OFF]"
    } else {
        player.autoChallengeToggles[i] = true;
        el.style.border = "2px solid green";
        el.textContent = "Automatically Run Chal." + i + " [ON]"
    }
}

function toggleAutoChallengeRun() {
    let el = document.getElementById('toggleAutoChallengeStart');
    if (player.autoChallengeRunning) {
        player.autoChallengeRunning = false;
        el.style.border = "2px solid red"
        el.textContent = "Auto Challenge Sweep [OFF]"
        player.autoChallengeIndex = 1;
        autoChallengeTimerIncrement = 0;
    } else {
        player.autoChallengeRunning = true;
        el.style.border = "2px solid gold"
        el.textContent = "Auto Challenge Sweep [ON]"
    }
}

function toggleAutoChallengeTextColors(i) {
    let a = document.getElementById("startAutoChallengeTimer");
    let b = document.getElementById("exitAutoChallengeTimer");
    let c = document.getElementById("enterAutoChallengeTimer");

    (i === 1) ?
        a.style.color = 'gold' :
        a.style.color = 'white';
    (i === 2) ?
        b.style.color = 'gold' :
        b.style.color = 'white';
    (i === 3) ?
        c.style.color = 'gold' :
        c.style.color = 'white';
}

function toggleAutoAscend() {
    let a = document.getElementById("ascensionAutoEnable");
    (player.autoAscend) ?
        (player.autoAscend = false, a.style.border = "2px solid red", a.textContent = "Auto Ascend [OFF]") :
        (player.autoAscend = true, a.style.border = "2px solid green", a.textContent = "Auto Ascend [ON]");
}

function updateRuneBlessingBuyAmount(i) {
    let t;
    switch (i) {
        case 1:
            t = Math.floor(parseFloat(document.getElementById('buyRuneBlessingInput').value));
            t = t || 1;
            player.runeBlessingBuyAmount = Math.max(t, 1);
            document.getElementById('buyRuneBlessingToggleValue').textContent = format(player.runeBlessingBuyAmount, 0, true);
            break;
        case 2:
            t = Math.floor(parseFloat(document.getElementById('buyRuneSpiritInput').value));
            t = t || 1;
            player.runeSpiritBuyAmount = Math.max(t, 1);
            document.getElementById('buyRuneSpiritToggleValue').textContent = format(player.runeSpiritBuyAmount, 0, true);
            break;
    }
}

function toggleAutoTesseracts(i) {
    (player.autoTesseracts[i]) ?
        (player.autoTesseracts[i] = false, document.getElementById('tesseractAutoToggle' + i).textContent = "Auto [OFF]", document.getElementById('tesseractAutoToggle' + i).style.border = "2px solid red") :
        (player.autoTesseracts[i] = true, document.getElementById('tesseractAutoToggle' + i).textContent = "Auto [ON]", document.getElementById('tesseractAutoToggle' + i).style.border = "2px solid green");
}

function toggleCorruptionLevel(index, value) {
    let current = player.prototypeCorruptions[index]
    let maxCorruption = 11
    if (value > 0 && current < maxCorruption && 0 < index && index <= 9) {
        player.prototypeCorruptions[index] += Math.min(maxCorruption - current, value)
    }
    if (value < 0 && current > 0 && 0 < index && index <= 9) {
        player.prototypeCorruptions[index] -= Math.min(current, -value)
    }
    player.prototypeCorruptions[index] = Math.min(maxCorruption, Math.max(0, player.prototypeCorruptions[index]))
    if (value === 999) {
        let trig = corruptionTrigger
        for (let i = 0; i <= 9; i++) {
            player.usedCorruptions[i] = 0;
            player.prototypeCorruptions[i] = 0;
            if (i > 0)
                corruptionDisplay(i)
        }
        corruptionDisplay(trig)
        document.getElementById("corruptionCleanseConfirm").style.visibility = "hidden";
    }
    corruptionDisplay(index)
    corruptionLoadoutTableUpdate(0);
}

function toggleCorruptionLoadoutsStats(stats) {
    player.corruptionShowStats = stats
    showCorruptionStatsLoadouts()
}

function toggleAscStatPerSecond(id) {
    if (player.ascStatToggles[id]) {
        player.ascStatToggles[id] = false;
        document.getElementById(`unit${id}`).textContent = "/s";
    } else {
        player.ascStatToggles[id] = true;
        document.getElementById(`unit${id}`).textContent = "";
    }
}
