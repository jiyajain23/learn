function CreateCard(title, cName, views, mAgo, thumbnail) {
    if (views >= 1000 && views < 1000000) {
        finalviews = views / 1000 + "k"
    }
    else if (views >= 1000000 && views < 100000000) {
        finalviews = views / 1000000 + "M"
    }
    const cont=document.createElement("div")
    document.body.insertAdjacentElement("afterbegin",cont)
    let el = document.body.firstElementChild
    const imgdiv = document.createElement("div")
    imgdiv.className = "image"
    el.insertAdjacentElement("afterbegin", imgdiv)
    const txt = document.createElement("div")
    txt.className = "text"
    el.append(txt)
    let el1 = document.body.firstElementChild.children[0]
    let img = document.createElement("img")
    img.src = thumbnail
    el1.insertAdjacentElement("afterbegin", img)
    let el2 = document.body.firstElementChild.children[1]

    el2.insertAdjacentHTML("afterbegin", `<div class="title">${title}</div>`)
    el2.insertAdjacentHTML("beforeend", `<div class="subtitle"> ${cName} \xa0 \xa0 ${finalviews} views \xa0 \xa0 ${mAgo} </div>`)
    document.body.style.backgroundColor = "black"
    el.style.display = "flex"
    el.style.backgroundColor = "black"
    el.style.border="1px solid rgb(237 242 245 / 78%)"
    el.style.color = "white"
    el.style.padding="3px"
    el1.firstElementChild.style.width="10vw"
    let styel2=el2.children[0].style
    let styel21=el2.children[1].style
    styel2.fontSize = "23px"
    styel2.fontWeight="500"
    styel2.color = "white"
    styel2.padding = "0px 18px"
    styel21.color = "rgb(237 242 245 / 78%)"
    styel21.padding = "7px 18px"




}





CreateCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 3500000, "1 year ago", "imgs/hqdefault.avif")
CreateCard("Your First HTML website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 1300000, "1 year ago", "imgs/hqdefault (1).avif")
CreateCard("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 839000, "11 months ago", "imgs/hqdefault (2).avif")
CreateCard("Heading, Paragraphs, And Links | Sigma Web Development Course - Tutorial #4", "CodeWithHarry", 756000, "10 months ago", "imgs/hqdefault (3).avif")