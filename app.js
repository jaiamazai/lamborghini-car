// let profileList = document.querySelector('.profileList');
// let btn = document.querySelector('.profileDownBtn');
// const toggle = () => profileList.classList.toggle("active");
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}


function toggleDropdown() {
    var content = document.getElementById("dropdown-content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


function change(){
    document.getElementById("bd").style.backgroundImage="url(images/light on.jpg)";
}



const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

moonIcon.addEventListener('click', () => {
    body.style.backgroundImage = "url('images/light on.jpg')"; // New background image
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
});

sunIcon.addEventListener('click', () => {
    body.style.backgroundImage = "url('images/light off.jpg')"; // Initial background image
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
});


document.getElementById('changeBackgroundBtn').addEventListener('click', function() {
    var currentImage = document.body.style.backgroundImage;

    if (currentImage.includes('images/icons.jpg')) {
        document.body.style.backgroundImage = "url('images/white color.jpg')";
    } else {
        document.body.style.backgroundImage = "url('images/white color.jpg')";
    }
});

document.getElementById('changeBackgroundBt').addEventListener('click', function() {
    var currentImage = document.body.style.backgroundImage;

    if (currentImage.includes('images/icons.jpg')) {
        document.body.style.backgroundImage = "url('images/light off.jpg')";
    } else {
        document.body.style.backgroundImage = "url('images/light off.jpg')";
    }
});


