// Main JS Page, listing major functions as well as base user data. Comments left after each important section.
// [Player data]
const ver = 1.007;

var player = {
 version: "1.007",
 worlds: 0,
 coins: new Decimal("1e2"),
 coinsThisPrestige: new Decimal("1e2"),
 coinsThisTranscension: new Decimal("1e2"),
 coinsThisReincarnation: new Decimal("1e2"),
 coinsTotal: new Decimal("100"),

 firstOwnedCoin: 0,
 firstGeneratedCoin: new  Decimal("0"),
 firstCostCoin: new Decimal("100"),
 firstProduceCoin: 0.25,

 secondOwnedCoin: 0,
 secondGeneratedCoin: new Decimal("0"),
 secondCostCoin: new Decimal("2e3"),
 secondProduceCoin: 2.5,

 thirdOwnedCoin: 0,
 thirdGeneratedCoin: new Decimal("0"),
 thirdCostCoin: new Decimal("4e4"),
 thirdProduceCoin: 25,

 fourthOwnedCoin: 0,
 fourthGeneratedCoin: new Decimal("0"),
 fourthCostCoin: new Decimal("8e5"),
 fourthProduceCoin: 250,

 fifthOwnedCoin: 0,
 fifthGeneratedCoin: new Decimal("0"),
 fifthCostCoin: new Decimal("16e6"),
 fifthProduceCoin: 2500,

 firstOwnedDiamonds: 0,
 firstGeneratedDiamonds: new Decimal("0"),
 firstCostDiamonds: new Decimal("100"),
 firstProduceDiamonds: 0.05,
 
 secondOwnedDiamonds: 0,
 secondGeneratedDiamonds: new Decimal("0"),
 secondCostDiamonds: new Decimal("1e5"),
 secondProduceDiamonds: 0.0005,
 
 thirdOwnedDiamonds: 0,
 thirdGeneratedDiamonds: new Decimal("0"),
 thirdCostDiamonds: new Decimal("1e15"),
 thirdProduceDiamonds: 0.00005,
 
 fourthOwnedDiamonds: 0,
 fourthGeneratedDiamonds: new Decimal("0"),
 fourthCostDiamonds: new Decimal("1e40"),
 fourthProduceDiamonds: 0.000005,
 
 fifthOwnedDiamonds: 0,
 fifthGeneratedDiamonds: new Decimal("0"),
 fifthCostDiamonds: new Decimal("1e100"),
 fifthProduceDiamonds: 0.000005,

 firstOwnedMythos: 0,
 firstGeneratedMythos: new Decimal("0"),
 firstCostMythos: new Decimal("1"),
 firstProduceMythos: 1,

 secondOwnedMythos: 0,
 secondGeneratedMythos: new Decimal("0"),
 secondCostMythos: new Decimal("100"),
 secondProduceMythos: 0.01,

 thirdOwnedMythos: 0,
 thirdGeneratedMythos: new Decimal("0"),
 thirdCostMythos: new Decimal("1e4"),
 thirdProduceMythos: 0.001,

 fourthOwnedMythos: 0,
 fourthGeneratedMythos: new Decimal("0"),
 fourthCostMythos: new Decimal("1e8"),
 fourthProduceMythos: 0.0002,

 fifthOwnedMythos: 0,
 fifthGeneratedMythos: new Decimal("0"),
 fifthCostMythos: new Decimal("1e16"),
 fifthProduceMythos: 0.00004,

 firstOwnedParticles: 0,
 firstGeneratedParticles: new Decimal("0"),
 firstCostParticles: new Decimal("1"),
 firstProduceParticles: .25,

 secondOwnedParticles: 0,
 secondGeneratedParticles: new Decimal("0"),
 secondCostParticles: new Decimal("100"),
 secondProduceParticles: .20,
 
 thirdOwnedParticles: 0,
 thirdGeneratedParticles: new Decimal("0"),
 thirdCostParticles: new Decimal("1e4"),
 thirdProduceParticles: .15,

 fourthOwnedParticles: 0,
 fourthGeneratedParticles: new Decimal("0"),
 fourthCostParticles: new Decimal("1e8"),
 fourthProduceParticles: .10,

 fifthOwnedParticles: 0,
 fifthGeneratedParticles: new Decimal("0"),
 fifthCostParticles: new Decimal("1e16"),
 fifthProduceParticles: .5,
 
 multiplierCost: new Decimal("1e5"),
 multiplierBought: 0,

 acceleratorCost: new Decimal("500"),
 acceleratorBought: 0,

 acceleratorBoostBought: 0,
 acceleratorBoostCost: new Decimal("1e3"),

 upgrades: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, //Coin Upgrades, Ignore First.
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    //Prestige Upgrades
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	   //Transcend Upgrades
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	   //Reincarnation Upgrades
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	   //Automation Upgrades
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],   //Generator Upgrades
 

 prestigeCount: 0,
 transcendCount: 0,
 reincarnationCount: 0,

 prestigePoints: new Decimal("0"),
 transcendPoints: new Decimal("0"),
 reincarnationPoints: new Decimal("0"),

 prestigeShards: new Decimal("0"),
 transcendShards: new Decimal("0"),
 reincarnationShards: new Decimal("0"),

 toggles: {
	 one: false,
	 two: false,
	 three: false,
	 four: false,
	 five: false,
	 six: false,
	 seven: false,
	 eight: false,
	 nine: false,
	 ten: false,
	 eleven: false,
	 twelve: false,
	 thirteen: false,
	 fourteen: false,
	 fifteen: false,
	 sixteen: false,
	 seventeen: false,
	 eighteen: false,
	 nineteen: false,
	 twenty: false,
	 twentyone: false,
	 twentytwo: true,
	 twentythree: true,
	 twentyfour: true,
	 twentyfive: true,
	 twentysix: true,
	 twentyseven: false,
	 twentyeight: true,
	 twentynine: true,
	 thirty: true,
	 thirtyone: false,
	 thirtytwo: false,
	 thirtythree: false,
 },
 
resourceGenerators: {
    diamonds: false,
    mythos: false,
},

keepUpgrades: {
	coinUpgrades: false,
	prestigeUpgrades: false,
	crystalUpgrades: false,
	transcendUpgrades: false,
	autobuyers: false,
	generators: false
},

challengecompletions: {
	one: 0,
	two: 0,
	three: 0,
	four: 0,
	five: 0,
	six: 0,
	seven: 0,
	eight: 0,
	nine: 0,
	ten: 0
},

highestchallengecompletions: {
	one: 0,
	two: 0,
	three: 0,
	four: 0,
	five: 0,
	six: 0,
	seven: 0,
	eight: 0,
	nine: 0,
	ten: 0
},
retrychallenges: false,
 currentChallenge: "",
 currentChallengeRein: "",
researchPoints: 0,
obtainiumtimer: 0,
// Ignore the first index. The other 25 are shaped in a 5x5 grid similar to the production appearance
researches: [0, 0, 0, 0, 0, 0,
 			     0, 0, 0, 0, 0,
			     0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0,
				 0, 0, 0, 0, 0],

unlocks: {
	coinone: false,
	cointwo: false,
	cointhree: false,
	coinfour: false,
	prestige: false,
	generation: false,
	transcend: false,
	reincarnate: false,
	rrow1: false,
	rrow2: false,
	rrow3: false,
	rrow4: false
},
achievements: [0,
			    0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0],

achievementPoints: 0,

prestigenomultiplier: true,
prestigenoaccelerator: true,
transcendnomultiplier: true,
transcendnoaccelerator: true,
recinarnatenomultiplier: true,
reincarnatenoaccelerator: true,
prestigenocoinupgrades: true,
transcendnocoinupgrades: true,
transcendnocoinorprestigeupgrades: true,
reincarnatenocoinupgrades: true,
reincarnatenocoinorprestigeupgrades: true,
reincarnatenocoinprestigeortranscendupgrades: true,
reincarnatenocoinprestigetranscendorgeneratorupgrades: true,

crystalUpgrades: [0,0,0,0,0,0,0,0],

runelevels: [1, 1, 1, 1, 1],
runeexp: [0, 0, 0, 0, 0,],
runeshards: 0,
prestigecounter: 0,
transcendcounter: 0,
reincarnationcounter: 0,
offlinetick: 0,

prestigeamount: 0,
transcendamount: 0,
reincarnationamount: 0,

fastestprestige: 9999999999,
fastesttranscend: 99999999999,
fastestreincarnate: 999999999999,

resettoggle1: 1,
resettoggle2: 1,
resettoggle3: 1,

coinbuyamount: 1,
crystalbuyamount: 1,
mythosbuyamount: 1,
particlebuyamount: 1,
offeringbuyamount: 1,



shoptoggles: {
	coin: true,
	prestige: true,
	transcend: true,
	generators: true,
},
tabnumber: 1,

offerpromo1used: false,
offerpromo2used: false,
offerpromo3used: false,
offerpromo4used: false,
offerpromo5used: false,
offerpromo6used: false,
offerpromo7used: false,
offerpromo8used: false,
offerpromo9used: false,
offerpromo10used: false,
offerpromo11used: false,
offerpromo12used: false,
exporttest: "YES!",
kongregatetest: "NO!"
}


// Saving and Loading Functions + Update Timers [Lines 516 - 595]

function saveSynergy() {
	player.offlinetick = Date.now();
	var string = JSON.stringify(player);
	var compressed = LZString.compressToBase64(string);
	localStorage.setItem("Synergysave2",compressed);
//	localStorage.setItem("Synergysave",string)
	
	}

function loadSynergy(imported = false) {
	
	document.addEventListener("keydown", function onPress(event) {
		var type = ""
		var pos = ""
		var num = 0

		if (event.key === "1") {var pos = "first"; num += 1; if (currentTab == "challenges") {toggleChallenges('one')}; if (currentTab == "runes"){redeemshards(1)}}
		if (event.key === "2") {var pos = "second"; num += 2; if (currentTab == "challenges") {toggleChallenges('two')}; if (currentTab == "runes"){redeemshards(2)}}
		if (event.key === "3") {var pos = "third"; num += 3; if (currentTab == "challenges") {toggleChallenges('three')}; if (currentTab == "runes"){redeemshards(3)}}
		if (event.key === "4") {var pos = "fourth"; num += 4; if (currentTab == "challenges") {toggleChallenges('four')}; if (currentTab == "runes"){redeemshards(4)}}
		if (event.key === "5") {var pos = "fifth"; num += 5; if (currentTab == "challenges") {toggleChallenges('five')}}
		if (event.key === "6") {buyCrystalUpgrades(1)}
		if (event.key === "7") {buyCrystalUpgrades(2)}
		if (event.key === "8") {buyCrystalUpgrades(3)}
		if (event.key === "9") {buyCrystalUpgrades(4)}
		if (event.key === "0") {buyCrystalUpgrades(5)}

		if (currentTab == "buildings") {var type = "Coin"}
		if (currentTab == "prestige") {var type = "Diamonds"; num = 1/2 * (Math.pow(num, 2) + num)}
		if (currentTab == "transcension") {var type = "Mythos"; num = 1/2 * (Math.pow(num, 2) + num)}
		if (currentTab == "reincarnation") {var type = "Particles"; num = 1/2 * (Math.pow(num, 2) + num)}


		if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5") {buyProducer(pos, type, num)}
		if ((event.key === "A" || event.key === "a") && currentTab == "buildings") {buyAccelerator()}
		if ((event.key === "B" || event.key === "b") && currentTab == "buildings") {boostAccelerator()}
		if ((event.key === "M" || event.key === "m") && currentTab == "buildings") {buyMultiplier()}
		if ((event.key === "P") || event.key === "p") {resetCheck('prestige',false)}
		if ((event.key === "T") || event.key === "t") {resetCheck('transcend',false)}
		if ((event.key === "R") || event.key === "r") {resetCheck('reincarnate',false)}
		if ((event.key === "E" || event.key === "e") && player.currentChallenge !== "") {resetCheck('challenge')}	
		
		if ((event.key === "ArrowLeft")) {keyboardtabchange(-1)}
		if ((event.key === "ArrowRight")) {keyboardtabchange(1)}
	});



		
	
		var string = localStorage.getItem("Synergysave2");
		if (string !== null){
		var e = LZString.decompressFromBase64(string)
		var data = JSON.parse(e);
		}	
		if (data) {
			data.break = new Decimal(data.break),
			data.coins = new Decimal(data.coins),
			data.coinsTotal = new Decimal(data.coinsTotal),
			data.coinsThisPrestige= new Decimal(data.coinsThisPrestige),
			data.coinsThisTranscension = new Decimal(data.coinsThisTranscension),
			data.coinsThisReincarnation = new Decimal(data.coinsThisReincarnation),
			data.firstCostCoin = new Decimal(data.firstCostCoin),
			data.firstGeneratedCoin = new Decimal(data.firstGeneratedCoin), 
			data.secondCostCoin = new Decimal(data.secondCostCoin),
			data.secondGeneratedCoin = new Decimal(data.secondGeneratedCoin), 
			data.thirdCostCoin = new Decimal(data.thirdCostCoin),
			data.thirdGeneratedCoin = new Decimal(data.thirdGeneratedCoin), 
			data.fourthCostCoin = new Decimal(data.fourthCostCoin),
			data.fourthGeneratedCoin = new Decimal(data.fourthGeneratedCoin), 
			data.fifthCostCoin = new Decimal(data.fifthCostCoin),
			data.fifthGeneratedCoin = new Decimal(data.fifthGeneratedCoin), 

			data.firstCostDiamonds = new Decimal(data.firstCostDiamonds),
            data.firstGeneratedDiamonds = new Decimal(data.firstGeneratedDiamonds), 
            data.secondCostDiamonds = new Decimal(data.secondCostDiamonds),
            data.secondGeneratedDiamonds = new Decimal(data.secondGeneratedDiamonds), 
            data.thirdCostDiamonds = new Decimal(data.thirdCostDiamonds),
            data.thirdGeneratedDiamonds = new Decimal(data.thirdGeneratedDiamonds), 
            data.fourthCostDiamonds = new Decimal(data.fourthCostDiamonds),
            data.fourthGeneratedDiamonds = new Decimal(data.fourthGeneratedDiamonds), 
            data.fifthCostDiamonds = new Decimal(data.fifthCostDiamonds),
            data.fifthGeneratedDiamonds = new Decimal(data.fifthGeneratedDiamonds),

			data.firstCostMythos = new Decimal(data.firstCostMythos),
			data.firstGeneratedMythos = new Decimal(data.firstGeneratedMythos), 
			data.secondCostMythos = new Decimal(data.secondCostMythos),
			data.secondGeneratedMythos = new Decimal(data.secondGeneratedMythos), 
			data.thirdCostMythos = new Decimal(data.thirdCostMythos),
			data.thirdGeneratedMythos = new Decimal(data.thirdGeneratedMythos), 
			data.fourthCostMythos = new Decimal(data.fourthCostMythos),
			data.fourthGeneratedMythos = new Decimal(data.fourthGeneratedMythos), 
			data.fifthCostMythos = new Decimal(data.fifthCostMythos),
			data.fifthGeneratedMythos = new Decimal(data.fifthGeneratedMythos),
			
			data.firstCostParticles = new Decimal(data.firstCostParticles),
			data.firstGeneratedParticles = new Decimal(data.firstGeneratedParticles), 
			data.secondCostParticles = new Decimal(data.secondCostParticles),
			data.secondGeneratedParticles = new Decimal(data.secondGeneratedParticles), 
			data.thirdCostParticles = new Decimal(data.thirdCostParticles),
			data.thirdGeneratedParticles = new Decimal(data.thirdGeneratedParticles), 
			data.fourthCostParticles = new Decimal(data.fourthCostParticles),
			data.fourthGeneratedParticles = new Decimal(data.fourthGeneratedParticles), 
			data.fifthCostParticles = new Decimal(data.fifthCostParticles),
			data.fifthGeneratedParticles = new Decimal(data.fifthGeneratedParticles),			

			data.multiplierCost = new Decimal(data.multiplierCost),
			data.acceleratorCost = new Decimal(data.acceleratorCost),
			data.acceleratorBoostCost = new Decimal(data.acceleratorBoostCost),

			data.coinUpgradeCost = new Decimal(data.coinUpgradeCost),
			data.prestigeUpgradeCost = new Decimal(data.prestigeUpgradeCost),
			data.transcendUpgradeCost = new Decimal(data.transcendUpgradeCost),

			data.prestigePoints = new Decimal(data.prestigePoints),
			data.transcendPoints = new Decimal(data.transcendPoints),
			data.reincarnationPoints = new Decimal(data.reincarnationPoints),

			data.prestigeShards = new Decimal(data.prestigeShards),
			data.transcendShards = new Decimal(data.transcendShards),
			data.reincarnationShards = new Decimal(data.reincarnationShards),

			player = data	
			if (player.version == "1.000") {player.version = "1.001"; player.offerpromo4used = false}
			if (player.version == "1.001") {player.version = "1.002"; player.offerpromo5used = false}
			if (player.version == "1.002" || player.version == "1.0021") {player.version = "1.003"; player.offerpromo6used = false; player.obtainiumtimer = 0; player.offlinetick = new Date().getTime()}
			if (player.version == "1.003" || player.version == "1.0031") {
				player.version = "1.004";
				player.offerpromo7used = false;
				if (player.fastestreincarnate < 15) {player.fastestreincarnate = 999999};
				player.researchPoints += 100 * player.researches[19];
				player.researchPoints += 1000 * player.researches[20];
				player.researchPoints += 1 * player.researches[51];
				player.researchPoints += 10 * player.researches[52];
				player.researchPoints += 500 * player.researches[53];
				player.researchPoints += 15000 * player.researches[54];
				player.researchPoints += 500000 * player.researches[55];
				player.researchPoints += 5 * player.researches[56];
				player.researchPoints += 25 * player.researches[57];
				player.researchPoints += 125 * player.researches[58];
				player.researchPoints += 625 * player.researches[59];
				player.researchPoints += 3125 * player.researches[60];
				player.researchPoints += 5 * player.researches[37];
				player.researchPoints += 25 * player.researches[38];
				player.researchPoints += 100 * player.researches[68];
				player.researchPoints += 250 * player.researches[69];
				player.researchPoints += 1000 * player.researches[70];

				player.researches[19] = 0;
				player.researches[20] = 0;
				player.researches[51] = 0;
				player.researches[52] = 0;
				player.researches[53] = 0;
				player.researches[54] = 0;
				player.researches[55] = 0;
				player.researches[56] = 0;
				player.researches[57] = 0;
				player.researches[58] = 0;
				player.researches[59] = 0;
				player.researches[60] = 0;
				player.researches[37] = 0;
				player.researches[38] = 0;
				player.researches[68] = 0;
				player.researches[69] = 0;
				player.researches[70] = 0;




			}
			if (player.version == "1.004"){
				player.version = "1.005";
				player.offerpromo8used = false;
				player.researchPoints += 5 * player.researches[61];
				player.researchPoints += 20 * player.researches[62];
				player.researchPoints += 80 * player.researches[63];
				player.researchPoints += 320 * player.researches[64];
				player.researchPoints += 1280 * player.researches[65];

				player.researches[61] = 0;
				player.researches[62] = 0;
				player.researches[63] = 0;
				player.researches[64] = 0;
				player.researches[65] = 0;


			}

			if (player.version == "1.005"){
				player.version = "1.0051";
				player.offerpromo9used = false;
			}
			if (player.version == "1.0051"){
				player.version = "1.006";
				player.offerpromo10used = false;
				player.resettoggle1 = 1;
				player.resettoggle2 = 1;
				player.resettoggle3 = 1;
				player.retrychallenges = false
			}
			if (player.version == "1.006"){
				player.version = "1.0061";
				player.offerpromo11used = false;
			}
			if (player.version == "1.0061") {
				player.version = "1.007";
				player.offerpromo12used = false;
			}

			
			if (player.resettoggle1 == 0) {
				player.resettoggle1 = 1;
				player.resettoggle2 = 1;
				player.resettoggle3 = 1;
			}
			if (player.reincarnationCount < 0.5 && player.unlocks.rrow4 == true) {
				player.unlocks = {
					coinone: false,
					cointwo: false,
					cointhree: false,
					coinfour: false,
					prestige: false,
					generation: false,
					transcend: false,
					reincarnate: false,
					rrow1: false,
					rrow2: false,
					rrow3: false,
					rrow4: false
				}
			}

			var i
		for (i = 1; i < player.achievements.length; i++) {
			if (player.achievements[i] > 0.5) {
				achievementaward(i, 0)
			}
		}
		var j
		for (j = 1; j < player.upgrades.length; j++) {
				upgradeupdate(j);
			}
		
		for (j = 1; j < player.researches.length; j++) {
			var k = "res" + j
			if (player.researches[j] > 0.5 && player.researches[j] < researchMaxLevels[j]) {document.getElementById(k).style.backgroundColor = "purple"}
			else if (player.researches[j] > 0.5 && player.researches[j] >= researchMaxLevels[j]) {document.getElementById(k).style.backgroundColor = "green"}
			else {document.getElementById(k).style.backgroundColor = "black"}
		}


			
		var q = ['coin','crystal','mythos','particle','offering']
		for (j = 0; j <= 4; j++) {
			for (k = 0; k < 3; k++) {
				if (k == 0){var d = 'one'}
				if (k == 1){var d = 'ten'}
				if (k == 2){var d = 'hundred'}
				var e = q[j] + d
			document.getElementById(e).style.backgroundColor = "#000000"
			}
			if (player[q[j] + 'buyamount'] == 1) {var c = 'one'}
			if (player[q[j] + 'buyamount'] == 10) {var c = 'ten'}
			if (player[q[j] + 'buyamount'] == 100) {var c = 'hundred'}

			var b = q[j] + c
			document.getElementById(b).style.backgroundColor = "green"

		}

		if (player.shoptoggles.coin == false) {document.getElementById("shoptogglecoin").textContent = "Auto: OFF"}
		if (player.shoptoggles.prestige == false) {document.getElementById("shoptoggleprestige").textContent = "Auto: OFF"}
		if (player.shoptoggles.transcend == false) {document.getElementById("shoptoggletranscend").textContent = "Auto: OFF"}
		if (player.shoptoggles.generator == false) {document.getElementById("shoptogglegenerator").textContent = "Auto: OFF"}


			var p = ""
			if (player.currentChallengeRein == 'six') {p = " || TAX+ [Reincarnation]"}
			if (player.currentChallengeRein == 'seven') {p = " || MULTIPLIER/ACCELERATOR-- [Reincarnation]"}
			if (player.currentChallenge == "" && (player.currentChallengeRein == "six" || player.currentChallengeRein == "seven")) {document.getElementById("currentchallenge").textContent = "Current Challenge:" + p}
			if (player.currentChallenge == 'one'){document.getElementById("currentchallenge").textContent = "Current Challenges: No Multipliers [Transcension]" + p}
			if (player.currentChallenge == 'two'){document.getElementById("currentchallenge").textContent = "Current Challenges: No Accelerators [Transcension]" + p}
			if (player.currentChallenge == 'three'){document.getElementById("currentchallenge").textContent = "Current Challenges: No Shards [Transcension]" + p}
			if (player.currentChallenge == 'four'){document.getElementById("currentchallenge").textContent = "Current Challenges: Fast Cost Growth [Transcension]" + p}
			if (player.currentChallenge == 'five'){document.getElementById("currentchallenge").textContent = "Current Challenges: Reduced Diamonds [Transcension]" + p}
			

		revealStuff();
		toggleauto();

		if (player.offlinetick < 1.5e12) {player.offlinetick = Date.now()}
		var updatedtime = Date.now()
		if ((updatedtime - player.offlinetick) > 10000) {
			console.log(player.offlinetick)
			var timeadd = Math.min(28800, (updatedtime - player.offlinetick) / 1000);
			player.prestigecounter += timeadd;
			player.transcendcounter += timeadd;
			player.reincarnationcounter += timeadd;
			
			if (player.researches[61] > 0.5) {
				player.obtainiumtimer += timeadd
				var u = 1;
				if(player.upgrades[69] > 0.5){u = Math.min(3,Decimal.pow(Decimal.log(reincarnationPointGain.add(10), 10), 0.5))}
				player.researchPoints += Math.floor((1 + player.researches[64]) * u * player.obtainiumtimer / (60 - player.researches[62] - player.researches[63]))
				var a = player.obtainiumtimer % (60 - player.researches[62] - player.researches[63])
				player.obtainiumtimer = a
			}
			console.log("You were offline for " + (updatedtime - player.offlinetick) / 1000 + " seconds!")
		}
		player.offlinetick = updatedtime
		saveSynergy();

		var m = 1;
		m *= (1 + player.researches[4]/10) * (1 + player.researches[21]/800)

		document.getElementById("runeshowpower1").textContent = "Speed Rune Bonus: " + "+" + format(Math.floor(player.runelevels[0] * m)) + " Accelerators, +" + (player.runelevels[0]/2  * m).toPrecision(2) +"% Accelerators, +" + format(Math.floor(player.runelevels[0]/10 * m)) + " Accelerator Boosts."
		if (player.achievements[38] == 1)document.getElementById("runeshowpower2").textContent = "Duplication Rune Bonus: " + "+" + Math.floor(player.runelevels[1] * m / 10) * Math.floor(10 + player.runelevels[1] * m /10) / 2 + " +" + m *player.runelevels[1]/2 +"% Multipliers, -" + (100 * (1 - Math.pow(10, - player.runelevels[1]/500))).toPrecision(4)  + "% Tax Growth.";
		if (player.achievements[44] == 1)document.getElementById("runeshowpower3").textContent = "Prism Rune Bonus: " + "All Crystal Producer production multiplied by " + format(Decimal.pow(player.runelevels[2] * m, 2).times(Decimal.pow(2, player.runelevels[2] * m - 8).add(1))) + ", gain +" + format(Math.floor(player.runelevels[2]/10 * m)) + " free crystal levels.";
		if (player.achievements[102] == 1)document.getElementById("runeshowpower4").textContent = "Thrift Rune Bonus: " + "Delay all producer cost increases by " + (player.runelevels[3]/4 * m).toPrecision(3) + "% buildings. Increase offering recycling chance: " + player.runelevels[3]/8 + "%.";
		document.getElementById("researchrunebonus").textContent = "Thanks to researches, your effective levels are increased by " + (100 * (1 + player.researches[4]/10) * (1 + player.researches[21]/800) - 100).toPrecision(4) + "%";

		if (player.resettoggle1 == 1) {document.getElementById("prestigeautotoggle").textContent = "Mode: AMOUNT"}
		if (player.resettoggle2 == 1) {document.getElementById("transcendautotoggle").textContent = "Mode: AMOUNT"}
		if (player.resettoggle3 == 1) {document.getElementById("reincarnateautotoggle").textContent = "Mode: AMOUNT"}

		if (player.resettoggle1 == 2) {document.getElementById("prestigeautotoggle").textContent = "Mode: TIME"}
		if (player.resettoggle2 == 2) {document.getElementById("transcendautotoggle").textContent = "Mode: TIME"}
		if (player.resettoggle3 == 2) {document.getElementById("reincarnateautotoggle").textContent = "Mode: TIME"}

		if (player.retrychallenges){document.getElementById("retrybutton").textContent = "Retry: ON"}
		if (!player.retrychallenges){document.getElementById("retrybutton").textContent = "Retry: OFF"}



	}
}

