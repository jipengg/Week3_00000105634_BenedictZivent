import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("Anonymous");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setFinalName(name === "" ? "Anonymous" : name);
  };

return (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        Halo nama ku, {finalName}!
      </Text>
      <Text style={styles.text}>
        Umur ku, {count} tahun
      </Text>
      <Text style={styles.number}>{count}</Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>INCREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <Text style={styles.buttonText}>DECREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePassValue}>
        <Text style={styles.buttonText}>PASS VALUE</Text>
      </TouchableOpacity>
    </View>

    <TextInput
      style={styles.input}
      placeholder="Input your name here"
      value={name}
      onChangeText={setName}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    paddingTop: 250,
  },

  textContainer: {
    width: 220,
    marginBottom: 25, 
  },

  text: {
    fontSize: 15,
    textAlign: "left",
    marginBottom: 3,
  },

  number: {
    fontSize: 18,
    textAlign: "left",
    marginTop: 8,
  },

  buttonContainer: {
    backgroundColor: "#4ea3d8",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },

  button: {
    paddingVertical: 6,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: "#888",
    width: 200,
    height: 38,
    paddingHorizontal: 10,
    backgroundColor: "#eeeeee",
  },
});