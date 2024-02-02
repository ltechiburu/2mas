// main.js

document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code for setting up event listeners
  
});
function includeHTML() {
    var elements, i, file, xhttp;
    // Loop through all elements with include-html attribute
    elements = document.querySelectorAll('[include-html]');
    for (i = 0; i < elements.length; i++) {
        // Get the file path from the attribute
        file = elements[i].getAttribute('include-html');
        if (file) {
            // Create a new XMLHttpRequest object
            xhttp = new XMLHttpRequest();
            // Configure it to fetch the HTML file
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Replace the content of the element with the loaded HTML
                    elements[i].innerHTML = this.responseText;
                }
            }
            // Open the file for reading
            xhttp.open('GET', file, true);
            // Send the request
            xhttp.send();
        }
    }
}

function selectArtist(artistNumber) {
    const container = document.getElementById('selectionContainer');
    const selectedArtist = document.getElementById('artist' + artistNumber);
    const artistInfoContainer = document.getElementById('artistInfoContainer');

    // Remove 'selected' class from all artists
    const artists = container.getElementsByClassName('artist');
    for (const artist of artists) {
        artist.classList.remove('selected');
    }
    
    // Add 'selected' class to the clicked artist
    selectedArtist.classList.add('selected');
    
    // Center the selected artist in the view
    const containerRect = container.getBoundingClientRect();
    const selectedRect = selectedArtist.getBoundingClientRect();
    const offset = (selectedRect.left + selectedRect.width / 2) - (containerRect.left + containerRect.width / 2);
    container.style.transform = 'translateX(' + -offset + 'px)';
    
    // Hide all artist info
    const artistInfos = document.getElementsByClassName('artist-info');
    for (const info of artistInfos) {
        info.style.display = 'none';
    }

    // Show the selected artist info
    const selectedArtistInfo = document.getElementById('info' + artistNumber);
    selectedArtistInfo.style.display = 'block';
}

function showAbout() {
    // JavaScript code for displaying the ABOUT section
    alert('ABOUT section will be displayed here.');
}
