//event listener to left
document.querySelector(".ham").addEventListener("click", ()=>{
document.querySelector(".left").style.left=0+"%"

})
document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".left").style.left= -130 +"%"
    
    })

// songs
let Currsong = new Audio();
let Currfolder;
let songs;
async function getSongs(folder) {
    let Currfolder=folder;
    let a= await fetch(`http://127.0.0.1:3000/SPOTIFY%20CL/${folder}/`)
    let response=await a.text()
    
    let div=document.createElement("div")
    div.innerHTML=response;
    songs=[]
    let anchors=div.getElementsByTagName('a')
    array=Array.from(anchors)
   
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.href.includes(".mp3")){
            songs.push(element.href.split(`/${folder}/`)[1])
            

        }
        let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
        console.log(songUL)
        songUL.innerHTML = ""
        for (const song of songs) {
            songUL.innerHTML = songUL.innerHTML + `<li><img class="inv"  src="imgs/music.svg" alt="">
                                <div class="info">
                                    <div> ${song.replaceAll("%20", " ")}</div>
                                </div>
                                <div class="playnow">
                                    
                                    <img class="inv" src="imgs/play.svg" alt="">
                                </div> </li>`;
        }
        
    }
   


}


async function GetArts() {
    console.log("Displaying albums")
  
    let a=await fetch("http://127.0.0.1:3000/SPOTIFY%20CL/songs");
    response = await a.text();
    let div=document.createElement("div")
    div.innerHTML=response;
    let anchors=div.getElementsByTagName("a")
    let CC= document.querySelector(".cardContainer")
    let arr= Array.from(anchors)
    for (let index = 0; index < arr.length; index++) {
        const e = arr[index]; 
        if (e.href.includes("/songs")){
            folder=e.href.split("/").splice(-2)[0]
                 
            let a= await fetch(`/SPOTIFY%20CL/songs/${folder}/info.json`)
            let response=await a.json();
      
        let CC=document.querySelector(".cardContainer")
    CC.innerHTML=CC.innerHTML+` <div class="pri" data-folder="${folder}" >
                        <img src='/SPOTIFY%20CL/songs/${folder}/cover.jpeg' width="150vw" height="150vh" alt="pritam">
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