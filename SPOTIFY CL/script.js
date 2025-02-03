//event listener to left
document.querySelector(".ham").addEventListener("click", ()=>{
document.querySelector(".left").style.left=0+"%"

})
document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".left").style.left= -130 +"%"
    
    })

// songs
let Currsong = new Audio();
let CurrFolder;
let songs;


async function GetSongs(folder){
    CurrFolder=folder;
    let a = await fetch(`file:///C:/Users/jiya%20jain/OneDrive/Documents/GitHub/learn/SPOTIFY%20CL/index.html/${folder}/`)

}
// displaying artists
async function GetArts() {
    console.log("Displaying albums")
    let a=await fetch("file:///C:/Users/jiya%20jain/OneDrive/Documents/GitHub/learn/SPOTIFY%20CL/index.html/songs");
    response = await a.text();
    let div=document.createElement("div")
    div.innerHTML=response;
    let anchors=div.getElementsByTagName("a")
    console.log(anchors)
}

GetArts()