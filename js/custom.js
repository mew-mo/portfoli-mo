(function() {

  console.log('linked up bestie :)');

  // project objects!
  // ==========================================

  // web/ux obj
  // ==================

  var web = {

  };

  // graphic obj
  // ==================

  var graphic = {

  };

  // digital art obj
  // ==================

  var digart = {

  };



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

  if (document.querySelector('#home')) {
    appHome.init();
  }

}());
