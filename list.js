document.addEventListener('DOMContentLoaded', function () {
  const addSongForm = document.getElementById('add-song-form'); // Form for adding songs
  const songNameInput = document.getElementById('song-name'); // Input for song name
  const songArtistInput = document.getElementById('song-artist'); // Input for artist name
  const songList = document.getElementById('song-items'); // List to display songs
  const searchInput = document.getElementById('search-input'); // Input for searching songs

  // Add song event
  addSongForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting normally

      const songName = songNameInput.value.trim(); // Get the trimmed song name
      const songArtist = songArtistInput.value.trim(); // Get the trimmed artist name
      
      if (songName && songArtist) {
          const newSongItem = document.createElement('li'); // Create a new list item
          newSongItem.innerHTML = `<span class="song">${songName}</span><span class="artist">${songArtist}</span>
                                   <button class="delete">Delete</button>`;
          songList.appendChild(newSongItem); // Append the new song item to the list

          // Clear the input fields
          songNameInput.value = '';
          songArtistInput.value = '';
      }
  });

  // Event delegation for delete buttons
  songList.addEventListener('click', function (event) {
      if (event.target.classList.contains('delete')) { // Check if the clicked element is a delete button
          const songItem = event.target.parentElement; // Get the parent list item
          songList.removeChild(songItem); // Remove the song item from the list
      }
  });

  // Search functionality
  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase(); // Get the search term in lower case
      const songItems = Array.from(songList.children); // Convert the list of song items to an array

      songItems.forEach(item => {
          const songName = item.querySelector('.song').textContent.toLowerCase(); // Get the song name in lower case
          const songArtist = item.querySelector('.artist').textContent.toLowerCase(); // Get the artist name in lower case
          const matches = songName.includes(searchTerm) || songArtist.includes(searchTerm); // Check for matches
          item.style.display = matches ? '' : 'none'; // Show or hide the item based on the match
      });
  });
});
