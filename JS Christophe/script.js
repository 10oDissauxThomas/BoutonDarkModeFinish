// console.log ("salut les ami(e)s");

// const year = 2020;

// const yearOfBirthday = 2001;

// const yearOfBirthday = window.prompt("Quel est votre année de naissance ?");

// console.log(typeof yearOfBirthday); 

// const age = year - yearOfBirthday;

// console.log (age);

// document.querySelector("#age").textContent = "Je connais ton age, tu as " + age + " ans";

let modeNoir = false;

document.querySelector("#modeDark").addEventListener("click", function(){
    console.log("click");
    document.querySelector("body").classList.toggle("dark-mode");
    if (modeNoir == false){
        console.log("off");
        document.querySelector("#switch").src = "light-bulbon.png";
    }
    else{
        document.querySelector("#switch").src = "light-bulboff.png";
        document.querySelector("body")
    }
})



let isMenuActiv = false
document.querySelector("#btMenu").addEventListener("click", function(){
    console.log("Click");
    // if(isMenuActiv == false){
    //     console.log("on");
    //     document.querySelector("#navMain").style.display = "block";
    //     isMenuActiv = true;
    // }
    // else{
    //     console.log("off");
    //     document.querySelector("#navMain").style.display = "none";
    //     isMenuActiv = false;
    // }
    
    document.querySelector("#navMain").classList.toggle("show");

}) 

document.querySelector("#btSecret").addEventListener("click", function(){
    console.log("click");
    const codeSecret = "311001";
    let secret = window.prompt(" Entrer votre mot de passe ");
    while(secret !== codeSecret) {secret = prompt("Mot de passe incorrect ! Veuillez réessayer !")
}
document.querySelector(".messageSecret-js").classList.toggle("show")

})