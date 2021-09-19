import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  // ID = navigation.getParam("id");

  const blogPost = state.find((post) => post.id === navigation.getParam("id"));

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Details of Post",
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  view: {
    height: 250,
    width: 350,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
    padding: 15,
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  content: {
    fontSize: 18,
  },
});

export default ShowScreen;
