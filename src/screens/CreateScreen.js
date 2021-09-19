import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.view1}>
      <Text style={styles.title}>Create Post</Text>
      <View style={styles.view2}>
        <Text style={styles.text}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.text}>Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <Button
          title="Add Post"
          onPress={() => {
            addBlogPost(title, content, () => navigation.navigate("Index"));
            //navigation.navigate("Index");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    //marginLeft: 15,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
  },
  view1: {
    flex: 1,
    alignItems: "center",
  },
  view2: {
    margin: 20,
    height: 250,
    width: 300,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    padding: 15,
    //justifyContent: "center",
  },
});

export default CreateScreen;
