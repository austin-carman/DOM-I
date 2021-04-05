const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('nav a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];


// need to make h1 match original
const headerTitle = document.querySelector('.cta-text h1');
headerTitle.textContent = siteContent['cta']['h1'];

console.log(headerTitle);


const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent['cta']['button'];

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];

const topSectionContent = document.querySelector('.top-content');
const topSubtitles = topSectionContent.querySelectorAll('h4');
const topPara = topSectionContent.querySelectorAll('p');
topSubtitles[0].textContent = siteContent['main-content']['features-h4'];
topSubtitles[1].textContent = siteContent['main-content']['about-h4'];
topPara[0].textContent = siteContent['main-content']['features-content']
topPara[1].textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const bottomSectionContent = document.querySelector('.bottom-content');
const bottomSubtitles = bottomSectionContent.querySelectorAll('h4');
const bottomPara = bottomSectionContent.querySelectorAll('p');
bottomSubtitles[0].textContent = siteContent['main-content']['services-h4'];
bottomSubtitles[1].textContent = siteContent['main-content']['product-h4'];
bottomSubtitles[2].textContent = siteContent['main-content']['vision-h4'];
bottomPara[0].textContent = siteContent['main-content']['services-content'];
bottomPara[1].textContent = siteContent['main-content']['product-content'];
bottomPara[2].textContent = siteContent['main-content']['vision-content'];

const contactSection = document.querySelector('.contact');
const contactSubtitle = contactSection.querySelector('h4');
const contactPara = contactSection.querySelectorAll('p');
contactSubtitle.textContent = siteContent['contact']['contact-h4'];
contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];

const copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];


//adding new content
//color
links.forEach(item => item.style.color = 'green');
//adding a link
const anotherLink = document.createElement('a');
anotherLink.textContent = 'Another Link';
document.querySelector('nav').appendChild(anotherLink);
anotherLink.style.color = 'green'

const newLink  = document.createElement('a');
newLink.textContent = 'New Link';
document.querySelector('nav').prepend(newLink);
newLink.style.color = 'green'
