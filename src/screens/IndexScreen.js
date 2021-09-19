import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  //console.log(value);
  return (
    <View>
      <Text />
      <Button title="Add Blog Post" onPress={() => addBlogPost()} />
      <Text />
      <FlatList
        data={state}
        keyExtractor={(posts) => posts.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.view}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialIcons style={styles.icon} name="delete" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 2,
    borderWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    marginLeft: 10,
  },
});

export default IndexScreen;
