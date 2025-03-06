
fetch("db.json")
    .then(response => response.json())
    .then(data => displayMovies(data.movies))
    .catch(error => console.error("Error loading movies:", error));


function displayMovies(movies) {
    const container = document.getElementById("movie-container");
    container.innerHTML = "";

    movies.slice(0, 25).forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.posterUrl}" alt="${movie.title}">
            <h2>${movie.title} (${movie.year})</h2>
            <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
        `;

        container.appendChild(card);

    });
}