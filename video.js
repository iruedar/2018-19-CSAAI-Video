function main()
{

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")

  //-- Establecer el tamaño del vídeo
  video1.width = 600;
  video1.height= 450;

  play = document.getElementById('play')

  //-- Al apretar el boton de ver video
  play.onclick = () => {

    //-- Indicar la fuente del vídeo
    video1.src = "videos/video1.mp4"
  }
}
