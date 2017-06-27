function showCarnivores (carnivoresArr) {
	console.log(carnivoresArr);
	let carnivoreArea = document.getElementById("carnivore-area");
	carnivoresArr.forEach ( function(carnivore) {
		carnivoreArea.innerHTML += `<h1>${carnivore}</h1>`;
	})
}

function showHerbivores (herbivoresArr) {
	console.log(herbivoresArr);
	let herbivoreArea = document.getElementById("herbivore-area");
	herbivoresArr.forEach ( function(herbivore) {
		herbivoreArea.innerHTML += `<h1>${herbivore}</h1>`;
	})
}

predator.loadCarnivores(showCarnivores);
predator.loadHerbivores(showHerbivores);