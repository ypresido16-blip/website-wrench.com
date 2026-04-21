document.querySelector('.next-btn').addEventListener('click', () => {
    const zip = document.querySelector('.zip-input').value
    if (zip.length < 5 || isNaN(zip)) {
        alert('Please enter a valid zip code!')
    } else {
        alert('Looking for mechanics near ' + zip + '...')
    }
})
