 let randomNumber;
      const guessButton = document.getElementById('guessButton');
      const guessInput = document.getElementById('guessInput');
      const message = document.getElementById('message');
      const modal = document.getElementById('modal');
      const modalOverlay = document.getElementById('modalOverlay');
      const startGameButton = document.getElementById('startGameButton');
      const minRangeInput = document.getElementById('minRange');
      const maxRangeInput = document.getElementById('maxRange');

     
      modal.style.display = 'block';
      modalOverlay.style.display = 'block';

      startGameButton.addEventListener('click', () => {
          const minRange = Number(minRangeInput.value);
          const maxRange = Number(maxRangeInput.value);

          if (minRange >= maxRange) {
              message.textContent = "Максимальне число має бути більшим за мінімальне.";
              return;
          }

          randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
          modal.style.display = 'none';
          modalOverlay.style.display = 'none';
          message.textContent = ""; 
      });

      guessButton.addEventListener('click', () => {
          const userGuess = Number(guessInput.value);
          if (userGuess < minRange || userGuess > maxRange) {
              message.textContent = `Будь ласка, введіть число від ${minRange} до ${maxRange}.`;
          } else if (userGuess === randomNumber) {
              message.textContent = "Вітаємо! Ви вгадали число!";
          } else if (userGuess < randomNumber) {
              message.textContent = "Занадто низьке число. Спробуйте ще раз!";
          } else {
              message.textContent = "Занадто високе число. Спробуйте ще раз!";
          }
      });