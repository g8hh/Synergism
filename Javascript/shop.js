const offerconsumedesc = "Instantly gain 2 hours of Offerings, based on your all time best Offerings/sec!"
const obtainiumconsumedesc = "Instantly gain 2 hours of Obtainium, based on your all time best Obtainium/sec!"

const offertimerdesc = "Each level increases the timer capacity for Offerings by 120 seconds per level!"
const offerautodesc = "Automatically pour Offerings into a rune. 1st level unlocks feature, and each level increases Offering gain by 2%. Every 10 seconds, 2^(Level + 1) offerings are spent. TO ACTIVATE: Click on the rune icon (PICTURE) and it will turn orange just for you!"
const obtainiumtimerdesc = "Each level increases the timer capacity for Obtainium by 120 seconds per level! WARNING: You need a certain 1e22 Particle Upgrade for this to be useful!"
const obtainiumautodesc = "Automatically pour Obtainium into a research. 1st level unlocks feature, and each level increases Obtainium gain by 2%. Every reincarnation, dump all Obtainium into research until maxed."
const instantchallengedesc = "Instead of needing enough coins to get autocompletions, and waiting to complete, you instantly completions up until highest ever completed! Does not work in R. Challenges."
const cashgrabdesc = "This is a cash grab but it gives a couple cool stats. +1% production per level to everything, including Offerings and Obtainium."


function shopDescriptions(i) {
    let rofl = document.getElementById("quarkdescription");
    let lmao = document.getElementById("quarkcost");
    let lol = document.getElementById("quarkeffect");
    switch (i) {
        case 1:
            rofl.textContent = offerconsumedesc;
            lmao.textContent = "Cost: " + shopBaseCosts.offerPotion + " Quarks.";
            lol.textContent = "Gain " + format((7200 * player.offeringpersecond),0,false) + " Offerings."
            break;
        case 2:
            rofl.textContent = obtainiumconsumedesc;
            lmao.textContent = "Cost: " + shopBaseCosts.obtainiumPotion + " Quarks.";
            lol.textContent = "Gain " + format((7200 * player.obtainiumpersecond),0,false) + " Obtainium.";
            break;
        case 3:
            rofl.textContent = offertimerdesc;
            lmao.textContent = "Cost: " + (shopBaseCosts.offerTimer + 25 * player.shopUpgrades.offeringTimerLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Offering Timer +" + format(120 * player.shopUpgrades.offeringTimerLevel) + " Seconds."
            break;
        case 4:
            rofl.textContent = offerautodesc;
            lmao.textContent = "Cost: " + (shopBaseCosts.offerAuto + 25 * player.shopUpgrades.offeringAutoLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Per 10 seconds, pour " + format(Math.pow(2, 1 + player.shopUpgrades.offeringAutoLevel)) + " Offerings. +" + format(2 * player.shopUpgrades.offeringAutoLevel,2) + "% Offerings."
            break;
        case 5:
            rofl.textContent = obtainiumtimerdesc;
            lmao.textContent = "Cost: " + (shopBaseCosts.obtainiumTimer + 25 * player.shopUpgrades.obtainiumTimerLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Obtainium Timer +" + format(120 * player.shopUpgrades.obtainiumTimerLevel) + " Seconds."
            break;
        case 6:
            rofl.textContent = obtainiumautodesc;
            lmao.textContent = "Cost: " + (shopBaseCosts.obtainiumAuto + 25 * player.shopUpgrades.obtainiumAutoLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: Try to upgrade research each reincarnation, and gain +" + format(player.shopUpgrades.obtainiumAutoLevel * 2, 2) + "% more Obtainium."
            break;
        case 7:
            rofl.textContent = instantchallengedesc;
            lmao.textContent = "Cost: " + (shopBaseCosts.instantChallenge) + " Quarks."
            lol.textContent = "CURRENT Effect: Even in a premium shop it's kinda obvious, right?"
            break;
        case 8:
            rofl.textContent = cashgrabdesc;
            lmao.textContent = "Cost: " + (shopBaseCosts.cashGrab + 100 * player.shopUpgrades.cashGrabLevel) + " Quarks."
            lol.textContent = "CURRENT Effect: All resources EXCEPT QUARKS increased by " + format(player.shopUpgrades.cashGrabLevel,2) + "%."
            break;
    }

}

function buyShopUpgrades(i) {
    let p = confirm("Are you sure of your purchase?")
    if (p){
        switch(i){
            case 1: if(player.worlds >= shopBaseCosts.offerPotion) {player.worlds -= 35; player.shopUpgrades.offeringPotion += 1;}; break;
            case 2: if(player.worlds >= shopBaseCosts.obtainiumPotion) {player.worlds -= 35; player.shopUpgrades.obtainiumPotion += 1;}; break;
            case 3: if(player.worlds >= (shopBaseCosts.offerTimer + 25 * player.shopUpgrades.offeringTimerLevel) && player.shopUpgrades.offeringTimerLevel < 7) {player.worlds -= (shopBaseCosts.offerTimer + 25 * player.shopUpgrades.offeringTimerLevel); player.shopUpgrades.offeringTimerLevel += 1;}; break;
            case 4: if(player.worlds >= (shopBaseCosts.offerAuto + 25 * player.shopUpgrades.offeringAutoLevel) && player.shopUpgrades.offeringAutoLevel < 7) {player.worlds -= (shopBaseCosts.offerAuto + 25 * player.shopUpgrades.offeringAutoLevel); player.shopUpgrades.offeringAutoLevel += 1;}; break;
            case 5: if(player.worlds >= (shopBaseCosts.obtainiumTimer + 25 * player.shopUpgrades.obtainiumTimerLevel) && player.shopUpgrades.obtainiumTimerLevel < 7) {player.worlds -= (shopBaseCosts.obtainiumTimer + 25 * player.shopUpgrades.obtainiumTimerLevel); player.shopUpgrades.obtainiumTimerLevel += 1;}; break;
            case 6: if(player.worlds >= (shopBaseCosts.obtainiumAuto + 25 * player.shopUpgrades.obtainiumAutoLevel) && player.shopUpgrades.obtainiumAutoLevel < 7) {player.worlds -= (shopBaseCosts.obtainiumAuto + 25 * player.shopUpgrades.obtainiumAutoLevel); player.shopUpgrades.obtainiumAutoLevel += 1;}; break;

            case 7: if(player.worlds >= shopBaseCosts.instantChallenge && !player.shopUpgrades.instantChallengeBought){player.worlds -= 300; player.shopUpgrades.instantChallengeBought = true;}; break;
            case 8: if(player.worlds >= (shopBaseCosts.cashGrab + 100 * player.shopUpgrades.cashGrabLevel) && player.shopUpgrades.cashGrabLevel < 7){player.worlds -=(shopBaseCosts.cashGrab + 100 * player.shopUpgrades.cashGrabLevel); player.shopUpgrades.cashGrabLevel += 1;}; break;

        }
        revealStuff();
    }
}

function useConsumable(i) {
    let p = confirm("Would you like to use this potion?")
    if (p) {
    switch(i){
        case 1: if(player.shopUpgrades.offeringPotion > 0.5){player.shopUpgrades.offeringPotion -= 1; player.runeshards += Math.floor(7200 * player.offeringpersecond);}; break;
        case 2: if(player.shopUpgrades.obtainiumPotion > 0.5){player.shopUpgrades.obtainiumPotion -=1 ; player.researchPoints += Math.floor(7200 * player.obtainiumpersecond);}; break;
    }
}
}