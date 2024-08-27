// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "contact harlon at 407-705-9585";
    speechSynthesis.speak(voice);
}
