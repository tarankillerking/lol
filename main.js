var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start() {
   document.getElementById("textbox").innerHTML=""
recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
var content=event.results[0][0].transcript
document.getElementById("textbox").innerHTML=content
console.log(content)
if (content=="take my selfie") {
 speak()  
}

}
function speak(){
    var synth=window.speechSynthesis
 speakdata="taking you selfie in a sec"  
 var utter_this= new SpeechSynthesisUtterance(speakdata)
 synth.speak(utter_this)
 Webcam.attach(camera)
setTimeout(() => {
    takeselfie()
    save()  
}, 1000);
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:90
})
function takeselfie() {
Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML='<img id="selfieimg" src="'+data_uri+'"/>'

})
}
function save() {
    var link=document.getElementById("link")
    image=document.getElementById("selfieimg").src
    link.href=image
    link.click()
}