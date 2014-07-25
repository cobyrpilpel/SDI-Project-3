//alert("JavaScript works!");

// Coby Pilpel
//Project 3




var cookingMaterials = confirm("Do you have everything you need to get started?");


var ingredientsPrimary = ["2 cans of diced tomatoes in sauce",
    "2 cloves diced garlic",
    "1/2 cup diced onion",
    "1 cup minced basil"];
var ingredientsSecondary = ["1 and 1/2 cups of vodka",  , "chicken cubes" , 
	" 1 pint heavy cream"];

var cookTime = 20;
var platingTime = 6;
var thickeningTime = 5
var coolingTime = 3
var didTheVodkaBurnOff = true
var panIsHot= true
var isItFinished = true

// Procedure 

var readyToCook = function (cookingMaterials)
{var answer = cookingMaterials;
	if (answer === true )
	{console.log("We are ready to start. Let's get cooking!");}
	else {console.log("We are supposed to be making Vodka sauce not Vodka on the rocks. Go get your cooking materials!");}
}

// Array


var gettingStarted = function (vodkaSauceParts, panIsHot)
{var vodkaSauceParts = sauceAddIns;
	var tomatoSauceParts = ingredientsPrimary.pop();
	console.log("Let's get started before this Vodka sauce ends up being just plain old tomato sauce. The ingredients required are " + ingredientsPrimary + " and also " + ingredientsSecondary + ".");
	ingredientsSecondary.push("salt and pepper to taste");
	while (panIsHot ===true && ingredientsSecondary.length < 4)
	{for (var i = 0; i < ingredientsPrimary.length; i++) 
	{console.log("Great! Now " +ingredientsPrimary[i] + " is cooking away.");}}
	console.log("Now that we are cooking we have to be careful. Most of these ingredients burn easily.");
	return vodkaSauceParts;}
	
	
	
// Boolean

var isItAnyGood = function (notBurned, sauceThickened)
	if (notBurned === true)
	{console.log("Congratulations you managed to not burn the sauce.");
	if (sauceThickened === true)
	{console.log("Wow the sauce actually thickened up!.... I didn't think that would work...")}
	else { console.log("So that didn't work...")}
	return true;};
	
	
// String

var actuallyCooking = function (cookingAddIns)
{var ingredientsToAdd  = cookingAddIns;
	console.log("Try not to mess this up.")
	console.log("First you need to slowly add " + ingredientsSecondary[0] + " and be very careful not to splash it vodka is flammable");
	console.log("Wait until that stops sizzling then add " + ingredientsSecondary[1] + " to the mix and stir well.");
	console.log("One those are well mixed together add in the " +ingredientsSecondary[2] + ". Make sure they are spread out.");
	return ingredientsToAdd;}
	
// Maths

var	overallCookTime = function (simmerTime) 
{var minutes = cookingWell;
	while (simmerTime >= 0)
	{console.log("That is simmering nicely. Should only be " + simmertime + " minutes remaining. DON'T LEAVE IT LONGER THAN THAT.");
	simmerTime -= 3;}
	
	console.log("I didn't expect you to get this far. Well so far it hasn't burned so lets move on.");
	return minutes;};
	
// 	More Maths!

var howLongToServe = function (coolTime, thickenTime, serveTime)
{var howLongToCool = serveTime / (coolTime, thickenTime);
	console.log("After you are done cooking your sauce you need to let it cool for " + howLongToCool + " or you will end up burning yourself.");
	return howLongToCool
	


// Code 

readyToCook(cookingMaterials)
var vodkaSauceParts = gettingStarted(ingredientsPrimary, panIsHot);
var ingredientsToAdd = actuallyCooking(ingredientsSecondary);
var minutes = overallCookTime(cookTime);
var howLongToCool = howLongToServe(thickeningTime, coolingTime, platingTime);

console.log("The best thing about Vodka Sauce is when you combine " + vodkaSauceParts + " and " + ingredientsToAdd + " is that you get something tastier and very different to it's component parts.");
console.log("Also since it only takes " + minutes + " to cook it really isn't too big of a job.");
console.log(" Just be sure to let it sit for " + howLongToCool + " before you eat it to prevent burning your mouth.");
console.log("Enjoy!")	
