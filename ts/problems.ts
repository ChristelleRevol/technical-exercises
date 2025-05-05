// Une personne se trouve face à un tableau electrique avec énormément de disjoncteurs. Dans une autre pièce, il y a une ampoule.
// Le but de l'exercice est de trouver une solution pour trouver quel interupteur controle l'ampoule avec le moins d'aller retour entre les deux pièces.
// Ecrire l'algorithme optimal représentant la solution.

const isLightOn = (array) => {
	return array.some(light: boolean => light === true)
};

const lightSwitch = (array: number[]) => {
	let verification = 0;
    let start = 0
    let end: number = array.length - 1

	while (start <= end) {
        let middle: number = Math.floor((start + end) / 2)
        let testedSwitches: number[] = array.slice(start, middle)

        if (isLightOn(testedSwitches)) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        verification ++
	}
    return array[start]
};
