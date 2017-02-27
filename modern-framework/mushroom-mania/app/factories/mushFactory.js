"use strict";   
 
app.factory('mushFactory',function(FBCreds, $q, $http) {

  let getJSON = () => {
    console.log("am i alive??");
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
      .then((mushroomObject) => {
        var mushroomCollection = mushroomObject.data;
        var mushroomArray = [];
      for (var i = 0; i < mushroomCollection.length; i++) {
        console.log("yo am i in the loop??");
        var newMush = {};
        var fungi = String(Object.keys(mushroomCollection[i]));
        newMush.name = fungi;
        newMush.edible = mushroomCollection[i][fungi].edible;
        newMush.description = mushroomCollection[i][fungi].description;
        console.log("newMush", newMush);
        mushroomArray.push(newMush);

      }
        resolve(mushroomArray);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getJSON};
});
        // Object.keys(mushroomCollection).forEach((key) => {
        //   mushroomArray.push(mushroomCollection[key]);
        // });


          //  for (var i = 0; i < shrooms.length; i++) {
          //   var newObj = {};
          //   var fluffy = String(Object.keys(shrooms[i]));
          //   newObj.name = fluffy;
          //   newObj.edible = shrooms[i][fluffy].edible;
          //   newObj.description = shrooms[i][fluffy].description;
          //   arrayOf.push(newObj);
          // }