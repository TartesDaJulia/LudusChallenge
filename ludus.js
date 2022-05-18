//array global com 10 posições preenchidas com -1
var distribution = new Array(10).fill(-1)

function distributePayout() {
	//output vars
	let valorTotal = 0

	//Instanciate vars
	let payout = 0
	let upgradedPayout = 0
	let tries = 0

	//Get random numbers
	payout = Math.floor(Math.random() * (100 - 5) + 1) + 5
	tries = Math.floor(Math.random() * 3) + 1

	//Save payout value
	savedPayout = payout
	//level control var
	//decide if there is going to be another level
	var levelRand = Math.round(Math.random())
	var paid = false

	//Distribute numbers
	for (let i = 0; i < tries; i++) {
		//if there is another level and enough payout
		if (Boolean(levelRand) && savedPayout >= 21) {
			//if there is another level, do this

			if (i < tries - 1) {
				splitPayout = Math.floor(Math.random() * (20 - 5) + 1) + 5

				payout -= splitPayout
				//invert payouts if payyout is smaller than split
				if (splitPayout > payout) {
					let a = payout
					payout = splitPayout
					splitPayout = a
				}

				distribution[i] = splitPayout
			} else {
				//when on last try add 0 to go to next level
				distribution[i] = 0
			}
		} else {
			//if there isnt another level, split payout
			//if not last try split by tries
			if (i < tries - 1) {
				splitPayout = Math.floor(Math.random() * (payout - 5)) + 5

				distribution[i] = splitPayout

				payout -= splitPayout
			} else {
				//when on last try spend rest of pay
				distribution[i] = payout
			}
		}
	}

	if (distribution.includes(0)) {
		distribution[tries] = payout
	}
	console.log('Going to next level?' + Boolean(levelRand))
	console.log('{Valor total= ' + savedPayout + ' Tentativas= ' + tries + '}')

	console.log(distribution)
}
distributePayout()
