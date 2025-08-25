import React, { useState } from "react";
import { useRouter } from "expo-router"; // Import useRouter

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const AddCardScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [validMonth, setValidMonth] = useState("");
  const [validYear, setValidYear] = useState("");
  const [name, setName] = useState("");

  const router = useRouter(); // Initialize the router

  const handleCardNumberChange = (text) => {
    // Remove non-numeric characters and format with spaces after every 4 digits
    const cleanedText = text.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedText = cleanedText
      .match(/.{1,4}/g) // Group digits in blocks of 4
      ?.join(" ") // Add spaces between groups
      .slice(0, 19); // Limit to 19 characters (16 digits + 3 spaces)
    setCardNumber(formattedText);
  };

  const validateAndSubmit = () => {
    const cleanedCardNumber = cardNumber.replace(/\s/g, ""); // Remove spaces
    if (cleanedCardNumber.length !== 16 || isNaN(cleanedCardNumber)) {
      Alert.alert("Error", "Card Number must be 16 numeric characters.");
      return;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
      Alert.alert("Error", "CVV must be 3 numeric characters.");
      return;
    }
    if (
      validMonth.length !== 2 ||
      validYear.length !== 4 ||
      isNaN(validMonth) ||
      isNaN(validYear) ||
      parseInt(validMonth) < 1 ||
      parseInt(validMonth) > 12
    ) {
      Alert.alert(
        "Error",
        "Valid Till must contain a valid 2-digit month (01-12) and a 4-digit year."
      );
      return;
    }
    Alert.alert("Success", "Card added successfully!");
    router.push("/landing"); // Navigate to the "landing" page after successful validation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Card</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Card Number"
        keyboardType="numeric"
        maxLength={19} // 16 digits + 3 spaces
        value={cardNumber}
        onChangeText={handleCardNumberChange}
      />
      <Text style={styles.till}>Valid Till</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          value={validMonth}
          onChangeText={setValidMonth}
        />
        <TextInput
          style={[styles.input, styles.mediumInput]}
          placeholder="YYYY"
          keyboardType="numeric"
          maxLength={4}
          value={validYear}
          onChangeText={setValidYear}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="CVV"
          keyboardType="numeric"
          maxLength={3}
          value={cvv}
          onChangeText={setCvv}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Add Your Name (Optional)"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.addButton} onPress={validateAndSubmit}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5e8ce",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4a7c3e",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallInput: {
    width: "30%",
  },
  mediumInput: {
    width: "40%",
  },
  addButton: {
    backgroundColor: "#4a7c3e",
    paddingVertical: 12,
    borderRadius: 28,
    alignItems: "center",
  },
  addButtonText: {
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
  till: {
    color: "green",
    fontWeight: "bold",
  },
});

export default AddCardScreen;