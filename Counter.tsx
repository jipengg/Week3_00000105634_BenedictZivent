import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CounterProps {
  value: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  handleIncrement,
  handleDecrement,
  handlePassValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ageText}>{value}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePassValue}>
          <Text style={styles.buttonText}>Pass Value</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ageText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: "#2196F3",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  button: {
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});