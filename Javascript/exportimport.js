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

    if (i == "synergism1007" && (ver == 1.007) && player.offerpromo12used == false){
        player.offerpromo12used = true;
        player.worlds += 50

        
        document.getElementById("importinfo").textContent = "Promo Code 'synergism1007' Applied! +50 Quarks."
    }
}