import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import {
  validateEmail,
  validatePassword,
} from "../utils/validation";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import colors from "../styles/colors";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useContext(AuthContext);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email.");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert("Error", "Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    const result = await signup(name, email, password);
    setLoading(false);
    if (result.success) {
      Alert.alert("Success", "Account created successfully!");
    } else {
      Alert.alert("Error", result.message);
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Create Account 🚀</Text>
          <Text style={styles.subtitle}>
            Sign up to get started
          </Text>
          <CustomInput
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(prev => !prev)}
          />
          <CustomButton
          title="Sign Up"
          onPress={handleSignup}
          loading={loading}
          />
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>
              Already have an account?
            </Text>
            <Text style={styles.loginLink}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    borderRadius: 15,
    padding: 25,
    elevation: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  loginText: {
    color: "#666",
  },

  loginLink: {
    color: colors.primary,
    fontWeight: "bold",
    marginLeft: 5,
  },
});