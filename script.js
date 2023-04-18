var lyrics = [
  ["N", "i"],
  ["n", "i"],
  ["I just sort of always feel sick without you baby"],
  ["Siempre me siento mal sin ti, cariño"],
  ["I ain't got anything to lick without you baby"],
  ["No tengo nada que lamer sin ti, cariño"],
  ["Nothing really sticks without you baby"],
  ["Nada parece quedarse sin ti, nena"],
  ["Ain't I fallen in love?"],
  ["¿No me he enamorado?"],
  ["It's just the pits without you baby"],
  ["Son solo los pozos sin ti, nena"],
  ["It's really just the pits without you baby"],
  ["Es realmente solo lo peor sin ti, nena"],
  ["It's like everyone's a dick without you baby"],
  ["Es como si todo el mundo fuera un idiota sin ti, cariño"],
  ["Ain't I fallen in love?"],
  ["¿No me he enamorado?"],
  ["And all my pals will tell me that I'm crazy"],
  ["Y todos mis amigos me dirán que estoy loco"],
  ["You bet I'm loopy alright!"],
  ["¡Puedes apostar que estoy loco!"],
  ["And I just don't recognize this fool that you"],
  ["Y simplemente no reconozco a este tonto"],
  ["Have made me,"],
  ["Que me has hecho"],
  ["I haven't seen him for a while"],
  ["Whoa, no lo he visto por un tiempo"],
  ["And as you're shrinking figure blows a kiss"],
  ["Y mientras tu figura encogida lanza un beso"],
  ["I catch and smash it on my lips"],
  ["Lo atrapo y lo rompo en mis labios"],
  ["Darling I can't seem to quit"],
  ["Cariño, parece que no puedo renunciar"],
  ["Completely falling to bits"],
  ["Completamente cayendo en pedazos"],
  ["I really might be losing it"],
  ["Realmente podría estar perdiéndolo"],
  ["The idea that you've existed all along's"],
  ["La idea de que has existido todo el tiempo es"],
  ["Ridiculous"],
  ["Ridícula"],
  ["I don't know what to say"],
  ["No se que decir"],
  ["Baby we ought to fuck seven years of bad"],
  ["Bebé, deberíamos follar, Siete años de mala suerte"],
  ["Luck out the powder room mirror"],
  ["En el espejo del tocador"],
  ["Could I have made it any clearer?"],
  ["¿Podría haberlo dejado más claro?"],
  ["It's love like a tongue in a nostril"],
  ["Es amor como una lengua en una fosa nasal"],
  ["Love like an ache in the jaw"],
  ["Amo como un dolor en la mandíbula"],
  ["You're the first day of spring with a septum piercing"],
  ["Eres el primer dia de primavera, con un piercing en el tabique"],
  ["Little miss sweet dreams, tenneesse"],
  ["Pequeña señorita dulces sueños, tenneese"]
];

var currentLyricIndex = 0;
var lyricElement = document.querySelector(".lyrics p");
var nextButton = document.querySelector("#next");

nextButton.addEventListener("click", function () {
  currentLyricIndex += 2;
  if (currentLyricIndex >= lyrics.length) {
    currentLyricIndex = 0;
  }
  var currentLyrics = lyrics.slice(currentLyricIndex, currentLyricIndex + 2);
  lyricElement.innerHTML = currentLyrics
    .map(function (lyric) {
      return "<p>" + lyric.join("<br>") + "</p>";
    })
    .join("");
});

var audio = document.querySelector("audio");
var playPauseButton = document.querySelector("#play-pause");

playPauseButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
  }
});
