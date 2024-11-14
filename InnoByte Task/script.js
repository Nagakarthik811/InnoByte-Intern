const contactform = document.querySelector('.contact-form');
const container = document.querySelector('.container');

contactform.addEventListener('submit', (event) => {
	event.preventDefault();
	container.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
});

const connectbtn = document.querySelector('.connect-btn');
const crossbtn = document.querySelector('.cross-btn');
const socialcontainer = document.querySelector('.social-container');

connectbtn.addEventListener('click', () => {
	socialcontainer.classList.toggle('visible')
});

crossbtn.addEventListener('click', () => {
	socialcontainer.classList.remove('visible')
});


// script.js
document.getElementById('bookNowButton').addEventListener('click', function() {
    window.location.href = "https://api.whatsapp.com/send?phone=919007062180";
});
// script.js
document.getElementById('bookNow').addEventListener('click', function() {
    window.location.href = "https://api.whatsapp.com/send?phone=919007062180";
});