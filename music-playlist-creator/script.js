/* 
    DYNAMICALLY SHOWING EACH PLAYLIST ITEM
*/
let newCardContainer = document.createElement('div');
newCardContainer.className = 'cardContainer';

data.playlists.forEach(playlist => {
    let card = document.createElement('div');
    card.className = 'card';
    document.querySelector('main').appendChild(card);

    // Creating Elements
    const albumArt = document.createElement('img');
    const albumTitle = document.createElement('h3');
    const creatorName = document.createElement('p');

    // Displaying Likes
    let likes = document.createElement('div');
    likes.className = "likes";
    const heart = document.createElement('img');
    heart.className = "heartIcon";
    const albumLikes = document.createElement('p');
    albumLikes.className = "likeCount";

    albumTitle.innerText = playlist.playlist_name;
    creatorName.innerText = playlist.playlist_creator;
    heart.src = "assets/img/heart-regular.svg";
    albumLikes.innerHTML = playlist.likeCount;
    albumArt.src = playlist.playlist_art;


    // Append Elements
    card.appendChild(albumArt);
    card.appendChild(albumTitle);
    card.appendChild(creatorName);

    likes.appendChild(heart);
    likes.appendChild(albumLikes);
    card.appendChild(likes);

    newCardContainer.appendChild(card);

});
document.querySelector('main').appendChild(newCardContainer);

/* 
MODAL HANDLING
*/
const cards = document.querySelectorAll('.card');
const hearts = document.querySelectorAll("heartIcon");
let modalOpened = false;

// Event listener to trigger modal popup for each card
cards.forEach((card, index) => {

    modalOpened = false;
    card.addEventListener('click', (event) => {
         // Check if the clicked element is not the likeCount
        if (!event.target.classList.contains('heartIcon')) {
            test(index);
            modalOpened = true;
        }
    });

    // Milestone 5: Liking Playlists

    // Adding event listener to heart icons
    const heartIcons = document.querySelectorAll('.heartIcon');
    heartIcons.forEach(heartIcon => {
        heartIcon.addEventListener('click', () => {
            toggleHeartIcon(heartIcon);
        });
    });


    card.addEventListener('click', (event) => {
        const a = event.target.parentElement.querySelector('.likeCount');
        const testing = document.querySelector('heartIcon');
        switch (modalOpened) {
            case false:
                if (a.innerText === "0") {
                    a.innerText = 1;
                } else if (a.innerText === "1") {
                    a.innerText = 0;
                }
                break;

            case true:
                modalOpened = false;
                break;
            
                default:
                modalOpened = false;
                break;

        }
    });

});



// JavaScript for Opening and Closing the Modal
let modal = document.getElementById("musicModal");
let span = document.getElementsByClassName("close")[0];
let songList = document.getElementById('songList');

// Function to toggle heart icon
function toggleHeartIcon(heartIcon) {
    if (heartIcon.src.includes('heart-regular.svg')) {
        heartIcon.src = 'assets/img/heart-filled.svg';
    } else {
        heartIcon.src = 'assets/img/heart-regular.svg';
    }
}

function test(index) {
    // Accessing All Relevant Index Items
    let playlistName = data.playlists[index].playlist_name;
    let creatorName = data.playlists[index].playlist_creator;
    let songs = data.playlists[index].songs;

    // Set the playlist name in the modal
    document.getElementById('playlistImage').src = data.playlists[index].playlist_art;
    document.getElementById('playlistName').innerText = playlistName;
    document.getElementById('creatorName').innerText = creatorName;

    // Clear previous song list
    songList.innerHTML = '';

    // Accessing each song element
    for (let i = 0; i < songs.length ; i++) {
        let song = document.createElement('div');
        song.className = 'box';

        let songInfo = document.createElement('div');
        songInfo.className = 'songInfo';

        // Grabbing Relevant Data

        const coverArt = document.createElement('img');
        coverArt.src = `${songs[i].cover_art}`;
        coverArt.className = 'songArt';

        const songTitle = document.createElement('p');
        songTitle.innerHTML = songs[i].title;

        const creatorName = document.createElement('p');
        creatorName.innerText = songs[i].artist;

        const albumName = document.createElement('p');
        albumName.innerText = songs[i].album;

        // Append elements to songInfo div
        songInfo.appendChild(songTitle);
        songInfo.appendChild(creatorName);
        songInfo.appendChild(albumName);

        // Append coverArt to song div
        song.appendChild(coverArt);

        // Append songInfo div to song div
        song.appendChild(songInfo);


        const time = document.createElement('p');
        time.className = 'duration';

        time.innerText = songs[i].duration;

        song.appendChild(time);

        // Append song div to songList div
        songList.appendChild(song);

    }

    // Testing Shuffle
    shuffle(data.playlists[index].songs);

    // Display the modal
    modal.style.display = "block";
}

// Rest of your code...



span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Milestone 6: Shuffling songs/song array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


// Event listener for the shuffle icon
document.getElementById('shuffle').addEventListener('click', () => {
    // Get the list of song items
    const songItems = document.querySelectorAll('#songList .box');
    
    // Convert the NodeList to an array
    const songArray = Array.from(songItems);

    // Shuffle the array of song items
    shuffle(songArray);

    // Remove existing song items from the song list
    songList.innerHTML = '';

    // Append shuffled song items back to the song list
    songArray.forEach(song => {
        songList.appendChild(song);
    });
});

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

