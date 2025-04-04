function moveCursor(currentInput, nextInputId) {
    let value = currentInput.value;

    // Разрешаем только цифры и одну точку
    value = value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('');
    }

    currentInput.value = value;

    // Если длина введенного значения равна 2 и это не точка
    if (value.length === 1 && !value.includes('.')) {
        currentInput.value += '.';
    }

    // Перемещаем курсор после ввода 4 символов
    if (value.length === 4) {
        setTimeout(() => {
            document.getElementById(nextInputId).focus();
        }, 100); // Добавляем небольшую задержку
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
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => input.value = '');
    document.getElementById('result').textContent = '';
    document.getElementById('trophy').style.display = 'none';
    document.getElementById('confetti').style.display = 'none';
}
