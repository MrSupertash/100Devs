//Create a constructor with 4 properties and 3 methods

function MakePizza(sauce, toppings, crust, cheese) {
    this.sauce = sauce;
    this.toppings = toppings;
    this.crust = crust;
    this.cheese = cheese;

    this.burnMouth = function() {
        console.log("FTFTSTFASTSTAAAAAAAHH!");
    };
    this.frisbee = function() {
        console.log('Wheeeeeeeeeee!');
    };
    this.prepTime = function() {
        console.log('Super fast!');
    };
}