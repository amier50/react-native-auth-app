import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "../styles/colors";

export default function CustomButton({
  title,
  onPress,
  loading = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        loading && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height:56,
    borderRadius:14,
    justifyContent:"center",
    alignItems:"center",
    marginTop:12,
    shadowColor:"#2563EB",
    shadowOffset:{
        width:0,
        height:8,
    },
    shadowOpacity:0.25,
    shadowRadius:12,
    elevation:8,
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 16,
  },
});