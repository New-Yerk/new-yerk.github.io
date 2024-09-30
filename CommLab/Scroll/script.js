AOS.init();

let yerkDiv = document.getElementById('yerk-div');
let yerkText = document.getElementById('yerk-text');
let sections = document.querySelectorAll('section');

let stories = [
    "Hello, I'm Yerk!",
    "Time for my morning coffee!",
    "I love a good dance break!",
    "Sweet dreams, see you tomorrow!"
];

document.addEventListener('scroll', changeText);

function changeText() {
    let pos = window.scrollY;
    let height = window.innerHeight;
    let width = window.innerWidth;
    
    // Account for the title section
    let sectionNum = Math.min(Math.floor((pos - height) / height), stories.length - 1);
    if (sectionNum < 0) sectionNum = 0;

    // Update Yerk's text
    yerkText.innerHTML = stories[sectionNum];

    // Move Yerk
    let totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollProgress = pos / totalScrollHeight;
    yerkDiv.style.left = scrollProgress * (width - 300) + 'px'; // 300 is the width of Yerk
}

// Initial call to set correct state on page load
changeText();