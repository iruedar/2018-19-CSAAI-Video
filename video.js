function main(){

  //-- video1
  video1 = document.getElementById("video1")
  video1.src = "video1.mp4"
  video1.width = 300;
  video1.height= 150;
  video1.onmouseover = () => {
      video1.muted=false;
    }
  video1.onmouseout = () => {
    video1.muted=true;
  }

  //-- video2
  video2 = document.getElementById("video2")
  video2.src = "video2.mp4"
  video2.width = 300;
  video2.height= 150;
  video2.onmouseover = () => {
      video2.muted=false;
    }
  video2.onmouseout = () => {
    video2.muted=true;
  }

  //-- video3
  video3 = document.getElementById("video3")
  video3.src = "video3.mp4"
  video3.width = 300;
  video3.height= 150;
  video3.onmouseover = () => {
      video3.muted=false;
    }
  video3.onmouseout = () => {
    video3.muted=true;
  }

  //-- videoPrincipal
  videoP = document.getElementById("videoPrincipal")
  videoP.src = "test.mp4"
  videoP.width = 600;
  videoP.height = 300;

  // -- Boton de play
  play1 = document.getElementById('play1')
  play2 = document.getElementById('play2')
  play3 = document.getElementById('play3')

  reloj = document.getElementById('reloj')
  display = document.getElementById('display')
  //-- Al apretar el boton de ver video
  play1.onclick = () => {
    //-- Indicar la fuente del vídeo
    videoP.src = video1.src
    //-- Sincronizacion de los dos videos
    videoP.currentTime = video1.currentTime
    display.innerHTML = 'VIDEO 1'

  }
  play2.onclick = () => {
    //-- Indicar la fuente del vídeo
    videoP.src = video2.src
    //-- Sincronizacion de los dos videos
    videoP.currentTime = video2.currentTime
    display.innerHTML = 'VIDEO 2'
  }
  play3.onclick = () => {
    //-- Indicar la fuente del vídeo
    videoP.src = video3.src
    //-- Sincronizacion de los dos videos
    videoP.currentTime = video3.currentTime
    display.innerHTML = 'VIDEO 3'
  }

  bucle = document.getElementById('bucle')
  bucle.onclick =()=> {

      videoP.currentTime = 0;
  }


//-- Reloj
  videoP.addEventListener("timeupdate",function(ev){
    var time  = (videoP.currentTime);
    var hours = Math.floor( time / 3600 );
    var minutes = Math.floor( (time % 3600) / 60 );
    var seconds = Math.floor(time % 60);
    var result = hours + ":" + minutes + ":" + seconds;
    reloj.innerHTML = result;
  },true);

}
