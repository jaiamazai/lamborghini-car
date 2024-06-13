const contact_box = document.querySelector(".contact_box");
const icon_btn = document.querySelector(".icon_btn");
const Alert_msg = document.querySelector(".Alert_msg");
Alert_msg.onclick = () =>{
    contact_box.style.display = 'block';
};
icon_btn.onclick = () =>{
    contact_box.style.display = 'none';
};
const box = document.querySelector(".box");
const icon = document.querySelector(".icon");
const msg = document.querySelector(".msg");
msg.onclick = () =>{
    box.style.display = 'block';
};
icon.onclick = () =>{
    box.style.display = 'none';
};

function toggleDropdown() {
    var content = document.getElementById("dropdown-content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
};

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}