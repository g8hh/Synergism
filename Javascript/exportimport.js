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
    if (player.quarkstimer >= 3600){
        player.worlds += (Math.floor(player.quarkstimer/3600) * (1 + player.researches[99] + player.researches[100]));
        player.quarkstimer = (player.quarkstimer % 3600)
    }
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

function importSynergism(input) {
    try {
        const data = JSON.parse(atob(input));
        if (data.exporttest === "YES!" && data.kongregatetest !== "YES!") {
            localStorage.setItem("Synergysave2", input);
            loadSynergy();
            document.getElementById("importinfo").textContent = "Successfully imported your savefile. Go nuts!"
        } else { 
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
    }
    else if (input == "shopequalp2w" && (player.version == "1.009" || player.version == "1.0091") && player.offerpromo18used == false){
        player.offerpromo18used = true
        player.worlds += 125;
        player.shopUpgrades.offeringPotion += 2;
        player.shopUpgrades.obtainiumPotion += 2;

        el.textContent = "Platonic's a sellout, Amirite? I'm the shop owner. Here's a couple goodies for you! [125 Quarks, 2 of each Potion]"
    }
    else if (input == "buffgod" && (player.version == "1.0091") && player.offerpromo19used == false){
        player.offerpromo19used = true
        player.worlds += 100;
        player.shopUpgrades.offeringPotion += 1;
        player.shopUpgrades.obtainiumPotion += 1;
        el.textContent = "You're incredibly powerful now! [+100 Quarks, +1 of each Consumable]"
    }
    else {
        el.textContent = "Your code is either invalid or already used. Try again!"
    }
        
    setTimeout(function() {
        el.textContent = ''
    }, 15000);
}