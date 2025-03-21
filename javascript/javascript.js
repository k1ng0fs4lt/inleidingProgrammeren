
//Const variables
const achtergrond = document.querySelector("body");//https://unsplash.com/photos/a-revolver-with-bullets-on-the-wooden-table--Sf0B9ndPRU
const startScherm = document.getElementById("index");
const speelScherm = document.getElementById("start");//https://wall.alphacoders.com/big.php?i=932286 
const opgeefScherm = document.getElementById("giveUp");//https://www.google.com/search?sca_esv=a80202f809587add&rlz=1C1CHBD_nlNL1067NL1067&q=staring+meme&udm=2&fbs=ABzOT_DDfJxgmsKFIwrWKcoyw2RfcH6DTUcy5g5alyxuLXMELK9gxOHx2zL9e_ZvOeesLcXTExnPqEEQHcRnLU9CiTSC1g1XXYaIi3nNlXQ_0spzon9PX_zx0W25mtj0UcaYJpDniKsMMGImiAkjTbH2XGtXsIufHLBBVC8SYCxuKMknkMpimtM5deACpxm5h4Eti-y3h8Ey&sa=X&ved=2ahUKEwimgISvkJSMAxWRhP0HHcbxBSMQtKgLegQIIhAB&biw=2133&bih=1012&dpr=0.9#vhid=pUbdvE-Lcy1FXM&vssid=mosaic
const startSpel = document.getElementById("play");
const weigerSpel = document.getElementById("no");
const eindigSpel = document.getElementById("no1");
const terugKeren = document.getElementById("no2")
const speelNogmaals = document.getElementById("playagain");
const schietKnop = document.getElementById("shoot");
const kogel = document.getElementById("bullet");//https://www.google.com/search?q=revolver+bullet+png&sca_esv=a80202f809587add&rlz=1C1CHBD_nlNL1067NL1067&udm=2&biw=2133&bih=1012&ei=uqnZZ6HjDfOP9u8P6PvBoAc&ved=0ahUKEwihqNewkJSMAxXzh_0HHeh9EHQQ4dUDCBE&uact=5&oq=revolver+bullet+png&gs_lp=EgNpbWciE3Jldm9sdmVyIGJ1bGxldCBwbmcyBxAAGIAEGBNIwCZQuAtY0yVwAXgAkAEAmAE7oAGIBqoBAjE5uAEDyAEA-AEBmAIUoALBBsICBhAAGAcYHsICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICBRAAGIAEwgIOEAAYgAQYsQMYgwEYigXCAggQABiABBixA8ICDRAAGIAEGLEDGEMYigXCAgQQABgewgIGEAAYExgewgIIEAAYExgIGB6YAwCIBgGSBwIyMKAHzVSyBwIxObgHvAY&sclient=img#vhid=yJD3uZ5Kz4Vv5M&vssid=mosaic
const tekst = document.querySelector('h1');
const herladen = document.querySelector('h3');


//Sound variables
const bruh = new Audio();
bruh.src = "./sounds/bruh.MP3";// Van meerdere geluiden gecombineerd in een video-editing app
const schiet = new Audio();
schiet.src= "./sounds/gunshot.MP3";//https://www.youtube.com/watch?v=q6Vj40bdbho
const leeg = new Audio();
leeg.src = './sounds/gunempty.MP3';//https://www.youtube.com/watch?v=RZ0NHT_lxTw 
const laadPistool = new Audio();
laadPistool.src = './sounds/gunload.MP3'; //Van meerdere geluiden gecombineerd in een video-editing app

//Let variables
let verliesScherm = document.getElementById("lostScreen")
let speelKnoppen = document.getElementById("speelButtons");
let ontvoerder = document.getElementById('robber'); //Ontvoerder - Photoshop AI, Prompt: Man with white balaclava sitting at the table - Tafel - https://www.google.com/search?q=wooden+table&sca_esv=752ffc208ce546ac&hl=nl&udm=2&biw=1309&bih=664&sxsrf=AHTn8zphIfcL-hkA3L2zParo5I3zc4r1GA%3A1741792083323&ei=U6PRZ4i3E8vgi-gP5O7ZuQs&ved=0ahUKEwjIrJiT6YSMAxVL8AIHHWR3NrcQ4dUDCBE&uact=5&oq=wooden+table&gs_lp=EgNpbWciDHdvb2RlbiB0YWJsZTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIigpQuwNYuwNwAXgAkAEAmAF3oAF3qgEDMC4xuAEDyAEA-AEBmAIBoAKAAZgDAIgGAZIHAzAuMaAH1QQ&sclient=img#vhid=a3qfhqacFhJFcM&vssid=mosaic 
let pistool = document.getElementById('revolverhim');//https://sketchfab.com/3d-models/rcx-84-revolver-798249e1ac0e4b3eb1ebb241411150f3  
let chamber = 6;
let pistoolStaat = 'hem';

