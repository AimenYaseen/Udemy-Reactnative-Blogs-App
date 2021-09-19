import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Form = ({ postTitle, postContent, text, onSave }) => {
  const [title, setTitle] = useState(postTitle);
  const [content, setContent] = useState(postContent);

  return (
    <View style={styles.view1}>
      <Text style={styles.title}> {text} Post</Text>
      <View style={styles.view2}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(input) => setTitle(input)}
        />
        <Text style={styles.label}>Content:</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={(input) => setContent(input)}
        />
        <Button
          title={`${text} Post`}
          onPress={() => {
            onSave(title, content);
          }}
        />
      </View>
    </View>
  );
};

Form.defaultProps = () => {
  return {
    postTitle: "",
    postContent: "",
  };
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  label: {
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

export default Form;
