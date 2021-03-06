import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <Text />
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
