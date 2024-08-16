import { View, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Center content vertically
    paddingHorizontal: 22, // Add padding horizontally
    marginTop: 100
  },
  containerHeader: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#333",
    textAlign: "center", // Center text horizontally
  },
  secondaryText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center", // Center text horizontally
  },
  emailHeaderText: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  emailInput: {
    width: "100%",
    height: 48,
    borderColor: "#333",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingLeft: 22,
  },
  button: {
    color: "orange",
    borderRadius: 10,
  },
});

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.containerHeader}>
            Jorie AI
          </Text>
          <Text style={styles.secondaryText}>Welcome Back, Please Sign In</Text>
        </View>
        <View>
          <Text style={styles.emailHeaderText}>Email Address</Text>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: "#333",
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="enter your email"
              style={{ width: "100%" }}
              placeholderTextColor={{ color: "#333" }}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View style={{marginTop: 18, marginBottom: 16}}>
          <Text style={styles.emailHeaderText}>Password</Text>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: "#333",
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="enter your password"
              style={{ width: "100%" }}
              placeholderTextColor={{ color: "#333" }}
              secureTextEntry
            />
          </View>
        </View>
        <View>
          <Button text="Sign In" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
