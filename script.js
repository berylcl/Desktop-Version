const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.navul');
const main = document.querySelector('.main');
const works = document.getElementById('portfolio');
window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    document.getElementById('mySidebar').classList.remove('sidebar');
    document.getElementById('mySidebar').classList.add('menu-lists');
  }
});
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  main.classList.toggle('active');
});

document.querySelectorAll('.navitem').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
  main.classList.remove('active');
}));

const projects = [
  {
    id: 'project1',
    title: 'All awesome books',
    company: 'PERSONAL',
    specialization: 'Front End Dev',
    year: 2022,
    description: 'Awesome-books project is a basic website that allows users to add/remove books from a list. It showcases the use of ES6 JavaScript objects and arrays to dynamically modify the DOM and add basic events. ',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: 'images/awesome-books-snipe.png',
    live: 'https://berylcl.github.io/awesome/',
    source: 'https://github.com/berylcl/Awesome-books',
  },

  {
    id: 'project2',
    title: 'Todo list App',
    company: 'PERSONAL',
    specialization: 'Full Stack Dev',
    year: 2015,
    description: 'Todo list App is a simple web app that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete, delete a task or add a new task and you can even clean all of the completed tasks if you want. ',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Ruby',
    },
    image: 'images/todolist.png',
    live: 'https://berylcl.github.io/To-Do-list-list-structure/',
    source: 'https://github.com/berylcl/To-Do-list-list-structure',
  },

  {
    id: 'project3',
    title: 'Facebook 360',
    company: 'FACEBOOK',
    specialization: 'Full Stack Dev',
    year: 2015,

    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
      tech4: 'Ruby',
      tech5: 'Bootstrap',
    },
    image: 'images/Snapshoot Portfolio3.png',
    live: 'https://berylcl.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/berylcl/Portfolio-setup-and-mobile-first.git',
  },

  {
    id: 'project4',
    title: 'Uber Navigation',
    company: 'Uber',
    specialization: 'Lead Developer',
    year: 2018,

    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: {
      tech1: 'html',
      tech2: 'css',
      tech3: 'javaScript',
    },
    image: 'images/Snapshoot Portfolio4.png',
    live: 'https://berylcl.github.io/Finish-mobile-version/',
    source: 'https://github.com/berylcl/Finish-mobile-version.git',
  },
];
let count = 1;
projects.forEach((project) => {
  const newdiv = document.createElement('div');
  newdiv.innerHTML = `
  <div class="cards">
    <div class="image">
        <img src="${project.image}" alt="image">
    </div>
    <div class="port-cards">
        <h2 class="title">${project.title}</h2>
        <ul class="social-icons fav">
            <li class="cano">${project.company}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${project.specialization}</li>
            <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${project.year}</li>
        </ul>
        <p class="tonic-text">
        ${project.description}
        </p>
        <ul class="tech social-icons">
            <li class="techitems">${project.technologies.tech1}</li>
            <li class="techitems">${project.technologies.tech2}</li>
            <li class="techitems">${project.technologies.tech3}</li>
        </ul>
        <button type="button" id="${project.id}" class="see">See Project</button>
    </div>
  </div>`;
  works.append(newdiv);
});

const image = document.querySelectorAll('.image');
image.forEach((im) => {
  if (count % 2 === 0) {
    im.classList.add('two');
  }
  count += 1;
});

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');
seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="tile">
      <h2 class="title">${pop.title}</h2>
      <button class="close">&times;</button>
    </div>
    <ul class="social-icons fav">
      <li class="cano">${pop.company}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.specialization}</li>
      <li class="dev"><img src="./images/Counter.png" alt="dot">&nbsp; ${pop.year}</li>
    </ul>
    </div>
    <img src="${pop.image}" alt="live" class="beryl tonic-text2">
    <div class="explain">
      <p class="tonic-text2">
        ${pop.description}
      </p>
      <div class="smart">
          <ul class="tech social-icons">
            <li class="techitems">${pop.technologies.tech1}</li>
            <li class="techitems">${pop.technologies.tech2}</li>
            <li class="techitems">${pop.technologies.tech3}</li>
          </ul>
          <div class="btns">
            <button type="button" id="live" class="but">See live &nbsp; &nbsp;
              <img src="./images/live.png" alt="live">
            </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <button type="button" id="source" class="but">See source &nbsp; &nbsp;
              <img src="./images/github.svg" alt="source">
            </button>
          </div>
      </div>
  </div>  `;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));
const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const errorMessage = document.querySelector('#small');

form.addEventListener('submit', (event) => {
  const errorMessages = [];

  // Check if name is filled out
  if (nameInput.value.trim() === '') {
    errorMessages.push('Name field is required');
  }

  // Check if email is filled out and in lowercase
  if (emailInput.value.trim() === '') {
    errorMessages.push('Email field is required');
  } else if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMessages.push('Email must be in lowercase');
  }

  // Check if message is filled out
  if (messageInput.value.trim() === '') {
    errorMessages.push('Message field is required');
  }
  if (errorMessages.length > 0) {
    event.preventDefault(); // Prevent the form from being submitted
    errorMessage.textContent = errorMessages.join('. '); // Display error messages
  } else {
    errorMessage.textContent = ''; // Clear error message
  }
});
// preserve data in the browser
const nameField = document.querySelector('input[name="name"]');
const emailField = document.querySelector('input[name="email"]');
const messageField = document.querySelector('textarea[name="message"]');

function saveDataToLocalStorage() {
  const data = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const data = JSON.parse(savedData);
    nameField.value = data.name;
    emailField.value = data.email;
    messageField.value = data.message;
  }
});

nameField.addEventListener('input', saveDataToLocalStorage);
emailField.addEventListener('input', saveDataToLocalStorage);
messageField.addEventListener('input', saveDataToLocalStorage);
