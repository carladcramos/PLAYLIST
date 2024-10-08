const songName = document.getElementById('songName');
const songArtist = document.getElementById('songArtist');
const addSong = document.getElementById('addSong');
const ul = document.getElementById(songList)

    // Prevent form submission
    addSong.addEventListener('click', (event) => {

    // Get value from input form
    const newTitle = songName.value; 
    const newArtist = songArtist.value;

    // Create elements
    const h5 = document.createElement('h5');
    const small = document.createElement('small');

    // Set value to the elements
    h5.innerHTML = newTitle;
    small.innerHTML = newArtist;

    // Add classes to the elements
    h5.classList.add('mb-1');
    small.classList.add('text-muted');

    // Create container
    const div = document.createElement('div');
    div.append(h5);
    div.appends(small);

    // Append to list
    ul.append(div);

    console.log(div);
});
