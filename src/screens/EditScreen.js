import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Form from "../components/Form";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((post) => post.id === id);

  return (
    <View>
      <Form
        text="Edit"
        postTitle={blogPost.title}
        postContent={blogPost.content}
        onSave={(title, content) =>
          editBlogPost(id, title, content, () => navigation.pop())
        }
      />
    </View>
  );
};

EditScreen.navigationOptions = () => {
  return {
    title: "Edit Post",
  };
};

const styles = StyleSheet.create({});

export default EditScreen;
