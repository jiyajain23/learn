let currSong = new Audio();
let Currfolder;
let songs;
crossOrigin = "anonymous"

function SecsToMins(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    Currfolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/SPOTIFY%20CL/${folder}/`)
    let response = await a.text()
    songs = []
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName('a')
    array = Array.from(anchors)
    let songUL;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.href.includes(".mp3")) {
                 songs.push(element.href.split(`/${folder}/`)[1])
    
            }
         
            songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
            songUL.innerHTML=""
            for (const song of songs) {
                songUL.innerHTML = songUL.innerHTML + `<li><img class="inv"  src="imgs/music.svg" alt="">
                                        <div class="info">
                                             ${song.replaceAll("%20"," ")}
                                        </div>
                                            <img class="inv" src="imgs/play.svg" alt="">
                                         </li>`;
            }
    

    }
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playmusic(e.querySelector(".info").innerHTML.trim())

        })
    })
    

}

function playmusic (track, pause = false) {
    currSong.src = `/SPOTIFY%20CL/${Currfolder}/` + track
    if (!pause) {
        currSong.play()
        let pause = document.querySelector(".pause")
        pause.src = "imgs/pause.svg"
    }
    currSong.addEventListener("ended",()=>
    {
        next()
    })
       
    
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songdur").innerHTML = "00:00 / 00:00"



}
var paused = document.querySelector(".pause")
paused.addEventListener("click", () => {

    if (currSong.paused) {
        currSong.play()
        paused.src = "imgs/pause.svg"

    }
    else {
        currSong.pause()
        paused.src = "imgs/play.svg"
    }

})

async function GetArts() {
    console.log("Displaying albums")

    let a = await fetch("http://127.0.0.1:3000/SPOTIFY%20CL/songs");
    response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let CC = document.querySelector(".cardContainer")
    let arr = Array.from(anchors)
    for (let index = 0; index < arr.length; index++) {
        const e = arr[index];
        if (e.href.includes("/songs")) {
            folder = e.href.split("/").splice(-2)[0]

            let a = await fetch(`/SPOTIFY%20CL/songs/${folder}/info.json`)
            let response = await a.json();

            let CC = document.querySelector(".cardContainer")
            CC.innerHTML = CC.innerHTML + ` <div class="pri" data-folder="${folder}" >
                                        <img src='/SPOTIFY%20CL/songs/${folder}/cover.jpeg' width="160vw" height="160vh" alt="pritam">
                                        <h4>${response.title}</h4>
                        <h5>${response.desc}</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512" width="38" height="38">
                            <circle fill="#01A437" cx="256" cy="256" r="256"/>
                            <path fill="#42C76E" d="M256 9.28c136.12 0 246.46 110.35 246.46 246.46 0 3.22-.08 6.42-.21 9.62C497.2 133.7 388.89 28.51 256 28.51S14.8 133.7 9.75 265.36c-.13-3.2-.21-6.4-.21-9.62C9.54 119.63 119.88 9.28 256 9.28z"/>
                            <path fill="#000" d="M351.74 275.46c17.09-11.03 17.04-23.32 0-33.09l-133.52-97.7c-13.92-8.73-28.44-3.6-28.05 14.57l.54 191.94c1.2 19.71 12.44 25.12 29.04 16l131.99-91.72z"/>
                          </svg>                             
                    </div>
                `}
    }
    Array.from(document.getElementsByClassName("pri")).forEach(e => {
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)


        })
    })

}
GetArts()


    // Display all the albums on the page


    //timeupdate 
    currSong.addEventListener("timeupdate", () => {
        document.querySelector(".songdur").innerHTML = `${SecsToMins(currSong.currentTime)}/${SecsToMins(currSong.duration)}`
        document.querySelector(".circ").style.left = (currSong.currentTime / currSong.duration) * 100 + "%"

    })
    //seekbar 
    document.querySelector(".seekbar").addEventListener("click", e => {
        percent = (e.offsetX / e.target.getBoundingClientRect().width)
        document.querySelector(".circ").style.left = percent * 100 + "%"
        currSong.currentTime = currSong.duration * percent
    })


    //event listener to left
    document.querySelector(".ham").addEventListener("click", () => {
        document.querySelector(".left").style.left = 0 + "%"

    })
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = -130 + "%"

    })
    let l;
    async function prev(){
        await getSongs(Currfolder)
        l=songs.length
        let index = songs.indexOf(currSong.src.split("/").splice(-1)[0])
        currSong.pause()
        if (index-1>=0){
        playmusic(songs[index-1])
        }
        else{

            playmusic(songs[l-1])
    
        }
   
    }
    document.querySelector(".prev").addEventListener("click", async () => {
       prev()
    })
 

    async function next() {
        await getSongs(Currfolder)
        l=songs.length
        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0])
        currSong.pause()
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1])
        }
        else{
            playmusic(songs[0])
        }
        
    }
    document.querySelector(".next").addEventListener("click", async () => {
        next()
    })

    document.querySelector(".vol").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
        currSong.volume=e.target.value/100
    })
    document.querySelector(".vol").getElementsByTagName("img")[0].addEventListener("click",(e)=>{
        if  (e.target.src.includes("imgs/volume.svg")){
            e.target.src= e.target.src.replace("imgs/volume.svg", "imgs/mute.svg")
            currSong.volume=0
            document.querySelector(".vol").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src= e.target.src.replace("imgs/mute.svg","imgs/volume.svg")
            currSong.volume=0.10
            document.querySelector(".vol").getElementsByTagName("input")[0].value = 10;
        }
    })
document.querySelector(".playbar").addEventListener("click",()=>{
    document.querySelector(".playbar").style.zIndex=10;

})