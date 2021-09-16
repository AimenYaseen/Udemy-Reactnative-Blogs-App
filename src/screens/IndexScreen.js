import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  //console.log(value);
  return (
    <View>
      <Text> Index Screen </Text>
      <Button title="Add Blog Post" onPress={() => addBlogPost()} />
      <Text></Text>
      <FlatList
        data={data}
        keyExtractor={(posts) => posts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
