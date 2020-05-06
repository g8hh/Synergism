function exportSynergism() {
    var string = localStorage.getItem("Synergysave2");
    document.getElementById('exporttext').textContent = string

    var text = document.getElementById('exporttext')
    text.select()
    document.execCommand("copy")

    document.getElementById("exportinfo").textContent = "Copied to clickboard! Paste it somewhere safe."
    document.getElementById("importinfo").textContent = ""
  }

function importSynergism() {
    var text=""
    text = prompt("Got a save? Great! Just paste it below.")
    try {
    var decompressed = LZString.decompressFromBase64(text)
    var data = JSON.parse(decompressed)
    if (data.exporttest == "YES!" && data.kongregatetest !== "YES!") {
            localStorage.setItem("Synergysave2",text);
            loadSynergy(true)
            document.getElementById("importinfo").textContent = "Successfully imported your savefile. Go nuts!"
            document.getElementById("exportinfo").textContent = ""
        }
    else {document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code! Unless, of course, you were entering a Promo Code?"
          document.getElementById("exportinfo").textContent = ""}
    }
    catch(err) {
        document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code! Unless, of course, you were entering a Promo Code?"
        document.getElementById("exportinfo").textContent = ""
    }
    promocodes(text)

}

function promocodes(i) {
    if (i == "synergism2020" && player.offerpromo1used == false){player.offerpromo1used = true; player.runeshards += 25; player.worlds += 50; console.log("Successfully applied promo code!"); document.getElementById("importinfo").textContent = "Promo Code 'synergism2020' Applied! +25 Offerings, +50 Quarks"}
    if (i == "may5compensation" && (player.version == "1.0051") && player.offerpromo9used == false){
        player.offerpromo9used = true;
        player.worlds += 25;

        var p = 0
        if (player.transcendCount > 0.5 || player.reincarnationCount > 0.5) {p += 15}
        if (player.achievements[44] > 0.5) {p += 10}
        if (player.challengecompletions.three > 0.5) {p += 10}
        if (player.challengecompletions.five > 0.5) {p += 15}
        if (player.coinsTotal.greaterThanOrEqualTo("1e2500")) {p += 25}
        if (player.reincarnationCount > 0.5) {p += 25}
        if (player.challengecompletions.six > 0.5){p += 40}
        if (player.challengecompletions.seven > 0.5){p += 60}
        if (player.upgrades[67] > 0.5){p += 100}
        player.runeshards += p
        document.getElementById("importinfo").textContent = "Promo Code 'synergism1005' Applied! +25 Quarks, +" + p + " Offerings."
    }
    if (i == "synergism1006" && (ver == 1.006 || ver == 1.0061) && player.offerpromo10used == false){
        player.offerpromo10used = true;
        var q = 0;
        q += 25

        var p = 0
        if (player.transcendCount > 0.5 || player.reincarnationCount > 0.5) {p += 15}
        if (player.achievements[44] > 0.5) {p += 10}
        if (player.highestchallengecompletions.three > 0.5) {p += 10}
        if (player.highestchallengecompletions.five > 0.5) {p += 15}
        if (player.coinsTotal.greaterThanOrEqualTo("1e2500")) {p += 25}
        if (player.reincarnationCount > 0.5) {p += 50; q += 25}
        if (player.challengecompletions.six > 0.5){p += 65; q += 15}
        if (player.challengecompletions.seven > 0.5){p += 85; q += 15}
        if (player.upgrades[67] > 0.5){p += 125; q += 20}
        player.runeshards += p
        player.worlds += q
        document.getElementById("importinfo").textContent = "Promo Code 'synergism1006' Applied! +" + q + " Quarks, +" + p + " Offerings."
    }
    if (i == "automationisdumb" && (ver == 1.0061) && player.offerpromo11used == false){
        player.offerpromo11used = true;
        player.worlds += 100

        var p = 0
        if (player.transcendCount > 0.5 || player.reincarnationCount > 0.5) {p += 15}
        if (player.achievements[44] > 0.5) {p += 10}
        if (player.highestchallengecompletions.three > 0.5) {p += 10}
        if (player.highestchallengecompletions.five > 0.5) {p += 15}
        if (player.coinsTotal.greaterThanOrEqualTo("1e2500")) {p += 25}
        if (player.reincarnationCount > 0.5) {p += 50;}
        if (player.challengecompletions.six > 0.5){p += 65;}
        if (player.challengecompletions.seven > 0.5){p += 85;}
        if (player.upgrades[67] > 0.5){p += 125;}
        player.runeshards += p
        document.getElementById("importinfo").textContent = "Promo Code 'automationisdumb' Applied! +100 Quarks, +" + p + " Offerings."
    }
}