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

  ];

  // digital art arr
  // ==================

  var digart = [

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


      // document.querySelector('#wuxProj').innerHTML += `We got the ${appWuxProj.selectedPage.title}`;
    }


  }; //appwuxproj ends


  if (document.querySelector('#home')) {
    appHome.init();
  } else if (document.querySelector('#wux')) {
    appWux.init();
  } else if (document.querySelector('#wuxProj')) {
    appWuxProj.init();
  }

}());
