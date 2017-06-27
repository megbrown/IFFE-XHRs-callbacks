var Predator = (function(oldPredator){
	var carnivoresArr = [];
	var herbivoresArr = [];

  predator = Object.create(null);

  predator.loadCarnivores = function(callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivoresArr = JSON.parse(this.responseText).carnivores;
        callbackToInvoke(carnivoresArr)
      });
      loader.open("GET", "data/carnivores.json");
      loader.send();
    }

  predator.loadHerbivores = function (callbackToInvoke) {
    var loader = new XMLHttpRequest();
    loader.addEventListener("load", function () {
      herbivoresArr = JSON.parse(this.responseText).herbivores;
      callbackToInvoke(herbivoresArr)
    });
    loader.open("GET", "data/herbivores.json");
    loader.send();
  }

  return oldPredator;

})();