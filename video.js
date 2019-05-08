function main(){

  start = document.getElementById("start").value;
  end = document.getElementById("end").value;
  bucle = document.getElementById('bucle')

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

//  bucle.onclick =()=> {
//      videoP.currentTime = start
//  }

  function hora(segundos){
      var d = new Date(segundos*1000);
      // Ajuste de las 23 horas
      var hora = (d.getHours()==0)?23:d.getHours()-1;
      var hora = (hora<9)?"0"+hora:hora;
      var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
      var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
      return hora + ":" + minuto + ":" + segundo;

      if (end != 0 && videoP.currentTime > end ){
          videoP.currentTime = start;
      }
  }
  videoP.addEventListener("timeupdate",function(ev){
  document.getElementById("reloj").innerHTML = hora(videoP.currentTime);
  },true);

}
