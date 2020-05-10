var runediv = [1.5, 2, 3, 5, 8]
var runeexpbase = [1, 4, 9, 16, 25]

// this shows the logarithm of costs. ex: upgrade one will cost 1e+6 coins, upgrade 2 1e+7, etc.
var upgradeCosts = [0, 6, 7, 8, 10, 12, 20, 25, 30, 35, 45, 55, 75, 110, 150, 200, 250, 500, 750, 1000, 1500,
					   2, 3, 4, 5, 6, 7, 10, 13, 20, 30, 150, 400, 800, 1600, 3200, 10000, 20000, 50000, 100000, 200000,
						1, 2, 3, 5, 6, 7, 42, 65, 87, 150, 300, 500, 1000, 1500, 2000, 3000, 6000, 12000, 25000, 75000,
						0, 1, 2, 2, 3, 5, 6, 10, 15, 22, 30, 37, 45, 52, 60, 9999, 9999, 9999, 9999, 9999,
						3, 6, 9, 12, 15, 20, 30, 6, 8, 8, 10, 13, 60, 1, 2, 4, 8, 16, 25, 40,
						12, 16, 20, 30, 50, 500, 1250, 5000, 25000, 125000, 1500, 7500, 30000, 150000, 1000000, 250, 1000, 5000, 25000, 125000];

// Mega list of Variables to be used elsewhere
var crystalUpgradesCost = [6, 15, 20, 40, 100, 200, 500, 1000]
var crystalUpgradeCostIncrement = [8, 15, 20, 40, 100, 200, 500, 1000]
var researchBaseCosts = [0, 1, 1, 1, 1, 1,
							1, 5, 25, 500, 10000,
							1, 5, 25, 500, 10000,
							20, 250, 10, 2500, 750000,
							10, 10, 500, 100, 2000,
							10, 50, 25, 2500, 100000,
							100, 1000, 10000, 100000, 1000000,
							2, 500, 250000, 2500, 50000,
							1, 1, 5, 25, 125,
							2, 5, 320, 1280, 3e7,
							10, 100, 1000, 100000, 2000000,
							10, 100, 1000, 25000, 500000,
							5, 10, 80, 5000, 20000,
							2, 20, 200, 2000, 20000,
							10, 40, 160, 1000, 10000,
							2e8, 1e7, 2e7, 3e7, 4e7,
							2e7, 2e7, 4e7, 8e7, 1.6e8,
							1e7, 1e7, 1e7, 1e8, 1e9

							]



var researchMaxLevels = [0, 1, 1, 1, 1, 1,
							 10, 20, 30, 40, 50,
							 10, 20, 30, 40, 50,
							 50, 50, 1, 1, 1,
							 200, 25, 25, 20, 20,
							 90, 180, 40, 40, 40,
							 50, 50, 50, 50, 50,
							 50, 50, 50, 1, 1,
							 1, 1, 1, 1, 1,
							 1, 1, 1, 1, 1,
							 10, 10, 10, 10, 10,
							 20, 20, 20, 20, 20,
							 1, 28, 28, 3, 50,
							 50, 50, 50, 50, 50,
							 1, 1, 1, 1, 1,
							 1, 500, 500, 500, 500,
							 1000, 1000, 1000, 1000,
							 1, 100, 100, 100, 100,
							 100, 100, 100, 100, 100
							 ]								

var ticker = 0;

var costDivisor = 1;

var freeAccelerator = 0;
var totalAccelerator = 0;
var freeAcceleratorBoost = 0;
var totalAcceleratorBoost = 0;
var acceleratorPower = 1.10;
var acceleratorEffect = new Decimal(1);
var acceleratorEffectDisplay = new Decimal(1);
var generatorPower = new Decimal(1);

var freeMultiplier = 0;
var totalMultiplier = 0;
var multiplierPower = 2;
var multiplierEffect = 1;
var challengeOneLog = 3;
var freeMultiplierBoost = 0;
var totalMultiplierBoost = 0;

var globalCoinMultiplier = new Decimal(1);
var totalCoinOwned = new Decimal(0);
var prestigeMultiplier = new Decimal(1);
var buildingPower = 1;
var reincarnationMultiplier = new Decimal(1);

var coinOneMulti = new Decimal(1);
var coinTwoMulti = new Decimal(1);
var coinThreeMulti = new Decimal(1);
var coinFourMulti = new Decimal(1);
var coinFiveMulti = new Decimal(1);

var globalCrystalMultiplier = new Decimal(1);
var globalMythosMultiplier = new Decimal(0.01);
var grandmasterMultiplier = new Decimal(1);

var atomsMultiplier = new Decimal(1);

var mythosBuildingPower = 1;
var challengeThreeMultiplier = new Decimal(1);
var totalMythosOwned = 0;

var prestigePointGain = new Decimal(0);
var challengeFivePower = 1/3;

var transcendPointGain = new Decimal(0);
var reincarnationPointGain = new Decimal(0);

var produceFirst = new Decimal(0);
var produceSecond = new Decimal(0);
var produceThird = new Decimal(0);
var produceFourth = new Decimal(0);
var produceFifth = new Decimal(0);
var produceTotal = new Decimal(0);

var produceFirstDiamonds = new Decimal(0);
var produceSecondDiamonds = new Decimal(0);
var produceThirdDiamonds = new Decimal(0);
var produceFourthDiamonds = new Decimal(0);
var produceFifthDiamonds = new Decimal(0);
var produceDiamonds = new Decimal(0);

var produceFirstMythos = new Decimal(0);
var produceSecondMythos = new Decimal(0);
var produceThirdMythos = new Decimal(0);
var produceFourthMythos = new Decimal(0);
var produceFifthMythos = new Decimal(0);
var produceMythos = new Decimal(0);

var produceFirstParticles = new Decimal(0);
var produceSecondParticles = new Decimal(0);
var produceThirdParticles = new Decimal(0);
var produceFourthParticles = new Decimal(0);
var produceFifthParticles = new Decimal(0);
var produceParticles = new Decimal(0);

var producePerSecond = new Decimal(0);
var producePerSecondDiamonds = new Decimal(0);
var producePerSecondMythos = new Decimal(0);
var producePerSecondParticles = new Decimal(0);

var uFourteenMulti = new Decimal(1);
var uFifteenMulti = new Decimal(1);
var tuSevenMulti = 1;
let currentTab = "buildings"

var researchfiller1 = "Hover over the grid to get details about researches!"
var researchfiller2 = "Level: "

var ordinals = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth"]
var cardinals = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive", "twentysix", "twentyseven", "twentyeight", "twentynine", "thirty", "thirtyone", "thirtytwo", "thirtythree", "thirtyfour"]

var challengebaserequirements = {
	one: 10,
	two: 20,
	three: 60,
	four: 100,
	five: 200,
	six: 1000,
	seven: 1000,
	eight: 1000,
	nine: 1000,
	ten: 1000,
}

var challengebaserequirementsrein = {
	six: 125,
	seven: 500,
	eight: 2500,
}

var prestigeamount = 1;
var taxdivisor = new Decimal("1");
var taxdivisorcheck = new Decimal("1");
var runemultiplierincrease = {
	one: 1,
	two: 1,
	three: 1,
	four: 1,
	five: 1
}

var mythosupgrade13 = new Decimal("1");
var mythosupgrade14 = new Decimal("1");
var mythosupgrade15 = new Decimal("1");
var challengefocus = 0;

var maxexponent = 10000;