function updatetimer() {
	player.offlinetick = Date.now();
	saveSynergy();
}

function format(input, accuracy = 0) {
	if (input instanceof Decimal) {
		var power = input.e
		var matissa = input.mantissa
	}
	else if (input != 0) {
		var matissa = input / Math.pow(10, Math.floor(Math.log10(input)));
		var power = Math.floor(Math.log10(input));
	}
	if (input == 0 || matissa == 0) {
		return (input)
	}
	if (matissa < 0) {matissa *= -1}
	if(power > 5.5) {
	 matissa = matissa.toFixed(2)
	 if (matissa >= 10) {
		 matissa /= 10;
		 power++;
	 }
		if (power > 100000 && power < 1000000) return (matissa + "e" + power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		if (power >= 1000000 && power < 10000000) {power /= 1000; power = Math.floor(power); power /= 1000; return (matissa + "e" + power + "M".toString())}
		if (power >= 10000000 && power < 100000000) {power /= 10000; power = Math.floor(power); power /= 100; return (matissa + "e" + power + "M".toString())}
		if (power >= 100000000 && power < 1000000000) {power /= 100000; power = Math.floor(power); power /= 10; return (matissa + "e" + power + "M".toString())}
		if (power >= 1000000000 && power < 10000000000) {power /= 1000000; power = Math.floor(power); power /= 1000; return (matissa + "e" + power + "B".toString())}
		if (power >= 1e10 && power < 1e11) {power /= 1e7; power = Math.floor(power); power /= 100; return (matissa + "e" + power + "B".toString())}
		if (power >= 1e11 && power < 1e12) {power /= 1e8; power = Math.floor(power); power /= 10; return (matissa + "e" + power + "B".toString())}
		if (power >= 1e12 && power < 1e13) {power /= 1e9; power = Math.floor(power); power /= 1000; return (matissa + "e" + power + "T".toString())}
		if (power >= 1e13 && power < 1e14) {power /= 1e10; power = Math.floor(power); power /= 100; return (matissa + "e" + power + "T".toString())}
		if (power >= 1e14 && power < 1e15) {power /= 1e11; power = Math.floor(power); power /= 10; return (matissa + "e" + power + "T".toString())}
		if (power >= 1e15 && power < 1e16) {power /= 1e12; power = Math.floor(power); power /= 1000; return (matissa + "e" + power + "Qa".toString())}


	return (matissa + "e" + power);	 
	}
	if (power < 5.5 && power >= 1) {
		var n = matissa * Math.pow(10, power);
		n = n.toFixed(0);
		return(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	}
	if (power >= -11  && power <= 0) {
		var n = matissa * Math.pow(10,power);
		n = n.toFixed(accuracy)
		return(n.toString())
	}
	else {
		var n = 0
		return(n.toString())
}
}
// Update calculations for Accelerator/Multiplier as well as just Production modifiers in general [Lines 600-897]

function updateAllTick() {
	var a = 0;
	var b = 0;
    totalAccelerator = player.acceleratorBought;
	
	costDivisor = 1;

    if (player.upgrades[8] > 0.5) {
        a += Math.floor(player.multiplierBought / 7);
    }
    if (player.upgrades[21] > 0.5) {
        a += 5;
    }
    if (player.upgrades[22] > 0.5) {
        a += 4;
    }
    if (player.upgrades[23] > 0.5) {
        a += 3;
	}
	if (player.upgrades[24] > 0.5) {
		a += 2;
	}
	if (player.upgrades[25] > 0.5) {
		a += 1;
	}
    if (player.upgrades[27] > 0.5) {
        a += Math.min(250, Math.floor(Decimal.log(player.coins.add(1), 1e3))) + Math.min(1750, Math.max(0, Math.floor(Decimal.log(player.coins.add(1),1e15)) - 50));
    }
    if (player.upgrades[29] > 0.5) {
        a += Math.floor(Math.min(2000,(player.firstOwnedCoin + player.secondOwnedCoin + player.thirdOwnedCoin + player.fourthOwnedCoin + player.fifthOwnedCoin) / 80))
    }
    if (player.upgrades[32] > 0.5) {
        a += Math.min(500, Math.floor(Decimal.log(player.prestigePoints.add(1), 1e25)));
    }
    if (player.upgrades[45] > 0.5) {
        a += Math.min(2500, Math.floor(Decimal.log(player.transcendShards.add(1), 10)));
	}
	if (player.achievements[5] > 0.5) {a += Math.floor(player.firstOwnedCoin / 500)}
	if (player.achievements[12] > 0.5) {a += Math.floor(player.secondOwnedCoin / 500)}
	if (player.achievements[19] > 0.5) {a += Math.floor(player.thirdOwnedCoin / 500)}
	if (player.achievements[26] > 0.5) {a += Math.floor(player.fourthOwnedCoin / 500)}
	if (player.achievements[33] > 0.5) {a += Math.floor(player.fifthOwnedCoin / 500)}
	if (player.achievements[60] > 0.5) {a += 2}
	if (player.achievements[61] > 0.5) {a += 2}
	if (player.achievements[62] > 0.5) {a += 2}
	
	b = 0
	if (player.upgrades[26] > 0.5) {
		b += 1;
	}
	if (player.upgrades[31] > 0.5) {
		b += Math.floor(totalCoinOwned/2000) * 100/100
	}
	if (player.achievements[7] > 0.5){b += Math.floor(player.firstOwnedCoin/2000)}
	if (player.achievements[14] > 0.5){b += Math.floor(player.secondOwnedCoin/2000)}
	if (player.achievements[21] > 0.5){b += Math.floor(player.thirdOwnedCoin/2000)}
	if (player.achievements[28] > 0.5){b += Math.floor(player.fourthOwnedCoin/2000)}
	if (player.achievements[35] > 0.5){b += Math.floor(player.fifthOwnedCoin/2000)}

	b += Math.floor((0.01 + player.runelevels[0]) * (1 + 1/5 * player.researches[4]) * (1 + 1/2000 * player.researches[21]) / 10);
	b *= (1 + 1/5 * player.researches[3])
	b *= (1 + 1/100 * player.researches[16] + 1/100 * player.researches[17])
	if (player.upgrades[73] > 0.5 && player.currentChallengeRein !== "") {b *= 2}
	b = Math.floor(b)
	freeAcceleratorBoost = b;

	totalAcceleratorBoost = Math.floor(player.acceleratorBoostBought + freeAcceleratorBoost) * 100/100;


		a += totalAcceleratorBoost * (5 + 2 * player.researches[18] + 2 * player.researches[19] + player.researches[20]);
		if (player.unlocks.prestige == true) {
		a += player.runelevels[0]  * (1 + player.runelevels[1] / 200) * (1 + 1/5 * player.researches[4]) * (1 + 1/800 * player.researches[21])
		}
		a += 5 * player.challengecompletions.two
		a *=(1 + player.runelevels[0] * 1/200) * (1 + 1/2000 * player.researches[21]);
		a += (player.acceleratorBought * player.runelevels[0] * 1/200 * (1 + 1/800 * player.researches[21]))
		a *=(1 + player.achievements[60]/100)
		a *=(1 + player.achievements[61]/100)
		a *=(1 + player.achievements[62]/100)
		a *=(1 + 1/5 * player.researches[1])
		a *=(1 + 1/20 * player.researches[6] + 1/80 * player.researches[7] + 1/150 * player.researches[8] + 3/800 * player.researches[9] + 1/500 * player.researches[10]);
		a *= Math.pow(1.01, player.upgrades[21] + player.upgrades[22] + player.upgrades[23] + player.upgrades[24] + player.upgrades[25])
		if ((player.currentChallenge !== "" || player.currentChallengeRein !== "") && player.upgrades[50] > 0.5) {a *= 1.25}
		a = Math.floor(a)
	
	freeAccelerator = a;
	totalAccelerator += freeAccelerator;
	
	tuSevenMulti = 1;


	if (player.upgrades[46] > 0.5) {
		tuSevenMulti = 1.05;
	}
	
	if (player.currentChallenge !== "two" && player.currentChallenge !== "three" && player.currentChallengeRein !== "seven") {
	 	acceleratorPower = Math.pow(1.1 + tuSevenMulti * (totalAcceleratorBoost / 100) * (1 + player.challengecompletions.two / 20), 1 + 0.04 * player.challengecompletions.seven);
	}
	if (player.currentChallenge == "two" || player.currentChallengeRein == "seven") {
        acceleratorPower = 1;
	}
	if (player.currentChallenge == "three" && player.currentChallengeRein !== "seven") {
		acceleratorPower = 1.05 + 2 *  tuSevenMulti * (totalAcceleratorBoost/300) * (1 + player.challengecompletions.two / 20);
	}
	if (player.currentChallenge == "one" && player.currentChallengeRein !== "seven") {
		acceleratorPower *= 0.5
		acceleratorPower += 0.55
	}
	if (player.currentChallenge !== "two" && player.currentChallengeRein !== "seven" && player.achievements[3] > 0.5) {acceleratorPower += 0.0005}
	if (player.currentChallenge !== "two" && player.currentChallengeRein !== "seven" && player.achievements[10] > 0.5) {acceleratorPower += 0.001}
	if (player.currentChallenge !== "two" && player.currentChallengeRein !== "seven" && player.achievements[17] > 0.5) {acceleratorPower += 0.0015}
	if (player.currentChallenge !== "two" && player.currentChallengeRein !== "seven" && player.achievements[24] > 0.5) {acceleratorPower += 0.002}
	if (player.currentChallenge !== "two" && player.currentChallengeRein !== "seven" && player.achievements[31] > 0.5) {acceleratorPower += 0.0025}

	if (player.currentChallenge !== "two" && player.currentChallengeRein !== "seven") {
		acceleratorPower += 1/200 * Math.floor(player.challengecompletions.two / 2) * 100/100
	}

	if (player.currentChallenge !== "one") { 
	acceleratorEffect = Decimal.pow(acceleratorPower, totalAccelerator);
	}

	if (player.currentChallenge == "one") {
		acceleratorEffect = Decimal.pow(acceleratorPower, totalAccelerator + totalMultiplier);
	}
		acceleratorEffectDisplay = acceleratorPower * 100 - 100

	generatorPower = new Decimal(1);
	if (player.upgrades[11] > 0.5  && player.currentChallengeRein !== "seven") {
		generatorPower = Decimal.pow(1.02, totalAccelerator)
	}

	}

function updateAllMultiplier() {
	var a = 0;

    if (player.upgrades[7] > 0.5) {
        a += Math.min(4, 1 + Math.floor(Decimal.log(player.fifthOwnedCoin + 1, 10)));
    }
    if (player.upgrades[9] > 0.5) {
        a += Math.floor(player.acceleratorBought / 10);
    }
    if (player.upgrades[21] > 0.5) {
        a += 1;
    }
    if (player.upgrades[22] > 0.5) {
        a += 1;
    }
    if (player.upgrades[23] > 0.5) {
        a += 1;
	}
	if (player.upgrades[24] > 0.5) {
        a += 1;
	}
	if (player.upgrades[25] > 0.5) {
        a += 1;
    }
    if (player.upgrades[28] > 0.5) {
        a += Math.min(1000, Math.floor((player.firstOwnedCoin + player.secondOwnedCoin + player.thirdOwnedCoin + player.fourthOwnedCoin + player.fifthOwnedCoin)/160))
    }
    if (player.upgrades[30] > 0.5) {
        a += Math.min(75, Math.floor(Decimal.log(player.coins.add(1), 1e10))) + Math.min(925, Math.floor(Decimal.log(player.coins.add(1), 1e30)));
	}
	if (player.upgrades[33] > 0.5) {
		a += totalAcceleratorBoost
	}
    if (player.upgrades[34] > 0.5) {
		a *= 1.03 * 100/100
	}
	if (player.upgrades[35] > 0.5) {
		a *= 1.05/1.03 * 100/100
	}
    if (player.upgrades[49] > 0.5) {
        a += Math.min(50, Math.floor(Decimal.log(player.transcendPoints.add(1), 1e10)));
	}
	if (player.upgrades[68] > 0.5) {
		a += Math.min(2500, Math.floor(Decimal.log(taxdivisor, 10) * 1/1000))
	}

	if (player.challengecompletions.one > 0.5) {
		a += 1
	}
	if (player.achievements[6] > 0.5) {a += Math.floor(player.firstOwnedCoin/1000)}
	if (player.achievements[13] > 0.5) {a += Math.floor(player.secondOwnedCoin/1000)}
	if (player.achievements[20] > 0.5) {a += Math.floor(player.thirdOwnedCoin/1000)}
	if (player.achievements[27] > 0.5) {a += Math.floor(player.fourthOwnedCoin/1000)}
	if (player.achievements[34] > 0.5) {a += Math.floor(player.fifthOwnedCoin/1000)}
	if (player.achievements[57] > 0.5) {a += 1}
	if (player.achievements[58] > 0.5) {a += 1}
	if (player.achievements[59] > 0.5) {a += 1}


	if (player.achievements[38] > 0.5) {
		a += Math.floor(Math.floor(player.runelevels[1] / 10 * (1 + 1/10 * player.researches[4]) * (1 + 1/800 * player.researches[21])) * Math.floor(10 + player.runelevels[1] / 10 * (1 + player.researches[5]/10) * (1 + player.researches[21] / 800)) / 2) * 100/100
	}
	
	a *= (1 + player.achievements[57]/100)
	a *= (1 + player.achievements[58]/100)
	a *= (1 + player.achievements[59]/100)
	a *= Math.pow(1.01, player.upgrades[21] + player.upgrades[22] + player.upgrades[23] + player.upgrades[24] + player.upgrades[25])
    a *=(1 + 1/5 * player.researches[2])
	a *=(1 + 1/20 * player.researches[11] + 1/40 * player.researches[12] + 1/200 * player.researches[13] + 1/400 * player.researches[14] + 1/500 * player.researches[15])
	a *=(1 + player.runelevels[1]/200 * (1 + player.researches[4]/5) * (1 + player.researches[21]/800))
	if ((player.currentChallenge !== "" || player.currentChallengeRein !== "") && player.upgrades[50] > 0.5) {a *= 1.25};
		
	a = Math.floor(a)
	freeMultiplier = a;
    totalMultiplier = freeMultiplier + player.multiplierBought;
	
	multiplierPower = 2;
	challengeOneLog = 3;

	var b = 0;
	var c = 0;
	b += Decimal.log(player.transcendShards.add(1), challengeOneLog - 1/80 * player.researches[31] - 1/100 * player.researches[32] - 3/400 * player.researches[33] - 1/200 * player.researches[34] - 1/400 * player.researches[35]);

	c += Math.floor((0.1 * b * player.challengecompletions.one))

	c += (player.challengecompletions.one * 10);
	freeMultiplierBoost = c;
	totalMultiplierBoost = Math.pow(Math.floor(b) + c, 1 + player.challengecompletions.seven * 0.04);
	
	var c7 = 1
	if (player.challengecompletions.seven > 0.5) {c7 = 1.25}

    if (player.currentChallenge !== "one" && player.currentChallenge !== "two" && player.currentChallengeRein !== "seven") {multiplierPower = (2 + 0.005 * (totalMultiplierBoost) * c7);}
    if (player.currentChallenge == "one" || player.currentChallengeRein == "seven") {multiplierPower = 1;}
    if (player.currentChallenge == "two" && player.currentChallengeRein !== "seven") {multiplierPower = (1.25 + 0.0012 * (b + c) * c7);}
	multiplierEffect = Decimal.pow(multiplierPower, totalMultiplier);
	}

function multipliers() {
	var s = new Decimal(1);
	var c = new Decimal(1);

totalCoinOwned = player.firstOwnedCoin + player.secondOwnedCoin + player.thirdOwnedCoin + player.fourthOwnedCoin + player.fifthOwnedCoin;
prestigeMultiplier = Decimal.pow(player.prestigeShards, 1/3 + Math.min(10, 0.05 * player.crystalUpgrades[3]) + 0.04 * player.challengecompletions.three + 0.02 * (player.researches[28] + player.researches[29] + 0.5 * player.researches[30])).add(1);

var c7 = 1;
if (player.currentChallengeRein == "seven") {c7 = 0.05}
buildingPower = 1 + (1 - Math.pow(2, -1/160)) * c7 * Decimal.log(player.reincarnationShards.add(1), 10) * (1 + 1/100 * player.researches[36] + 1/200 * player.researches[37] + 1/200 * player.researches[38])

reincarnationMultiplier = Decimal.pow(buildingPower, totalCoinOwned);



s = s.times(multiplierEffect);
s = s.times(acceleratorEffect);
s = s.times(prestigeMultiplier);
s = s.times(reincarnationMultiplier);

if (player.upgrades[6] > 0.5) {
	s = s.times((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)));
}
if (player.upgrades[12] > 0.5) {
	s = s.times(Decimal.min(1e4, Decimal.pow(1.01, player.prestigeCount)));
}
if (player.upgrades[20] > 0.5) {
	s = s.times(Math.pow(totalCoinOwned / 4 + 1 , 10));
}
if (player.upgrades[41] > 0.5) {
	s = s.times(Decimal.min(1e30,Decimal.pow(player.transcendPoints.add(1), 1/2)));
}
if (player.upgrades[43] > 0.5) {
	s = s.times(Decimal.min(1e30,Decimal.pow(1.01, player.transcendCount)));
}
if (player.upgrades[48] > 0.5) {
	s = s.times(Math.pow((totalMultiplier * totalAccelerator / 1000 + 1), 8));
}
if (player.upgrades[50] > 0.5 && player.currentChallenge !== "") {
	s = s.times(1e25);
}
if (player.currentChallengeRein == "six") {s = s.dividedBy(1e250)}
if (player.currentChallengeRein == "seven") {s = s.dividedBy("1e1250")}
c = Decimal.pow(s , 1 + 0.001 * player.researches[17]);

globalCoinMultiplier = c;

coinOneMulti = new Decimal(1);

	if (player.upgrades[1] > 0.5) {
		coinOneMulti = coinOneMulti.times((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)));
	}
	if (player.upgrades[10] > 0.5) {
		coinOneMulti = coinOneMulti.times(Decimal.pow(2, Math.min(50, player.secondOwnedCoin/15)));
	}
	if (player.upgrades[40] > 0.5) {
		coinOneMulti = coinOneMulti.times("1e10000")
	}
	if (player.upgrades[56] > 0.5) {
		coinOneMulti = coinOneMulti.times("1e5000")
	}

coinTwoMulti = new Decimal(1);

	if (player.upgrades[2] > 0.5) {
		coinTwoMulti = coinTwoMulti.times((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)));
	}
	if (player.upgrades[13] > 0.5) {
		coinTwoMulti = coinTwoMulti.times(Decimal.min(1e50, Decimal.pow(player.firstGeneratedMythos.add(player.firstOwnedMythos).add(1), 4/3).times(1e10)));
	}
	if (player.upgrades[19] > 0.5) {
		coinTwoMulti = coinTwoMulti.times(Decimal.min(1e200, player.transcendPoints.times(1e30).add(1)));
	}
	if (player.upgrades[39] > 0.5) {
		coinTwoMulti = coinTwoMulti.times("1e7000")
	}
	if (player.upgrades[57] > 0.5) {
		coinTwoMulti = coinTwoMulti.times("1e7500")
	}

