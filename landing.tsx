import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleKeyPress = (key) => {
    if (key === "<") {
      setInput(input.slice(0, -1));
    } else if (input.length < 6) {
      setInput(input + key);
    }
  };

  return (
    <View style={styles.container}>
      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pin")}>
          <Icon name="account-balance-wallet" size={30} color="yellow" />
          <Text style={styles.buttonText}>Check Balance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => router.push("/account")}
        >
          <Icon name="account-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Amount Display */}
      <Text style={styles.amount}>₹{input || "0"}</Text>
      <Text style={styles.upiText}>UPI ID: 73xxxxxx77@kpay</Text>

      {/* Numeric Keypad */}
      <View style={styles.keypadContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "<"].map((key, index) => (
          <TouchableOpacity key={index} style={styles.key} onPress={() => handleKeyPress(key.toString())}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pay Button */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pin")}>
          <View style={styles.circle}>
            <Icon name="check-circle" size={80} color="white" />
            <Text style={styles.payText}></Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Lower Icon Buttons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/maps")}>
          <Icon name="location-on" size={30} color="yellow" />
          <Text style={styles.buttonText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/brands")}>
          <Icon name="shopping-cart" size={30} color="yellow" />
          <Text style={styles.buttonText}>Brands</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/camera")}>
          <Icon name="qr-code-scanner" size={30} color="yellow" />
          <Text style={styles.buttonText}>QR Scanner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/photo")}>
          <Icon name="photo-library" size={30} color="yellow" />
          <Text style={styles.buttonText}>Photos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/history")}>
          <Icon name="history" size={30} color="yellow" />
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Chatbot Icon (Newly Added) */}
      {/* <TouchableOpacity style={styles.chatbotButton} onPress={() => router.push("/chatbot")}>
        <Icon name="chat" size={40} color="white" />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.chatbotButton} onPress={() => router.push("/land")}>
        <Icon name="chat" size={40} color="white" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
    justifyContent: "space-between",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceButton: {
    padding: 17,
    backgroundColor: "#fff",
    borderRadius: 40,
    margin: 20,
  },
  balanceText: {
    color: "black",
    fontWeight: "bold",
  },
  notificationButton: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  amount: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  upiText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  keypadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  key: {
    width: "30%",
    margin: 5,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 29,
    alignItems: "center",
  },
  keyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  payButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: "#2E4CBD",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  payText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    marginTop: 8,
    fontWeight: "bold",
  },
  /* Chatbot Button Styling */
  chatbotButton: {
    position: "absolute",
    bottom: 120,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: "#ff5722", // Orange color for visibility
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow effect
  },
});

