// import {
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     Pressable,
//     Image,
//     KeyboardAvoidingView,
//     TextInput,
//     Alert,
//   } from "react-native";
//   import React, { useState } from "react";
//   import { MaterialIcons } from "@expo/vector-icons";
//   import { AntDesign } from "@expo/vector-icons";
//   import EvilIcons from '@expo/vector-icons/EvilIcons';
//   import { useNavigation } from "@react-navigation/native";
//   import axios from "axios";
  
//   const RegisterScreen = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const navigation = useNavigation();
//     const handleRegister = () => {
//       const user = {
//         name: name,
//         email: email,
//         password: password,
//       };
  
//       // send a POST  request to the backend API to register the user
//       axios
//         .post("http://localhost:5002/api/auth/register", user)
//         .then((response) => {
//           console.log(response);
//           Alert.alert(
//             "Registration successful",
//             "You have been registered Successfully"
//           );
//           setName("");
//           setEmail("");
//           setPassword("");
          
//         })
//         .catch((error) => {
//           Alert.alert(
//             "Registration Error",
//             "An error occurred while registering"
//           );
//           console.log("registration failed", error);
//         });
//     };
//     return (
//       <SafeAreaView
//         style={{ flex: 1, backgroundColor: "white", alignItems: "center",marginTop:50  }}
//       >
//         <View>
//           <Image
//             style={{ width: 150, height: 100 }}
//             source={require('../../assets/Login.png')}
//           />
//         </View>
  
//         <KeyboardAvoidingView>
//           <View style={{ alignItems: "center" }}>
//             <Text
//               style={{
//                 fontSize: 17,
//                 fontWeight: "bold",
//                 marginTop: 12,
//                 color: "#041E42",
//               }}
//             >
//               Register to your Account
//             </Text>
//           </View>
  
//           <View style={{ marginTop: 70 }}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 5,
//                 backgroundColor: "#D0D0D0",
//                 paddingVertical: 5,
//                 borderRadius: 5,
//                 marginTop: 30,
//               }}
//             >
              
//               <EvilIcons name="user" size={24} color="black" />
//               <TextInput
//                 value={name}
//                 onChangeText={(text) => setName(text)}
//                 style={{
//                   color: "gray",
//                   marginVertical: 10,
//                   width: 300,
//                   fontSize: name ? 16 : 16,
//                 }}
//                 placeholder="enter your name"
//               />
//             </View>
  
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 5,
//                 backgroundColor: "#D0D0D0",
//                 paddingVertical: 5,
//                 borderRadius: 5,
//                 marginTop: 30,
//               }}
//             >
//               <MaterialIcons
//                 style={{ marginLeft: 8 }}
//                 name="email"
//                 size={24}
//                 color="gray"
//               />
  
//               <TextInput
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//                 style={{
//                   color: "gray",
//                   marginVertical: 10,
//                   width: 300,
//                   fontSize: password ? 16 : 16,
//                 }}
//                 placeholder="enter your Email"
//               />
//             </View>
//           </View>
  
//           <View>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 5,
//                 backgroundColor: "#D0D0D0",
//                 paddingVertical: 5,
//                 borderRadius: 5,
//                 marginTop: 30,
//               }}
//             >
//               <AntDesign
//                 name="lock1"
//                 size={24}
//                 color="gray"
//                 style={{ marginLeft: 8 }}
//               />
  
//               <TextInput
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//                 secureTextEntry={true}
//                 style={{
//                   color: "gray",
//                   marginVertical: 10,
//                   width: 300,
//                   fontSize: email ? 16 : 16,
//                 }}
//                 placeholder="enter your Password"
//               />
//             </View>
//           </View>
  
//           <View
//             style={{
//               marginTop: 12,
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text>Keep me logged in</Text>
  
//             <Text style={{ color: "#007FFF", fontWeight: "500" }}>
//               Forgot Password
//             </Text>
//           </View>
  
//           <View style={{ marginTop: 80 }} />
  
//           <Pressable
//             onPress={handleRegister}
//             style={{
//               width: 200,
//               backgroundColor: "#2E5077",
//               borderRadius: 6,
//               marginLeft: "auto",
//               marginRight: "auto",
//               padding: 15,
//             }}
//           >
//             <Text
//               style={{
//                 textAlign: "center",
//                 color: "white",
//                 fontSize: 16,
//                 fontWeight: "bold",
//               }}
//             >
//               Register
//             </Text>
//           </Pressable>
  
//           <Pressable
//             onPress={() => navigation.goBack()}
//             style={{ marginTop: 15 }}
//           >
//             <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
//               Already have an account? Sign In
//             </Text>
//           </Pressable>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   };
  
//   export default RegisterScreen;
  
//   const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Platform,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const { width } = Dimensions.get('window');

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return false;
    }

    if (name.length < 3) {
      Alert.alert("Error", "Name must be at least 3 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5002/api/auth/register", {
        name: name.trim(),
        email: email.trim(),
        password: password,
      });

      Alert.alert(
        "Success",
        "Registration successful! Please login to continue.",
        [
          {
            text: "OK",
            onPress: () => {
              setName("");
              setEmail("");
              setPassword("");
              navigation.navigate("Login");
            },
          },
        ]
      );
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      Alert.alert("Registration Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/Login.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Create an Account</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <EvilIcons 
                name="user" 
                size={24} 
                color="gray" 
                style={styles.inputIcon}
              />
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholder="Enter your name"
                autoCapitalize="words"
              />
            </View>

            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="email"
                size={24}
                color="gray"
                style={styles.inputIcon}
              />
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputWrapper}>
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={styles.inputIcon}
              />
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
          </View>

          <Pressable
            onPress={handleRegister}
            style={[styles.registerButton, loading && styles.registerButtonDisabled]}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.registerButtonText}>Register</Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.loginLink}
          >
            <Text style={styles.loginText}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboardView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginTop: Platform.OS === "ios" ? 60 : 40,
    alignItems: "center",
  },
  logo: {
    width: width * 0.4,
    height: width * 0.27,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    marginTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#041E42",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    gap: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inputIcon: {
    marginLeft: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  registerButton: {
    backgroundColor: "#2E5077",
    borderRadius: 8,
    padding: 15,
    marginTop: 30,
  },
  registerButtonDisabled: {
    opacity: 0.7,
  },
  registerButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
  },
});

export default RegisterScreen;