coinThreeMulti = new Decimal(1);

	if (player.upgrades[3] > 0.5) {
	coinThreeMulti = coinThreeMulti.times((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)));
}
	if (player.upgrades[18] > 0.5) {
		coinThreeMulti = coinThreeMulti.times(Decimal.min(1e125, player.transcendShards.add(1)));
	}
	if (player.upgrades[38] > 0.5) {
		coinThreeMulti = coinThreeMulti.times("1e4000")
	}
	if (player.upgrades[58] > 0.5) {
		coinThreeMulti = coinThreeMulti.times("1e15000")
	}

coinFourMulti = new Decimal(1);

	if (player.upgrades[4] > 0.5) {
	coinFourMulti = coinFourMulti.times((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)));
}
	
	if (player.upgrades[17] > 0.5) {
		coinFourMulti = coinFourMulti.times(1e100);
	}

	if (player.upgrades[59] > 0.5) {
		coinFourMulti = coinFourMulti.times("1e25000")
	}

coinFiveMulti = new Decimal(1);

	if (player.upgrades[5] > 0.5) {
		coinFiveMulti = coinFiveMulti.times((totalCoinOwned + 1) * Math.min(1e30, Math.pow(1.008, totalCoinOwned)));
	}

	if (player.upgrades[60] > 0.5) {
		coinFiveMulti = coinFiveMulti.times("1e35000")
	}
	
globalCrystalMultiplier = new Decimal(1)
if (player.achievements[36] > 0.5) {
	globalCrystalMultiplier = globalCrystalMultiplier.times(2)
}
if (player.achievements[37] > 0.5 && player.prestigePoints.greaterThanOrEqualTo(10)) {
	globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.log(player.prestigePoints.add(1), 10))
}
if (player.achievements[43] > 0.5) {
	globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(player.runelevels[2] * (1 + player.researches[4]/5) * (1 + player.researches[21]/800), 2).times(Decimal.pow(2, player.runelevels[2] * (1 + player.researches[5]/10) * (1 + player.researches[21]/800)  - 8).add(1)))
}
if (player.upgrades[36] > 0.5) {globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.min("1e5000", Decimal.pow(player.prestigePoints, 1/500)))}
if (player.upgrades[63] > 0.5) {globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(player.reincarnationPoints.add(1),6))}
if (player.researches[39] > 0.5) {globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(reincarnationMultiplier, 1/50))}

globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.min(Decimal.pow(10, 50 + 2 * player.crystalUpgrades[0]), Decimal.pow(1.05, player.achievementPoints * player.crystalUpgrades[0])))
globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.min(Decimal.pow(10, 100 + 5 * player.crystalUpgrades[1]), Decimal.pow(Decimal.log(player.coins.add(1), 10),player.crystalUpgrades[1]/3)))
globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(1 + 0.001 * player.crystalUpgrades[2], player.firstOwnedDiamonds + player.secondOwnedDiamonds + player.thirdOwnedDiamonds + player.fourthOwnedDiamonds + player.fifthOwnedDiamonds))	
globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(1.01, (player.challengecompletions.one + player.challengecompletions.two +player.challengecompletions.three +player.challengecompletions.four +player.challengecompletions.five) * player.crystalUpgrades[4]))
globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(10, player.challengecompletions.five))
globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(1.10, player.researches[26]))
globalCrystalMultiplier = globalCrystalMultiplier.times(Decimal.pow(1.05, player.researches[27]))


		globalMythosMultiplier = new Decimal(1)

	if (player.upgrades[37] > 0.5) {globalMythosMultiplier = globalMythosMultiplier.times(Decimal.pow(Decimal.log(player.prestigePoints.add(10),10),2))}
	if (player.upgrades[42] > 0.5) {
		globalMythosMultiplier = globalMythosMultiplier.times(Decimal.min(1e50, Decimal.pow(player.prestigePoints.add(1), 1/50).dividedBy(2.5).add(1)));
	}
	if (player.upgrades[47] > 0.5) {globalMythosMultiplier = globalMythosMultiplier.times(Math.pow(1.05, player.achievementPoints)).times(player.achievementPoints + 1)}
	if (player.upgrades[51] > 0.5) {
		globalMythosMultiplier = globalMythosMultiplier.times(Math.pow(totalAcceleratorBoost, 2))
	}
	if (player.upgrades[52] > 0.5) {
		globalMythosMultiplier = globalMythosMultiplier.times(Decimal.pow(globalMythosMultiplier, 0.025))
	}
	if (player.upgrades[64] > 0.5) {globalMythosMultiplier = globalMythosMultiplier.times(Decimal.pow(player.reincarnationPoints.add(1), 2))}
	if (player.researches[40] > 0.5) {globalMythosMultiplier = globalMythosMultiplier.times(Decimal.pow(reincarnationMultiplier, 1/250))}
 grandmasterMultiplier = new Decimal(1);
 totalMythosOwned = player.firstOwnedMythos + player.secondOwnedMythos + player.thirdOwnedMythos + player.fourthOwnedMythos + player.fifthOwnedMythos;

	mythosBuildingPower = 1 + (player.challengecompletions.three / 200);
	challengeThreeMultiplier = Decimal.pow(mythosBuildingPower, totalMythosOwned);

	grandmasterMultiplier = grandmasterMultiplier.times(challengeThreeMultiplier);

	mythosupgrade13 = new Decimal(1);
	mythosupgrade14 = new Decimal(1);
	mythosupgrade15 = new Decimal(1);
	if (player.upgrades[53] == 1){mythosupgrade13 = mythosupgrade13.times(Decimal.min("1e1250", Decimal.pow(acceleratorEffect, 1/125)))};
	if (player.upgrades[54] == 1){mythosupgrade14 = mythosupgrade14.times(Decimal.min("1e2000", Decimal.pow(multiplierEffect, 1/180)))};
	if (player.upgrades[55] == 1){mythosupgrade15 = mythosupgrade15.times(Decimal.pow("1e1000", buildingPower - 1))};
}

// Decide production values for resourceGain() and for generation in updateAll() [Lines 901 - 924]



function mythosProduction() {
	produceMythos = (player.firstGeneratedMythos.add(player.firstOwnedMythos)).times(player.firstProduceMythos).times(globalMythosMultiplier).times(mythosupgrade13);
	producePerSecondMythos = produceMythos.times(40);
	}

function particlesProduction() {
	var a = new Decimal(1);
	if (player.upgrades[67] > 0.5) {a = Decimal.pow(1.03, player.firstOwnedParticles + player.secondOwnedParticles + player.thirdOwnedParticles + player.fourthOwnedParticles + player.fifthOwnedParticles)}
	produceParticles = new Decimal("0");

	produceParticles = (player.firstGeneratedParticles.add(player.firstOwnedParticles)).times(player.firstProduceParticles).times(a);
	producePerSecondParticles = produceParticles.times(40);

	}

 // Function that adds to resources each tick. [Lines 928 - 989]

