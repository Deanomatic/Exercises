For this exercises, you're going to create a basic application, with a single view. Your job is to load the JSON data below and display it in a list. Above the list, provide one text box, and two radio buttons.

The radio buttons should be labeled Poisonous and Non-poisonous.

When the user types any text into the text box, the list of mushrooms should be filtered down to any mushrooms whose description contains that text.

When the user clicks either of the radio buttons, only the appropriate mushrooms should be displayed.

You will need: 

1 An Angular application module. 

2 One controller defined in your application. The controller will load the 
3 JSON with an XHR call using the $http function that Angular provides.
4 One partial bound to the controller.
Several directives will be helpful. ng-repeat, ng-click, and the filter property on the ng-repeat.
Load the JSON below into a new Firebase application rather than reading it from a local file.
Put the JSON object into $scope.mushrooms and bind that variable in your partial.

//////////////////////////////////////////////////////////////////////////////
You are going to modify your Mushroom Mania application to use a factory to retrieve the mushroom data instead of retrieving it directly in your controller.

Create a new factory for your Angular application. Make sure your factory returns something.
Inject the factory dependency into your controller.
Invoke the appropriate function that your factory exposes to get the mushroom data.
When the method is successful, take the results and put them into $scope.mushrooms variable in your controller that is bound to the partial.
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security S