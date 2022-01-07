(function() {

  // project objects!
  // ==========================================

  // web/ux arr
  // ==================
  var web = [
    // mrGos = {
    //   id: 'mrgos',
    //   title: 'Mr Go\'s',
    //   img: 'img/mrgos.png',
    //   link: 'https://drive.google.com/file/d/1aBpMzEfH1WXK_LerwuhTl0LmyPtNvZZ1/view',
    //   brief: 'A fully responsive wordpress website',
    //   tools: ['Wordpress'],
    //   description: 'In this project I designed and created a website for Mr Go\'s, an Asian Fusion restaurant based in Wellington, redesigning their current website. I used a prebuilt wordpress theme for this, and focused on simplifying the navigation and overall usability of the site through several rounds of user testing.'
    // },
    burgerLiquor = {
      id: 'burgerliquor',
      title: 'Burger Liquor',
      img: 'img/burgerliquor.png',
      link: 'https://projects.invisionapp.com/prototype/BURGERLIQUOR-PROTOTYPE-fix-cka6dntzz008so1011fozkojn/play/3fbac871',
      brief: 'A prototype created through UX research and teamwork',
      tools: ['Invision'],
      description: 'This was a UX project in collaboration with Rachel Kibblewhite, <a href="https://github.com/Kris-Furer" target="_blank">Kris Furer</a> and <a href="https://github.com/M-brown23" target="_blank">Matt Brown</a>. The four of us created a prototype for Burger Liquor\'s online ordering app through user testing and iterating off what we learned until resulting in the final.  <br> <span class="note">Note: The premise for this project was enitrely fictional and in no way actually represents Burger Liquor.</span>',
      iDid: 'Designed the prototype with a group in invision. Designed with thorough UX Research techniques applied to back design decisions, along with user testing. <br> <span class="note">Note: All media used was free for use under a CC license and does not belong to me. Logo design belongs to Burger Liquor fully. They were not created by and do not belong to me.</span>'
    },
    kilRec = {
      id: 'kilrec',
      title: 'Kilbirnie Rec Centre',
      img: 'img/kilbirnierec.png',
      link: 'https://www.figma.com/proto/GQNTpCs7ciIL5j9meuyf5E/kilbirnie-rec-centre-prototype-collab-WORKING?node-id=93%3A184&scaling=scale-down',
      brief: 'A prototype created through UX research and teamwork',
      tools: ['Figma'],
      description: 'This was a UX project in collaboration with Rachel Kibblewhite, <a href="https://github.com/Kris-Furer" target="_blank">Kris Furer</a> and <a href="https://github.com/M-brown23" target="_blank">Matt Brown</a>. Our project acts as an event planner for the Kilbirnie Recreation Centre, where you can book to join events and view details on said events. We went through the process of UX research extensively to come up with the design, user flow, and overall nagation of the application prototype.',
      iDid: 'Conducted UX research with a team. Conceptualised the design as a team and iterated from user testing. Lead the UX survey and timeline, ensured our group was on track relative to the timeline and tracking milestones.'
    },
    sweetAs = {
      id: 'sweetas',
      title: 'Sweet As',
      img: 'img/sweetas.png',
      link: 'https://mew-mo.github.io/sweet-as/',
      brief: 'A frontend site',
      tools: ['html', 'scss', 'js'],
      description: 'A fictional promotional website for Tourism New Zealand made for booking short trips to Queenstown. With this application, you can book a 15-day-max trip, view accommodation and add complimentary meals. <br> <span class="note">Note: The premise for this project is entirely fictional. Toruism New Zealand was not involved and is not represented by the content in this project.</span>',
      iDid: 'Coded in HTML, SCSS and JS using a Gulp compiler. Managed packages with npm/node.js. I created the design and prototyped it in figma. Used the Mapbox API for the accommodation selection, and a few extra plugins and libraries for effects. Designed the promotional logo. <br> <span class="note">Note: The logo design (wordmark and fern) belong to Tourism New Zealand fully. They were not created by and do not belong to me.</span>'
    },
    needAHand = {
      id: 'needahand',
      title: 'Need A Hand',
      img: 'img/needahand.png',
      link: 'https://github.com/mew-mo/need-a-hand',
      brief: 'A fullstack site developed with an agile team',
      tools: ['html', 'scss', 'js', 'mongoDB'],
      description: 'Need-A-Hand is a made up company, with a fullstack website that acts as a hub to connect students and emplpoyers for work. Created in collaboration with <a href="https://github.com/cchhiba" target="_blank">Charissa Chhiba</a>, <a href="https://github.com/ambarrose" target="_blank">Ambar Williams</a> and <a href="https://github.com/beecurrie" target="_blank">Bee Currie</a>.',
      iDid: 'Followed the agile process, acting as a scrum master, product owner and developer during different sprints. Had daily standup meetings. Coded HTML, SCSS and JS with a Grunt compiler. Managed packages with npm/node.js. Managed a group Github repository, including merging and conflict resolution. Managed a noSQL MongoDB database as an API and coded POST, GET, PATCH and DELETE methods. Conceptualised the design with the group in figma.'
    },
    seaLionTrust = {
      id: 'nzslt',
      title: 'NZ Sea Lion Trust',
      img: 'img/nzslt.png',
      link: 'https://mew-mo.github.io/nz-sea-lion-trust/',
      brief: 'A simple static frontend site',
      tools: ['html', 'scss', 'js'],
      description: 'The New Zealand Sea Lion Trust are a non-profit organisation who were in need of a website redeign. <br> <span class="note">Note: The premise for this project was enitrely fictional and in no way actually represents the New Zealand Sea Lion Trust.</span>',
      iDid: 'Made with HTML, SCSS and Javascript (and a cheeky slick slider plugin), I redesigned their <a href="https://www.sealiontrust.org.nz/" target="_blank">current website</a>. I used Koala to compile the sass (I never will again). The design was formed through several different kinds of UX research. I remade their logo in Illustrator, and created the landing illustration as well. I created the design and prototyped it in figma. <br> <span class="note">Note: All copy, media used and logo design belong to the New Zealand Sea Lion Trust fully. They were not created by and do not belong to me.</span>'
    },
    cc = {
      id: 'cc',
      title: 'Clockwork Creative',
      img: 'img/clockwork.png',
      link: 'http://mo.yoobee.site/',
      brief: 'A custom Wordpress Theme with customisation controls',
      tools: ['php', 'html', 'css', 'js', 'wordpress'],
      description: 'Clockwork Creative is a video production company based in Wellington. They needed a website that would act as a way to view their latest projects, learn about them, see what services they offer, purchase merchandise and contact them. <br> <span class="note">Note: The premise for this project was enitrely fictional and in no way actually represents Clockwork Creative.</span>',
      iDid: 'For this project, I coded the theme custom fully in PHP and CSS with elements of HTML, JS. Customisation controls were coded into the theme for the client\'s ease. Security, performance optimisation and SEO were focused on when building the site, utilising plugins to help these aspects. I created the design and prototyped it in figma. <br> <span class="note">Note: All copy, media used and logo belong to Clockwork Creative fully. They were not created by and do not belong to me.</span>'
    }
  ];

  // graphic arr
  // ==================

  var graphic = [
    luma = {
      id: 'luma',
      title: 'Luma Lights Festival',
      img: 'img/luma.png',
      link: 'https://drive.google.com/uc?id=1y_EZoccFfMkNF5XhGFtsXPiKYMBkoEJA',
      brief: 'Branding for Luma Lights Festival',
      tools: ['photoshop', 'illustrator'],
      description: 'A design project in which I created branding, posters, magazine layouts, cards and letter sets to promote Queenstown\'s Luma Lights Festival.'
    },
    dlw = {
      id: 'dlw',
      title: 'Don\'t Let Words',
      img: 'img/dlw.png',
      link: 'https://drive.google.com/uc?id=1REtOwxzkykLGCo-IvFRoOpn4auxskM6H',
      brief: 'Branding for an anti-1080 Campaign',
      tools: ['photoshop', 'illustrator'],
      description: 'This design project utilised the tagline "Don\'t Let Words be all that\'s left of them" to campaign against 1080 poisoning in New Zealand. I created posters, logos, magazine layouts, brochures and merchandise for this project.'
    },
    mmca = {
      id: 'mmca',
      title: 'MMCA',
      img: 'img/mmca.png',
      link: 'https://drive.google.com/uc?id=1rekZ9HcvHg5TXKRLSt-uATLtJTMmr7rS',
      brief: 'Brochure for the MMCA Museum',
      tools: ['photoshop', 'indesign'],
      description: 'This project was for designing a brochure for the MMCA- The National Museum of Modern and Contemporary Art, located in South Korea. It is primarily focused on navigation, and features a large cutout triangle that makes the map display even when the brochure is fully folded.'
    },
    // tinyHouse = {
    //   id: 'tinyhouse',
    //   title: 'Tiny House',
    //   img: 'img/tinyhouse.png',
    //   link: '#',
    //   brief: 'Fictional Logo for Tiny House',
    //   tools: ['photoshop', 'indesign'],
    //   description: 'A small branding project, where I was challenged to create a logo for a fictional company that writes magazines about small houses.'
    // },
    musicPlanet = {
      id: 'musicPlanet',
      title: 'Music Planet',
      img: 'img/musicplanet.png',
      link: 'https://drive.google.com/uc?id=1rSmCQEYOcSRg9iNA3HUVuXdH6vt8ySkx',
      brief: 'Logo Simplification & Motion Graphic for Music Planet',
      tools: ['photoshop', 'illustrator', 'indesign'],
      description: 'A project in which I simplified the current logo of Music Planet through user testing and created a graphic for them via animating in Photoshop.'
    },
    alphabet = {
      id: 'alphabet',
      title: 'Maori Alphabet',
      img: 'img/alphabet.png',
      link: 'https://drive.google.com/uc?id=1QjWa76DebVS1aXojGLTiPZVuxXitumvu',
      brief: 'An alphabet chart for Maori Language Week',
      tools: ['photoshop', 'illustrator'],
      description: 'A project made in collaboration with <a href="https://github.com/rraneighh" target="_blank">Rane Magno</a>. We created this alphabet chart for Maori Language Week with the theme of constellations and stars, which are of huge cultural importance to Maori people.'
    },
    snowdin = {
      id: 'snowdin',
      title: 'Snowdin Snacks',
      img: 'img/snowdin.png',
      link: 'https://drive.google.com/uc?id=1gF5av-wIx2Rejgl3GcslqAQE9sfUCqFU',
      brief: 'A packaging project',
      tools: ['photoshop', 'illustrator', 'physical skills'],
      description: 'Inspired by Toby Fox\'s "Undertale", I created a fictional company entitled "Snowdin Snacks" and designed the packaging for the frozen treat called the "Bisicle". The packaging was created physically through researching substrates and both creating my own die-lines and cutting them out.'
    }
  ];

  // digital art arr
  // ==================

  var digiArt = [
    tentwentyfive = {
      id: '1025',
      title: '1025',
      img: 'img/1025.png'
    },
    wtss = {
      id: 'wtss',
      title: 'where the sea sleeps',
      img: 'img/wtss.png'
    },
    swsh = {
      id: 'swsh',
      title: 'sword & shield',
      img: 'img/swsh.png'
    },
    deltarune = {
      id: 'deltarune',
      title: 'deltarune',
      img: 'img/deltarune.png'
    }
  ];

  // Skill level object
  // ==================
  lvl = {
    b: 'Beginner',
    i: 'Intermediate',
    e: 'Expert',
    l: 'Learning'
  };

  // All Pages
  // ==========================================
  const nav = document.querySelector('#mobileNav');
  const menu = document.querySelector('#menu');
  const menuToggle = document.querySelector('.nav__toggle');
  let isMenuOpen = false;

  // TOGGLE MENU ACTIVE STATE
  menuToggle.addEventListener('click', e => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
  });

  // TRAP TAB INSIDE NAV WHEN OPEN
  nav.addEventListener('keydown', e => {
    // abort if menu isn't open or modifier keys are pressed
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    // listen for tab press and move focus
    // if we're on either end of the navigation
    const menuLinks = menu.querySelectorAll('.nav__link');
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === menuLinks[0]) {
          menuToggle.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === menuToggle) {
        menuLinks[0].focus();
        e.preventDefault();
      }
    }
  });

  // making it unscrollable if the mobile nav is open
  document.querySelector('#mobileNav').addEventListener('click', (e) => {
    if (document.querySelector('.nav__toggle').ariaExpanded == 'false') {
      setTimeout(() => {
        document.querySelector('body').style.overflow = 'auto';
      }, 700);
      // settimeout because the scrollbar was bothering me immensely
    } else if (document.querySelector('.nav__toggle').ariaExpanded == 'true') {
      document.querySelector('body').style.overflow = 'hidden';
    }
    // close menu if ur clickin work
    // NOTE: Broke :(
    if (e.target.innerHTML === 'work') {
      document.querySelector('.nav__toggle').click();
      console.log('qqqqq');
      setTimeout(() => {
        window.location = 'index.html#work';
        console.log('going going going');
      }, 1000);
    }
  }, false);
  // mobile nav ends


  // INDEX.HTML
  // ==========================================
  var appHome = {
    // pulling hero stuff
    title: document.querySelector('.title'),
    subtitle: document.querySelector('.subtitle'),
    iSubtitle: document.querySelector('.i-subtitle'),
    nextTxt: document.querySelector('.next-txt'),
    skillLvl: document.querySelector('.skill-level'),

    init: () => {
      // register gsap
      gsap.registerPlugin(ScrollTrigger);
      appHome.heroAnims();
    },

    heroAnims: () => {
      document.querySelector('.link--arrowed').addEventListener('click', () => {

        anime({
          targets: appHome.title,
          scale: 0.2,
          marginLeft: '-990px',
        });

        setTimeout(() => {
          appHome.nextTxt.style.display = 'block';
          appHome.nextAnims();
        }, 500);
      }, false);

      gsap.from('.title', {
        autoAlpha: 0,
        translateX: -302,
        duration: 1,
        repeat: false,
        ease: 'easeInOutCirc'
      });

      gsap.from('.subtitle', {
        autoAlpha: 0,
        translateX: -302,
        delay: 1,
        duration: 1,
        repeat: false,
        ease: 'easeInOutCirc'
      });

      gsap.from('.i-subtitle', {
        autoAlpha: 0,
        delay: 2,
        duration: 1,
        repeat: false,
        ease: 'easeInOutCirc'
      });

    var tl = gsap.timeline({
      scrollTrigger: '.work-txt',
      ease: 'sine.inOut',
      scrub: true,
      start: 'top',
      end: '100% bottom',
    });

    tl
      .set('.section-work', {
        opacity: 0,
        y: 50,
      })
      .to('.section-work', {
        duration: 1,
        opacity: 1,
        y: 0
      });

      appHome.skillClick();
    },

    nextAnims: () => {
      anime({
        targets: appHome.nextTxt,
        opacity: '1',
        paddingBottom: '50px'
      });

      anime({
        targets: appHome.subtitle,
        marginTop: '51px'
      });
      appHome.skillLvl.style.display = 'none';
      appHome.title.style.display = 'none';
    },

    skillClick: () => {
      document.querySelector('.mini-menu').addEventListener('click', (e) => {
        if (e.target.innerHTML == 'Languages') {
          e.target.classList.add('accent-pal');
          document.querySelector('.lang-list').style.display = 'block';
          appHome.skillLvl.style.display = 'inline-block';
        } else {
          document.querySelector('.lang-list').style.display = 'none';
          document.querySelector('.lang').classList.remove('accent-pal');
        }
        if (e.target.innerHTML == 'Tools') {
          e.target.classList.add('accent-pal');
          document.querySelector('.tool-list').style.display = 'block';
          appHome.skillLvl.style.display = 'inline-block';
        } else {
          document.querySelector('.tool-list').style.display = 'none';
          document.querySelector('.tools').classList.remove('accent-pal');
        }
        if (e.target.innerHTML == 'Other') {
          e.target.classList.add('accent-pal');
          document.querySelector('.other-list').style.display = 'block';
          appHome.skillLvl.style.display = 'inline-block';
        } else {
          document.querySelector('.other-list').style.display = 'none';
          document.querySelector('.other').classList.remove('accent-pal');
        }
      }, false);

      appHome.skillHover();
    }, //skillClick

    skillHover: () => {

      findSkill = (e) => {
        if (e.target.innerHTML == 'HTML') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'JS') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'CSS') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'PHP') {
          appHome.skillLvl.innerHTML = lvl.b;
        } else if (e.target.innerHTML == 'Photoshop') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'Illustrator') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'InDesign') {
          appHome.skillLvl.innerHTML = lvl.b;
        } else if (e.target.innerHTML == 'Sass') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'JQuery') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'Git') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'Wordpress') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else if (e.target.innerHTML == 'Bootstrap') {
          appHome.skillLvl.innerHTML = lvl.i;
        } else {
          appHome.skillLvl.innerHTML = 'Hover or press for my skill level to show here!';
        }
      }; //findskill

      appHome.nextTxt.addEventListener('mouseover',findSkill, false);
      appHome.nextTxt.addEventListener('click',findSkill, false);
    } //skillHover
  }; //appHome ends

  // WUX.HTML
  // ==========================================
  var appWux = {

    bubbles: [],

    init: () => {
      appWux.addProjs();
      appWux.click();
    },

    addProjs: () => {

      for (var i = 0; i < web.length; i++) {
        document.querySelector('.work-bbls').innerHTML += `
        <div class="bubble-container">
            <div id="bubble${i}" class="bubble">
            <a href="#" id="${web[i].id}" class="project">
              <h5 class="light-pal">${web[i].title}</h5>
                <img src="${web[i].img}" alt="${web[i].title} Project Preview"></a>
            </div>
        </div>
        `;

        appWux.bubbles.push(`#bubble${i}`) ;
      } //for loop ends

      setInterval(appWux.anims, 1000);

      // NOTE: have a like, setBbls function here to make the linter happy

      appWux.setBbls();

      document.querySelector('.loader-container').style.opacity = 1;
      document.querySelector('.loader-container').style.display = 'flex';

      document.querySelector('.work-bbls').style.opacity = 0;

      window.addEventListener('load', () => {
        document.querySelector('.loader-container').style.opacity = 0;
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.work-bbls').style.opacity = 1;
        appWux.bblAppear();
      });
    },

    setBbls: () => {
      for (var i = 0; i < appWux.bubbles.length; i++) {
        document.querySelector(`#bubble${i}`).style.opacity = '0';
      }
    },

    bblAppear: () => {
      var bblTime = 500;

      for (let i = 0; i < appWux.bubbles.length; i++) {
        setTimeout(() => {
        document.querySelector(`#bubble${i}`).style.opacity = '1';

        }, bblTime);

        bblTime += 800;
      }
      appWux.anims();
    },

    anims: () => {

      var container = document.querySelector('.work-bbls');

      var height = container.offsetHeight;
      var width = container.offsetWidth;

      for (var i = 0; i < appWux.bubbles.length; i++) {
        anime({
          targets: `${appWux.bubbles[i]}`,
          translateY: Math.floor(Math.random() * height),
          translateX: Math.floor(Math.random() * width),
          loop: false,
          direction: 'alternate',
          easing: 'easeInOutCirc'
        });
      }
    }, //anims

    click: () => {
      window.addEventListener('click', (e) => {
        if (e.target.parentNode.className == 'project') {
          sessionStorage.setItem('selected', e.target.parentNode.id);
          window.location.href = 'wux-proj.html';
        } //if e target
      }, false);
    }
  }; //appWux ends

  // WUX-PROJ.HTML
  // ==========================================
  appWuxProj = {

    selectedPage: false,

    init: () => {
      appWuxProj.setup();
    },

    setup: () => {
      for (var i = 0; i < web.length; i++) {
        if (web[i].id == sessionStorage.selected) {
          appWuxProj.selectedPage = web[i];
        } //if
      } //for

      document.querySelector('.proj-title').innerHTML = appWuxProj.selectedPage.title;

      document.querySelector('.proj-desc').innerHTML = appWuxProj.selectedPage.description;

      document.querySelector('.proj-tools').innerHTML = appWuxProj.selectedPage.tools;

      document.querySelector('.proj-brief').innerHTML = appWuxProj.selectedPage.brief;

      document.querySelector('.proj-idid').innerHTML = appWuxProj.selectedPage.iDid;

      document.querySelector('.go-to-proj-btn a').href = appWuxProj.selectedPage.link;

      document.querySelector('.link--arrowed').href = appWuxProj.selectedPage.link;

      document.querySelector('.proj-img img').src = appWuxProj.selectedPage.img;

      document.title += `  ${appWuxProj.selectedPage.title}`;
    }
  }; //appwuxproj ends

  // GRAPHIC.HTML
  // ==========================================
  var appGraphic = {

    bubbles: [],

    init: () => {
      appGraphic.addProjs();
      appGraphic.click();
    },

    addProjs: () => {
      for (var i = 0; i < graphic.length; i++) {
        document.querySelector('.work-bbls').innerHTML += `
        <div class="bubble-container">
            <div id="bubble${i}" class="bubble">
            <a href="#" id="${graphic[i].id}" class="project">
              <h5 class="light-pal">${graphic[i].title}</h5>
                <img src="${graphic[i].img}" alt="${graphic[i].title} Project Preview"></a>
            </div>
        </div>
        `;

        appGraphic.bubbles.push(`#bubble${i}`) ;
      } //for loop ends

      setInterval(appGraphic.anims, 1000);

      appGraphic.setBbls();

      document.querySelector('.loader-container').style.opacity = 1;
      document.querySelector('.loader-container').style.display = 'flex';

      document.querySelector('.work-bbls').style.opacity = 0;

      window.addEventListener('load', () => {
        document.querySelector('.loader-container').style.opacity = 0;
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.work-bbls').style.opacity = 1;
        appGraphic.bblAppear();
      });
    },

    setBbls: () => {
      for (var i = 0; i < appGraphic.bubbles.length; i++) {
        document.querySelector(`#bubble${i}`).style.opacity = '0';
      }
    },

    bblAppear: () => {
      var bblTime = 500;

      for (let i = 0; i < appGraphic.bubbles.length; i++) {
        setTimeout(() => {
        document.querySelector(`#bubble${i}`).style.opacity = '1';

        }, bblTime);

        bblTime += 800;
      }
      appGraphic.anims();
    },

    anims: () => {
      var container = document.querySelector('.work-bbls');

      var height = container.offsetHeight;
      var width = container.offsetWidth;

      for (var i = 0; i < appGraphic.bubbles.length; i++) {
        anime({
          targets: `${appGraphic.bubbles[i]}`,
          translateY: Math.floor(Math.random() * height),
          translateX: Math.floor(Math.random() * width),
          loop: false,
          direction: 'alternate',
          easing: 'easeInOutCirc'
        });
      }
    }, //anims

    click: () => {
      window.addEventListener('click', (e) => {
        if (e.target.parentNode.className == 'project') {
          sessionStorage.setItem('selected', e.target.parentNode.id);
          window.location.href = 'graphic-proj.html';
        } //if e target
      }, false);
    }
  }; //appGraphic ends

  // GRAPHIC-PROJ.HTML
  // ==========================================
  appGraphicProj = {

    selectedPage: false,

    init: () => {
      appGraphicProj.setup();
    },

    setup: () => {
      for (var i = 0; i < graphic.length; i++) {
        if (graphic[i].id == sessionStorage.selected) {
          appGraphicProj.selectedPage = graphic[i];
        } //if
      } //for

      document.querySelector('.proj-title').innerHTML = appGraphicProj.selectedPage.title;

      document.querySelector('.proj-brief').innerHTML = appGraphicProj.selectedPage.brief;

      document.querySelector('.proj-tools').innerHTML = appGraphicProj.selectedPage.tools;

      document.querySelector('.proj-desc').innerHTML = appGraphicProj.selectedPage.description;

      document.querySelector('.go-to-proj-btn a').href = appGraphicProj.selectedPage.link;

      document.querySelector('.link--arrowed').href = appGraphicProj.selectedPage.link;

      document.querySelector('.proj-img img').src = appGraphicProj.selectedPage.img;

      document.title += `  ${appGraphicProj.selectedPage.title}`;
    }
  };

  // DIGIART.HTML
  // ==========================================
  var appDigi = {

    selectedArt: false,

    bubbles: [],

    init: () => {
      appDigi.addProjs();
      appDigi.click();
    },

    addProjs: () => {
      for (var i = 0; i < digiArt.length; i++) {
        document.querySelector('.work-bbls').innerHTML += `
        <div class="bubble-container">
            <div id="bubble${i}" class="bubble">
            <a href="#" id="${digiArt[i].id}" class="project">
              <h5 class="light-pal">${digiArt[i].title}</h5>
                <img src="${digiArt[i].img}" alt="${digiArt[i].title} Project Preview"></a>
            </div>
        </div>
        `;

        appDigi.bubbles.push(`#bubble${i}`) ;
      } //for loop ends

      setInterval(appDigi.anims, 1000);

      appDigi.setBbls();

      document.querySelector('.loader-container').style.opacity = 1;
      document.querySelector('.loader-container').style.display = 'flex';

      document.querySelector('.work-bbls').style.opacity = 0;

      window.addEventListener('load', () => {
        document.querySelector('.loader-container').style.opacity = 0;
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.work-bbls').style.opacity = 1;
        appDigi.bblAppear();
      });
    },

    setBbls: () => {
      for (var i = 0; i < appDigi.bubbles.length; i++) {
        document.querySelector(`#bubble${i}`).style.opacity = '0';
      }
    },

    bblAppear: () => {
      var bblTime = 500;

      for (let i = 0; i < appDigi.bubbles.length; i++) {
        setTimeout(() => {
        document.querySelector(`#bubble${i}`).style.opacity = '1';

        }, bblTime);

        bblTime += 800;
      }
      appDigi.anims();
    },

    anims: () => {
      var container = document.querySelector('.work-bbls');

      var height = container.offsetHeight;
      var width = container.offsetWidth;

      for (var i = 0; i < appDigi.bubbles.length; i++) {
        anime({
          targets: `${appDigi.bubbles[i]}`,
          translateY: Math.floor(Math.random() * height),
          translateX: Math.floor(Math.random() * width),
          loop: false,
          direction: 'alternate',
          easing: 'easeInOutCirc'
        });
      }
    }, //anims

    click: () => {
      window.addEventListener('click', (e) => {
        if (e.target.parentNode.className == 'project') {
          sessionStorage.setItem('selected', e.target.parentNode.id);
          appDigi.setup();
        } //if e target
      }, false);
    },

    setup: () => {
      for (var i = 0; i < digiArt.length; i++) {
        if (digiArt[i].id == sessionStorage.selected) {
          appDigi.selectedArt = digiArt[i];
        } //if
      } //for

      document.querySelector('.section-img-overlay').style.display = 'flex';

      document.querySelector('body').style.overflow = 'hidden';

      document.querySelector('nav').style.height = '0';

      document.querySelector('.digi-title').innerHTML = `"${appDigi.selectedArt.title}"`;

      document.querySelector('.digi-img').src = appDigi.selectedArt.img;

      document.querySelector('.digi-img').alt = appDigi.selectedArt.title;

      document.querySelector('.digi-back').addEventListener('click', () => {
        document.querySelector('nav').style.height = '100px';
        document.querySelector('.section-img-overlay').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
      }, false);
    }
  }; //appDigi ends

  appAbt = {
    init: () => {
      anime({
        targets: '.circle-container',
        translateY: 20,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    }
  };
  // appAbt ends

  appContact = {
    init: () => {
      var tl = gsap.timeline({
        scrollTrigger: 'h3',
        ease: 'sine.inOut',
        scrub: true,
        start: 'top',
        end: '100% bottom',
      });

      tl
      .set('form', {
        opacity: 0,
        y: 50,
      })
      .to('form', {
        duration: 1,
        opacity: 1,
        y: 0
      });
    }
  };
  // appContact ends

  if (document.querySelector('#home')) {
    appHome.init();
  } else if (document.querySelector('#wux')) {
    appWux.init();
  } else if (document.querySelector('#wuxProj')) {
    appWuxProj.init();
  } else if (document.querySelector('#graphic')) {
    appGraphic.init();
  } else if (document.querySelector('#graphicProj')) {
    appGraphicProj.init();
  } else if (document.querySelector('#digiArt')) {
    appDigi.init();
  } else if (document.querySelector('#about')) {
    appAbt.init();
  } else if (document.querySelector('#contact')) {
    appContact.init();
  }

}());
