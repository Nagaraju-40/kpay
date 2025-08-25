import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function UpiPinScreen() {
  const [pin, setPin] = useState("");

  const handleKeyPress = (key) => {
    if (key === "<") {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 4) {
      setPin(pin + key);
    }
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      alert("PIN entered successfully!");
      // Navigate to the next screen or check balance
    } else {
      alert("Enter a valid 4-digit PIN.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Bank & UPI Logo */}
      <Text style={styles.bankText}></Text>
      <Text style={styles.accountText}></Text>
      {/* <Text style={styles.upiText}>UPI ID:73xxxxxx77@kpay</Text> */}

      {/* Enter PIN Instruction */}
      <Text style={styles.enterPinText}>ENTER 4-DIGIT UPI PIN</Text>

      {/* PIN Input Display (Masked) */}
      <View style={styles.pinContainer}>
        {Array(4)
          .fill()
          .map((_, index) => (
            <Text key={index} style={styles.pinDot}>
              {pin[index] ? "•" : "_"}
            </Text>
          ))}
      </View>

      {/* Warning Message */}
      <View style={styles.warningBox}>
        <Icon name="error-outline" size={20} color="red" />
        <Text style={styles.warningText}>
          UPI PIN will keep your account secure from unauthorized access. Do not share this PIN with anyone.
        </Text>
      </View>

      {/* Numeric Keypad */}
      <View style={styles.keypad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "<"].map((key, index) => (
          <TouchableOpacity key={index} style={styles.key} onPress={() => key && handleKeyPress(key.toString())}>
            <Text style={styles.keyText}>{key === "<" ? "⌫" : key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Icon name="check-circle" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  bankText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  accountText: {
    fontSize: 16,
    color: "black",
    // marginBottom: 1,
  },
  upiText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6600",
  },
  checkBalanceText: {
    fontSize: 16,
    marginVertical: 2,
    color: "black",
  },
  enterPinText: {
    fontSize: 16,
    color: "black",
    marginBottom: 2,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  pinDot: {
    fontSize: 30,
    marginHorizontal: 10,
    color: "black",
  },
  warningBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "90%",
  },
  warningText: {
    fontSize: 14,
    marginLeft: 10,
    color: "black",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // width: "%",
  },
  key: {
    width: "30%",
    padding: 15,
    margin: 5,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    alignItems: "center",
  },
  keyText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  submitButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 50,
    marginTop: 20,
  },
});

