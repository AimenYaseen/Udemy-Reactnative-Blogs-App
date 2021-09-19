import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Form from "../components/Form";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Form
        text="Create"
        onSave={
          (title, content) =>
            addBlogPost(title, content, () => navigation.navigate("Index"))
          //navigation.navigate("Index");
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
