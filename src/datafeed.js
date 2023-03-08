// we are getting a random list of movies current year and feeding it to the component
const [currentMovies, setCurrentMovies] = useState([]);

// Here we get a request of random movies from specific year
const fetchRandomMovies = async (year) => {
  const url = `http://www.omdbapi.com/?apikey=a1380b7d&s=&y=${year}&type=movie&r=json&plot=short&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  const randomMovies = data.Search.sort(() => Math.random() - 0.5).slice(0, 10);
  if (randomMovies.Search) {
    setCurrentMovies(randomMovies);
  }
};

// set list of random movies from current year on app mount
useEffect(() => {
  fetchRandomMovies(currentYear);
}, [currentYear]);

<MovieList
  movies={currentMovies}
  handleFavoriteClick={removeFavoriteMovie}
  buttonTitle="Remove to Favorite"
/>;
