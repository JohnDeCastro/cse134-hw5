import './experience-card.js';

// some experience data
const experienceData = [
    {
        title: "Sergeant of Marines - U.S. Marine Corps",
        image: "images/marines.webp",
        alt: "Marine Corps Uniform",
        description: "Served Honorably from 2014 - 2019, leading and mentoring junior Marines in both training and operation readiness. Developed discipline, leadership, and mission essential problem-solving skills.",
        link: "assets/resume.pdf"
    },
    {
        title: "First-Generation College Student - UCSD",
        image: "images/aboutme.webp",
        alt: "Me in NYC",
        description: "Currently studying Computer Science at UC San Diego with plans to graduate in 2026. Interested in learning new technical skills and personal growth.",
        link: "resume.html"
    }
];

//rendering a card into the container
function renderCard(entry) {
    const card = document.createElement('experience-card');

    card.shadowRoot.querySelector('h2').textContent = entry.title;
    card.shadowRoot.querySelector('img').src = entry.image;
    card.shadowRoot.querySelector('img').alt = entry.alt;
    card.shadowRoot.querySelector('.description').textContent = entry.description;
    card.shadowRoot.querySelector('a').href = entry.link;

    document.getElementById('card-container').appendChild(card);
}

//load from locaStorage
function loadLocal() {
    const stored = JSON.parse(localStorage.getItem('experience-data'));
    if(stored) {
        document.getElementById('card-container').innerHTML = '';
        stored.forEach(renderCard);
    }
}

//from remote
function loadRemote() {
    fetch('https://my-json-server.typicode.com/YOUR_USERNAME/YOUR_REPO/experiences')
    .then(res => res.json())
    .then(data => {
        document.getElementById('card-container').innerHTML = '';
        data.forEach(renderCard);
    })
    .catch(err => console.error('Failed to fetch:', err));
}

//save data to localStorage
localStorage.setItem('experience-data', JSON.stringify(experienceData));

//hooking buttons
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('load-local').addEventListener('click', loadLocal);
    document.getElementById('load-remote').addEventListener('click', loadRemote);
});
