const prevBtn = document.querySelector(".arrows-left");
const nextBtn = document.querySelector(".arrows-right");
const subtitle = document.querySelector(".subtitle");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const pages = document.querySelector(".pages");
const pageNumber = document.querySelector(".page-number");
const  closeMenu = document.querySelector("#closeSearchBtn");
const  openMenu = document.querySelector(".menu");
const  mobileMenu = document.querySelector(".mobile-nav");

const content = [
    {
        "small_title": "THE AUTHORITY IN",
        "title": "Hip-hop <br> culture",
        "subtitle": "XXL is the cultural phenomenon surrounding Hip Hop and Rap culture"
      },
  {
    "small_title": "Your Go-To Destination for",
    "title":"<span>Unleashing<br> the Power of <br>Hip-Hop </span>",
    "subtitle": "Stay Updated with the Latest Headlines, Releases, and Stories from the World of Rap"
  },
  {
    "small_title": "The Definitive Hub for",
    "title": "<span>Dive<br>into the World<br> of XXL Rap</span>",
    "subtitle": "Immerse Yourself in the Vibrant Culture and Artistry of Hip-Hop"
  },
  {
    "small_title": "The Trusted Platform for",
    "title": "<span>Amplifying<br>the Voice of<br>the Streets</span>",
    "subtitle": "Discover the Pulse of Hip-Hop as we Uncover Stories, Trends, and Influences"
  },
  {
    "small_title": "Your Premier Guide to",
    "title": "<span>The<br>hottest Rap <br>Scoops</span>",
    "subtitle": "Get Your Daily Dose of Rap News, Interviews, and Exclusive Features"
  },

  {
    "small_title": "THE AUTHORITY IN",
    "title": "<span>Your Gateway<br>to Hip-Hop's<br> Epicenter</span>",
    "subtitle": "Unearth the Stories, Lifestyle, and Legacy of Rap through In-Depth Articles and Editorials"
  }
]

colors = ["#fce4ec","#81c784","#ec1417","#9575cd","#00ffff","#e6ee9c"];

let index = 1 ; 

const updateContent = () => {
    subtitle.style.opacity = 0;
    title.style.opacity = 0;
    desc.style.opacity = 0;
  
    setTimeout(() => {
      subtitle.innerHTML = content[index - 1].small_title;
      title.innerHTML = content[index - 1].title;
      desc.innerHTML = content[index - 1].subtitle;
      pages.innerHTML = `<span style="color:${colors[index - 1]}">0${index}</span>/06`;
  
      subtitle.style.opacity = 1;
      title.style.opacity = 1;
      desc.style.opacity = 1;
    }, 300); 
  };
  
  const updateIndex = (increment) => {
    index += increment;
    if (index > 6) {
      index = 1;
    } else if (index < 1) {
      index = 6;
    }
  };
  
  prevBtn.addEventListener("click", () => {
    updateIndex(-1);
    updateContent();
  });
  
  nextBtn.addEventListener("click", () => {
    updateIndex(1);
    updateContent();
  });


  openMenu.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    setTimeout(() => {
        mobileMenu.classList.add("display");
      }, .5);
    
  });
  
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("display");
    setTimeout(() => {
        mobileMenu.classList.remove("open");
      }, 1000);

  });