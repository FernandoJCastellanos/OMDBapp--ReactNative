import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainApp from "./src/MainApp";
import styles from "./src/styles";




export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <MainApp />
    </View>
  );
}