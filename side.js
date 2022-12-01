const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const night = document.querySelector(".night");
const sidebar = document.querySelector(".sidebar");
const active_list_item = document.querySelector(".list-items.active");

dark.addEventListener('click', ()=>{
    sidebar.className = "sidebar";
    active_list_item = "list-items active";
})

night.addEventListener('click', ()=>{
    sidebar.className = "sidebar night";
    active_list_item = "list-items active night"
})

light.addEventListener('click', ()=>{
    sidebar.className = "sidebar light";
    active_list_item = "list-items active light"
})