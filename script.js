// Given array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Anthrax'];

// Function to sort and display band names
function sortAndDisplayBandNames(names) {
    // Function to remove articles from band names
    function removeArticles(name) {
        return name.replace(/^(a|an|the)\s+/i, '');
    }

    // Sort the band names in lexicographic order
    names.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

    // Get the <ul> element
    const bandList = document.getElementById('band');

    // Clear any existing content
    bandList.innerHTML = '';

    // Create and append <li> elements for each band name
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        bandList.appendChild(li);
    });
}

// Call the function with the array of band names
sortAndDisplayBandNames(bandNames);
