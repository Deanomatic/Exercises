"use strict"; 
 
var sandwichMaker = (function(){
  var totalPrice = 0; 
   return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("Your price: " + totalPrice);
    },
    subtractTopping: function(toppingPrice) {
      totalPrice -= toppingPrice;
      console.log("Your price: " + totalPrice);
    },
    finalPrice: function() {
      var end = totalPrice;
      return end;
    }
};

})(sandwichMaker || {});
