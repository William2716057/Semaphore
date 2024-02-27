document.addEventListener('keydown', function (event) {
    // Check if the pressed key is the 'w' key
    if (event.key === 'w') {
        // Add the class to start the waving animation for both arms
        document.querySelector('.leftarm').classList.add('waving');
        document.querySelector('.rightarm').classList.add('waving');
    }
});

document.addEventListener('keyup', function (event) {
    // Check if the released key is the 'w' key
    if (event.key === 'w') {
        // Remove the class to stop the waving animation for both arms
        document.querySelector('.leftarm').classList.remove('waving');
        document.querySelector('.rightarm').classList.remove('waving');
    }
});