import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const value = useContext(BlogContext);
  console.log(value);
  return (
    <View>
      <Text> Index Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
