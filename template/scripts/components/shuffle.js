import { fetchTopMovies } from "../modules/api.js";
//Fisher yates shuffle
function shuffleArray(array) {
  let shuffled = [...array]; // Skapar en kopia för att inte ändra originalet
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
//Funktion som hämtar filmerna sen slumpar fram 5 trailers
export async function getRandomTrailers(count = 5) {
  const movies = await fetchTopMovies(); // Hämtar filmerna
  return shuffleArray(movies).slice(0, count); // Slumpar fram 5
}
//slumpar filmerna på första sidan
async function getRandomTopMovies() {
  const movies = await fetchTopMovies();
  return shuffleArray(movies);
}

export { getRandomTopMovies };
