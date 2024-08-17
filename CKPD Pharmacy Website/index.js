const tabs = document.querySelectorAll(".tabBtn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab, index)=>{ //checks for tabs and position index of tabs
    tab.addEventListener("click", ()=>{ //event listener of tabs
        tabs.forEach(tab=>{tab.classList.remove("active");}); //removes previous active tab
        all_content.forEach(content => { content.classList.remove("active"); }); //removes content of active tab
        tab.classList.add("active"); //adds the active state in specific class
        all_content[index].classList.add("active");
    })
})