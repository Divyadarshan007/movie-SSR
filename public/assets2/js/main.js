const moviesDB = [
    {
        id: 0,
        title: "Dune: Part Two",
        genre: "Sci-Fi",
        year: 2024,
        rating: 8.9,
        description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
    },
    {
        id: 1,
        title: "Deadpool & Wolverine",
        genre: "Action",
        year: 2024,
        rating: 8.0,
        description: "Wade Wilson suits up again with an even more reluctant Wolverine to save his universe.",
        poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
    },
    {
        id: 2,
        title: "Inside Out 2",
        genre: "Animation",
        year: 2024,
        rating: 8.5,
        description: "Riley's mind headquarters is undergoing a sudden demolition to make room for new Emotions.",
        poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        backdrop: ""
    },
    {
        id: 3,
        title: "Godzilla x Kong",
        genre: "Action",
        year: 2024,
        rating: 7.2,
        description: "Two ancient titans clash in an epic battle as humans unravel their intertwined origins.",
        poster: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
        backdrop: ""
    },
    {
        id: 4,
        title: "Civil War",
        genre: "Thriller",
        year: 2024,
        rating: 7.4,
        description: "A journey across a dystopian future America, following a team of military-embedded journalists.",
        poster: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
        backdrop: ""
    }
];

const grid = document.getElementById('movie-grid');
const homeView = document.getElementById('home-view');
const detailsView = document.getElementById('details-view');

window.onload = function() {
    loadHeroSection();
    loadMovieGrid();
};

function loadHeroSection() {
    const heroMovie = moviesDB[0];
    document.getElementById('hero-title').innerText = heroMovie.title;
    document.getElementById('hero-desc').innerText = heroMovie.description;
    document.getElementById('hero-section').style.backgroundImage = `linear-gradient(to top, #141414, transparent), url('${heroMovie.backdrop}')`;
}

function showDetails(index) {
    const movie = moviesDB[index];

    document.getElementById('detail-title').innerText = movie.title;
    document.getElementById('detail-desc').innerText = movie.description;
    document.getElementById('detail-year').innerText = movie.year;
    document.getElementById('detail-rating').innerText = movie.rating;
    document.getElementById('detail-genre').innerText = movie.genre;
    document.getElementById('detail-poster').src = movie.poster;

    homeView.classList.remove('active');
    setTimeout(() => {
        homeView.style.display = 'none';
        detailsView.style.display = 'block';
        setTimeout(() => detailsView.classList.add('active'), 50);
        window.scrollTo(0, 0);
    }, 500);
}

function goHome() {
    detailsView.classList.remove('active');
    setTimeout(() => {
        detailsView.style.display = 'none';
        homeView.style.display = 'block';
        setTimeout(() => homeView.classList.add('active'), 50);
    }, 500);
}
