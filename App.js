import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./src/Home/Home";

export default function App() {
  return (
    <View className="flex mt-[200px] ">
      <Home></Home>
      <StatusBar />
    </View>
  );
}
