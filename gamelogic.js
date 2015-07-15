var myGame = {
  config : {

      lives: 5,
      speed : 0.7,
      actionButton: 'leftmouse',
  //    collisionNames : ['Icosphere','Cube'],//remove when possible
      endTrigger : 'Trigger.End',
      screenImages : [
        {
          src:'Start_Screen.png',
          id : 'mainScreen'
        },
        {
          src : 'Lose_Screen.png',
          id : 'loseScreen'
        },
        {
          src : 'Win_Screen.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : 'Zelda_Heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 0,
          y : 0,
          z : -20
        },
        rotation : {
          x: 0,
          y: 0,
          z: 0.000
        }
      }
  },

  scripts : function(){
    //TODO this is where you can add your own game logic
  }
};

function start(){
    myGame.game = new A3D.Game.Scroller(myGame.config);
    myGame.game.loadScene('/','MyGame.babylon',myGame.scripts);
}

document.addEventListener( "DOMContentLoaded", start, false );
