import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { AuthContext } from "../context/AuthContext";
import colors from "../styles/colors";

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name?.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.title}>
          Welcome back 👋
        </Text>

        <Text style={styles.subtitle}>
          You have successfully logged in.
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{user?.name}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user?.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    marginBottom: 20,
    marginTop: 20,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },

  logoutButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },

  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 28,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  avatarText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 30,
    textAlign: "center",
  },

  infoContainer: {
    width: "100%",
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },

  value: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },
});