function resourceGain(){
		updateAllTick();
		updateAllMultiplier();
		multipliers();
		calculatetax();
		if (produceTotal.greaterThanOrEqualTo(0.001)) {
			var addcoin = new Decimal.min(produceTotal.dividedBy(taxdivisor), Decimal.pow(10, maxexponent - Decimal.log(taxdivisorcheck , 10)))

		player.coins = player.coins.add(addcoin);
		player.coinsThisPrestige = player.coinsThisPrestige.add(addcoin);
		player.coinsThisTranscension = player.coinsThisTranscension.add(addcoin);
		player.coinsThisReincarnation = player.coinsThisReincarnation.add(addcoin);
		player.coinsTotal = player.coinsTotal.add(addcoin)
		}

		resetCurrency();
		if (player.upgrades[93] == 1 && player.coinsThisPrestige.greaterThanOrEqualTo(1e16)) {
			player.prestigePoints = player.prestigePoints.add(Decimal.floor(prestigePointGain.dividedBy(4000)))
		}
		if (player.upgrades[100] == 1 && player.coinsThisTranscension.greaterThanOrEqualTo(1e100)) {
			player.transcendPoints = player.transcendPoints.add(Decimal.floor(transcendPointGain.dividedBy(4000)))
		}
	
		if (player.currentChallenge !== "three") {
			player.transcendShards = player.transcendShards.add(produceMythos);
		}		
	
	player.reincarnationShards = player.reincarnationShards.add(produceParticles);


		if (player.researches[71] > 0.5 && player.challengecompletions.one < (Math.min(player.highestchallengecompletions.one, 25 + player.researches[66])) && player.coins.greaterThanOrEqualTo(Decimal.pow(10, 1.25 * challengebaserequirements.one * Math.pow(1 + player.challengecompletions.one, 2)))) {
			player.challengecompletions.one += 1;		
	//		challengeDisplay(1,false,true);
	//		challengeachievementcheck('one',true)
		}
		if (player.researches[72] > 0.5 && player.challengecompletions.two < (Math.min(player.highestchallengecompletions.two, 25 + player.researches[66])) && player.coins.greaterThanOrEqualTo(Decimal.pow(10, 1.6 * challengebaserequirements.two * Math.pow(1 + player.challengecompletions.two, 2)))) {
			player.challengecompletions.two += 1
			challengeDisplay(2,false,true)
			challengeachievementcheck('two',true)
		}
		if (player.researches[73] > 0.5 && player.challengecompletions.three < (Math.min(player.highestchallengecompletions.three, 25 + player.researches[66])) && player.coins.greaterThanOrEqualTo(Decimal.pow(10, 1.7 * challengebaserequirements.three * Math.pow(1 + player.challengecompletions.three, 2)))) {
			player.challengecompletions.three += 1
			challengeDisplay(3,false,true)
			challengeachievementcheck('three',true)
		}
		if (player.researches[74] > 0.5 && player.challengecompletions.four < (Math.min(player.highestchallengecompletions.four, 25 + player.researches[66])) && player.coins.greaterThanOrEqualTo(Decimal.pow(10, 1.45 * challengebaserequirements.four * Math.pow(1 + player.challengecompletions.four, 2)))) {
			player.challengecompletions.four += 1
			challengeDisplay(4,false,true)
			challengeachievementcheck('four',true)
		}
		if (player.researches[75] > 0.5 && player.challengecompletions.five < (Math.min(player.highestchallengecompletions.five, 25 + player.researches[66])) && player.coins.greaterThanOrEqualTo(Decimal.pow(10, 2 * challengebaserequirements.five * Math.pow(1 + player.challengecompletions.five, 2)))) {
			player.challengecompletions.five += 1
			challengeDisplay(5,false,true)
			challengeachievementcheck('five',true)
		}

		if (player.coins.greaterThanOrEqualTo(1000) && player.unlocks.coinone == false) {
			player.unlocks.coinone = true;
			revealStuff();
		}
		if (player.coins.greaterThanOrEqualTo(20000) && player.unlocks.cointwo == false) {
			player.unlocks.cointwo = true;
			revealStuff();
		}
		if (player.coins.greaterThanOrEqualTo(100000) && player.unlocks.cointhree == false) {
			player.unlocks.cointhree = true;
			revealStuff();
		}
		if (player.coins.greaterThanOrEqualTo(8e6) && player.unlocks.coinfour == false) {
			player.unlocks.coinfour = true;
			revealStuff();
		}
		htmlInserts();
	}

	// Toggle Functions [Lines 993 - 1013]

function toggleTabs(i) {
		currentTab = i;
		hideStuff();
	}

function toggleSettings(i) {
		if (player.toggles[cardinals[i]] == true) {
			player.toggles[cardinals[i]] = false
		}
		else {player.toggles[cardinals[i]] = true}
		toggleauto();
	}

function toggleChallenges(i) {
	if (player.currentChallenge == "" && (i == 'one' || i == 'two' || i == 'three' || i == 'four' || i == 'five')) {
		player.currentChallenge = i;
		reset(2);
		player.transcendCount -= 1;
	}
	if (player.currentChallenge == "" && (i == 'six' || i == 'seven') && player.currentChallengeRein == "") {
		player.currentChallengeRein = i;
		reset(3);
		player.reincarnationCount -= 1;
	}
		var x = ""
		var y = ""
		if (player.currentChallengeRein == 'six') {x = " || TAX+ [Reincarnation]"}
		if (player.currentChallengeRein == 'seven') {x = " || MULTIPLIER/ACCELERATOR-- [Reincarnation]"}
		if (player.currentChallengeRein !== "" && player.currentChallenge !== "") { y = "s"}
		if (i == player.currentChallenge || i == player.currentChallengeRein){
		if (i == 'one'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": No Multipliers [Transcension]" + x}
		if (i == 'two'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": No Accelerators [Transcension]" + x}
		if (i == 'three'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": No Shards [Transcension]" + x}
		if (i == 'four'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": Fast Cost Growth [Transcension]" + x}
		if (i == 'five'){document.getElementById("currentchallenge").textContent = "Current Challenge" + y + ": Reduced Diamonds [Transcension]" + x}
		if (i !== 'one' && i !== 'two' && i !== 'three' && i !== 'four' && i !== 'five') {document.getElementById("currentchallenge").textContent = "Current Challenge: None [Transcension]" + x}
		}
	}


function toggleBuyAmount(quantity, type) {
	player[type + 'buyamount'] = quantity 
	if (quantity == 1) {var a = "one"}
	if (quantity == 10) {var a = "ten"}
	if (quantity == 100) {var a = "hundred"}

	
	var c = type + a
	var d = ""
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
} 

function toggleShops(i) {
	if (i==1 && player.shoptoggles.coin == false) {player.shoptoggles.coin = true; document.getElementById("shoptogglecoin").textContent = "Auto: ON"} else if (i == 1 && player.shoptoggles.coin == true) {player.shoptoggles.coin = false; document.getElementById("shoptogglecoin").textContent = "Auto: OFF"}
	if (i==2 && player.shoptoggles.prestige == false) {player.shoptoggles.prestige = true; document.getElementById("shoptoggleprestige").textContent = "Auto: ON"} else if (i == 2 && player.shoptoggles.prestige == true) {player.shoptoggles.prestige = false; document.getElementById("shoptoggleprestige").textContent = "Auto: OFF"}
	if (i==3 && player.shoptoggles.transcend == false) {player.shoptoggles.transcend = true; document.getElementById("shoptoggletranscend").textContent = "Auto: ON"} else if (i == 3 && player.shoptoggles.transcend == true) {player.shoptoggles.transcend = false; document.getElementById("shoptoggletranscend").textContent = "Auto: OFF"}
	if (i==4 && player.shoptoggles.generators == false) {player.shoptoggles.generators = true; document.getElementById("shoptogglegenerator").textContent = "Auto: ON"} else if (i == 4 && player.shoptoggles.generators == true) {player.shoptoggles.generators = false; document.getElementById("shoptogglegenerator").textContent = "Auto: OFF"}

}

function keyboardtabchange(i) {
	var q = 3;
	if (player.unlocks.coinfour == true) {q += 1}
	if (player.unlocks.prestige == true) {q += 2}
	if (player.unlocks.transcend == true) {q += 2}
	if (player.unlocks.reincarnate == true) {q += 2}
	player.tabnumber += i
	if (player.tabnumber == q) {player.tabnumber = 1}
	if (player.tabnumber == 0) {player.tabnumber = q - 1}

	if (player.tabnumber == 1) {toggleTabs("buildings")}
	if (player.tabnumber == 2) {toggleTabs("upgrades")}
	if (player.tabnumber == 3) {toggleTabs("achievements")}
	if (player.tabnumber == 4) {toggleTabs("prestige")}
	if (player.tabnumber == 5) {toggleTabs("runes")}
	if (player.tabnumber == 6) {toggleTabs("transcension")}
	if (player.tabnumber == 7) {toggleTabs("challenges")}
	if (player.tabnumber == 8) {toggleTabs("reincarnation")}
	if (player.tabnumber == 9) {toggleTabs("researches")}

	

}

function toggleautoreset(i) {
	if (i == 1){
		if (player.resettoggle1 == 1 || player.resettoggle1 == 0){player.resettoggle1 = 2; document.getElementById("prestigeautotoggle").textContent = "Mode: TIME"}
		else{player.resettoggle1 = 1; document.getElementById("prestigeautotoggle").textContent = "Mode: AMOUNT"}
	}
	if (i == 2){
		if (player.resettoggle2 == 1 || player.resettoggle2 == 0){player.resettoggle2 = 2; document.getElementById("transcendautotoggle").textContent = "Mode: TIME"}
		else{player.resettoggle2 = 1; document.getElementById("transcendautotoggle").textContent = "Mode: AMOUNT"}
	}
	if (i == 3){
		if (player.resettoggle3 == 1 || player.resettoggle3 == 0){player.resettoggle3 = 2; document.getElementById("reincarnateautotoggle").textContent = "Mode: TIME"}
		else{player.resettoggle3 = 1; document.getElementById("reincarnateautotoggle").textContent = "Mode: AMOUNT"}
	}


}

	// Buy Automation and Generation Functions [Lines 1017 - 1123]

function buyAutobuyers(i, state) {
		var q = i + 80
		var type = ""
		if (q <= 87) {type = "prestigePoints"}
		else if (q <= 93) {type  = "transcendPoints"}
		else {type = "reincarnationPoints"}

		var cost = Decimal.pow(10, upgradeCosts[q])
		if (player[type].greaterThanOrEqualTo(cost) && player.upgrades[q] == 0) {
			player[type] = player[type].sub(cost);
			player.upgrades[q] = 1;
			upgradeupdate(q, state);
		}
	}
	

	
//Buy Accelerators, Multipliers, and Buildings. Also buy Upgrades, A. Boosts & Research Here [Lines 1127 - 1244]

function buyAccelerator(autobuyer=false){
	var autobuyamount = 0;
	if(autobuyer){autobuyamount = 9999}
	var buythisamount = Math.max(player.coinbuyamount, autobuyamount)
	while(player.coins.greaterThanOrEqualTo(player.acceleratorCost) && ticker < buythisamount) {

		player.coins = player.coins.sub(player.acceleratorCost);
		player.acceleratorCost = player.acceleratorCost.times(4);
		player.acceleratorCost = player.acceleratorCost.dividedBy(costDivisor);
		player.acceleratorBought += 1;
	
		if (player.acceleratorBought > (125 + 5 * player.challengecompletions.four)){
		player.acceleratorCost = player.acceleratorCost.times(4 * player.acceleratorBought - (500 + 20 * player.challengecompletions.four))
		}
		if (player.acceleratorBought > (2000 + 5 * player.challengecompletions.four)){
		player.acceleratorCost = player.acceleratorCost.times(Decimal.pow(2, player.acceleratorBought - (2000 + 5 * player.challengecompletions.four)))
		}

		if (player.currentChallenge == "four") {
		player.acceleratorCost = player.acceleratorCost.times(Decimal.pow(10, player.acceleratorBought))
		}

		ticker++
	}
		ticker = 0;
		player.prestigenoaccelerator = false;
		player.transcendnoaccelerator = false;
		player.reincarnatenoaccelerator = false;
		updateAllTick();
	}

function buyMultiplier(autobuyer=false){
	var autobuyamount = 0;
	if(autobuyer){autobuyamount = 9999}
	var buythisamount = Math.max(player.coinbuyamount, autobuyamount)
	while(player.coins.greaterThanOrEqualTo(player.multiplierCost) && ticker < buythisamount) {
		player.coins = player.coins.sub(player.multiplierCost);
		player.multiplierBought += 1;
		player.multiplierCost = player.multiplierCost.times(10);
		player.multiplierCost = player.multiplierCost.dividedBy(costDivisor);

		if (player.multiplierBought > (75 + 2 * player.challengecompletions.four)){
		player.multiplierCost = player.multiplierCost.times(10 * player.multiplierBought - (750 + 20 * player.challengecompletions.four))
		}
		if (player.multiplierBought > (2000 + 2 * player.challengecompletions.four)){
		player.multiplierCost = player.multiplierCost.times(Decimal.pow(2, player.multiplierBought - (2000 + 2 * player.challengecompletions.four)))
		}
		if (player.currentChallenge == "four") {
		player.multiplierCost = player.multiplierCost.times(Decimal.pow(10, player.multiplierBought))
		}
		ticker++
	}
		ticker = 0;
		player.prestigenomultiplier = false;
		player.transcendnomultiplier = false;
		player.reincarnatenomultiplier = false;

		updateAllMultiplier();
	}
	
function buyProducer(pos,type,num,autobuyer=false) {
	var autobuyamount = 0;
	var r = 1;
	r += 1/400 * player.runelevels[3]
	r += 1/200 * (player.researches[56] + player.researches[57] + player.researches[58] + player.researches[59] + player.researches[60])
	r += 1/200 * player.challengecompletions.four
	if (type == 'Diamonds'){var tag = "prestigePoints"; var amounttype = "crystal"}
	if (type == 'Mythos'){var tag = "transcendPoints"; var amounttype = "mythos"}
	if (type == 'Particles') {var tag = "reincarnationPoints"; var amounttype = "particle"}
	if (type == "Coin") {var tag = "coins"; var amounttype = "coin"}
	if (autobuyer){autobuyamount = 1000}
	var buythisamount = Math.max(autobuyamount, player[amounttype + 'buyamount'])
		while(player[tag].greaterThanOrEqualTo(player[pos + 'Cost' + type]) && ticker < buythisamount) {
			player[tag] = player[tag].sub(player[pos + 'Cost' + type]);
			player[pos + 'Owned' + type] += 1;
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(1.25, num));
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].add(1);
			if (player[pos + 'Owned' + type] >= (1000 * r)){
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(player[pos + 'Owned' + type]).dividedBy(1000).times(1 + num/2);
			}
			if (player[pos + 'Owned' + type] >= (5000 * r)){
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(player[pos + 'Owned' + type]).times(10).times(10 + num * 10);
			 }  
			if (player[pos + 'Owned' + type] >= (20000 * r)){
			player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(player[pos + 'Owned' + type], 3)).times(100000).times(100 + num * 100)  
			 }
			if (player.currentChallenge == "four" && (type == "Coin" || type == "Diamonds")) {
				 player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Math.pow(100 * player[pos + 'Owned' + type] + 10000, 1.25 + 1/4 * player.challengecompletions.four));
				 if (player[pos + 'Owned' + type] >= 1000 - (10 * player.challengecompletions.four)) {
					player[pos + 'Cost' + type] = player[pos + 'Cost' + type].times(Decimal.pow(1.25, player[pos + 'Owned' + type]));
				 }
				 }
				 ticker += 1;
			 }
			 ticker = 0;
			if (player.firstOwnedCoin >= 1 && player.achievements[1] < 0.5) {achievementaward(1)}
			if (player.firstOwnedCoin >= 10 && player.achievements[2] < 0.5) {achievementaward(2)}
			if (player.firstOwnedCoin >= 100 && player.achievements[3] < 0.5) {achievementaward(3)}
			if (player.firstOwnedCoin >= 1000 && player.achievements[4] < 0.5) {achievementaward(4)}
			if (player.firstOwnedCoin >= 5000 && player.achievements[5] < 0.5) {achievementaward(5)}
			if (player.firstOwnedCoin >= 10000 && player.achievements[6] < 0.5) {achievementaward(6)}
			if (player.firstOwnedCoin >= 20000 && player.achievements[7] < 0.5) {achievementaward(7)}
			if (player.secondOwnedCoin >= 1 && player.achievements[8] < 0.5) {achievementaward(8)}
            if (player.secondOwnedCoin >= 10 && player.achievements[9] < 0.5) {achievementaward(9)}
            if (player.secondOwnedCoin >= 100 && player.achievements[10] < 0.5) {achievementaward(10)}
            if (player.secondOwnedCoin >= 1000 && player.achievements[11] < 0.5) {achievementaward(11)}
            if (player.secondOwnedCoin >= 5000 && player.achievements[12] < 0.5) {achievementaward(12)}
            if (player.secondOwnedCoin >= 10000 && player.achievements[13] < 0.5) {achievementaward(13)}
			if (player.secondOwnedCoin >= 20000 && player.achievements[14] < 0.5) {achievementaward(14)}
			if (player.thirdOwnedCoin >= 1 && player.achievements[15] < 0.5) {achievementaward(15)}
            if (player.thirdOwnedCoin >= 10 && player.achievements[16] < 0.5) {achievementaward(16)}
            if (player.thirdOwnedCoin >= 100 && player.achievements[17] < 0.5) {achievementaward(17)}
            if (player.thirdOwnedCoin >= 1000 && player.achievements[18] < 0.5) {achievementaward(18)}
            if (player.thirdOwnedCoin >= 5000 && player.achievements[19] < 0.5) {achievementaward(19)}
            if (player.thirdOwnedCoin >= 10000 && player.achievements[20] < 0.5) {achievementaward(20)}
			if (player.thirdOwnedCoin >= 20000 && player.achievements[21] < 0.5) {achievementaward(21)}
			if (player.fourthOwnedCoin >= 1 && player.achievements[22] < 0.5) {achievementaward(22)}
            if (player.fourthOwnedCoin >= 10 && player.achievements[23] < 0.5) {achievementaward(23)}
            if (player.fourthOwnedCoin >= 100 && player.achievements[24] < 0.5) {achievementaward(24)}
            if (player.fourthOwnedCoin >= 1000 && player.achievements[25] < 0.5) {achievementaward(25)}
            if (player.fourthOwnedCoin >= 5000 && player.achievements[26] < 0.5) {achievementaward(26)}
            if (player.fourthOwnedCoin >= 10000 && player.achievements[27] < 0.5) {achievementaward(27)}
			if (player.fourthOwnedCoin >= 20000 && player.achievements[28] < 0.5) {achievementaward(28)}
			if (player.fifthOwnedCoin >= 1 && player.achievements[29] < 0.5) {achievementaward(29)}
            if (player.fifthOwnedCoin >= 10 && player.achievements[30] < 0.5) {achievementaward(30)}
            if (player.fifthOwnedCoin >= 66 && player.achievements[31] < 0.5) {achievementaward(31)}
            if (player.fifthOwnedCoin >= 666 && player.achievements[32] < 0.5) {achievementaward(32)}
            if (player.fifthOwnedCoin >= 6666 && player.achievements[33] < 0.5) {achievementaward(33)}
            if (player.fifthOwnedCoin >= 17777 && player.achievements[34] < 0.5) {achievementaward(34)}
			if (player.fifthOwnedCoin >= 42777 && player.achievements[35] < 0.5) {achievementaward(35)}
	}

function buyResearch(index) {
		if (player.researches[index] < researchMaxLevels[index] && player.researchPoints >= (researchBaseCosts[index])) {
			player.researchPoints -= researchBaseCosts[index]
			player.researches[index] += 1;
			researchfiller2 = "Level: " + player.researches[index] + "/" + researchMaxLevels[index]
			researchdescriptions(index)

			if (index == 47 && player.unlocks.rrow1 == false) {player.unlocks.rrow1 = true; revealStuff()}
			if (index == 48 && player.unlocks.rrow2 == false) {player.unlocks.rrow2 = true; revealStuff()}
			if (index == 49 && player.unlocks.rrow3 == false) {player.unlocks.rrow3 = true; revealStuff()}
			if (index == 50 && player.unlocks.rrow4 == false) {player.unlocks.rrow4 = true; revealStuff()}

        }
    }

