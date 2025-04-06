import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputs = useRef([]);
  const router = useRouter();

  const handlePhoneChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, "").slice(0, 10);
    setPhoneNumber(formattedText);
  };

  const handleOtpChange = (text, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = text.slice(0, 1); // Limit input to 1 character
    setOtp(otpCopy);

    if (text && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleOtpBackspace = (index) => {
    if (index > 0 && otp[index] === "") {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      Alert.alert("Success", `OTP sent to ${phoneNumber}`);
    } else {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
    }
  };

  const handleVerifyOTP = () => {
    router.push("/card");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Login</Text>
      <Text style={styles.subHeadline}>Verify Your Phone Number</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Mobile Number..."
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          maxLength={10}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendOtp}>
          <Text style={styles.sendButtonText}>SEND</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.otpLabel}>OTP</Text>
      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (otpInputs.current[index] = el)}
            style={styles.otpInput}
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            onKeyPress={({ nativeEvent: { key } }) => {
              if (key === "Backspace") {
                handleOtpBackspace(index);
              }
            }}
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleVerifyOTP}>
        <Text style={styles.loginButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9e8ce",
    padding: 20,
  },
  headline: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#688d4a",
    textAlign: "center",
    marginBottom: 20,
  },
  subHeadline: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#688d4a",
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 28,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: "#688d4a",
    borderWidth: 1,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#688d4a",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  otpLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#688d4a",
    marginBottom: 10,
    textAlign: "center",
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    borderColor: "#688d4a",
    borderWidth: 1,
    marginHorizontal: 5,
  },
  loginButton: {
    backgroundColor: "#688d4a",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
