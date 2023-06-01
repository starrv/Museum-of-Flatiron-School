fetch("http://localhost:3000/current-exhibits")
.then(response=>response.json())
.then(currentExhibits=>{
    const exhibitTitle=document.querySelector("#exhibit-title")
    exhibitTitle.textContent=currentExhibits[0].title
    const exhibitsImage=document.querySelector("#exhibit-image")
    exhibitsImage.src=currentExhibits[0].image
    const commentsSection=document.querySelector("#comments-section")
    const newComments=document.createElement("p")
    newComments.textContent=currentExhibits[0].comments
    commentsSection.append(newComments)
})