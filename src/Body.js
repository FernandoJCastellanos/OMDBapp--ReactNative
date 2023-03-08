// Environment
import { Text, View, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// CSS
import styles from "./styles";

// Components
import MovieList from "./Components/MovieList.js";
import MovieListHeading from "./Components/MovieListHeading.js";
import SearchBox from "./Components/SearchBox.js";

export default function Body() {
  // we are getting a list of movies from the search query and feeding it to the component
  const [movies, setMovies] = useState([]);
  // we are getting a random list of movies current year and feeding it to the component
  const [currentMovies, setCurrentMovies] = useState([]);
  // we are setting search value, updating it on every entry and feeding it to api
  const [searchValue, setSearchValue] = useState("");
  // We are setting favorite movie list
  const [favorites, setFavorites] = useState([]);

  const myAPIKey = "a1380b7d";

  // Here we are requesting info from the API from the SearchBox
  const getMovieRequest = async (searchValue, myAPIKey) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${myAPIKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  // Here we are updating the search value and feeding the API to get request
  useEffect(() => {
    getMovieRequest(searchValue, myAPIKey);
  }, [searchValue]);

  // We are saving the favorite movie list to the local storage
  const saveFavoriteList = async (favorites) => {
    try {
      await AsyncStorage.setItem(
        "favoriteMovieList",
        JSON.stringify(favorites)
      );
      console.log("Favorites saved successfully.");
    } catch (error) {
      console.log("Error saving favorites:", error);
    }
  };

  // This function is to add items to the Favorite List also remove duplicates, we also run save favoritelist to local storage function
  const addFavoriteMovie = (movie) => {
    const isDuplicate = favorites.some(
      (favorite) => favorite.imdbID === movie.imdbID
    );
    if (!isDuplicate) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveFavoriteList(newFavoriteList);
    }
  };
  // This function is to remove items from the Favorite List, we also run save favoritelist to local storage function
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    saveFavoriteList(newFavoriteList);
  };

  // Here we load the saved movie list and upload it to the setFavorites useState
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesString = await AsyncStorage.getItem("favoriteMovieList");
        if (favoritesString !== null) {
          const favorites = JSON.parse(favoritesString);
          setFavorites(favorites);
        } else {
          setFavorites([]);
        }
      } catch (error) {
        console.log("Error loading favorites:", error);
      }
    };
    loadFavorites();
  }, []);

  return (
    <View>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieListHeading heading="Movies" />
      <MovieList
        movies={movies}
        handleFavoriteClick={addFavoriteMovie}
        buttonTitle="Add to Favorite"
      />
      <MovieListHeading heading="Favorites" />
      <MovieList
        movies={favorites}
        handleFavoriteClick={removeFavoriteMovie}
        buttonTitle="Remove to Favorite"
      />
    </View>
  );
}
