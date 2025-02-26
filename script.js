// List of movies with their details
const movies = [
    {
      title: "Inception",
      year: 2010,
      rating: "8.8/10",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: "9.0/10",
      description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: "8.6/10",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: "8.7/10",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "9.3/10",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: "9.2/10",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      title: "Fight Club",
      year: 1999,
      rating: "8.8/10",
      description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into something much, much more."
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      rating: "8.9/10",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw attention away from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      rating: "8.9/10",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: "8.8/10",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    }
  ];
  
  // Function to display the list of movies
  function displayMovies() {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ''; // Clear current list
  
    movies.forEach((movie, index) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      movieItem.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
      `;
      movieItem.addEventListener("click", () => showMovieDetails(index));
      movieList.appendChild(movieItem);
    });
  
    // Display the movie list with a fade-in effect
    setTimeout(() => {
      movieList.style.opacity = 1;
    }, 300);
  }
  
  // Function to display movie details when clicked
  function showMovieDetails(index) {
    const movie = movies[index];
  
    document.getElementById("movie-title").innerText = movie.title;
    document.getElementById("movie-year").innerText = movie.year;
    document.getElementById("movie-rating").innerText = movie.rating;
    document.getElementById("movie-description").innerText = movie.description;
  
    const movieDetails = document.getElementById("movie-details");
    movieDetails.style.display = "block";
  
    // Fade-in effect for movie details
    setTimeout(() => {
      movieDetails.style.opacity = 1;
    }, 300);
  }
  
  // Initial load of movies
  displayMovies();
  