/* function exportSynergism() {
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

    if (i == "synergism1007" && (ver == 1.007) && player.offerpromo12used == false){
        player.offerpromo12used = true;
        player.worlds += 50

        
        document.getElementById("importinfo").textContent = "Promo Code 'synergism1007' Applied! +50 Quarks."
    }
} */

/*function exportSynergism() {
    var string = localStorage.getItem("Synergysave2");
    document.getElementById('exporttext').textContent = string

    var text = document.getElementById('exporttext')
    text.select()
    document.execCommand("copy")

    document.getElementById("exportinfo").textContent = "Copied to clickboard! Paste it somewhere safe."
    document.getElementById("importinfo").textContent = ""
  }
*/

/**
 * Copy the save file to clipboard (IE) or export it as a file (EVERYTHING else).
 */
function exportSynergism() {
    player.offlinetick = Date.now();
    saveSynergy();
    if('clipboardData' in window) {
        window.clipboardData.setData('Text', localStorage.getItem('Synergysave2'));
        return;
    }

    const a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + localStorage.getItem('Synergysave2'));
    a.setAttribute('download', 'SynergismSave.txt');
    a.setAttribute('id', 'downloadSave');
    a.click();

    document.getElementById("exportinfo").textContent = "Savefile copied to file!"
}

function importSynergism() {
    const input = prompt("Got a save? Great! Just paste it below.");
    try {
        const data = JSON.parse(atob(input));
        if (data.exporttest === "YES!" && data.kongregatetest !== "YES!") {
            localStorage.setItem("Synergysave2", input);
            loadSynergy(true);
            document.getElementById("importinfo").textContent = "Successfully imported your savefile. Go nuts!"
        } else { //
            document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code!"
        }
    } catch(err) {
        if(err instanceof SyntaxError) {
            const lzData = JSON.parse(LZString.decompressFromBase64(input));
            if(lzData) {
                localStorage.clear();
                console.log()
                localStorage.setItem('Synergysave2', btoa(JSON.stringify(lzData)));
                loadSynergy();
            }
        } else {
            document.getElementById("importinfo").textContent = "Savefile code invalid. Try again with a valid code!";
        }
    }

    document.getElementById("exportinfo").textContent = '';
}

function promocodes() {
    const input = prompt("Got a code? Great! Enter it in (CaSe SeNsItIvE).");
    const el = document.getElementById("promocodeinfo");
    if(input == "synergism2020" && !player.offerpromo1used) {
        player.offerpromo1used = true; 
        player.runeshards += 25; 
        player.worlds += 50; 
        el.textContent = "Promo Code 'synergism2020' Applied! +25 Offerings, +50 Quarks"
    } else if (input == "synergism1008" && (player.version == "1.008" || player.version == "1.0081" || player.version == "1.0082") && player.offerpromo13used == false){
        player.offerpromo13used = true;
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
        if (player.upgrades[71] > 0.5){p += 300}
        if (player.upgrades[75] > 0.5){p += 2500}
        player.runeshards += p
        el.textContent = "Promo Code 'synergism1008' Applied! +25 Quarks, +" + p + " Offerings."
    }
    else if (input == "transcendlol" && (player.version == "1.0081" || player.version == "1.0082") && player.offerpromo14used == false){
        player.offerpromo14used = true;
        player.worlds += 25;

        el.textContent = "Promo Code 'transcendlol' Applied! +25 Quarks."
    }
    else if (input == "111111hype" && (player.version == "1.0082") && player.offerpromo15used == false){
        player.offerpromo15used = true;
        player.worlds += 200;

        el.textContent = "Thank you for playing Synergism! I'm a bit late on the 100k celebration so here's the next best thing. +200 Quarks! [Oh and 111111hype applied!]"
    }
    else {el.textContent = "I don't think you put that code in right, or your code is simply not valid. Try again!"}
    if(el.textContent.length) {
        // remove text after 5 seconds
        setTimeout(() => el.textContent = '', 15000);
    }
}