import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("");
  
  const validAge: boolean = age.trim() !== "" && !isNaN(Number(age)) === true;
  const ageAsNumber: number = validAge ? Number(age) : 0;

  const lowerLimit: number = validAge ? (220 - ageAsNumber) * 0.65 : 0;
  const upperLimit: number = validAge ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate limits Calculator</Text>

      <Text>Enter your age:</Text>

      <TextInput
        placeholder="Age"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    backgroundColor: "white"
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16
  },
  text: {
    marginVertical: 16
  }
});
