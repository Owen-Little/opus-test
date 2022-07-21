const image1 = document.querySelector("#image1")
const image2 = document.querySelector("#image2")
const image3 = document.querySelector("#image3")

function enlarge1() {
  const overlay = document.createElement("div")
  const imageBig = document.createElement("img")
  imageBig.src = "Images/city-photo.png"
  imageBig.id = "image-big"
  overlay.id = "overlay"
  document.body.appendChild(overlay)
  document.body.appendChild(imageBig)
  overlay.addEventListener("click", function(){
    document.body.removeChild(imageBig)
    document.body.removeChild(overlay)
  })
}

function enlarge2() {
  const overlay = document.createElement("div")
  const imageBig = document.createElement("img")
  imageBig.src = "Images/city-photo-7.png"
  imageBig.id = "image-big"
  overlay.id = "overlay"
  document.body.appendChild(overlay)
  document.body.appendChild(imageBig)
  overlay.addEventListener("click", function(){
    document.body.removeChild(imageBig)
    document.body.removeChild(overlay)
  })
}

function enlarge3() {
  const overlay = document.createElement("div")
  const imageBig = document.createElement("img")
  imageBig.src = "Images/city-photo-2.png"
  imageBig.id = "image-big"
  overlay.id = "overlay"
  document.body.appendChild(overlay)
  document.body.appendChild(imageBig)
  overlay.addEventListener("click", function(){
    document.body.removeChild(imageBig)
    document.body.removeChild(overlay)
  })
}





image1.addEventListener("click", enlarge1)
image2.addEventListener("click", enlarge2)
image3.addEventListener("click", enlarge3)