import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Icon name="account-circle" size={70} color="black" />
        </View>
        <View>
          <Text style={styles.name}>Nagaraju</Text>
          <Text style={styles.phone}>+91 73961 10177</Text>
        </View>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <ProfileOption icon="account-balance-wallet" text="Payment Options" />
        <ProfileOption icon="card-giftcard" text="Refer and Earn" />
        <ProfileOption icon="notifications" text="Notification Settings" />
        <ProfileOption icon="edit" text="Edit Profile" />
      </View>

      {/* General Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <ProfileOption icon="support" text="Support" />
        <ProfileOption icon="security" text="Terms of Service" />
        <ProfileOption icon="logout" text="Log Out" />
      </View>
    </View>
  );
}

const ProfileOption = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.option}>
      <View style={styles.optionContent}>
        <Icon name={icon} size={24} color="black" />
        <Text style={styles.optionText}>{text}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  avatar: {
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 14,
    color: "gray",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "gray",
  },
  option: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
