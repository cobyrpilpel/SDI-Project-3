//alert("JavaScript works!");

// Coby Pilpel
//Project 3




var cookingMaterials = confirm("Do you have everything you need to get started?");


var ingredientsPrimary = ["2 cans of diced tomatoes in sauce",
    "2 cloves diced garlic",
    "1/2 cup diced onion",
    "1 cup minced basil"];
var ingredientsSecondary = ["Vodka 1 1/2 cups",  , "chicken cubes" , 
	" 1 pint heavy cream"];

var cookTime = 20;
var servings = 10;
var //need a number variable
var //need a number variable
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
	
	
	
//

