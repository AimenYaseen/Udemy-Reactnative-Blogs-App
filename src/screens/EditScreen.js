import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EditScreen = () => {
  return (
    <View>
      <Text> Edit Screen </Text>
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
