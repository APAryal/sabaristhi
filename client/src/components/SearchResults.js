// import React from 'react';
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// const SearchResults = ({ route, navigation }) => {
//   const { fromLocation, toLocation } = route.params;

//   const transportOptions = [
//     { id: '1', name: 'Riddhi Siddhi', type: 'Bus', fare: 'Rs. 20', distance: '4.3 Km' },
//     { id: '2', name: 'Nepal Yatayat', type: 'Tempo', fare: 'Rs. 15', distance: '3.9 Km' },
//     { id: '3', name: 'Sajha Yatayat', type: 'Mini Bus', fare: 'Rs. 25', distance: '5.0 Km' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Search Results for:</Text>
//       <Text style={styles.subtitle}>{fromLocation} → {toLocation}</Text>
//       <FlatList
//         data={transportOptions}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.resultItem}>
//             <Text>{item.name} ({item.type})</Text>
//             <Text>Fare: {item.fare} | Distance: {item.distance}</Text>
//             <Button
//               title="Details"
//               onPress={() => navigation.navigate('VehicleDetails', { vehicle: item })}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 20, fontWeight: 'bold' },
//   subtitle: { fontSize: 16, marginBottom: 20 },
//   resultItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 10 },
// });

// export default SearchResults;
// import React from 'react';
// import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

// const SearchResults = ({ route, navigation }) => {
//   const { fromLocation, toLocation } = route.params;

//   const transportOptions = [
//     { id: '1', name: 'Riddhi Siddhi', type: 'Bus', fare: 'Rs. 20', distance: '4.3 Km' },
//     { id: '2', name: 'Nepal Yatayat', type: 'Tempo', fare: 'Rs. 15', distance: '3.9 Km' },
//     { id: '3', name: 'Sajha Yatayat', type: 'Mini Bus', fare: 'Rs. 25', distance: '5.0 Km' },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Search Results for:</Text>
//       <Text style={styles.subtitle}>{fromLocation} → {toLocation}</Text>
//       <FlatList
//         data={transportOptions}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.resultItem}>
//             <Text>{item.name} ({item.type})</Text>
//             <Text>Fare: {item.fare} | Distance: {item.distance}</Text>
//             <Button
//               title="Details"
//               onPress={() => navigation.navigate('VehicleDetails', { vehicle: item })}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 20, fontWeight: 'bold' },
//   subtitle: { fontSize: 16, marginBottom: 20 },
//   resultItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 10 },
// });

