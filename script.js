function afficherResultat(score, nbMotsProposes){

    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} /${nbMotsProposes}`
    spanScore.textContent = affichageScore
    console.log("votre score est de " + score + "sur" + nbMotsProposes)
}

function afficherProposition(proposition){
    divZoneProposition = document.querySelector(".zoneProposition")
    divZoneProposition.textContent = proposition
}

function afficherEmail(nom,email,score){
    let mailto = `mailto:${email} + ?subject = partage du score Azertype&body = salut je suis abi et je viens de realiser le ${score} sur le site Azertype!`
    location.href = mailto
}

function lancerJeu(){

     initAddEventListenerPopup()

    let score = 0
    let i = 0
    let listePropositions = listesDeMots

    btnValider = document.getElementById("btnValider")
    inputEcriture = document.getElementById("inputEcriture")
    afficherProposition(listePropositions[i])

    btnValider.addEventListener("click", () => {
        console.log(inputEcriture.value)
        if(inputEcriture.value=== listePropositions[[i]]){
            score++
        }
        i++
        afficherResultat(score,i)
        inputEcriture.value = ""
        if(listePropositions[i]=== undefined){

            afficherProposition("le jeu est fini")
            btnValider.disabled = true
        }else{
            afficherProposition(listePropositions[i])
        }
    })

radioBtn = document.querySelectorAll(".optionSource input")
    for(let index = 0;index < radioBtn.length;index++){
        radioBtn[index].addEventListener("change",(event) =>{
            console.log(event.target.value)

            if(event.target.value === "1"){
                listePropositions = listesDeMots
            }else{
                listePropositions = listesDePhrases
            }
            afficherProposition(listePropositions[i])
        })
    }

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        let scoreEmail = `${score} / ${i}`

        afficherEmail( nom , email , scoreEmail)
    })
    afficherResultat(score , i)
}

lancerJeu()

