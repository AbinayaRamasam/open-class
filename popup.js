function afficherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
    // console.log(popupBackground);
    // popupBackground.style.display = "flex";
    // console.log(popupBackground);

}

function cacherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")

}

function initAddEventListenerPopup() {
    
    let btnPartage = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
       
        afficherPopup()
    })

 
    popupBackground.addEventListener("click", (event) => {
        
        if (event.target === popupBackground) {
            // Alors on cache la popup
            cacherPopup()
        }
    })
}