// export default SearchResults;
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const TransportCard = ({ name, count, fare, distance, timing }) => (
//   <TouchableOpacity style={styles.transportCard}>
//     <View style={styles.transportIconContainer}>
//       <Ionicons name="bus-outline" size={24} color="#ff6b00" />
//     </View>
//     <View style={styles.transportInfo}>
//       <View style={styles.transportHeader}>
//         <Text style={styles.transportName}>{name}</Text>
//         <Text style={styles.transportCount}>{count}</Text>
//       </View>
//       <View style={styles.transportDetails}>
//         <Text style={styles.fareText}>
//           <Text style={styles.rupeeText}>Rs.</Text> {fare}
//         </Text>
//         <View style={styles.dotSeparator} />
//         <Text style={styles.distanceText}>{distance}</Text>
//         <Text style={styles.timingText}>{timing}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const SearchResults = () => {
//   const transportOptions = [
//     {
//       id: '1',
//       name: 'Riddhi Siddhi',
//       count: '20 Buses',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//     },
//     {
//       id: '2',
//       name: 'Nepal Yatayat',
//       count: '33 Buses',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//     },
//     {
//       id: '3',
//       name: 'Nepal Tempo',
//       count: '13 Tempos',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//     },
//     {
//       id: '4',
//       name: 'Nepal MicroBus',
//       count: '17 Microbus',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.header}>
//           <Text style={styles.title}>SawariSathi</Text>
//           <Text style={styles.subtitle}>Your travel guide for the city</Text>
//         </View>

//         <View style={styles.searchSection}>
//           <Text style={styles.sectionTitle}>Search Results</Text>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity style={styles.locationBox}>
//               <Text>Koteshwor</Text>
//               <Ionicons name="chevron-down" size={20} color="#666" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.locationBox}>
//               <Text>sorkhute</Text>
//               <Ionicons name="chevron-down" size={20} color="#666" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.transportSection}>
//           <Text style={styles.sectionTitle}>Available Transport's</Text>
//           {transportOptions.map((option) => (
//             <TransportCard key={option.id} {...option} />
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   searchSection: {
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   locationContainer: {
//     gap: 12,
//   },
//   locationBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   transportSection: {
//     padding: 16,
//   },
//   transportCard: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   transportIconContainer: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#fff5ec',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   transportInfo: {
//     flex: 1,
//   },
//   transportHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   transportName: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   transportCount: {
//     fontSize: 14,
//     color: '#666',
//   },
//   transportDetails: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   fareText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   rupeeText: {
//     color: '#ff6b00',
//   },
//   dotSeparator: {
//     width: 4,
//     height: 4,
//     backgroundColor: '#ddd',
//     borderRadius: 2,
//   },
//   distanceText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   timingText: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default SearchResults;
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const TransportCard = ({ item, onPress }) => (
//   <TouchableOpacity style={styles.transportCard} onPress={() => onPress(item)}>
//     <View style={styles.transportIconContainer}>
//       <Ionicons name="bus-outline" size={24} color="#ff6b00" />
//     </View>
//     <View style={styles.transportInfo}>
//       <View style={styles.transportHeader}>
//         <Text style={styles.transportName}>{item.name}</Text>
//         <Text style={styles.transportCount}>{item.count}</Text>
//       </View>
//       <View style={styles.transportDetails}>
//         <Text style={styles.fareText}>
//           <Text style={styles.rupeeText}>Rs.</Text> {item.fare}
//         </Text>
//         <View style={styles.dotSeparator} />
//         <Text style={styles.distanceText}>{item.distance}</Text>
//         <Text style={styles.timingText}>{item.timing}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// const SearchResults = ({ navigation }) => {
//   const transportOptions = [
//     {
//       id: '1',
//       name: 'Riddhi Siddhi',
//       count: '20 Buses',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//       route: {
//         from: 'Koteshwor',
//         to: 'Putalisadak',
//         stops: ['Koteshwor', 'Tinkune', 'Baneshwor', 'Putalisadak'],
//         routeNo: '23'
//       }
//     },
//     {
//       id: '2',
//       name: 'Nepal Yatayat',
//       count: '33 Buses',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//       route: {
//         from: 'Koteshwor',
//         to: 'Putalisadak',
//         stops: ['Koteshwor', 'Tinkune', 'Baneshwor', 'Putalisadak'],
//         routeNo: '45'
//       }
//     },
//     {
//       id: '3',
//       name: 'Nepal Tempo',
//       count: '13 Tempos',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//       route: {
//         from: 'Koteshwor',
//         to: 'Putalisadak',
//         stops: ['Koteshwor', 'Tinkune', 'Baneshwor', 'Putalisadak'],
//         routeNo: '12'
//       }
//     },
//     {
//       id: '4',
//       name: 'Nepal MicroBus',
//       count: '17 Microbus',
//       fare: '20',
//       distance: '4.3 km',
//       timing: '6:00am - 8:00pm',
//       route: {
//         from: 'Koteshwor',
//         to: 'Putalisadak',
//         stops: ['Koteshwor', 'Tinkune', 'Baneshwor', 'Putalisadak'],
//         routeNo: '67'
//       }
//     },
//   ];

//   const handleTransportSelect = (transport) => {
//     navigation.navigate('VehicleDetails', { transport });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.header}>
//           <Text style={styles.title}>SawariSathi</Text>
//           <Text style={styles.subtitle}>Your travel guide for the city</Text>
//         </View>

//         <View style={styles.searchSection}>
//           <Text style={styles.sectionTitle}>Search Results</Text>
//           <View style={styles.locationContainer}>
//             <TouchableOpacity style={styles.locationBox}>
//               <Text>Koteshwor</Text>
//               <Ionicons name="chevron-down" size={20} color="#666" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.locationBox}>
//               <Text>sorkhute</Text>
//               <Ionicons name="chevron-down" size={20} color="#666" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.transportSection}>
//           <Text style={styles.sectionTitle}>Available Transport's</Text>
//           {transportOptions.map((option) => (
//             <TransportCard 
//               key={option.id} 
//               item={option} 
//               onPress={handleTransportSelect}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   header: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   searchSection: {
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   locationContainer: {
//     gap: 12,
//   },
//   locationBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 12,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   transportSection: {
//     padding: 16,
//   },
//   transportCard: {
//     flexDirection: 'row',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   transportIconContainer: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#fff5ec',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   transportInfo: {
//     flex: 1,
//   },
//   transportHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   transportName: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   transportCount: {
//     fontSize: 14,
//     color: '#666',
//   },
//   transportDetails: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   fareText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   rupeeText: {
//     color: '#ff6b00',
//   },
//   dotSeparator: {
//     width: 4,
//     height: 4,
//     backgroundColor: '#ddd',
//     borderRadius: 2,
//   },
//   distanceText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   timingText: {
//     fontSize: 14,
//     color: '#666',
//   },
// });
// // ... styles remain the same as in your original code

// export default SearchResults;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const TransportCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.transportCard} onPress={() => onPress(item)}>
    <View style={styles.transportIconContainer}>
      <Ionicons name="bus-outline" size={24} color="#ff6b00" />
    </View>
    <View style={styles.transportInfo}>
      <View style={styles.transportHeader}>
        <Text style={styles.transportName}>{item.name}</Text>
        <Text style={styles.transportCount}>{item.count}</Text>
      </View>
      <View style={styles.transportDetails}>
        <Text style={styles.fareText}>
          <Text style={styles.rupeeText}>Rs.</Text> {item.fare}
        </Text>
        <View style={styles.dotSeparator} />
        <Text style={styles.distanceText}>{item.distance}</Text>
        <Text style={styles.timingText}>{item.timing}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SearchResults = ({ navigation }) => {
  const [transportOptions, setTransportOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch transport data from the backend API
  useEffect(() => {
    const fetchTransportData = async () => {
      try {
        // Replace '<backend_url>' with the actual backend API URL
        const response = await axios.get('http://<backend_url>/api/transport-options');
        setTransportOptions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch transport options');
        setLoading(false);
      }
    };

    fetchTransportData();
  }, []);

  const handleTransportSelect = (transport) => {
    navigation.navigate('VehicleDetails', { transport });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>SawariSathi</Text>
          <Text style={styles.subtitle}>Your travel guide for the city</Text>
        </View>

        <View style={styles.searchSection}>
          <Text style={styles.sectionTitle}>Search Results</Text>
          <View style={styles.locationContainer}>
            <TouchableOpacity style={styles.locationBox}>
              <Text>Koteshwor</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.locationBox}>
              <Text>sorkhute</Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <Text style={styles.loadingText}>Loading transport options...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <View style={styles.transportSection}>
            <Text style={styles.sectionTitle}>Available Transport's</Text>
            {transportOptions.map((option) => (
              <TransportCard 
                key={option.id} 
                item={option} 
                onPress={handleTransportSelect}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  searchSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  locationContainer: {
    gap: 12,
  },
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  transportSection: {
    padding: 16,
  },
  transportCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transportIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fff5ec',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transportInfo: {
    flex: 1,
  },
  transportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  transportName: {
    fontSize: 16,
    fontWeight: '500',
  },
  transportCount: {
    fontSize: 14,
    color: '#666',
  },
  transportDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fareText: {
    fontSize: 14,
    color: '#666',
  },
  rupeeText: {
    color: '#ff6b00',
  },
  dotSeparator: {
    width: 4,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
  },
  distanceText: {
    fontSize: 14,
    color: '#666',
  },
  timingText: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
});

export default SearchResults;

