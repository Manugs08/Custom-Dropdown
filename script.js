
const menu=document.querySelector(".showOption");
const options=document.querySelectorAll(".option")
let close=true;
let optionArray=[];
const showOption=()=>{
    if(close){
        document.querySelector(".optionList").style.display="flex";
        document.querySelector(".arrow").textContent="arrow_drop_up";
        close=false;
    } else{
        document.querySelector(".optionList").style.display="none";
        document.querySelector(".arrow").textContent="arrow_drop_down";
        close=true;
    }
}

menu.addEventListener("click",showOption);

options.forEach(option => {
    optionArray.push(option);

    const check = document.createElement("span");
    check.classList.add("material-symbols-outlined", "check");
    check.textContent = "check_small";
    option.appendChild(check)
    check.style.display="none"

    option.addEventListener("click", () => {
        optionArray.forEach(c => c.lastElementChild.style.display="none"); 
        option.lastElementChild.style.display="block";
        document.querySelector(".optionPlaceHolder").textContent=option.dataset.value;
        setTimeout(() => {
        showOption()
        }, 200);
    });
});