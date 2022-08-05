
const btnSandwish = document.getElementById ("sandwish-btn");
const SIDE_BAR = document.getElementById ("sidebar")
const CONTENT = document.querySelector (".contents")


btnSandwish.addEventListener("click" , tooglebtn);

function tooglebtn(){
    SIDE_BAR.classList.toggle ("active");
    CONTENT.classList.toggle ("opacity");
    console.log(SIDE_BAR.classList)
    setTimeout(function(){
        CONTENT.classList.toggle ("hidden");
    },200);
}

