it might still be useful! sometime!

// rip anims

anims: () => {
  var randomMovement = function() {
      return anime.random(-20, 20) + 'rem';
  };

  var randomSpeed = function() {
    return anime.random(1000, 5000) + 'rem';
  };

  var offset = 0;

  $(document).ready(function(){
    animation();
  });

  function animation() {
    console.log("animation");
    var timelineParameters = anime.timeline({
    loop: false
  });

  timelineParameters
  .add({
      targets: appWux.bubbles,
      translateX: 0,
      translateY: 0
      // duration:
    });

    for (var i = 0; i < appWux.bubbles.length; i++) {
      timelineParameters
      .add({
          targets: `${appWux.bubbles[i]}`,
          translateX: [ { value: randomMovement  }, { value: randomMovement }, { value: randomMovement } ],
          translateY: [ { value: randomMovement  }, { value: randomMovement }, { value: randomMovement } ],
          easing: 'linear',
          duration: randomSpeed,
          offset: offset
      });

      offset += 100;
      console.log(offset);
      console.log(appWux.bubbles[i]);
      timelineParameters.complete = function() {animation();};
      }
    }//forloop

// animation function ends
} //anims


// struggling

anims: () => {
  console.log('ehehrkj');
  function moveDiv() {
      var bubbles = $(".bubble");

      bubbles.animate(1000, function() {
          var maxLeft = $('.section-wux').width() - bubbles.width();
          var maxTop = $('.section-wux').height() - bubbles.height();
          var leftPos = Math.floor(Math.random() * (maxLeft + 9))
          var topPos = Math.floor(Math.random() * (maxTop + 9))

          bubbles.css({ left: leftPos, top: topPos }).animate(1000);
      });
  };

  moveDiv();
  setInterval(moveDiv, 300);
} //anims
setInterval(appWux.anims, 1000 / fps);
