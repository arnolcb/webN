//Using musixmatch API

/*
async function fetchLyrics() {
  const artist = "The last shadow puppets";
  const song = "Sweet dreams, TN";
  const apiKey = "8b596df18f3295280dde90661bb88e02";

  const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_artist=${artist}&q_track=${song}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.message.body.lyrics) {
      const lyrics = data.message.body.lyrics.lyrics_body;
      const lyricsElement = document.getElementById("lyrics");

      // Agregar el contenido y clases de Tailwind CSS al elemento <p>
      lyricsElement.innerHTML = lyrics;
      lyricsElement.classList.add("text-white");
    } else {
      const lyricsElement = document.getElementById("lyrics");
      lyricsElement.innerHTML = "No se encontraron letras para esta canción.";
      lyricsElement.classList.add("text-red-500");
    }
  } catch (error) {
    console.error("Error fetching lyrics:", error);
    const lyricsElement = document.getElementById("lyrics");
    lyricsElement.innerHTML = "Ocurrió un error al obtener las letras.";
    lyricsElement.classList.add("text-red-500");
  }
}

// Llamar a la función al cargar la página
fetchLyrics();
*/