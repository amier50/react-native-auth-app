import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image
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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email.");
      return;
    }
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (!result.success) {
      Alert.alert("Login Failed", result.message);
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.emoji}>
              <Image source={require('../../assets/icon.png')} style={styles.image} />
          </Text>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Login to continue
          </Text>
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
          title="Login"
          onPress={handleLogin}
          loading={loading}
          />
          <TouchableOpacity
            style={styles.signupContainer}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>
            <Text style={styles.signupLink}>
              Sign Up
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
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
  },

  emoji: {
    fontSize: 44,
    textAlign: "center",
    marginBottom: 12,
    alignSelf: "center",
  },

  image: {
    width: 50, 
    height: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: colors.text,
  },

  subtitle: {
    textAlign: "center",
    color: colors.secondaryText,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 36,
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  signupText: {
    color: colors.secondaryText,
  },

  signupLink: {
    color: colors.primary,
    fontWeight: "700",
    marginLeft: 5,
  },
});