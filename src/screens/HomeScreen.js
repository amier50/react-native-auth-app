import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { AuthContext } from "../context/AuthContext";
import CustomButton from "../components/CustomButton";
import colors from "../styles/colors";

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Welcome 🎉
        </Text>

        <Text style={styles.info}>
          Name:
        </Text>

        <Text style={styles.value}>
          {user?.name}
        </Text>

        <Text style={styles.info}>
          Email:
        </Text>

        <Text style={styles.value}>
          {user?.email}
        </Text>

        <CustomButton
          title="Logout"
          onPress={() => {
            logout();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 15,
    elevation: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    color: colors.text,
  },

  info: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },
});