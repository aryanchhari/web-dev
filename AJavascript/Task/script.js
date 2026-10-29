 let count = 0;
        const countElement = document.getElementById('count');
        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');

        incrementButton.addEventListener('click', () => {
            count++;
            countElement.textContent = count;
        });

        decrementButton.addEventListener('click', () => {
            count--;
            countElement.textContent = count;
        });