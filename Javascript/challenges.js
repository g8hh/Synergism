function challengeDisplay(i,changefocus = true) {
    if (changefocus){challengefocus = i}
    if (i <= 5) {document.getElementById("challengetotalscore").style.color = "plum"}
    if (i > 5 && i <= 8) {document.getElementById("challengetotalscore").style.color = "green"}
    if (i==1){q = "one"}
    if (i==2){q = "two"}
    if (i==3){q = "three"}
    if (i==4){q = "four"}
    if (i==5){q = "five"}
    if (i==6){q = "six"}
    if (i==7){q = "seven"}
    if (i==8){q = "eight"}
    var c = ""
    if(player.highestchallengecompletions[q] <= player.challengecompletions[q] && player.highestchallengecompletions[q] !== 75) {c = "This will be the your highest ever completions so you will also gain " + Math.floor(1 + player.highestchallengecompletions[q]/10) + "x Quarks!"}


    if (i == 1 && challengefocus == 1) {
        document.getElementById("challengedescription").textContent = "Go through a transcension, except Multipliers do not directly increase Multiplier. Instead, Multipliers act as Accelerators. Accelerator Power from Accelerator Boosts are nerfed by about 50%."
        document.getElementById("challengetotalscore").textContent = "Times Completed: " + player.challengecompletions.one + "/" + (25 + 1 * player.researches[66]) +". Goal: Gain " + format(Decimal.pow(10, challengebaserequirements.one * Math.pow((1 + player.challengecompletions.one), 2))) + " Coins in challenge."
        document.getElementById("challengereward").textContent = "Reward: +10%, +10 Multiplier Power Boosts per completion. First Completion awards 1 multiplier. " + c
    }
    if (i == 2 && challengefocus == 2) {
        document.getElementById("challengedescription").textContent = "Go through a transcension, except Accelerators only boost generation through Coin Upgrades. Otherwise, Accelerators do nothing. Multiplier power is nerfed by about 75%."
        document.getElementById("challengetotalscore").textContent = "Times Completed: " + player.challengecompletions.two + "/" + (25 + 1 * player.researches[67]) +". Goal: Gain " + format(Decimal.pow(10, challengebaserequirements.two * Math.pow((1 + player.challengecompletions.two), 2))) + " Coins in challenge."
        document.getElementById("challengereward").textContent = "Reward: +5% Accel. Boost power, +5 free Accelerator per completion. Gain +0.5% higher Acceleration Power every 2 completions. " + c
    }
    if (i == 3 && challengefocus == 3) {
        document.getElementById("challengedescription").textContent = "Go through a transcension, except you cannot gain Crystals or Mythos Shards. Accelerators are weaker."
        document.getElementById("challengetotalscore").textContent = "Times Completed: " + player.challengecompletions.three + "/" + (25 + 1 * player.researches[68]) +". Goal: Gain " + format(Decimal.pow(10, challengebaserequirements.three * Math.pow((1 + player.challengecompletions.three), 2))) + " Coins in challenge."
        document.getElementById("challengereward").textContent = "Reward: Increase crystal multiplier to production by an exponent of .04 per completion. Purchased mythos producers will also increase mythos producers by +0.5% per producer per completion. " + c
    }
    if (i == 4 && challengefocus == 4) {
        document.getElementById("challengedescription").textContent = "Go through a transcension, except the cost of Coin buildings, Accelerators and Multipliers scales much faster and scales immediately. Gets harder each completion!"
        document.getElementById("challengetotalscore").textContent = "Times Completed: " + player.challengecompletions.four + "/" + (25 + 1 * player.researches[69]) +". Goal: Gain " + format(Decimal.pow(10, challengebaserequirements.four * Math.pow((1 + player.challengecompletions.four), 2))) + " Coins in challenge."
        document.getElementById("challengereward").textContent = "Reward: Accelerator cost scaling starts 5 slower, and Multiplier cost scaling starts 2 slower per completion. Buildings scale 1% slower as well! " + c
    }
    if (i == 5 && challengefocus == 5) {
        document.getElementById("challengedescription").textContent = "Go through a transcension, except prestiging rewards scale much more slowly. Diamond generation is also debuffed, and diamond-boosting upgrades are disabled. Gets harder each completion!"
        document.getElementById("challengetotalscore").textContent = "Times Completed: " + player.challengecompletions.five + "/" + (25 + 1 * player.researches[70]) +". Goal: Gain " + format(Decimal.pow(10, challengebaserequirements.five * Math.pow((1 + player.challengecompletions.five), 2))) + " Coins in challenge."
        document.getElementById("challengereward").textContent = "Reward: Each completions multiplies all crystal producer production by 10. Diamond gain is also increased significantly per completion. " +c
    }
    if (i == 6 && challengefocus == 6) {
        document.getElementById("challengedescription").textContent = "Reincarnate and reach your target, except tax scales immediately and much faster. Production is also divided by a further 1e250."
        document.getElementById("challengetotalscore").textContent = "Times Completed: " +player.challengecompletions.six + "/25. Goal: Gain " + format(Decimal.pow(10, challengebaserequirementsrein.six * Math.pow(1 + player.challengecompletions.six, 2))) + " Mythos Shards."
        document.getElementById("challengereward").textContent = "Reward: Taxes scale 2-4% slower per completion with effect scaling based on building power. The thrift rune is 2% less expensive to level per completion (applies retroactively!). First completion divides tax growth by a further 1.075! " + c
    }
    if (i == 7 && challengefocus == 7) {
        document.getElementById("challengedescription").textContent = "Reincarnate and reach your target, except Multipliers and Accelerators do nothing. Your production is also divided by a further 1e1,250 and building power is siginificantly reduced."
        document.getElementById("challengetotalscore").textContent = "Times Completed: " +player.challengecompletions.seven + "/25. Goal: Gain " + format(Decimal.pow(10, challengebaserequirementsrein.seven * Math.pow(1 + player.challengecompletions.seven, 2))) + " Mythos Shards."
        document.getElementById("challengereward").textContent = "Reward: Accelerator/Multiplier boost is powered by 0.04 per completion. The speed and duplication rune are 2% less expensive to level per completion (applies retroactively!). First completion makes multiplier boosts 25% more effective! " + c
    }
}