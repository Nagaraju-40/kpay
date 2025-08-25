import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.postimg.cc/9FmjsWPk/landing.jpg" }} // Replace with your image URL or local image
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        {/* Create Account Button */}
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/createnewaccount")} // Navigate to the "phone" page
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/phone")} // Navigate to the "phone" page
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By continuing, you accept our T&C and Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    backgroundColor: "#fff",
  },
  image: {
    width: 340,
    height: 350,
    marginBottom: 20, // Space below the image
  },
  buttonContainer: {
    alignItems: "center", // Center buttons horizontally
    width: "80%",
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 28,
    width: "100%", // Full width of the container
    marginBottom: 15, // Space between buttons
    alignItems: "center", // Center text inside the button
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#333",
    marginTop: 20, // Space above the footer text
    textAlign: "center",

  },
});
