var lyrics = [
    ["I just sort of always feel sick without you baby", "Siempre me siento mal sin ti, cariño", 0],
    ["I ain't got anything to lick without you baby", "No tengo nada que lamer sin ti, cariño", 7],
    ["Nothing really sticks without you baby", "Nada parece quedarse sin ti, nena", 14],
    ["Ain't I fallen in love?", "¿No me he enamorado?", 20],
    ["It's just the pits without you baby", "Son solo los pozos sin ti, nena", 28],
    ["It's really just the pits without you baby", "Es realmente solo lo peor sin ti, nena", 34],
    ["It's like everyone's a dick without you baby", "Es como si todo el mundo fuera un idiota sin ti, cariño", 39],
    ["Ain't I fallen in love?", "¿No me he enamorado?", 47],
    ["And all my pals will tell me that I'm crazy", "Y todos mis amigos me dirán que estoy loco", 54],
    ["You bet I'm loopy alright!", "¡Puedes apostar que estoy loco!", 65],
    ["And I just don't recognize this fool that you", "Y simplemente no reconozco a este tonto", 77],
    ["Have made me,", "Que me has hecho", 86],
    ["I haven't seen him for a while", "Whoa, no lo he visto por un tiempo", 90],
    ["And as you're shrinking figure blows a kiss", "Y mientras tu figura encogida lanza un beso", 103],
    ["I catch and smash it on my lips", "Lo atrapo y lo rompo en mis labios", 111],
    ["Darling I can't seem to quit", "Cariño, parece que no puedo renunciar", 119],
    ["Completely falling to bits", "Completamente cayendo en pedazos", 125],
    ["I really might be losing it", "Realmente podría estar perdiéndolo", 131],
    ["The idea that you've existed all along's", "La idea de que has existido todo el tiempo es", 137],
    ["Ridiculous", "Ridícula", 148],
    ["I don't know what to say", "No sé que decir", 150],
    ["Baby we ought to f***, seven years of bad luck", "Bebé, deberíamos f*****, Siete años de mala suerte", 156],
    ["Out the powder room mirror", "En el espejo del tocador", 165],
    ["Could I have made it any clearer?", "¿Podría haberlo dejado más claro?", 170],
    ["It's love like a tongue in a nostril", "Es amor como una lengua en una fosa nasal", 176],
    ["Love like an ache in the jaw", "Amo como un dolor en la mandíbula", 183],
    ["You're the first day of spring with a septum piercing", "Eres el primer dia de primavera, con un piercing en el tabique", 189],
    ["Little miss sweet dreams, tenneesse", "Pequeña señorita dulces sueños, tenneese", 194],
];
  

function showLyrics(currentTime) {
    const lyricsElementEnglish = document.getElementById("lyrics-english");
    const lyricsElementSpanish = document.getElementById("lyrics-spanish");
    let currentLine = -1;

    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i][2]) {
            currentLine = i;
        } else {
            break;
        }
    }

    if (currentLine !== -1) {
        let textLines = lyrics[currentLine];

        // Mostrar el texto en inglés en un tamaño mediano y el texto en español en un tamaño menor
        lyricsElementEnglish.innerHTML = `<span class="text-lg">${textLines[0]}</span>`;
        lyricsElementSpanish.innerHTML = `<span class="text-sm">${textLines[1]}</span>`;
    } else {
        lyricsElementEnglish.innerHTML = "";
        lyricsElementSpanish.innerHTML = "";
    }

    requestAnimationFrame(() => showLyrics(Math.floor(document.getElementById("audioPlayer").currentTime)));
}

document.getElementById("audioPlayer").addEventListener("play", () => {
    requestAnimationFrame(() => showLyrics(Math.floor(document.getElementById("audioPlayer").currentTime)));
});

document.getElementById("audioPlayer").addEventListener("pause", () => {
    document.getElementById("lyrics-english").innerHTML = "";
    document.getElementById("lyrics-spanish").innerHTML = "";
});

document.getElementById("audioPlayer").addEventListener("ended", () => {
    document.getElementById("lyrics-english").innerHTML = "";
    document.getElementById("lyrics-spanish").innerHTML = "";
});