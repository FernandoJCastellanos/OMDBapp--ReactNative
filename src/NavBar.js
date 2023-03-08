// Environment
import { Text, View, Image, SafeAreaView, TextBase } from 'react-native';

// CSS
import styles from "./styles";

// Components
 import IMDBlogo from "../assets/IMDBLogo.png";
 import Burger from "../assets/Burger.png";



export default function NavBar() {
  return (
    <SafeAreaView>
        <View style={styles.NavBarContainer}>
            <Image style={styles.IMDBIcon} source={IMDBlogo} />
            <Image style={styles.BurgerIcon} source={Burger} />
        </View>
    </SafeAreaView>
  );
}