// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { Entypo } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Entypo } from "@expo/vector-icons";

// const StackNavigator = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator(); 
//   function BottomTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Entypo name="home" size={24} color="#008E97" />
//               ) : (
//                 <AntDesign name="home" size={24} color="black" />
//               ),
//           }}
//         />

//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: "Profile",
//             tabBarLabelStyle: { color: "#008E97" },
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Ionicons name="person" size={24} color="#008E97" />
//               ) : (
//                 <Ionicons name="person-outline" size={24} color="black" />
//               ),
//           }}
//         />

//         <Tab.Screen
//           name="map"
//           component={CartScreen}
//           options={{
//             tabBarLabel: "map",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
       
//                 <FontAwesome name="map-marker" size={24} color="#008E97" />
//               ) : (
//                 <FontAwesome name="map-marker" size={24} color="black" />
//               ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={RegisterScreen}
//           options={{ headerShown: false }}
//         />
//          <Stack.Screen
//           name="Main"
//           component={BottomTabs}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigator;

// const styles = StyleSheet.create({});
// import React from "react";
// import { StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import HomeScreen from "../screens/HomeScreen";
// import SearchScreen from '../screens/SearchScreen';
// import SearchResults from '../components/SearchResults';
// import VehicleDetails from '../components/VehicleDetails';
// import ProfileScreen from "../screens/ProfileScreen";
// import MapScreen from "../screens/MapScreen";


// import { Entypo } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// const StackNavigator = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();

//   function BottomTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Entypo name="home" size={24} color="#008E97" />
//               ) : (
//                 <AntDesign name="home" size={24} color="black" />
//               ),
//           }}
//         />

//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: "Profile",
//             tabBarLabelStyle: { color: "#008E97" },
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Ionicons name="person" size={24} color="#008E97" />
//               ) : (
//                 <Ionicons name="person-outline" size={24} color="black" />
//               ),
//           }}
//         />

//         <Tab.Screen
//           name="Map"
//           component={MapScreen}
//           options={{
//             tabBarLabel: "Map",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <FontAwesome name="map-marker" size={24} color="#008E97" />
//               ) : (
//                 <FontAwesome name="map-marker" size={24} color="black" />
//               ),
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={RegisterScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Main"
//           component={BottomTabs}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="SearchScreen" component={SearchScreen} />
//         <Stack.Screen name="SearchResults" component={SearchResults} />
//         <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigator;

// const styles = StyleSheet.create({});
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import HomeScreen from "../screens/HomeScreen";
// import SearchScreen from '../screens/SearchScreen';
// import SearchResults from '../components/SearchResults';
// import VehicleDetails from '../components/VehicleDetails';
// import ProfileScreen from "../screens/ProfileScreen";
// import MapScreen from "../screens/MapScreen";
// import { Entypo, AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const StackNavigator = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();

//   function BottomTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? <Entypo name="home" size={24} color="#008E97" /> : <AntDesign name="home" size={24} color="black" />,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: "Profile",
//             tabBarLabelStyle: { color: "#008E97" },
//             tabBarIcon: ({ focused }) =>
//               focused ? <Ionicons name="person" size={24} color="#008E97" /> : <Ionicons name="person-outline" size={24} color="black" />,
//           }}
//         />
//         <Tab.Screen
//           name="Map"
//           component={MapScreen}
//           options={{
//             tabBarLabel: "Map",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? <FontAwesome name="map-marker" size={24} color="#008E97" /> : <FontAwesome name="map-marker" size={24} color="black" />,
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Register"
//           component={RegisterScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Main"
//           component={BottomTabs}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="SearchScreen" component={SearchScreen} />
//         <Stack.Screen name="SearchResults" component={SearchResults} />
//         <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigator;
// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import HomeScreen from "../screens/HomeScreen";
// import SearchScreen from '../screens/SearchScreen';
// import SearchResults from '../components/SearchResults';
// import VehicleDetails from '../components/VehicleDetails';
// import ProfileScreen from "../screens/ProfileScreen";
// import MapScreen from "../screens/MapScreen";
// import { Entypo, AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const StackNavigator = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if the user is authenticated from AsyncStorage
//     const checkAuthentication = async () => {
//       const token = await AsyncStorage.getItem('authToken');
//       if (token) {
//         setIsAuthenticated(true);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   function BottomTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: "Home",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? <Entypo name="home" size={24} color="#008E97" /> : <AntDesign name="home" size={24} color="black" />,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarLabel: "Profile",
//             tabBarLabelStyle: { color: "#008E97" },
//             tabBarIcon: ({ focused }) =>
//               focused ? <Ionicons name="person" size={24} color="#008E97" /> : <Ionicons name="person-outline" size={24} color="black" />,
//           }}
//         />
//         <Tab.Screen
//           name="Map"
//           component={MapScreen}
//           options={{
//             tabBarLabel: "Map",
//             tabBarLabelStyle: { color: "#008E97" },
//             headerShown: false,
//             tabBarIcon: ({ focused }) =>
//               focused ? <FontAwesome name="map-marker" size={24} color="#008E97" /> : <FontAwesome name="map-marker" size={24} color="black" />,
//           }}
//         />
//       </Tab.Navigator>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isAuthenticated ? (
//           // If authenticated, show the main bottom tab navigation
//           <Stack.Screen
//             name="Main"
//             component={BottomTabs}
//             options={{ headerShown: false }}
//           />
//         ) : (
//           // If not authenticated, show the login screen
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//         )}
//         <Stack.Screen
//           name="Register"
//           component={RegisterScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="SearchScreen" component={SearchScreen} />
//         <Stack.Screen name="SearchResults" component={SearchResults} />
//         <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigator;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResults from '../components/SearchResults';
import VehicleDetails from '../components/VehicleDetails';
import ProfileScreen from '../screens/ProfileScreen';
import MapScreen from '../screens/MapScreen';
import { Entypo, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#008E97',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) =>
            focused ? <Entypo name="home" size={24} color={color} /> : <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) =>
            focused ? <Ionicons name="person" size={24} color={color} /> : <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          headerShown: false,
          tabBarIcon: ({ focused, color }) =>
            <FontAwesome name="map-marker" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