function buyUpgrades(type, pos, state) {
		var addendum = ""
		if (type == "prestige" || type == "transcend" || type == "reincarnation") {
			addendum = "Point"
		} 		
		if (player[type + addendum + 's'].greaterThanOrEqualTo(Decimal.pow(10, upgradeCosts[pos])) && player.upgrades[pos] < 0.5) {
			player[type + addendum + 's'] = player[type + addendum + 's'].sub(Decimal.pow(10, upgradeCosts[pos]))
			player.upgrades[pos] = 1;
			upgradeupdate(pos, state)
		}

		if (type == "transcend") {
			player.reincarnatenocoinprestigeortranscendupgrades = false;
			player.reincarnatenocoinprestigetranscendorgeneratorupgrades = false;
		}
		if (type == "prestige") {
			player.transcendnocoinorprestigeupgrades = false;
			player.reincarnatenocoinorprestigeupgrades = false;
			player.reincarnatenocoinprestigeortranscendupgrades = false;
			player.reincarnatenocoinprestigetranscendorgeneratorupgrades = false;
		}
		if (type == "coin") {
			player.prestigenocoinupgrades = false;
			player.transcendnocoinupgrades = false;
			player.transcendnocoinorprestigeupgrades = false;
			player.reincarnatenocoinupgrades = false;
			player.reincarnatenocoinorprestigeupgrades = false;
			player.reincarnatenocoinprestigeortranscendupgrades = false;
			player.reincarnatenocoinprestigetranscendorgeneratorupgrades = false;
		}

	}
	
function buyCrystalUpgrades(i) {
	var u = i - 1
	var c = 0
	c += Math.floor(player.runelevels[2]/10 * (1 + player.researches[5] /10) * (1 + player.researches[21]/800)) * 100/100
	if (player.upgrades[73] > 0.5 && player.currentChallengeRein !== "") {c += 10}
	if (player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[u] + crystalUpgradeCostIncrement[u] * Math.floor(Math.pow(player.crystalUpgrades[u] + 0.5 - c, 2) /2))))) {
		player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[u] + crystalUpgradeCostIncrement[u] * Math.floor(Math.pow(player.crystalUpgrades[u] + 0.5 -c, 2)/2))));
		player.crystalUpgrades[u] += 1;

	}
	crystalupgradedescriptions(i)
}	
function boostAccelerator(automated = false) {
	var buyamount = 1;
	if (player.upgrades[46] == 1) {
	buyamount = player.coinbuyamount;
	if (automated == true) {buyamount = 9999};
	}
		while(player.prestigePoints.greaterThanOrEqualTo(player.acceleratorBoostCost) && ticker < buyamount) {
				if (player.prestigePoints.greaterThanOrEqualTo(player.acceleratorBoostCost)) {
					player.acceleratorBoostBought += 1;
					player.acceleratorBoostCost = player.acceleratorBoostCost.times(1e10).times(Decimal.pow(10, player.acceleratorBoostBought));
					if (player.acceleratorBoostBought > 1000) {player.acceleratorBoostCost = player.acceleratorBoostCost.times(Decimal.pow(10, Math.pow(player.acceleratorBoostBought - 1000, 2)))}
					player.transcendnoaccelerator = false;
					player.reincarnatenoaccelerator = false;
					if (player.upgrades[46] < 0.5) {
						var j
						for (j = 21; j < 41; j++) {
							player.upgrades[j] = 0;
						}
						reset(1);
						player.prestigePoints = new Decimal(0);
					}
				}
				ticker++
			}
				ticker = 0;
	}

	//===================================================================
	// Reset Functions. Functions that track reset currency, and then the reset tools proper. [Lines 1248 - 1326]

function resetCurrency() {
	challengeFivePower = 1/2;
	if (player.currentChallenge !== "five") {
		prestigePointGain = Decimal.floor(Decimal.pow(player.coinsThisPrestige.dividedBy(1e12), 0.5 + 1/100 * player.challengecompletions.five));
	}
	if (player.currentChallenge == "five") {
		prestigePointGain = Decimal.pow(player.coinsThisPrestige, 0.01/(player.challengecompletions.five + 1))
	}
	if (player.upgrades[16] > 0.5 && player.currentChallenge !== "five") {
		prestigePointGain = prestigePointGain.times(Decimal.pow(acceleratorEffect, 1/3));
	}

	transcendPointGain = Decimal.floor(Decimal.pow(player.coinsThisPrestige.dividedBy(1e100), 3/100));
	if (player.upgrades[44] > 0.5) {
		transcendPointGain = transcendPointGain.times(Decimal.min(1e6,Decimal.pow(1.01, player.transcendCount)));
	}

	reincarnationPointGain = Decimal.floor(Decimal.pow(player.transcendShards.dividedBy(1e300), 0.01));
	if (player.achievements[50] == 1){reincarnationPointGain = reincarnationPointGain.times(2)}
	if (player.upgrades[65] > 0.5) {reincarnationPointGain = reincarnationPointGain.times(5)}
	}

function resetCheck(i,manual=true) {
	if (i == 'prestige') {
		if (player.coinsThisPrestige.greaterThanOrEqualTo(1e16) || prestigePointGain.greaterThanOrEqualTo(100)) {
			if (manual) {
			resetConfirmation('prestige');
			}
			if (!manual) {
			reset(1);
			}
		}
		else {}
	}
	if (i == 'transcend') {
		if ((player.coinsThisTranscension.greaterThanOrEqualTo(1e100) || transcendPointGain.greaterThanOrEqualTo(0.5)) && player.currentChallenge == "") {
			if (manual) {
			resetConfirmation('transcend');
			}
			if (!manual) {
			reset(2);
			}
		}
	}
	if (i == 'challenge') {
		var q = player.currentChallenge;
			var x = 0
			if (q == "one") {x = 66}
			if (q == "two") {x = 67}
			if (q == "three") {x = 68}
			if (q == "four") {x = 69}
			if (q == "five") {x = 70} 
		if (player.currentChallenge !== "") {
		
			if (player.coinsThisTranscension.greaterThanOrEqualTo(Decimal.pow(10, challengebaserequirements[q] * Math.pow(1 + player.challengecompletions[q], 2))) && player.challengecompletions[q] < (25 + player.researches[x])) {
			player.challengecompletions[q] += 1;
			var y = x - 65
			challengeDisplay(y,true)
			}
			if (player.challengecompletions[q] > player.highestchallengecompletions[q]) {
				player.highestchallengecompletions[q] += 1;
				var y = x - 65;
				challengeDisplay(y,true)
				player.worlds += (1 + Math.floor(player.highestchallengecompletions[q]/10)) * 100/100}
				if (q == "one"){kongregate.stats.submit("challengeone", player.highestchallengecompletions[q])}
				if (q == "two"){kongregate.stats.submit("challengetwo", player.highestchallengecompletions[q])}
				if (q == "three"){kongregate.stats.submit("challengethree", player.highestchallengecompletions[q])}
				if (q == "four"){kongregate.stats.submit("challengefour", player.highestchallengecompletions[q])}
				if (q == "five"){kongregate.stats.submit("challengefive", player.highestchallengecompletions[q])}
			
			challengeachievementcheck(q)
			reset(2);
			}
			if (!player.retrychallenges || manual  || player.challengecompletions[q] >= (25 + player.researches[x])) {
			player.currentChallenge = ""
			}
			var p = ""
			if (player.currentChallengeRein == "six") {p = " || TAX+ [Reincarnation]"}
			if (player.currentChallengeRein == "seven") {p = " || MULTIPLIER/ACCELERATOR-- [Reincarnation]"}
			if (!player.retrychallenges || manual || player.challengecompletions[q] >= (25 + player.researches[x])) {
			document.getElementById("currentchallenge").textContent = "Current Challenge: None [Transcension]" + p
			}
			player.transcendCount -= 1;
			console.log(player.highestchallengecompletions.one)
		}
	
	if (i == "reincarnate") {
		if (reincarnationPointGain > 0.5 && player.currentChallenge == "" && player.currentChallengeRein == "") {
			if (manual) {
			resetConfirmation('reincarnate');
			}
			if (!manual) {
			reset(3);
			}
		}
	}
	if (i == "reincarnationchallenge"){
		if (player.currentChallengeRein !== ""){
		var q = player.currentChallengeRein;
		var s = player.currentChallenge
		if (player.currentChallenge !== "") {
			player.currentChallenge = ""
			}
		if (player.transcendShards.greaterThanOrEqualTo(Decimal.pow(10, challengebaserequirementsrein[q] * Math.pow(1 + player.challengecompletions[q], 2))) && player.challengecompletions[q] < 25) {
			player.challengecompletions[q] += 1
		}
		reset(3)
		challengeachievementcheck(q)
		if (player.challengecompletions[q] > player.highestchallengecompletions[q]) {player.highestchallengecompletions[q] += 1; player.worlds += player.highestchallengecompletions[q]}
		if (!player.retrychallenges || manual) {
		player.currentChallengeRein = ""
		document.getElementById("currentchallenge").textContent = "Current Challenge: None"
		}
		player.reincarnationCount -= 1
	}	
	}
}	

function resetConfirmation(i) {
	if (i == 'prestige') {
		if (player.toggles.twentyeight == true) {
			var r = confirm("Prestige will reset coin upgrades, coin producers AND crystals. The first prestige unlocks new features. Would you like to prestige? [Toggle this message in settings.]")
				if (r == true) {
					resetachievementcheck(1)
					reset(1);
				}
		}
		else {
			resetachievementcheck(1);
			reset(1);
		}
	}
	if (i == 'transcend') {
		if (player.toggles.twentynine == true) {
			var z = confirm("Transcends will reset coin and prestige upgrades, coin producers, crystal producers AND diamonds. The first transcension unlocks new features. Would you like to prestige? [Toggle this message in settings.]")
				if (z == true) {
					resetachievementcheck(2)
					reset(2);
				}
		}
		else {
			resetachievementcheck(2)
			reset(2);
		}
	}
	if (i == 'reincarnate') {
		if (player.toggles.thirty == true) {
			var z = confirm("Reincarnating will reset EVERYTHING but in return you will get extraordinarily powerful Particles, and unlock some very strong upgrades and some new features. would you like to Reincarnate? [Disable this message in settings]")
				if (z == true) {
					resetachievementcheck(3)
					reset(3);
				}
		}
		else {
			resetachievementcheck(3)
			reset(3);
		}
	}
	}

// Functions which update the game each tick [HTML + Generation] [Lines 1330 - 1766]

function updateAll() {

		uFourteenMulti = new Decimal(1);
		uFifteenMulti = new Decimal(1);

		if (player.upgrades[14] > 0.5) {
			uFourteenMulti = Decimal.pow(1.15, freeAccelerator)
		}
		if (player.upgrades[15] > 0.5) {
			uFifteenMulti = Decimal.pow(1.15, freeAccelerator)
		}

//Autobuy "Building" Tab

		if (player.toggles.one == true && player.upgrades[81] == 1 && player.coins.greaterThanOrEqualTo(player.firstCostCoin)) {buyProducer('first','Coin',1,true)}
		if (player.toggles.two == true && player.upgrades[82] == 1 && player.coins.greaterThanOrEqualTo(player.secondCostCoin)) {buyProducer('second','Coin',2,true)}
		if (player.toggles.three == true && player.upgrades[83] == 1 && player.coins.greaterThanOrEqualTo(player.thirdCostCoin)) {buyProducer('third','Coin',3,true);}
		if (player.toggles.four == true && player.upgrades[84] == 1 && player.coins.greaterThanOrEqualTo(player.fourthCostCoin)) {buyProducer('fourth','Coin',4,true);}
		if (player.toggles.five == true && player.upgrades[85] == 1 && player.coins.greaterThanOrEqualTo(player.fifthCostCoin)) {buyProducer('fifth','Coin',5,true);}
		if (player.toggles.six == true && player.upgrades[86] == 1 && player.coins.greaterThanOrEqualTo(player.acceleratorCost)) {buyAccelerator();}		
		if (player.toggles.seven == true && player.upgrades[87] == 1 && player.coins.greaterThanOrEqualTo(player.multiplierCost)) {buyMultiplier();}
		if (player.toggles.eight == true && player.upgrades[88] == 1 && player.prestigePoints.greaterThanOrEqualTo(player.acceleratorBoostCost)) {boostAccelerator(true);}

//Autobuy "Prestige" Tab

		if (player.toggles.ten == true && player.achievements[78] == 1 && player.prestigePoints.greaterThanOrEqualTo(player.firstCostDiamonds)) {buyProducer('first', 'Diamonds', 1,true)}
		if (player.toggles.eleven == true && player.achievements[85] == 1 && player.prestigePoints.greaterThanOrEqualTo(player.secondCostDiamonds)) {buyProducer('second', 'Diamonds', 3,true)}
		if (player.toggles.twelve == true && player.achievements[92] == 1 && player.prestigePoints.greaterThanOrEqualTo(player.thirdCostDiamonds)) {buyProducer('third', 'Diamonds', 6,true)}
		if (player.toggles.thirteen == true && player.achievements[99] == 1 && player.prestigePoints.greaterThanOrEqualTo(player.fourthCostDiamonds)) {buyProducer('fourth', 'Diamonds', 10,true)}
		if (player.toggles.fourteen == true && player.achievements[106] == 1 && player.prestigePoints.greaterThanOrEqualTo(player.fifthCostDiamonds)) {buyProducer('fifth', 'Diamonds', 15,true)}


		if (player.resettoggle1 == 1 || player.resettoggle1 == 0){
			if (player.toggles.fifteen == true && player.achievements[43] == 1 && prestigePointGain.greaterThanOrEqualTo(player.prestigePoints.times(Decimal.pow(10, player.prestigeamount))) && player.coinsThisPrestige.greaterThanOrEqualTo(1e16)){resetachievementcheck(1); reset(1)}
		}
		if (player.resettoggle1 == 2) {
			var time = Math.max(0.25, player.prestigeamount);
		if (player.toggles.fifteen == true && player.achievements[43] == 1 && player.prestigecounter >= time && player.coinsThisPrestige.greaterThanOrEqualTo(1e16)) {resetachievementcheck(1);reset(1);}
		}
		var c = 0;
		c += Math.floor(player.runelevels[2]/10 * (1 + player.researches[5] /10) * (1 + player.researches[21]/800)) * 100/100
		if (player.upgrades[73] > 0.5 && player.currentChallengeRein !== ""){c += 10}
		if (player.achievements[79] > 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[0] + crystalUpgradeCostIncrement[0] * Math.floor(Math.pow(player.crystalUpgrades[0] + 0.5 - c, 2) /2))))){
			player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[0] + crystalUpgradeCostIncrement[0] * Math.floor(Math.pow(player.crystalUpgrades[0] + 0.5 - c, 2)/2))));
			player.crystalUpgrades[0] += 1;
		}
		if (player.achievements[86] > 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[1] + crystalUpgradeCostIncrement[1] * Math.floor(Math.pow(player.crystalUpgrades[1] + 0.5 - c, 2) /2))))){
			player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[1] + crystalUpgradeCostIncrement[1] * Math.floor(Math.pow(player.crystalUpgrades[1] + 0.5 - c , 2)/2))));
			player.crystalUpgrades[1] += 1;
		}
		if (player.achievements[93] > 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[2] + crystalUpgradeCostIncrement[2] * Math.floor(Math.pow(player.crystalUpgrades[2] + 0.5 - c, 2) /2))))){
			player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[2] + crystalUpgradeCostIncrement[2] * Math.floor(Math.pow(player.crystalUpgrades[2] + 0.5- c, 2)/2))));
			player.crystalUpgrades[2] += 1;
		}
		if (player.achievements[100] > 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[3] + crystalUpgradeCostIncrement[3] * Math.floor(Math.pow(player.crystalUpgrades[3] + 0.5 - c, 2) /2))))){
			player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[3] + crystalUpgradeCostIncrement[3] * Math.floor(Math.pow(player.crystalUpgrades[3] + 0.5 - c, 2)/2))));
			player.crystalUpgrades[3] += 1;
		}
		if (player.achievements[107] > 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[4] + crystalUpgradeCostIncrement[4] * Math.floor(Math.pow(player.crystalUpgrades[4] + 0.5 - c, 2) /2))))){
			player.prestigeShards = player.prestigeShards.sub(Decimal.pow(10, (crystalUpgradesCost[4] + crystalUpgradeCostIncrement[4] * Math.floor(Math.pow(player.crystalUpgrades[4] + 0.5 - c, 2)/2))));
			player.crystalUpgrades[4] += 1;
		}

//Autobuy "Transcension" Tab

		if (player.toggles.sixteen == true && player.upgrades[94] == 1 && player.transcendPoints.greaterThanOrEqualTo(player.firstCostMythos)) {buyProducer('first', 'Mythos', 1, true)}
		if (player.toggles.seventeen == true && player.upgrades[95] == 1 && player.transcendPoints.greaterThanOrEqualTo(player.secondCostMythos)) {buyProducer('second', 'Mythos', 3, true)}
		if (player.toggles.eighteen == true && player.upgrades[96] == 1 && player.transcendPoints.greaterThanOrEqualTo(player.thirdCostMythos)) {buyProducer('third', 'Mythos', 6, true)}
		if (player.toggles.nineteen == true && player.upgrades[97] == 1 && player.transcendPoints.greaterThanOrEqualTo(player.fourthCostMythos)) {buyProducer('fourth', 'Mythos', 10, true)}
		if (player.toggles.twenty == true && player.upgrades[98] == 1 && player.transcendPoints.greaterThanOrEqualTo(player.fifthCostMythos)) {buyProducer('fifth', 'Mythos', 15, true)}

		if (player.resettoggle2 == 1 || player.resettoggle2 == 0){
			if (player.toggles.twentyone == true && player.upgrades[89] == 1 && transcendPointGain.greaterThanOrEqualTo(player.transcendPoints.times(Decimal.pow(10, player.transcendamount))) && player.coinsThisTranscension.greaterThanOrEqualTo(1e100) && player.currentChallenge == ""){resetachievementcheck(2); reset(2)}
		}
		if (player.resettoggle2 == 2){
			var time = Math.max(0.25, player.transcendamount);
		if (player.toggles.twentyone == true && player.upgrades[89] == 1 && player.transcendcounter >= time && player.coinsThisTranscension.greaterThanOrEqualTo(1e100) && player.currentChallenge == "") {resetachievementcheck(2);reset(2);}
		}
