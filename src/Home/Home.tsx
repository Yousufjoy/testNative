import { View, Text, Image, Button } from "react-native";
import React from "react";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <>
      <View>
        <Text className="text-center text-2xl ">All your pet needs</Text>
        <Text className="text-center text-[26px] text-[#2196F3]">A little</Text>
        <Text className="text-center text-[26px] text-[#2196F3]">Care</Text>
        <Text className="text-center text-[12px]">From You</Text>
      </View>
      <View className="px-[110px] py-[90px] absolute z-10 bottom-[300px]">
        <Image source={logo} style={{ width: 200, height: 200 }} />
      </View>
      <View className="bg-[#EEE9F2] h-full top-[200px] ">
        <Text className=" bottom-[-200px] text-center px-[10px] text-[#939393]">
          Furry Friends, Forever Love. Unleash happiness at our pet shop, where
          every pawprint finds its forever home
        </Text>
        <View
          style={{
            flex: 1,
            paddingTop: 250,
            flexDirection: "row",
            paddingLeft: 150,
          }}
        >
          <Button
            title="Sign In"
            style={{ backgroundColor: "#007bff", color: "#fff" }}
          />
          <Button title="Login" />
        </View>
      </View>
    </>
  );
}
