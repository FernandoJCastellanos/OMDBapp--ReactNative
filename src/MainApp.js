// Environment
import { Text, View, Image, ScrollView } from "react-native";

// CSS
import styles from "./styles";

// Components
import NavBar from "./NavBar";
import ShopContextProvider from "../Context";
import Body from "./Body";

export default function MainApp() {
  return (
    <ShopContextProvider>
      <ScrollView>
        <NavBar />
        <Body />
      </ScrollView>
    </ShopContextProvider>
  );
}