//Challenge Tab Updates

		var chal = player.currentChallenge;
		var reinchal = player.currentChallengeRein;
		if (chal !== ""){
		if (player.coinsThisTranscension.greaterThanOrEqualTo(Decimal.pow(10, challengebaserequirements[chal] * Math.pow(1 + player.challengecompletions[chal], 2)))){
			resetCheck('challenge',false);
		}
		}
		if (reinchal !== ""){
			if (player.transcendShards.greaterThanOrEqualTo(Decimal.pow(10, challengebaserequirementsrein[reinchal] * Math.pow(1 + player.challengecompletions[reinchal], 2)))) {
			resetCheck('reincarnationchallenge',false)
			}
		}

//Autobuy "Reincarnation" Tab

//		if (player.toggles.twentytwo == true && player.reincarnationPoints.greaterThanOrEqualTo(player.firstCostParticles)) {buyProducer('first', 'Particles', 1)}
//		if (player.toggles.twentythree == true && player.reincarnationPoints.greaterThanOrEqualTo(player.secondCostParticles)) {buyProducer('second', 'Particles', 1.5)}
//		if (player.toggles.twentyfour == true && player.reincarnationPoints.greaterThanOrEqualTo(player.thirdCostParticles)) {buyProducer('third', 'Particles', 2)}
//		if (player.toggles.twentyfive == true && player.reincarnationPoints.greaterThanOrEqualTo(player.fourthCostParticles)) {buyProducer('fourth', 'Particles', 2.5)}
//		if (player.toggles.twentysix == true && player.reincarnationPoints.greaterThanOrEqualTo(player.fifthCostParticles)) {buyProducer('fifth', 'Particles', 3)}
		if (player.resettoggle3 == 2) {
			var time = Math.max(0.25, player.reincarnationamount);
		if (player.toggles.twentyseven == true && player.researches[46] > 0.5 && player.transcendShards.greaterThanOrEqualTo("1e300") && player.reincarnationcounter >= time && player.currentChallenge == "" && player.currentChallengeRein == "") {resetachievementcheck(3);reset(3);}
		}
		if (player.resettoggle3 == 1 || player.resettoggle3 == 0){
		if (player.toggles.twentyseven == true && player.researches[46] > 0.5 && reincarnationPointGain.greaterThanOrEqualTo(player.reincarnationPoints.times(Decimal.pow(10, player.reincarnationamount))) && player.transcendShards.greaterThanOrEqualTo(1e300) && player.currentChallenge == "" && player.currentChallengeRein == ""){resetachievementcheck(3); reset(3)}
		}
//Generation


		if (player.upgrades[101] > 0.5) {player.fourthGeneratedCoin= player.fourthGeneratedCoin.add((player.fifthGeneratedCoin.add(player.fifthOwnedCoin)).times(uFifteenMulti).times(generatorPower));}
		if (player.upgrades[102] > 0.5) {player.thirdGeneratedCoin= player.thirdGeneratedCoin.add((player.fourthGeneratedCoin.add(player.fourthOwnedCoin)).times(uFourteenMulti).times(generatorPower));}
		if (player.upgrades[103] > 0.5) {player.secondGeneratedCoin= player.secondGeneratedCoin.add((player.thirdGeneratedCoin.add(player.thirdOwnedCoin)).times(generatorPower));}
		if (player.upgrades[104] > 0.5) {player.firstGeneratedCoin= player.firstGeneratedCoin.add((player.secondGeneratedCoin.add(player.secondOwnedCoin)).times(generatorPower));}
		if (player.upgrades[105] > 0.5) {player.fifthGeneratedCoin= player.fifthGeneratedCoin.add(player.firstOwnedCoin);}
		var p = 1;
		p += 1/100 * (player.achievements[71] + player.achievements[72] + player.achievements[73] + player.achievements[74] + player.achievements[75] + player.achievements[76] + player.achievements[77])

		var a = 0;
		if (player.upgrades[106] > 0.5) {a += 0.10}
		if (player.upgrades[107] > 0.5) {a += 0.15}
		if (player.upgrades[108] > 0.5) {a += 0.25}
		if (player.upgrades[109] > 0.5) {a += 0.25}
		if (player.upgrades[110] > 0.5) {a += 0.25}
		a *= p

		var b = 0;
		if (player.upgrades[111] > 0.5) {b += 0.08}
		if (player.upgrades[112] > 0.5) {b += 0.08}
		if (player.upgrades[113] > 0.5) {b += 0.08}
		if (player.upgrades[114] > 0.5) {b += 0.08}
		if (player.upgrades[115] > 0.5) {b += 0.08}
		b *= p

		var c = 0;
		if (player.upgrades[116] > 0.5) {c += 0.05}
		if (player.upgrades[117] > 0.5) {c += 0.05}
		if (player.upgrades[118] > 0.5) {c += 0.05}
		if (player.upgrades[119] > 0.5) {c += 0.05}
		if (player.upgrades[120] > 0.5) {c += 0.05}
		c *= p

		if (a !== 0){player.fifthGeneratedCoin = player.fifthGeneratedCoin.add(Decimal.pow(player.firstGeneratedDiamonds.add(player.firstOwnedDiamonds).add(1), a))}
		if (b !== 0){player.fifthGeneratedDiamonds = player.fifthGeneratedDiamonds.add(Decimal.pow(player.firstGeneratedMythos.add(player.firstOwnedMythos).add(1), b))}
		if (c !== 0){player.fifthGeneratedMythos = player.fifthGeneratedMythos.add(Decimal.pow(player.firstGeneratedParticles.add(player.firstOwnedParticles).add(1),c))}


		  produceFifthMythos = player.fifthGeneratedMythos.add(player.fifthOwnedMythos).times(player.fifthProduceMythos).times(globalMythosMultiplier).times(grandmasterMultiplier).times(mythosupgrade15)
		  produceFourthMythos = player.fourthGeneratedMythos.add(player.fourthOwnedMythos).times(player.fourthProduceMythos).times(globalMythosMultiplier)
		  produceThirdMythos = player.thirdGeneratedMythos.add(player.thirdOwnedMythos).times(player.thirdProduceMythos).times(globalMythosMultiplier).times(mythosupgrade14)
		  produceSecondMythos = player.secondGeneratedMythos.add(player.secondOwnedMythos).times(player.secondProduceMythos).times(globalMythosMultiplier)
		  produceFirstMythos =  player.firstGeneratedMythos.add(player.firstOwnedMythos).times(player.firstProduceMythos).times(globalMythosMultiplier).times(mythosupgrade13)
		  
		  player.firstGeneratedMythos = player.firstGeneratedMythos.add(produceSecondMythos);
		  player.secondGeneratedMythos = player.secondGeneratedMythos.add(produceThirdMythos);
		  player.thirdGeneratedMythos = player.thirdGeneratedMythos.add(produceFourthMythos);
		  player.fourthGeneratedMythos = player.fourthGeneratedMythos.add(produceFifthMythos);
		
		  var pm = new Decimal('1');
		  if (player.upgrades[67] > 0.5) {pm = pm.times(Decimal.pow(1.03, player.firstOwnedParticles + player.secondOwnedParticles + player.thirdOwnedParticles + player.fourthOwnedParticles + player.fifthOwnedParticles))}
		  produceFifthParticles = player.fifthGeneratedParticles.add(player.fifthOwnedParticles).times(player.fifthProduceParticles)
          produceFourthParticles = player.fourthGeneratedParticles.add(player.fourthOwnedParticles).times(player.fourthProduceParticles)
          produceThirdParticles = player.thirdGeneratedParticles.add(player.thirdOwnedParticles).times(player.thirdProduceParticles)
          produceSecondParticles = player.secondGeneratedParticles.add(player.secondOwnedParticles).times(player.secondProduceParticles)
          produceFirstParticles =  player.firstGeneratedParticles.add(player.firstOwnedParticles).times(player.firstProduceParticles).times(pm)

		  player.firstGeneratedParticles = player.firstGeneratedParticles.add(produceSecondParticles);
		  player.secondGeneratedParticles = player.secondGeneratedParticles.add(produceThirdParticles);
		  player.thirdGeneratedParticles = player.thirdGeneratedParticles.add(produceFourthParticles);
		  player.fourthGeneratedParticles = player.fourthGeneratedParticles.add(produceFifthParticles);


		  if (player.researches[61] > 0.5) {
			  player.obtainiumtimer += 0.05
			  var u = 1;
				if(player.upgrades[69] > 0.5){u = Math.min(3,Decimal.pow(Decimal.log(reincarnationPointGain.add(10), 10), 0.5))}
			  if (player.obtainiumtimer >= (60 - player.researches[62] - player.researches[63])) {
				player.researchPoints += Math.floor((1 + player.researches[64]) * u) * 100/100
				player.obtainiumtimer = 0;
			  }
			  document.getElementById("automaticobtainium").textContent = "Thanks to research, you will automatically gain " + format(Math.floor((1 + player.researches[64]) * u)) + " obtainium in " + format((60 - player.researches[62] - player.researches[63] - player.obtainiumtimer),1) + " seconds." 
		  }

		  produceFirstDiamonds = player.firstGeneratedDiamonds.add(player.firstOwnedDiamonds).times(player.firstProduceDiamonds).times(globalCrystalMultiplier)
		  produceSecondDiamonds = player.secondGeneratedDiamonds.add(player.secondOwnedDiamonds).times(player.secondProduceDiamonds).times(globalCrystalMultiplier)
		  produceThirdDiamonds = player.thirdGeneratedDiamonds.add(player.thirdOwnedDiamonds).times(player.thirdProduceDiamonds).times(globalCrystalMultiplier)
		  produceFourthDiamonds = player.fourthGeneratedDiamonds.add(player.fourthOwnedDiamonds).times(player.fourthProduceDiamonds).times(globalCrystalMultiplier)
		  produceFifthDiamonds = player.fifthGeneratedDiamonds.add(player.fifthOwnedDiamonds).times(player.fifthProduceDiamonds).times(globalCrystalMultiplier)
	  
		  player.fourthGeneratedDiamonds = player.fourthGeneratedDiamonds.add(produceFifthDiamonds)
		  player.thirdGeneratedDiamonds = player.thirdGeneratedDiamonds.add(produceFourthDiamonds)
		  player.secondGeneratedDiamonds = player.secondGeneratedDiamonds.add(produceThirdDiamonds)
		  player.firstGeneratedDiamonds = player.firstGeneratedDiamonds.add(produceSecondDiamonds)
		  produceDiamonds = produceFirstDiamonds;    
		  
		  if (player.currentChallenge !== "three") {
		  player.prestigeShards = player.prestigeShards.add(produceDiamonds)
		  }
	  
	}

function autoUpgrades() {
	if (player.upgrades[90] > 0.5 && player.shoptoggles.generators == true){
		
		var i;
		for (i = 1; i < 6; i++) {if (player.prestigePoints.greaterThanOrEqualTo(Decimal.pow(10, upgradeCosts[(100+i)])) && player.shoptoggles.generators == true) {buyGenerator(i, true)}}
		var j;
		for (j = 6; j < 11; j++) {if (player.coins.greaterThanOrEqualTo(Decimal.pow(10,upgradeCosts[(100+j)])) && player.shoptoggles.generators == true){buyGenerator(j, true)}}
		var k;
		for (k = 11; k < 16; k++) {if (player.prestigePoints.greaterThanOrEqualTo(Decimal.pow(10,upgradeCosts[(100+k)])) && player.shoptoggles.generators == true){buyGenerator(k, true)}}
		var l;
		for (l = 16; l < 21; l++) {if (player.transcendPoints.greaterThanOrEqualTo(Decimal.pow(10,upgradeCosts[(100+l)])) && player.shoptoggles.generators == true){buyGenerator(l, true)}}
	}
	if (player.upgrades[91] > 0.5){
		var i;
		for (i = 1; i < 21; i++) {if (player.coins.greaterThanOrEqualTo(Decimal.pow(10,upgradeCosts[i])) && player.shoptoggles.coin == true){buyUpgrades('coin',i,true)}}
	}
	if (player.upgrades[92] > 0.5){
		var i;
		for (i = 21; i < 41; i++) {if (player.prestigePoints.greaterThanOrEqualTo(Decimal.pow(10,upgradeCosts[i])) && player.shoptoggles.prestige == true){buyUpgrades('prestige',i,true)}}
	}
	if (player.upgrades[99] > 0.5){
		var i;
		for (i = 41; i < 61; i++) {if (player.transcendPoints.greaterThanOrEqualTo(Decimal.pow(10,upgradeCosts[i])) && player.shoptoggles.transcend == true){buyUpgrades('transcend',i,true)}}
	}

}

function revealStuff() {
			var c1 = document.getElementsByClassName("coinunlock1");
			for (var i = 0; i < c1.length; i++) {
	  		c1[i].style.display = "none";
			}
			var c2 = document.getElementsByClassName("coinunlock2");
  			for (var i = 0; i < c2.length; i++) {
			c2[i].style.display = "none";
		 	 }
		 	 var c3 = document.getElementsByClassName("coinunlock3");
  			for (var i = 0; i < c3.length; i++) {
			c3[i].style.display = "none";
		 	 }
		 	 var c4 = document.getElementsByClassName("coinunlock4");
  			for (var i = 0; i < c4.length; i++) {
			c4[i].style.display = "none";
		 	 }

			var a = document.getElementsByClassName("prestigeunlock");
  			for (var i = 0; i < a.length; i++) {
			a[i].style.display = "none";
		  }
			var b = document.getElementsByClassName("generationunlock");
			for (var i = 0; i < b.length; i++) {
			b[i].style.display = "none";
			}
			var c = document.getElementsByClassName("transcendunlock");
  			for (var i = 0; i < c.length; i++) {
			c[i].style.display = "none";
		  }
			var d = document.getElementsByClassName("reincarnationunlock");
  			for (var i = 0; i < d.length; i++) {
			d[i].style.display = "none";
	}
			var e = document.getElementsByClassName("auto");
			for (var i = 0; i < e.length; i++) {
			e[i].style.display = "none";
			}
			var f = document.getElementsByClassName("reinrow1");
			for (var i = 0; i < f.length; i++) {
			f[i].style.display = "none";
			}
			var g = document.getElementsByClassName("reinrow2");
			for (var i = 0; i < g.length; i++) {
			g[i].style.display = "none";
			}
			var h = document.getElementsByClassName("reinrow3");
			for (var i = 0; i < h.length; i++) {
			h[i].style.display = "none";
			}
			var j = document.getElementsByClassName("reinrow4");
			for (var i = 0; i < j.length; i++) {
			j[i].style.display = "none";
			}


		document.getElementById("rune2area").style.display = "none"
		document.getElementById("rune3area").style.display = "none"
		document.getElementById("rune4area").style.display = "none"
		document.getElementById("prestigeautomation").style.display = "none"
		document.getElementById("transcendautomation").style.display = "none"
		document.getElementById("reincarnateautomation").style.display = "none"
		
		if(player.achievements[38] == 1) document.getElementById("rune2area").style.display = "block";
		if(player.achievements[44] == 1) document.getElementById("rune3area").style.display = "block";
		if(player.achievements[102] == 1) document.getElementById("rune4area").style.display = "block";
		if(player.achievements[43] == 1) document.getElementById("prestigeautomation").style.display = "block";
		if(player.upgrades[89] == 1) document.getElementById("transcendautomation").style.display = "block";
		if(player.researches[46] == 1) document.getElementById("reincarnateautomation").style.display = "block";

		if (player.unlocks.coinone == true) {
			var c1 = document.getElementsByClassName("coinunlock1");
			for (var i = 0; i < c1.length; i++) {
	  		c1[i].style.display = "block";
			}
		}
		if (player.unlocks.cointwo == true) {
			var c2 = document.getElementsByClassName("coinunlock2");
  			for (var i = 0; i < c2.length; i++) {
			c2[i].style.display = "block";
		 	 }
		}
		if (player.unlocks.cointhree == true) {
			var c3 = document.getElementsByClassName("coinunlock3");
  			for (var i = 0; i < c3.length; i++) {
			c3[i].style.display = "block";
		 	 }
		}
		if (player.unlocks.coinfour == true) {
			var c4 = document.getElementsByClassName("coinunlock4");
  			for (var i = 0; i < c4.length; i++) {
			c4[i].style.display = "block";
		 	 }
		}


		if (player.unlocks.prestige == true) {
			var a = document.getElementsByClassName("prestigeunlock");
  			for (var i = 0; i < a.length; i++) {
			a[i].style.display = "block";
		  }
		}
		if (player.unlocks.generation == true) {
			var b = document.getElementsByClassName("generationunlock");
			for (var i = 0; i < b.length; i++) {
			b[i].style.display = "block";
			}	
		}
		if (player.unlocks.transcend == true) {
			var c = document.getElementsByClassName("transcendunlock");
  			for (var i = 0; i < c.length; i++) {
			c[i].style.display = "block";
		  }
		}
		if (player.unlocks.reincarnate == true) {
			var d = document.getElementsByClassName("reincarnationunlock");
			for (var i = 0; i < d.length; i++) {
		    d[i].style.display = "block";
  }
}
	    if (player.unlocks.rrow1 == true) {
	var e = document.getElementsByClassName("reinrow1");
	for (var i = 0; i < e.length; i++) {
	e[i].style.display = "block";
			}
		}
		if (player.unlocks.rrow2 == true) {
			var e = document.getElementsByClassName("reinrow2");
			for (var i = 0; i < e.length; i++) {
			e[i].style.display = "block";
					}
				}
				if (player.unlocks.rrow3 == true) {
					var e = document.getElementsByClassName("reinrow3");
					for (var i = 0; i < e.length; i++) {
					e[i].style.display = "block";
							}
						}
						if (player.unlocks.rrow4 == true) {
							var e = document.getElementsByClassName("reinrow4");
							for (var i = 0; i < e.length; i++) {
							e[i].style.display = "block";
									}
								}
		var e = document.getElementsByClassName("auto");
			if (player.upgrades[81] == 1){e[0].style.display = "block";}
			if (player.upgrades[82] == 1){e[1].style.display = "block";}
			if (player.upgrades[83] == 1){e[2].style.display = "block";}
			if (player.upgrades[84] == 1){e[3].style.display = "block";}
			if (player.upgrades[85] == 1){e[4].style.display = "block";}
			if (player.upgrades[86] == 1){e[5].style.display = "block";}
			if (player.upgrades[87] == 1){e[6].style.display = "block";}
			if (player.upgrades[88] == 1){e[7].style.display = "block";}
			if (player.upgrades[91] == 1){e[8].style.display = "block";}
			if (player.upgrades[92] == 1){e[9].style.display = "block";}
			if (player.upgrades[99] == 1){e[10].style.display = "block";}
			if (player.upgrades[90] == 1){e[11].style.display = "block";}
			if (player.unlocks.prestige) {e[12].style.display = "block";}
			if (player.achievements[78] == 1){e[13].style.display = "block";}
			if (player.achievements[85] == 1){e[14].style.display = "block";}
			if (player.achievements[92] == 1){e[15].style.display = "block";}
			if (player.achievements[99] == 1){e[16].style.display = "block";}
			if (player.achievements[106] == 1){e[17].style.display = "block";}
			if (player.achievements[43] == 1){e[18].style.display = "block";}
			if (player.upgrades[94] == 1){e[19].style.display = "block";}
			if (player.upgrades[95] == 1){e[20].style.display = "block";}
			if (player.upgrades[96] == 1){e[21].style.display = "block";}
			if (player.upgrades[97] == 1){e[22].style.display = "block";}
			if (player.upgrades[98] == 1){e[23].style.display = "block";}
			if (player.upgrades[89] == 1){e[24].style.display = "block";}
			if (player.researches[46] == 1){e[30].style.display = "block";}
			if (player.prestigeCount > 0.5 || player.reincarnationCount > 0.5){e[31].style.display = "block";}
			if (player.transcendCount > 0.5 || player.reincarnationCount > 0.5){e[32].style.display = "block";}
			if (player.reincarnationCount > 0.5){e[33].style.display = "block";}


			}
		

