var SpeechRecognition = window.webkitSpeechRecognition;
var conteudo;
var recognition = new SpeechRecognition();
var imagem;
function iniciar(){
    recognition.start();
}
recognition.onresult=function(evento){
    conteudo=evento.results[0][0].transcript.toLowerCase();
    if(conteudo=="selfie"){
        falar();
    }
};
function falar(){
    var synth=window.speechSynthesis;
    Webcam.attach(camera);
    var dado_da_fala="sua selfie sera tirada";
    var utterThis = new SpeechSynthesisUtterance(dado_da_fala);
    synth.speak(utterThis);

    setTimeout(function(){
        imagem="selfie1";
        foto();
        dado_da_fala="tirando seu selfe em 5 segundos 5 4 3 2 1";
        utterThis = new SpeechSynthesisUtterance(dado_da_fala);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function(){
        imagem="selfie2";
        foto();
        dado_da_fala="tirando seu selfe em 10 segundos 10 9 8 7 6 5 4 3 2 1";
        utterThis = new SpeechSynthesisUtterance(dado_da_fala);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function(){
        imagem="selfie3";
        foto();
        dado_da_fala="tirando seu selfe em 15 segundos 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1";
        utterThis = new SpeechSynthesisUtterance(dado_da_fala);
        synth.speak(utterThis);
    }, 15000);
}
var camera=document.getElementById("camera");
Webcam.set({
    width:600,
    height:480,
    image_format:"png",
    png_quality:90
});
function foto(){
    Webcam.snap(
        function(dataURI){
            if(imagem=="selfie1"){
                document.getElementById("foto1").src=dataURI;
            }
            if(imagem=="selfie2"){
                document.getElementById("foto2").src=dataURI;
            }
            if(imagem=="selfie3"){
                document.getElementById("foto3").src=dataURI;
            }
        }
    );
}