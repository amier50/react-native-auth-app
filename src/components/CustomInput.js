import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

export default function CustomInput({
  secureTextEntry,
  showPassword,
  togglePassword,
  ...props
}) {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
      />

      {togglePassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={togglePassword}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color={colors.placeholder}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    position: "relative",
    justifyContent: "center",
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingRight: 48,
    height: 56,
    fontSize: 16,
    color: colors.text,
  },

  icon: {
    position: "absolute",
    right: 15,
  },
});