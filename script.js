function moveCursor(currentInput, nextInputId) {
    const value = currentInput.value;
    if (value.length === 1 && !value.includes('.')) {
        currentInput.value += '.';
    }
    if (value.length === 3) {
        document.getElementById(nextInputId).focus();
    }
}

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
    const trophyElement = document.getElementById('trophy');
    const confettiElement = document.getElementById('confetti');

    if (player1DecimalSum < player2DecimalSum) {
        resultElement.textContent = 'Победитель: Игрок 1';
        trophyElement.style.display = 'block';
        confettiElement.style.display = 'block';
    } else if (player1DecimalSum > player2DecimalSum) {
        resultElement.textContent = 'Победитель: Игрок 2';
        trophyElement.style.display = 'block';
        confettiElement.style.display = 'block';
    } else {
        resultElement.textContent = 'Ничья';
        trophyElement.style.display = 'none';
        confettiElement.style.display = 'none';
    }
}

function clearData() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => input.value = '');
    document.getElementById('result').textContent = '';
    document.getElementById('trophy').style.display = 'none';
    document.getElementById('confetti').style.display = 'none';
}
