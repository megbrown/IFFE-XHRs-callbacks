function showCarnivores (carnivoresArr) {
	let carnivoreArea = document.getElementById("carnivore-area");
	carnivoresArr.forEach ( function(carnivore) {
		carnivoreArea.innerHTML += `<h1>${carnivore}</h1>`;
	})
}

function showHerbivores (herbivoresArr) {
	let herbivoreArea = document.getElementById("herbivore-area");
	herbivoresArr.forEach ( function(herbivore) {
		herbivoreArea.innerHTML += `<h1>${herbivore}</h1>`;
	})
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);