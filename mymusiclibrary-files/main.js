// main.js

document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code for setting up event listeners
    // ...
});

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
