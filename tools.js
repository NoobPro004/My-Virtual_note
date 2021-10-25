let optionsCnt=document.querySelector(".options-cont");
let toolsCont=document.querySelector(".tool-cont");
let pencilToolCont=document.querySelector(".pencil-tool-cont");
let eraserToolCont=document.querySelector(".eraser-tool-cont");
let pencil=document.querySelector(".pencil");
let eraser=document.querySelector(".eraser");
let sticky=document.querySelector("sticky");
let optionsFlag=true;
let pencilFlag=false;
let eraserFlag=false;



// true -> show tools, fals -> hide tools
optionsCnt.addEventListener("click",(e) => {
    
    optionsFlag=!optionsFlag;
    if(optionsFlag){
        openTools();
    }else{
        closeTools();
    }
});

function openTools(){
    let iconElem=optionsCnt.children[0];
    // let iconClass=iconElem.classList[1];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display="flex";

}

function closeTools(){
    let iconElem=optionsCnt.children[0];
    // let iconClass=iconElem.classList[1];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display="none";


    pencilToolCont.style.display="none";
    eraserToolCont.style.display="none";
}

pencil.addEventListener("click",(e)=>{
    // true -> show pencil tool
    // false-> hide pencil tool
    pencilFlag=!pencilFlag;
    if(pencilFlag){
        pencilToolCont.style.display="block";
    }else{
        pencilToolCont.style.display="none";
    }
})

eraser.addEventListener("click",(e)=>{
    // true -> show eraser tool
    // false-> hide eraser tool
    eraserFlag=!eraserFlag;
    if(eraserFlag){
        eraserToolCont.style.display="flex";
    }else{
        eraserToolCont.style.display="none";
    }
})


sticky.addEventListener("click" , (e)=>{
    
})