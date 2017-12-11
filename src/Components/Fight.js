
const fight = (player2,player1, weapon1, weapon2) => {
    if (weapon1.attack !== undefined) {
    var player1Total = player1.population * ((weapon1.attack/ 100) + 1);
    } else (player1Total = player1.population);
    if (weapon2.attack !== undefined) {
    var player2Total = player2.population * ((weapon2.attack/ 100) + 1);
    } else (player2Total = player2.population)

    if (player2Total > player1Total) {
        const winner = player2.name + ', ' + player2.countryName;
        return winner;
    } else if (player2Total < player1Total) {
        const winner = player1.name + ', ' + player1.countryName;
        return winner;
    } else {
        const winner = "It's a tie :("
        return winner
    }

}

export default fight;