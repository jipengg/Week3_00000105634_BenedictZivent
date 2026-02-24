import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProfileProps {
  name: string;
  age: number;
}

const Profile: React.FC<ProfileProps> = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.age}>{age}</Text>
      <Text style={styles.text}>
        Halo, nama saya {name}
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  age: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});