function toggleauto() {
	var e = document.getElementsByClassName("auto");
		for (var i = 0; i < e.length; i++) {
			var a = ""
			var b = ""
			if ((i <= 7 && i>=0) || (i <= 17 && i >= 13) || (i <= 23 && i >= 19) || (i <= 29 && i >= 25)) {a = "Auto ["}
			if (i == 12) {a = "Hover-to-buy ["}
			if (i == 18) {a = "Auto Prestige ["}
			if (i == 24) {a = "Auto Transcend ["}
			if (i == 30) {a = "Auto Reincarnate ["}
			if ((i == 31) || (i == 32) || (i == 33)){
				a = "["
			}
			var u = 0
			if (i <= 7) {u = i}
			if (i >= 12) {u = i - 4}
			if (player.toggles[cardinals[u]] == true){b = "ON]"}
			if (player.toggles[cardinals[u]] == false) {b = "OFF]"}

			if (i <= 7 || i >= 12) {
			e[i].textContent = a + b
			}
	}

}	

function hideStuff() {
		document.getElementById("buildings").style.display = "none"	
		document.getElementById("buildingstab").style.backgroundColor = "#171717";
		document.getElementById("upgrades").style.display = "none"
		document.getElementById("upgradestab").style.backgroundColor = "#171717"
		document.getElementById("settings").style.display = "none"
		document.getElementById("settingstab").style.backgroundColor = "#171717"
		document.getElementById("settingstab").style.color = "white"
		document.getElementById("statistics").style.display = "none"
		document.getElementById("achievementstab").style.backgroundColor = "#171717"
		document.getElementById("achievementstab").style.color = "white"
		document.getElementById("prestige").style.display = "none"
		document.getElementById("prestigetab").style.backgroundColor = "#171717"
		document.getElementById("runes").style.display = "none"
		document.getElementById("runestab").style.backgroundColor = "#171717"
		document.getElementById("transcension").style.display = "none"
		document.getElementById("transcensiontab").style.backgroundColor = "#171717"
		document.getElementById("challenges").style.display = "none"
		document.getElementById("challengetab").style.backgroundColor = "#171717"
		document.getElementById("reincarnation").style.display = "none"
		document.getElementById("reincarnationtab").style.backgroundColor = "#171717"
		document.getElementById("research").style.display = "none"
		document.getElementById("researchtab").style.backgroundColor = "#171717"

		document.getElementById("activaterune2").style.display = "none"
		document.getElementById("activaterune3").style.display = "none"
		document.getElementById("activaterune4").style.display = "none"

		if (currentTab == "buildings") {
			document.getElementById("buildingstab").style.backgroundColor = "orange";
			document.getElementById("buildings").style.display = "block"
			player.tabnumber = 1;
		}
		if (currentTab == "upgrades") {
			document.getElementById("upgrades").style.display = "block"
			document.getElementById("upgradestab").style.backgroundColor = "orange"
			document.getElementById("upgradedescription").textContent = "Hover over an upgrade to view details!"
			player.tabnumber = 2;
		}
		if (currentTab == "settings") {
			document.getElementById("settings").style.display = "block"
			document.getElementById("settingstab").style.backgroundColor = "white"
			document.getElementById("settingstab").style.color = "black"


		}
		if (currentTab == "achievements") {
			document.getElementById("statistics").style.display = "block"
			document.getElementById("achievementstab").style.backgroundColor = "white"
			document.getElementById("achievementstab").style.color = "black"
			player.tabnumber = 3;
		}
		if (currentTab == "prestige") {
			document.getElementById("prestige").style.display = "block"
			document.getElementById("prestigetab").style.backgroundColor = "blue"
			player.tabnumber = 4;
		}
		if (currentTab == "runes") {
			document.getElementById("runes").style.display = "block"
			document.getElementById("runestab").style.backgroundColor = "blue"
			document.getElementById("runeshowlevelup").textContent = "Hey, hover over a rune icon to get details on what each one does and what benefits they're giving you!"
			document.getElementById("researchrunebonus").textContent = "Thanks to researches, your effective levels are increased by " + (100 * (1 + player.researches[4]/10) * (1 + player.researches[21]/800) - 100).toPrecision(4) + "%"
			displayruneinformation(1,false)
			displayruneinformation(2,false)
			displayruneinformation(3,false)
			displayruneinformation(4,false)
			player.tabnumber = 5;
		}
		if (currentTab == "transcension") {
			document.getElementById("transcension").style.display = "block"
			document.getElementById("transcensiontab").style.backgroundColor = "purple"
			player.tabnumber = 6;
		}
		if (currentTab == "challenges") {
			document.getElementById("challenges").style.display = "block"
			document.getElementById("challengetab").style.backgroundColor = "purple"
			player.tabnumber = 7;
		}
		if (currentTab == "reincarnation") {
			document.getElementById("reincarnation").style.display = "block"
			document.getElementById("reincarnationtab").style.backgroundColor = "green"
			player.tabnumber = 8;

		}
		if (currentTab == "researches") {
			document.getElementById("research").style.display = "block"
			document.getElementById("researchtab").style.backgroundColor = "green"
			player.tabnumber = 9;

		}

		if (player.achievements[38] > 0.5) {
			document.getElementById("activaterune2").style.display = "block"
		}
		if (player.achievements[44] > 0.5) {
			document.getElementById("activaterune3").style.display = "block"
		}
		if (player.achievements[102]> 0.5) {
			document.getElementById("activaterune4").style.display = "block"
		}
	}
	
	function htmlInserts() {
        document.getElementById("coinDisplay").textContent = format(player.coins)
        document.getElementById("offeringDisplay").textContent = format(player.runeshards)
        document.getElementById("diamondDisplay").textContent = format(player.prestigePoints)
        document.getElementById("crystalDisplay").textContent = format(player.prestigeShards)
        document.getElementById("mythosDisplay").textContent = format(player.transcendPoints)
        document.getElementById("mythosshardDisplay").textContent = format(player.transcendShards)
        document.getElementById("particlesDisplay").textContent = format(player.reincarnationPoints)
        document.getElementById("atomsDisplay").textContent = format(player.reincarnationShards)
        document.getElementById("obtainiumDisplay").textContent = format(player.researchPoints)
        document.getElementById("quarksDisplay").textContent = format(player.worlds)
 
        if (currentTab == "buildings") {
            document.getElementById("buildtext1").textContent = "Workers: " + format(player.firstOwnedCoin) + " [+" + format(player.firstGeneratedCoin) + "]"
            document.getElementById("buildtext2").textContent = "Coins/Sec: " + format((produceFirst.dividedBy(taxdivisor)).times(40),2) + " [" + (produceFirst.dividedBy(produceTotal.add(0.00001)).times(100)).toPrecision(3) + "%]"
            document.getElementById("buildtext3").textContent = "Investments: " + format(player.secondOwnedCoin) + " [+" + format(player.secondGeneratedCoin) + "]"
            document.getElementById("buildtext4").textContent = "Coins/Sec: " + format((produceSecond.dividedBy(taxdivisor)).times(40),2) + " [" + (produceSecond.dividedBy(produceTotal.add(0.00001)).times(100)).toPrecision(3) + "%]"
            document.getElementById("buildtext5").textContent = "Printers: " + format(player.thirdOwnedCoin) + " [+" + format(player.thirdGeneratedCoin) + "]"
            document.getElementById("buildtext6").textContent = "Coins/Sec: " + format((produceThird.dividedBy(taxdivisor)).times(40),2) + " [" + (produceThird.dividedBy(produceTotal.add(0.00001)).times(100)).toPrecision(3) + "%]"
            document.getElementById("buildtext7").textContent = "Coin Mints: " + format(player.fourthOwnedCoin) + " [+" + format(player.fourthGeneratedCoin) + "]"
            document.getElementById("buildtext8").textContent = "Coins/Sec: " + format((produceFourth.dividedBy(taxdivisor)).times(40),2) + " [" + (produceFourth.dividedBy(produceTotal.add(0.00001)).times(100)).toPrecision(3) + "%]"
            document.getElementById("buildtext9").textContent = "Alchemies: " + format(player.fifthOwnedCoin) + " [+" + format(player.fifthGeneratedCoin) + "]"
            document.getElementById("buildtext10").textContent = "Coins/Sec: " + format((produceFifth.dividedBy(taxdivisor)).times(40),2) + " [" + (produceFifth.dividedBy(produceTotal.add(0.00001)).times(100)).toPrecision(3) + "%]"
            document.getElementById("buildtext11").textContent = "Accelerators: " + format(player.acceleratorBought) + " [+" + format(freeAccelerator) + "]"
            document.getElementById("buildtext12").textContent = "Acceleration Power: " + ((acceleratorPower - 1)*(100)).toPrecision(4) +  "% || Acceleration Multiplier: " + format(acceleratorEffect,2) + "x"
            document.getElementById("buildtext13").textContent = "Multipliers: " + format(player.multiplierBought) + " [+" + format(freeMultiplier) + "]"
            document.getElementById("buildtext14").textContent = "Multiplier Power: " + multiplierPower.toPrecision(4) + "x || Multiplier: " + format(multiplierEffect,2) + "x"
            document.getElementById("buildtext15").textContent = "Accelerator Boost: " + format(player.acceleratorBoostBought) + " [+" + freeAcceleratorBoost + "]"
            document.getElementById("buildtext16").textContent = "Reset Diamonds and Prestige Upgrades, but add " + (tuSevenMulti * (1 + player.researches[16]/50) * (1 + player.challengecompletions.two / 100)).toPrecision(4) + "% Acceleration Power and 5 free Accelerators."
 
            document.getElementById("buycoin1").textContent = "Cost: " + format(player.firstCostCoin) + " coins."
            document.getElementById("buycoin2").textContent = "Cost: " + format(player.secondCostCoin) + " coins."
            document.getElementById("buycoin3").textContent = "Cost: " + format(player.thirdCostCoin) + " coins."
            document.getElementById("buycoin4").textContent = "Cost: " + format(player.fourthCostCoin) + " coins."
            document.getElementById("buycoin5").textContent = "Cost: " + format(player.fifthCostCoin) + " coins."
            document.getElementById("buyaccelerator").textContent = "Cost: " + format(player.acceleratorCost) + " coins."
            document.getElementById("buymultiplier").textContent = "Cost: " + format(player.multiplierCost) + " coins."
            document.getElementById("buyacceleratorboost").textContent = "Cost: " + format(player.acceleratorBoostCost) + " Diamonds."
        }
 
        if (currentTab == "upgrades") {
            
        }
 
        if (currentTab == "settings") {}
 
        if (currentTab == "achievements") {
            document.getElementById("achievementpoints").textContent  = "Achievement Points: " + player.achievementPoints
        }
 
        if (currentTab == "prestige") {
            document.getElementById("prestigeshardinfo").textContent = "You have " + format(player.prestigeShards,2) + " Crystals, multiplying Coin production by " + format(prestigeMultiplier,2) + "x."
            document.getElementById("prestigetext1").textContent = "Refineries: " + format(player.firstOwnedDiamonds) + " [+" + format(player.firstGeneratedDiamonds,2) + "]"
            document.getElementById("prestigetext2").textContent = "Crystal/sec: " + format((produceFirstDiamonds).times(20),2)
            document.getElementById("prestigetext3").textContent = "Coal Plants: " + format(player.secondOwnedDiamonds) + " [+" + format(player.secondGeneratedDiamonds,2) + "]"
            document.getElementById("prestigetext4").textContent = "Ref./Sec: " + format((produceSecondDiamonds).times(20),2)
            document.getElementById("prestigetext5").textContent = "Coal Rigs: " + format(player.thirdOwnedDiamonds) + " [+" + format(player.thirdGeneratedDiamonds,2) + "]"
            document.getElementById("prestigetext6").textContent = "Plants/Sec: " + format((produceThirdDiamonds).times(20),2) 
            document.getElementById("prestigetext7").textContent = "Pickaxes: " + format(player.fourthOwnedDiamonds) + " [+" + format(player.fourthGeneratedDiamonds,2) + "]"
            document.getElementById("prestigetext8").textContent = "Rigs/Sec: " + format((produceFourthDiamonds).times(20),2) 
            document.getElementById("prestigetext9").textContent = "Pandora's Boxes: " + format(player.fifthOwnedDiamonds) + " [+" + format(player.fifthGeneratedDiamonds,2) + "]"
            document.getElementById("prestigetext10").textContent = "Pickaxes/Sec: " + format((produceFifthDiamonds).times(20),2) 
            
            document.getElementById("buydiamond1").textContent = "Cost: " + format(player.firstCostDiamonds,2) + " Diamonds"
            document.getElementById("buydiamond2").textContent = "Cost: " + format(player.secondCostDiamonds,2) + " Diamonds"
            document.getElementById("buydiamond3").textContent = "Cost: " + format(player.thirdCostDiamonds) + " Diamonds"
            document.getElementById("buydiamond4").textContent = "Cost: " + format(player.fourthCostDiamonds) + " Diamonds"
			document.getElementById("buydiamond5").textContent = "Cost: " + format(player.fifthCostDiamonds) + " Diamonds"
			if (player.resettoggle1 == 1 || player.resettoggle1 == 0) {
				var p = new Decimal.pow(10, Decimal.log(prestigePointGain.add(1),10) - Decimal.log(player.prestigePoints.sub(1),10))
				document.getElementById("autoprestige").textContent = "Prestige when your Diamonds can increase by a factor " + format(Decimal.pow(10, player.prestigeamount)) + " [Toggle number above]. Current Multiplier: " + format(p) + "."
			}
			if (player.resettoggle1 == 2) {
            document.getElementById("autoprestige").textContent = "Prestige when the timer is at least " + (player.prestigeamount) + " seconds. [Toggle number above]. Current timer: " + format(player.prestigecounter,1) + "s." 
			}
		}
        if (currentTab == "runes"){
            document.getElementById("runeshards").textContent = "You have " + format(player.runeshards) + " Offerings."
            document.getElementById("rune1level").textContent = "Level: " + player.runelevels[0] + "/500"
            document.getElementById("rune2level").textContent = "Level: " + player.runelevels[1] + "/500"
            document.getElementById("rune3level").textContent = "Level: " + player.runelevels[2] + "/500"
            document.getElementById("rune4level").textContent = "Level: " + player.runelevels[3] + "/500"
            document.getElementById("rune1exp").textContent = "+1 in " + format(Math.ceil(Math.max(0, (1 * Math.pow(player.runelevels[0] , 3) * (4 * player.runelevels[0] + 100)/500 * (1 - 0.02 * player.challengecompletions.seven) - player.runeexp[0]))),2) + " EXP" 
            document.getElementById("rune2exp").textContent = "+1 in " + format(Math.ceil(Math.max(0, (4 * Math.pow(player.runelevels[1] , 3) * (4 * player.runelevels[1] + 100)/500 * (1 - 0.02 * player.challengecompletions.seven) - player.runeexp[1]))),2) + " EXP"
            document.getElementById("rune3exp").textContent = "+1 in " + format(Math.ceil(Math.max(0, (9 * Math.pow(player.runelevels[2] , 3) * (4 * player.runelevels[2] + 100)/500 * (1 - 0.02 * player.challengecompletions.eight) - player.runeexp[2]))),2) + " EXP"
            document.getElementById("rune4exp").textContent = "+1 in " + format(Math.ceil(Math.max(0, (16 * Math.pow(player.runelevels[3] , 3) * (4 * player.runelevels[3] + 100)/500 * (1 - 0.02 * player.challengecompletions.six) - player.runeexp[3]))),2) + " EXP"
			document.getElementById("runedetails").textContent = "Gain " + (25 + 3 * player.researches[22] + 2 * player.researches[23] + 3 * player.upgrades[66] + 5 * player.upgrades[61]) + " EXP per offering sacrificed. Gain more offerings through resetting longer runs!" 
 
           
			
			document.getElementById("runerecycle").textContent = "You have " +(0.5 + 5 * player.achievements[80] + 5 * player.achievements[87] + 5 * player.achievements[94] + 5 * player.achievements[101] + 5 * player.achievements[108] + 5 * player.achievements[115] + 10 * player.achievements[122] + 10 * player.achievements[129] + 5 * player.upgrades[61] + Math.min(25, player.runelevels[3]/8))  + "% chance of recycling your offerings. Recycled offerings are not spent!"
        }
        if (currentTab == "transcension") {
            document.getElementById("transcendshardinfo").textContent = "You have " + format(player.transcendShards,2) + " Mythos Shards, providing " + format(totalMultiplierBoost) + " Multiplier Power boosts."
            document.getElementById("transcendtext1").textContent = "Augments: " + format(player.firstOwnedMythos) + " [+" + format(player.firstGeneratedMythos,2) + "]"
            document.getElementById("transcendtext2").textContent = "Shards/Sec: " + format((produceFirstMythos).times(40),2) 
            document.getElementById("transcendtext3").textContent = "Enchantments: " + format(player.secondOwnedMythos) + " [+" + format(player.secondGeneratedMythos,2) + "]"
            document.getElementById("transcendtext4").textContent = "Augments/Sec: " + format((produceSecondMythos).times(40),2) 
            document.getElementById("transcendtext5").textContent = "Wizards: " + format(player.thirdOwnedMythos) + " [+" + format(player.thirdGeneratedMythos,2) + "]"
            document.getElementById("transcendtext6").textContent = "Enchantments/Sec: " + format((produceThirdMythos).times(40),2) 
            document.getElementById("transcendtext7").textContent = "Oracles: " + format(player.fourthOwnedMythos) + " [+" + format(player.fourthGeneratedMythos,2) + "]"
            document.getElementById("transcendtext8").textContent = "Wizards/Sec: " + format((produceFourthMythos).times(40),2) 
            document.getElementById("transcendtext9").textContent = "Grandmasters: " + format(player.fifthOwnedMythos) + " [+" + format(player.fifthGeneratedMythos,2) + "]"
            document.getElementById("transcendtext10").textContent = "Oracles/Sec: " + format((produceFifthMythos).times(40),2)
            
            document.getElementById("buymythos1").textContent = "Cost: " + format(player.firstCostMythos,2) + " Mythos"
            document.getElementById("buymythos2").textContent = "Cost: " + format(player.secondCostMythos) + " Mythos"
            document.getElementById("buymythos3").textContent = "Cost: " + format(player.thirdCostMythos) + " Mythos"
            document.getElementById("buymythos4").textContent = "Cost: " + format(player.fourthCostMythos) + " Mythos"
            document.getElementById("buymythos5").textContent = "Cost: " + format(player.fifthCostMythos) + " Mythos"
			if (player.resettoggle2 == 1 || player.resettoggle2 == 0) {
				document.getElementById("autotranscend").textContent = "Prestige when your Mythos can increase by a factor " + format(Decimal.pow(10, player.transcendamount)) + " [Toggle number above]. Current Multiplier: " + format(Decimal.pow(10, Decimal.log(transcendPointGain.add(1),10) - Decimal.log(player.transcendPoints.add(1),10),2)) + "."
			}
			if (player.resettoggle2 == 2) {
            document.getElementById("autotranscend").textContent = "Transcend when the timer is at least " + (player.transcendamount) + " seconds. [Toggle number above]. Current timer: " + format(player.transcendcounter,1) + "s." 
			} 
        }
        if (currentTab == "challenges") {
        }
 
        if (currentTab == "reincarnation") {
            document.getElementById("reincarnationshardinfo").textContent = "You have " + format(player.reincarnationShards,2) + " Atoms, providing " + buildingPower.toPrecision(4) + " Building Power. Multiplier to Coin Production: " + format(reincarnationMultiplier)
            document.getElementById("reincarnationtext1").textContent = "Protons: " + format(player.firstOwnedParticles) + " [+" + format(player.firstGeneratedParticles,2) + "]"
            document.getElementById("reincarnationtext6").textContent = "Atoms/Sec: " + format((produceFirstParticles).times(40),2) 
            document.getElementById("reincarnationtext2").textContent = "Elements: " + player.secondOwnedParticles + " [+" + format(player.secondGeneratedParticles,2) + "]"
            document.getElementById("reincarnationtext7").textContent = "Protons/Sec: " + format((produceSecondParticles).times(40),2) 
            document.getElementById("reincarnationtext3").textContent = "Pulsars: " + player.thirdOwnedParticles + " [+" + format(player.thirdGeneratedParticles,2) + "]"
            document.getElementById("reincarnationtext8").textContent = "Elements/Sec: " + format((produceThirdParticles).times(40),2) 
            document.getElementById("reincarnationtext4").textContent = "Quasars: " + player.fourthOwnedParticles + " [+" + format(player.fourthGeneratedParticles,2) + "]"
            document.getElementById("reincarnationtext9").textContent = "Pulsars/Sec: " + format((produceFourthParticles).times(40),2) 
            document.getElementById("reincarnationtext5").textContent = "Galactic Nuclei: " + player.fifthOwnedParticles + " [+" + format(player.fifthGeneratedParticles,2) + "]"
            document.getElementById("reincarnationtext10").textContent = "Quasars/Sec: " + format((produceFifthParticles).times(40),2) 
            
            document.getElementById("buyparticles1").textContent = "Cost: " + format(player.firstCostParticles,2) + " Particles"
            document.getElementById("buyparticles2").textContent = "Cost: " + format(player.secondCostParticles) + " Particles"
            document.getElementById("buyparticles3").textContent = "Cost: " + format(player.thirdCostParticles) + " Particles"
            document.getElementById("buyparticles4").textContent = "Cost: " + format(player.fourthCostParticles) + " Particles"
            document.getElementById("buyparticles5").textContent = "Cost: " + format(player.fifthCostParticles) + " Particles"
			if (player.resettoggle3 == 1 || player.resettoggle3 == 0) {
				document.getElementById("autoreincarnate").textContent = "Reincarnate when your Particles can increase by a factor " + format(Decimal.pow(10, player.reincarnationamount)) + " [Toggle number above]. Current Multiplier: " + format(Decimal.pow(10, Decimal.log(reincarnationPointGain.add(1),10) - Decimal.log(player.reincarnationPoints.add(1),10),2)) + "."
			}
			if (player.resettoggle3 == 2) {
            document.getElementById("autoreincarnate").textContent = "Reincarnate when the timer is at least " + (player.reincarnationamount) + " seconds. [Toggle number above]. Current timer: " + format(player.reincarnationcounter,1) + "s." 
			} 
        }
 
        if (currentTab == "researches") {
            document.getElementById("researchinfo").textContent = "You have " + format(player.researchPoints) + " Obtainium"
	}
		if (currentTab == "settings") {
			document.getElementById("temporarystats1").textContent = "Prestige count: " + format(player.prestigeCount)
			document.getElementById("temporarystats2").textContent = "Transcend count: " + format(player.transcendCount)
			document.getElementById("temporarystats3").textContent = "Reincarnation count: " + format(player.reincarnationCount)
			document.getElementById("temporarystats4").textContent = "Fastest Prestige: " + format(1000 * player.fastestprestige) + "ms"
			document.getElementById("temporarystats5").textContent = "Fastest Transcend: " + format(1000 * player.fastesttranscend) + "ms"
			document.getElementById("temporarystats6").textContent = "Fastest Reincarnation: " + format(1000 * player.fastestreincarnate) + "ms"


			
		}
    
    }


