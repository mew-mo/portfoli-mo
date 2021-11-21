(function() {

  console.log('linked up bestie :)');

  // project objects!
  // ==========================================

  // web/ux arr
  // ==================

  var web = [
    mrGos = {
      id: 'mrgos',
      title: 'Mr Go\'s',
      img: 'img/mrgos.png',
      link: 'https://drive.google.com/file/d/1aBpMzEfH1WXK_LerwuhTl0LmyPtNvZZ1/view',
      brief: 'A fully responsive wordpress website',
      tools: ['Wordpress'],
      description: 'In this project I designed and created a website for Mr Go\'s, an Asian Fusion restaurant based in Wellington, redesigning their current website. I used a prebuilt wordpress theme for this, and focused on simplifying the navigation and overall usability of the site through several rounds of user testing.'
    },
    burgerLiquor = {
      id: 'burgerliquor',
      title: 'Burger Liquor',
      img: 'img/burgerliquor.png',
      link: 'https://projects.invisionapp.com/prototype/BURGERLIQUOR-PROTOTYPE-fix-cka6dntzz008so1011fozkojn/play/3fbac871',
      brief: 'A prototype created through UX research and teamwork',
      tools: ['Invision'],
      description: 'This was a UX project in collaboration with Rachel Kibblewhite, Kris Furer and Matt Brown. The four of us created a prototype for Burger Liquor\'s online ordering app through user testing and iterating off what we learned until resulting in the final.'
    },
    kilRec = {
      id: 'kilrec',
      title: 'Kilbirnie Rec Centre',
      img: 'img/kilbirnierec.png',
      link: 'https://www.figma.com/proto/GQNTpCs7ciIL5j9meuyf5E/kilbirnie-rec-centre-prototype-collab-WORKING?node-id=93%3A184&scaling=scale-down',
      brief: 'A prototype created through UX research and teamwork',
      tools: ['Figma'],
      description: 'This was a UX project in collaboration with Rachel Kibblewhite, Kris Furer and Matt Brown. Our project acts as an event planner for the Kilbirnie Recreation Centre, where you can book to join events and view details on said events. We went through the process of UX research extensively to come up with the design, user flow, and overall nagation of the application prototype.'
    },
    sweetAs = {
      id: 'sweetas',
      title: 'Sweet As',
      img: 'img/sweetas.png',
      link: 'https://github.com/mew-mo/sweet-as',
      brief: 'A html/css/js site',
      tools: ['atom', 'npm', 'gulp'],
      description: ''
    },
    needAHand = {
      id: 'needahand',
      title: 'Need A Hand',
      img: 'img/needahand.png',
      link: 'https://github.com/mew-mo/need-a-hand',
      brief: 'A fullstack site developed with an agile team',
      tools: ['atom', 'npm', 'mongoDB', 'grunt'],
      description: ''
    },
    seaLionTrust = {
      id: 'nzslt',
      title: 'NZ Sea Lion Trust',
      img: 'img/nzslt.png',
      link: 'https://github.com/mew-mo/nz-sea-lion-trust',
      brief: 'A simple html/css/js site',
      tools: ['atom', 'koala'],
      description: ''
    },
    cc = {
      id: 'cc',
      title: 'Clockwork Creative',
      img: 'img/clockwork.png',
      link: 'https://github.com/mew-mo/clockwork-creative',
      brief: 'A custom Wordpress Theme with customization controls',
      tools: ['atom', 'wordpress', 'phpmyadmin'],
      description: ''
    }
  ];

  // graphic arr
  // ==================

  var graphic = [
    luma = {
      id: 'luma',
      title: 'Luma Lights Festival',
      img: 'img/luma.png',
      link: 'https://drive.google.com/uc?id=16zQq6fEFpG9rv4Gv9XyzFCgPrpCltInM',
      brief: 'Branding for Luma Lights Festival',
      tools: ['photoshop', 'illustrator'],
      description: 'A design project in which I created branding, posters and cards to promote Queenstown\'s Luma Lights Festival.'
    },
    dlw = {
      id: 'dlw',
      title: 'Don\'t Let Words',
      img: 'img/dlw.png',
      link: '#',
      brief: 'Branding for an anti-1080 Campaign',
      tools: ['photoshop', 'illustrator'],
      description: 'This design project utilised the tagline "Don\'t Let Words be all that\'s left of them" to campaign against 1080 poisoning in New Zealand. I created posters, logos, brochures and merchandise for this project.'
    },
    mmca = {
      id: 'mmca',
      title: 'MMCA',
      img: 'img/mmca.png',
      link: '#',
      brief: 'Brochure for the MMCA Museum',
      tools: ['photoshop', 'indesign'],
      description: 'This project was for designing a brochure for the MMCA- The National Museum of Modern and Contemporary Art, located in South Korea. It is primarily focused on navigation, and features a large cutout triangle that makes the map display even when the brochure is fully folded.'
    },
    tinyHouse = {
      id: 'tinyhouse',
      title: 'Tiny House',
      img: 'img/tinyhouse.png',
      link: '#',
      brief: 'Fictional Logo for Tiny House',
      tools: ['photoshop', 'indesign'],
      description: 'A small branding project, where I was challenged to create a logo for a fictional company that writes magazines about small houses.'
    },
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
      description: 'A project made in collaboration with Rane Magno. We created this alphabet chart for Maori Language Week with the theme of constellations and stars, which are of huge cultural importance to Maori people.'
    },
    snowdin = {
      id: 'snowdin',
      title: 'Snowdin Snacks',
      img: 'img/snowdin.png',
      link: '#',
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
    }
  ];


  // INDEX.HTML
  // ==========================================
  var appHome = {
    // pulling hero stuff
    title: document.querySelector('.title'),
    subtitle: document.querySelector('.subtitle'),
    iSubtitle: document.querySelector('.i-subtitle'),

    init: () => {
      appHome.heroAnims();
    },

    heroAnims: () => {
      document.querySelector('.link--arrowed').addEventListener('click', () => {
        console.log('YO');

        document.querySelector('.entry-txt h1').classList.add = 'vanish';

        // anime({
        //   targets: appHome.title,
        //   scale: 0.2,
        //   marginLeft: '-90px',
        // });
        anime({
          targets: appHome.subtitle,
          scale: 0.2,
        });
      }, false);
    }
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

      document.querySelector('.proj-brief').innerHTML = appWuxProj.selectedPage.brief;

      document.querySelector('.proj-tools').innerHTML = appWuxProj.selectedPage.tools;

      document.querySelector('.proj-desc').innerHTML = appWuxProj.selectedPage.description;

      document.querySelector('.go-to-proj-btn a').href = appWuxProj.selectedPage.link;

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

      document.querySelector('body').style.overflowY = 'hidden';

      document.querySelector('nav').style.height = '0';

      document.querySelector('.digi-title').innerHTML = `"${appDigi.selectedArt.title}"`;

      document.querySelector('.digi-img').src = appDigi.selectedArt.img;

      document.querySelector('.digi-img').alt = appDigi.selectedArt.title;

      document.querySelector('.digi-back').addEventListener('click', () => {
        document.querySelector('nav').style.height = '100px';
        document.querySelector('.section-img-overlay').style.display = 'none';
        document.querySelector('body').style.overflowY = 'auto';

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
  }

}());
