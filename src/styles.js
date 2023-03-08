import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // NAVBAR    // NAVBAR    // NAVBAR   // NAVBAR   // NAVBAR
  NavBarContainer: {
    position: "relative",
    display: "flex",
    height: 6.5 * 16,
    width: "100%",
    backgroundColor: "grey",
  },

  IMDBIcon: {
    position: "absolute",
    display: "flex",
    zIndex: 3,
    top: 40,
    left: 20,
    height: 60,
    width: 60,
  },

  BurgerIcon: {
    position: "absolute",
    display: "flex",
    zIndex: 3,
    top: 55,
    right: 20,
    height: 35,
    width: 30,
  },

  PosterImages: {
    position: "relative",
    display: "flex",
    height: 300,
    width: 200,
  },

  TitleYear: {
    position: "relative",
    display: "flex",
    width: 200,
    height: 40,
    flexWrap: "wrap",
  },

  TitleHeading: {
    fontSize: 20,
    height: 30,
  },
});
