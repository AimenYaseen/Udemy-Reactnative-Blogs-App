import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  // ID = navigation.getParam("id");

  const blogPost = state.find((post) => post.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
