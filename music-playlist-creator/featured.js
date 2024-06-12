console.log("in featured")
console.log(data);

// Get a random index for featured playlist
const featuredPlaylist = Math.floor(Math.random() * data.playlists.length); // Corrected the random function

// Modifying the image and playlist name
const playlistImage = document.getElementById('playlistImage');
const playlistName = document.getElementById('playlistName');

playlistImage.src = data.playlists[featuredPlaylist].playlist_art;
playlistName.innerText = data.playlists[featuredPlaylist].playlist_name;

const playlistSongs = document.querySelector('.featuredSongs');

// Clear previous songs
playlistSongs.innerHTML = '';

// Append songs to featuredSongs div
data.playlists[featuredPlaylist].songs.forEach(song => {
    const songElement = document.createElement('p');
    songElement.textContent = song.title;

    const hrElement = document.createElement('hr');

    songElement.className = 'song';

    playlistSongs.appendChild(hrElement);
    playlistSongs.appendChild(songElement);
    playlistSongs.appendChild(hrElement);
});