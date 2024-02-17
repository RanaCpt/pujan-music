const songs = [
    {name: "kati basxau", singer: "pujan", image: "pujan1.jpg", url:"Kati.mp3"},
    {name: "kunai", singer: "pujan", image: "pujan2.jpg", url: "kunai.mp3"},
    {name: "laijaw", singer: "pujan", image: "pujan3.jpg", url: "laijaw.mp3"},
    {name: "sanjha", singer: "pujan", image: "pujan4.jpg", url: "sanjha.mp3"}
];
const allSongs = document.querySelector("#all-songs");
const poster = document.querySelector("#left");

const play = document.getElementById("play");
const back = document.getElementById("back");
const forward = document.getElementById("forward");


const audio = new Audio();
var selectedSongs = 0;

function showSong(){
    var show = "";
    songs.forEach(function(songs, index) {
        show += ` <div class="song-card" id=${index}>
        <div class="title">
            <img src="${songs.image}" id=${index}>
        </div>
        <div class="details">
            <h3 id=${index}>${songs.name}</h3>
            <h4>cover by: ${songs.singer}</h4>
            <p>Enjoy his singing</p>
        </div>
    </div>`;
    })
    allSongs.innerHTML = show;

    audio.src = songs[selectedSongs].url
    poster.style.backgroundImage = `url(${songs[selectedSongs].image})`
};
function songClick(){
    allSongs.addEventListener("click", (details) =>{
        selectedSongs = details.target.id
        console.log(details.target)
        showSong()
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1
        audio.play()
    })
};

var flag = 0;

play.addEventListener("click", () => {
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flag = 1;
        showSong();
        audio.play();
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        flag = 0;
        showSong();
        audio.pause();
    }
})

forward.addEventListener("click", () => {
    if(selectedSongs < songs.length - 1) {
        selectedSongs++
        showSong()
        audio.play()
    }else{
        back.style.opacity = 0.4
    }
})

back.addEventListener("click", () => {
    if(selectedSongs > 0){
        selectedSongs--
        showSong()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})



songClick();
showSong();