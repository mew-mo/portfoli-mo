(function() {

  console.log('linked up bestie :)');

  // project objects!
  // ==========================================

  // web/ux arr
  // ==================

  var web = [
    miniFoli = {
      id: 'minifoli',
      title: 'Mini Portfolio',
      img: 'img/minifoli.png'
    },
    mrGos = {
      id: 'mrgos',
      title: 'Mr Go\'s',
      img: 'img/mrgos.png'
    },
    burgerLiquor = {
      id: 'burgerliquor',
      title: 'Burger Liquor',
      img: 'img/burgerliquor.png'
    },
    kilRec = {
      id: 'kilrec',
      title: 'Kilbirnie Rec Centre',
      img: 'img/kilbirnierec.png'
    },
    sweetAs = {
      id: 'sweetas',
      title: 'Sweet As',
      img: 'img/sweetas.png'
    },
    needAHand = {
      id: 'needahand',
      title: 'Need A Hand',
      img: 'img/needahand.png'
    },
    seaLionTrust = {
      id: 'nzslt',
      title: 'NZ Sea Lion Trust',
      img: 'img/nzslt.png'
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
          console.log(appWuxProj.selectedPage);
        } //if
      } //for

      document.querySelector('#wuxProj').innerHTML += `We got the ${appWuxProj.selectedPage.title}`;
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
