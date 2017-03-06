"use strict";   
 
app.factory('mushFactory',function(FBCreds, $q, $http) {

  let getJSON = () => {
    //console.log("am i alive??");
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
        //console.log("newMush", newMush);
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
        