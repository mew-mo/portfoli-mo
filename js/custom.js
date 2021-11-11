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
      description: 'wormwomrowmrow'
    },
    burgerLiquor = {
      id: 'burgerliquor',
      title: 'Burger Liquor',
      img: 'img/burgerliquor.png',
      link: 'https://projects.invisionapp.com/prototype/BURGERLIQUOR-PROTOTYPE-fix-cka6dntzz008so1011fozkojn/play/3fbac871',
      brief: 'A prototype created through UX research and teamwork',
      tools: ['Invision'],
      description: ''
    },
    kilRec = {
      id: 'kilrec',
      title: 'Kilbirnie Rec Centre',
      img: 'img/kilbirnierec.png',
      link: 'https://www.figma.com/proto/GQNTpCs7ciIL5j9meuyf5E/kilbirnie-rec-centre-prototype-collab-WORKING?node-id=93%3A184&scaling=scale-down',
      brief: 'A prototype created through UX research and teamwork',
      tools: ['Figma'],
      description: ''
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

      document.querySelector('.proj-img a').href = appWuxProj.selectedPage.link;

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
