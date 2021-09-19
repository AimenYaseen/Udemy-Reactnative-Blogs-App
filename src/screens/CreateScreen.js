import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    margin: 10,
  },
  view1: {
    flex: 1,
    alignItems: "center",
  },
  view2: {
    margin: 10,
    height: 100,
    width: 100,
  },
});

export default CreateScreen;
