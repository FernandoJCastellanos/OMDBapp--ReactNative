import { View, Text } from "react-native";
import styles from "../styles";

const MovieListHeading = (props) => {
  return (
    <View style={styles.TitleHeading}>
      <Text>{props.heading}</Text>
    </View>
  );
};

export default MovieListHeading;