function buttoncolorchange() {
	if (!player.toggles.fifteen || player.achievements[43] == 0){document.getElementById("prestigebtn").style.backgroundColor = "#171717"}
	if (!player.toggles.twentyone || player.upgrades[89] == 0){document.getElementById("transcendbtn").style.backgroundColor = "#171717"}
	if (!player.toggles.twentyseven || player.researches[46] == 0){document.getElementById("reincarnatebtn").style.backgroundColor = "#171717"}
	if (!player.toggles.eight || player.upgrades[88] == 0){document.getElementById("acceleratorboostbtn").style.backgroundColor = "#171717"}
	if (player.currentChallenge !== ""){document.getElementById("challengebtn").style.backgroundColor = "purple"}
	if (player.currentChallengeRein !== ""){document.getElementById("reincarnatechallengebtn").style.backgroundColor = "purple"}



	if (player.toggles.fifteen && player.achievements[43] > 0.5){document.getElementById("prestigebtn").style.backgroundColor = "green"}
	if (player.toggles.twentyone && player.upgrades[89] > 0.5){document.getElementById("transcendbtn").style.backgroundColor = "green"}
	if (player.toggles.twentyseven && player.researches[46] > 0.5){document.getElementById("reincarnatebtn").style.backgroundColor = "green"}
	if (player.toggles.eight && player.upgrades[88] > 0.5){document.getElementById("acceleratorboostbtn").style.backgroundColor = "green"}
	if (player.currentChallenge ==""){document.getElementById("challengebtn").style.backgroundColor = "#171717"}
	if (player.currentChallengeRein == ""){document.getElementById("reincarnatechallengebtn").style.backgroundColor = "#171717"}




	if (currentTab == "buildings"){
		document.getElementById("buycoin1").style.backgroundColor = "#171717"
		document.getElementById("buycoin2").style.backgroundColor = "#171717"
		document.getElementById("buycoin3").style.backgroundColor = "#171717"
		document.getElementById("buycoin4").style.backgroundColor = "#171717"
		document.getElementById("buycoin5").style.backgroundColor = "#171717"
		document.getElementById("buyaccelerator").style.backgroundColor = "#171717"
		document.getElementById("buymultiplier").style.backgroundColor = "#171717"
		document.getElementById("buyacceleratorboost").style.backgroundColor = "#171717"




		if ((!player.toggles.one || player.upgrades[81] == 0) && player.coins.greaterThanOrEqualTo(player.firstCostCoin)){document.getElementById("buycoin1").style.backgroundColor = "#555555"}
		if ((!player.toggles.two || player.upgrades[82] == 0) && player.coins.greaterThanOrEqualTo(player.secondCostCoin)){document.getElementById("buycoin2").style.backgroundColor = "#555555"}
		if ((!player.toggles.three || player.upgrades[83] == 0) && player.coins.greaterThanOrEqualTo(player.thirdCostCoin)){document.getElementById("buycoin3").style.backgroundColor = "#555555"}
		if ((!player.toggles.four || player.upgrades[84] == 0) && player.coins.greaterThanOrEqualTo(player.fourthCostCoin)){document.getElementById("buycoin4").style.backgroundColor = "#555555"}
		if ((!player.toggles.five || player.upgrades[85] == 0) && player.coins.greaterThanOrEqualTo(player.fifthCostCoin)){document.getElementById("buycoin5").style.backgroundColor = "#555555"}
		if ((!player.toggles.six || player.upgrades[86] == 0) && player.coins.greaterThanOrEqualTo(player.acceleratorCost)){document.getElementById("buyaccelerator").style.backgroundColor = "#555555"}
		if ((!player.toggles.seven || player.upgrades[87] == 0) && player.coins.greaterThanOrEqualTo(player.multiplierCost)){document.getElementById("buymultiplier").style.backgroundColor = "#555555"}
		if ((!player.toggles.eight || player.upgrades[88] == 0) && player.prestigePoints.greaterThanOrEqualTo(player.acceleratorBoostCost)){document.getElementById("buyacceleratorboost").style.backgroundColor = "#555555"}

	}
	if (currentTab == "prestige"){
		document.getElementById("buydiamond1").style.backgroundColor = "#171717"
		document.getElementById("buydiamond2").style.backgroundColor = "#171717"
		document.getElementById("buydiamond3").style.backgroundColor = "#171717"
		document.getElementById("buydiamond4").style.backgroundColor = "#171717"
		document.getElementById("buydiamond5").style.backgroundColor = "#171717"
		document.getElementById("buycrystalupgrade1").style.backgroundColor = "#171717"
		document.getElementById("buycrystalupgrade2").style.backgroundColor = "#171717"
		document.getElementById("buycrystalupgrade3").style.backgroundColor = "#171717"
		document.getElementById("buycrystalupgrade4").style.backgroundColor = "#171717"
		document.getElementById("buycrystalupgrade5").style.backgroundColor = "#171717"

		if ((!player.toggles.ten || player.achievements[78] == 0) && player.prestigePoints.greaterThanOrEqualTo(player.firstCostDiamonds)){document.getElementById("buydiamond1").style.backgroundColor = "#555555"}
		if ((!player.toggles.eleven || player.achievements[85] == 0) && player.prestigePoints.greaterThanOrEqualTo(player.secondCostDiamonds)){document.getElementById("buydiamond2").style.backgroundColor = "#555555"}
		if ((!player.toggles.twelve || player.achievements[92] == 0) && player.prestigePoints.greaterThanOrEqualTo(player.thirdCostDiamonds)){document.getElementById("buydiamond3").style.backgroundColor = "#555555"}
		if ((!player.toggles.thirteen || player.achievements[99] == 0) && player.prestigePoints.greaterThanOrEqualTo(player.fourthCostDiamonds)){document.getElementById("buydiamond4").style.backgroundColor = "#555555"}
		if ((!player.toggles.fourteen || player.achievements[106] == 0) && player.prestigePoints.greaterThanOrEqualTo(player.fifthCostDiamonds)){document.getElementById("buydiamond5").style.backgroundColor = "#555555"}

		var c = 0;
		c += Math.floor(player.runelevels[2]/10 * (1 + player.researches[5] /10) * (1 + player.researches[21]/800)) * 100/100
		if (player.upgrades[73] > 0.5 && player.currentChallengeRein !== ""){c += 10}

		if (player.achievements[79] < 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[0] + crystalUpgradeCostIncrement[0] * Math.floor(Math.pow(player.crystalUpgrades[0] + 0.5 - c, 2) /2))))) {document.getElementById("buycrystalupgrade1").style.backgroundColor = "purple"}
		if (player.achievements[86] < 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[1] + crystalUpgradeCostIncrement[1] * Math.floor(Math.pow(player.crystalUpgrades[1] + 0.5 - c, 2) /2))))) {document.getElementById("buycrystalupgrade2").style.backgroundColor = "purple"}
		if (player.achievements[93] < 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[2] + crystalUpgradeCostIncrement[2] * Math.floor(Math.pow(player.crystalUpgrades[2] + 0.5 - c, 2) /2))))) {document.getElementById("buycrystalupgrade3").style.backgroundColor = "purple"}
		if (player.achievements[100] < 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[3] + crystalUpgradeCostIncrement[3] * Math.floor(Math.pow(player.crystalUpgrades[3] + 0.5 - c, 2) /2))))) {document.getElementById("buycrystalupgrade4").style.backgroundColor = "purple"}
		if (player.achievements[107] < 0.5 && player.prestigeShards.greaterThanOrEqualTo(Decimal.pow(10, (crystalUpgradesCost[4] + crystalUpgradeCostIncrement[4] * Math.floor(Math.pow(player.crystalUpgrades[4] + 0.5 - c, 2) /2))))) {document.getElementById("buycrystalupgrade5").style.backgroundColor = "purple"}

		if (player.achievements[79] > 0.5){document.getElementById("buycrystalupgrade1").style.backgroundColor = "green"}
		if (player.achievements[86] > 0.5){document.getElementById("buycrystalupgrade2").style.backgroundColor = "green"}
		if (player.achievements[93] > 0.5){document.getElementById("buycrystalupgrade3").style.backgroundColor = "green"}
		if (player.achievements[100] > 0.5){document.getElementById("buycrystalupgrade4").style.backgroundColor = "green"}
		if (player.achievements[107] > 0.5){document.getElementById("buycrystalupgrade5").style.backgroundColor = "green"}


	}
	if (currentTab == "runes") {
		document.getElementById("activaterune1").style.backgroundColor = "#171717"
		document.getElementById("activaterune2").style.backgroundColor = "#171717"
		document.getElementById("activaterune3").style.backgroundColor = "#171717"
		document.getElementById("activaterune4").style.backgroundColor = "#171717"

		if (player.runeshards > 0.5){
			document.getElementById("activaterune1").style.backgroundColor = "purple"
			document.getElementById("activaterune2").style.backgroundColor = "purple"
			document.getElementById("activaterune3").style.backgroundColor = "purple"
			document.getElementById("activaterune4").style.backgroundColor = "purple"	
		}
	}
	if (currentTab == "transcension"){
		document.getElementById("buymythos1").style.backgroundColor = "#171717"
		document.getElementById("buymythos2").style.backgroundColor = "#171717"
		document.getElementById("buymythos3").style.backgroundColor = "#171717"
		document.getElementById("buymythos4").style.backgroundColor = "#171717"
		document.getElementById("buymythos5").style.backgroundColor = "#171717"

		if ((!player.toggles.sixteen || player.upgrades[94] == 0) && player.transcendPoints.greaterThanOrEqualTo(player.firstCostMythos)){document.getElementById("buymythos1").style.backgroundColor = "#555555"}
		if ((!player.toggles.seventeen || player.upgrades[94] == 0) && player.transcendPoints.greaterThanOrEqualTo(player.secondCostMythos)){document.getElementById("buymythos2").style.backgroundColor = "#555555"}
		if ((!player.toggles.eighteen || player.upgrades[94] == 0) && player.transcendPoints.greaterThanOrEqualTo(player.thirdCostMythos)){document.getElementById("buymythos3").style.backgroundColor = "#555555"}
		if ((!player.toggles.nineteen || player.upgrades[94] == 0) && player.transcendPoints.greaterThanOrEqualTo(player.fourthCostMythos)){document.getElementById("buymythos4").style.backgroundColor = "#555555"}
		if ((!player.toggles.twenty || player.upgrades[94] == 0) && player.transcendPoints.greaterThanOrEqualTo(player.fifthCostMythos)){document.getElementById("buymythos5").style.backgroundColor = "#555555"}


	}
	if (currentTab == "reincarnation"){
		document.getElementById("buyparticles1").style.backgroundColor = "#171717"
		document.getElementById("buyparticles2").style.backgroundColor = "#171717"
		document.getElementById("buyparticles3").style.backgroundColor = "#171717"
		document.getElementById("buyparticles4").style.backgroundColor = "#171717"
		document.getElementById("buyparticles5").style.backgroundColor = "#171717"

		if (player.reincarnationPoints.greaterThanOrEqualTo(player.firstCostParticles)){document.getElementById("buyparticles1").style.backgroundColor = "#555555"}
		if (player.reincarnationPoints.greaterThanOrEqualTo(player.secondCostParticles)){document.getElementById("buyparticles2").style.backgroundColor = "#555555"}
		if (player.reincarnationPoints.greaterThanOrEqualTo(player.thirdCostParticles)){document.getElementById("buyparticles3").style.backgroundColor = "#555555"}
		if (player.reincarnationPoints.greaterThanOrEqualTo(player.fourthCostParticles)){document.getElementById("buyparticles4").style.backgroundColor = "#555555"}
		if (player.reincarnationPoints.greaterThanOrEqualTo(player.fifthCostParticles)){document.getElementById("buyparticles5").style.backgroundColor = "#555555"}
	}
}

// Functions which (try) to successfully load the game [Lines 1770 - 1788 END]

function constantIntervals() {
		setInterval(mythosProduction, 25);
		setInterval(particlesProduction, 25);
		setInterval(saveSynergy, 5000);
		setInterval(resourceGain, 25);
		setInterval(updateAll, 50);
		setInterval(resettimers, 50);
		setInterval(autoUpgrades, 200);
		setInterval(buttoncolorchange, 200)
	}

window.onload = function() {
		loadSynergy();
		saveSynergy();
		revealStuff();
		hideStuff();
		constantIntervals();
		htmlInserts();

	}

window.onbeforeunload = function(){
		updatetimer();
};