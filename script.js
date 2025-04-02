function calculateDecimalPartsSum(playerScores) {
    return playerScores.reduce((sum, score) => {
        const decimalPart = score - Math.floor(score);
        return sum + decimalPart;
    }, 0);
}

function calculateWinner() {
    const player1Scores = [
        parseFloat(document.getElementById('player1-game5').value) || 0,
        parseFloat(document.getElementById('player1-game6').value) || 0,
        parseFloat(document.getElementById('player1-game7').value) || 0,
        parseFloat(document.getElementById('player1-game8').value) || 0,
        parseFloat(document.getElementById('player1-game9').value) || 0,
        parseFloat(document.getElementById('player1-game10').value) || 0,
    ];

    const player2Scores = [
        parseFloat(document.getElementById('player2-game5').value) || 0,
        parseFloat(document.getElementById('player2-game6').value) || 0,
        parseFloat(document.getElementById('player2-game7').value) || 0,
        parseFloat(document.getElementById('player2-game8').value) || 0,
        parseFloat(document.getElementById('player2-game9').value) || 0,
        parseFloat(document.getElementById('player2-game10').value) || 0,
    ];

    const player1DecimalSum = calculateDecimalPartsSum(player1Scores);
    const player2DecimalSum = calculateDecimalPartsSum(player2Scores);

    const resultElement = document.getElementById('result');
    if (player1DecimalSum < player2DecimalSum) {
        resultElement.textContent = 'Победитель: Игрок 1';
    } else if (player1DecimalSum > player2DecimalSum) {
        resultElement.textContent = 'Победитель: Игрок 2';
    } else {
        resultElement.textContent = 'Ничья';
    }
}
