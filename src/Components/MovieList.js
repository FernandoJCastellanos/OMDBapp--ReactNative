import { Text, View, Image, ScrollView, Button } from "react-native";

// CSS
import styles from "../styles";

const MovieList = (props) => {
  return (
    <ScrollView horizontal>
      {props.movies.map((movie) => (
        <View key={movie.imdbID}>
          <Image
            style={styles.PosterImages}
            src={movie.Poster}
            alt={movie.Title}
          />
          <Text style={styles.TitleYear}>
            <Text style={styles.Title}>{movie.Title}</Text>
          </Text>
          <Text>
            <Text>{movie.Year}</Text>
          </Text>
          <Button
            onPress={() => props.handleFavoriteClick(movie)}
            title={props.buttonTitle}
          />
        </View>
      ))}
    </ScrollView>
  );
};
export default MovieList;