//Functions
function spelSpelen(){
    herladen.style.visibility = "visible";

    setTimeout(function() {
        achtergrond.style.backgroundImage = "url('images/hangar.png')";//https://wall.alphacoders.com/big.php?i=932286
        achtergrond.style.backgroundSize = "90em";
        startScherm.style.visibility = "collapse";
        startScherm.style.display = "none";
        speelScherm.style.visibility = "visible";
        speelScherm.style.display = "block";
    }, 4200); 

    laadPistool.play();
}

function spelNietSpelen(){
    setTimeout(function() {
        achtergrond.style.backgroundImage = "url('images/background.png')";
        achtergrond.style.backgroundSize = "115em";
        achtergrond.style.backgroundAttachment = "fixed";
        achtergrond.style.backgroundPosition = "center";
        startScherm.style.visibility = "collapse";
        startScherm.style.display = "none";
        speelScherm.style.visibility = "collapse";
        speelScherm.style.display = "none";
        opgeefScherm.style.visibility = "visible";
        opgeefScherm.style.display = "block";
    }, 2300); 
    bruh.play();
}

function spelEchtNietSpelen(){
    setTimeout(function() {
        window.location.href = "index.html"; 
    }, 2300); 
    bruh.play();
}

function spelHerladen(){
    window.location.href = "index.html";
}

function changePicture(){

    if (pistoolStaat == 'hem') {
        pistool.src = './images/revolverme.png';
        pistoolStaat = 'mij';
    } 
    else{
        pistool.src = './images/revolverhim.png';
        pistoolStaat = 'hem';
    };
}

//Eventlisteners
schietKnop.addEventListener("click", function() {

    // Generate random values for rotation (between 0 and 360 degrees)
    const randomRotationX = Math.floor(Math.random() * 15) - 15; // Random value for X-axis rotation
    const randomRotationY = Math.floor(Math.random() * 15) - 15; // Random value for Y-axis rotation
    const randomRotationZ = Math.floor(Math.random() * 15) - 15; // Random value for Z-axis rotation

    pistool.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg)`;
    pistool.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg)`;
    pistool.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg) rotateZ(${randomRotationZ}deg)`;

    changePicture();


    if ((chamber == 0) || (Math.random()*100<(100/chamber))){
        chamber = 6;
        kogel.style.display = "none";
        schiet.play();
        eindigSpel.style.display = "none"; 
        speelNogmaals.style.display = "block";
        schietKnop.style.display = "none";
        pistool.style.display = "none";

        if (pistoolStaat == 'hem'){
            achtergrond.style.backgroundImage = "url('images/hangarlost.png')";
            achtergrond.style.backgroundSize = "90em";
            speelKnoppen.style.marginTop = "2.6em";
            eindigSpel.style.display = "none"; 
            tekst.style.display = "block";
            tekst.style.color = "red";
            pistool.src = './images/revolverme.png';
            
        } else{
            speelKnoppen.style.marginTop = "2.6em";
            eindigSpel.style.display = "none"; 
            tekst.style.display = "block";
            tekst.style.color = "green";
            tekst.textContent = "You win!";
            ontvoerder.src = "./images/robberdead.png";
            pistool.src = './images/revolverhim.png';
        }
        
    } else{
        leeg.play();     
    }

    chamber--;
    
});

startSpel.addEventListener("click", spelSpelen);
weigerSpel.addEventListener("click", spelNietSpelen);
eindigSpel.addEventListener("click", spelNietSpelen);
terugKeren.addEventListener("click", spelEchtNietSpelen);
speelNogmaals.addEventListener("click", spelHerladen);

