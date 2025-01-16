// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const VehicleDetails = ({ route }) => {
//   const { vehicle } = route.params;

//   const sampleStops = [
//     { id: '1', name: 'Koteshwor', lat: 27.6851, lon: 85.3485 },
//     { id: '2', name: 'Putalisadak', lat: 27.7010, lon: 85.3173 },
//   ];

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/bus.jpg')} // Replace with dynamic image if needed
//         style={styles.image}
//       />
//       <Text style={styles.title}>{vehicle.name} ({vehicle.type})</Text>
//       <Text style={styles.details}>Fare: {vehicle.fare} | Distance: {vehicle.distance}</Text>
//       <Text style={styles.details}>Available Stops:</Text>
//       {sampleStops.map((stop) => (
//         <Text key={stop.id}>• {stop.name}</Text>
//       ))}
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 27.6851,
//           longitude: 85.3485,
//           latitudeDelta: 0.05,
//           longitudeDelta: 0.05,
//         }}
//       >
//         {sampleStops.map((stop) => (
//           <Marker
//             key={stop.id}
//             coordinate={{ latitude: stop.lat, longitude: stop.lon }}
//             title={stop.name}
//           />
//         ))}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   image: { width: '100%', height: 200, marginBottom: 20, borderRadius: 10 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   details: { fontSize: 16, marginBottom: 10 },
//   map: { flex: 1, marginTop: 20, borderRadius: 10 },
// });

// export default VehicleDetails;
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function VehicleDetails() {
//   return (
//     <View>
//       <Text>VehicleDetails</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// const VehicleDetails = () => {
//   const routeStops = [
//     'Koteshwor',
//     'Tinkune',
//     'Baneshwor',
//     'Putalisadak'
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {/* Header Card */}
//         <View style={styles.headerCard}>
//           <View style={styles.busIconContainer}>
//             <MaterialIcons name="directions-bus" size={24} color="#ff6b4a" />
//             <View style={styles.companyContainer}>
//               <Text style={styles.companyName}>Riddhi Siddhi Travels</Text>
//               <Text style={styles.routeText}>Koteshwor → Putalisadak</Text>
//             </View>
//           </View>

//           {/* Stats Container */}
//           <View style={styles.statsContainer}>
//             <View style={styles.statItem}>
//               <MaterialIcons name="attach-money" size={16} color="#666" />
//               <Text style={styles.statText}>Rs. 20</Text>
//             </View>
//             <View style={styles.statItem}>
//               <MaterialIcons name="directions" size={16} color="#666" />
//               <Text style={styles.statText}>4.3 Km</Text>
//             </View>
//             <View style={styles.statItem}>
//               <MaterialIcons name="directions-bus" size={16} color="#666" />
//               <Text style={styles.statText}>20 Buses</Text>
//             </View>
//           </View>
//         </View>

//         {/* Route Details Card */}
//         <View style={styles.routeCard}>
//           <View style={styles.routeHeader}>
//             <Text style={styles.routeNo}>Route No: 23</Text>
//             <Text style={styles.timing}>6:00am - 8:00pm</Text>
//           </View>

//           {/* Route Stops */}
//           <View style={styles.stopsContainer}>
//             {routeStops.map((stop, index) => (
//               <View key={index} style={styles.stopRow}>
//                 <View style={styles.stopIndicator}>
//                   <View style={styles.dot} />
//                   {index !== routeStops.length - 1 && <View style={styles.line} />}
//                 </View>
//                 <Text style={styles.stopText}>{stop}</Text>
//               </View>
//             ))}
//           </View>

//           <Text style={styles.disclaimer}>
//             *Students with valid ID cards get a 45% discount on the fare.
//           </Text>

//           {/* Map Preview */}
//           <View style={styles.mapPreview}>
//             <Image
//               // source={require('./assets/map-preview.png')} 
//                source={require('../../assets/city-background.jpg')} // Replace with your map preview image
//               style={styles.mapImage}
//               resizeMode="cover"
//             />
//             <TouchableOpacity style={styles.mapButton}>
//               <Text style={styles.mapButtonText}>View in Maps</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   headerCard: {
//     backgroundColor: 'white',
//     margin: 16,
//     borderRadius: 12,
//     padding: 16,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   busIconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   companyContainer: {
//     marginLeft: 12,
//   },
//   companyName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   routeText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f8f8',
//     borderRadius: 8,
//     padding: 12,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statText: {
//     marginLeft: 4,
//     fontSize: 14,
//     color: '#333',
//   },
//   routeCard: {
//     backgroundColor: 'white',
//     margin: 16,
//     marginTop: 0,
//     borderRadius: 12,
//     padding: 16,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   routeHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   routeNo: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   timing: {
//     fontSize: 14,
//     color: '#666',
//   },
//   stopsContainer: {
//     marginBottom: 24,
//   },
//   stopRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 24,
//   },
//   stopIndicator: {
//     alignItems: 'center',
//     width: 20,
//     marginRight: 12,
//   },
//   dot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#ff6b4a',
//   },
//   line: {
//     width: 2,
//     height: 40,
//     backgroundColor: '#ff6b4a',
//     position: 'absolute',
//     top: 12,
//   },
//   stopText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   disclaimer: {
//     fontSize: 12,
//     color: '#666',
//     fontStyle: 'italic',
//     marginBottom: 16,
//   },
//   mapPreview: {
//     borderRadius: 8,
//     overflow: 'hidden',
//     height: 200,
//   },
//   mapImage: {
//     width: '100%',
//     height: '100%',
//   },
//   mapButton: {
//     position: 'absolute',
//     bottom: 16,
//     left: 16,
//     right: 16,
//     backgroundColor: '#333',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   mapButtonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });

// export default VehicleDetails;
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// const VehicleDetails = ({ navigation }) => {
//   const routeStops = [
//     'Koteshwor',
//     'Tinkune',
//     'Baneshwor',
//     'Putalisadak'
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {/* Header with Back Button */}
//         <View style={styles.headerNav}>
//           <TouchableOpacity 
//             style={styles.backButton}
//             onPress={() => navigation.goBack()}
//           >
//             <Ionicons name="arrow-back" size={24} color="white" />
//           </TouchableOpacity>
//         </View>

//         {/* Bus Image Section */}
//         <View style={styles.imageContainer}>
//           <Image
//           source={require('../../assets/city-background.jpg')} 
//             // Replace with your bus image
//             style={styles.busImage}
//           />
//           <View style={styles.imageOverlay} />
          
//           {/* Info Overlay */}
//           <View style={styles.infoOverlay}>
//             <View style={styles.companyHeader}>
//               <MaterialIcons name="directions-bus" size={24} color="#ff6b4a" />
//               <Text style={styles.companyName}>Riddhi Siddhi Travels</Text>
//             </View>
//             <Text style={styles.routeText}>Koteshwor → Putalisadak</Text>
            
//             {/* Stats Bar */}
//             <View style={styles.statsBar}>
//               <View style={styles.statItem}>
//                 <MaterialIcons name="attach-money" size={16} color="#666" />
//                 <Text style={styles.statText}>Rs. 20</Text>
//               </View>
//               <View style={styles.statDivider} />
//               <View style={styles.statItem}>
//                 <MaterialIcons name="route" size={16} color="#666" />
//                 <Text style={styles.statText}>4.3 Km</Text>
//               </View>
//               <View style={styles.statDivider} />
//               <View style={styles.statItem}>
//                 <MaterialIcons name="directions-bus" size={16} color="#666" />
//                 <Text style={styles.statText}>20 Buses</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Route Details Section */}
//         <View style={styles.routeCard}>
//           <View style={styles.routeHeader}>
//             <Text style={styles.routeNo}>Route No: 23</Text>
//             <Text style={styles.timing}>6:00am - 8:00pm</Text>
//           </View>

//           {/* Stops List */}
//           <View style={styles.stopsContainer}>
//             {routeStops.map((stop, index) => (
//               <View key={index} style={styles.stopRow}>
//                 <View style={styles.stopIndicator}>
//                   <View style={styles.dot} />
//                   {index !== routeStops.length - 1 && <View style={styles.line} />}
//                 </View>
//                 <Text style={styles.stopText}>{stop}</Text>
//               </View>
//             ))}
//           </View>

//           <Text style={styles.disclaimer}>
//             *Students with valid ID cards get a 45% discount on the fare.
//           </Text>

//           {/* Map Section */}
//           <View style={styles.mapPreview}>
//             <Image
//               source={require('../../assets/city-background.jpg')}  // Replace with your map image
//               style={styles.mapImage}
//               resizeMode="cover"
//             />
//             <TouchableOpacity style={styles.mapButton}>
//               <Text style={styles.mapButtonText}>View in Maps</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//   },
//   headerNav: {
//     position: 'absolute',
//     top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     left: 0,
//     right: 0,
//     zIndex: 10,
//     padding: 16,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     height: 280,
//     position: 'relative',
//   },
//   busImage: {
//     width: '100%',
//     height: '100%',
//   },
//   imageOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//   },
//   infoOverlay: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 16,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//   },
//   companyHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   companyName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   routeText: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//     marginLeft: 32,
//   },
//   statsBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 12,
//     backgroundColor: '#f8f8f8',
//     padding: 12,
//     borderRadius: 8,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   statDivider: {
//     width: 1,
//     height: 16,
//     backgroundColor: '#ddd',
//   },
//   statText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   routeCard: {
//     backgroundColor: 'white',
//     margin: 16,
//     borderRadius: 12,
//     padding: 16,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   routeHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   routeNo: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   timing: {
//     fontSize: 14,
//     color: '#666',
//   },
//   stopsContainer: {
//     marginBottom: 24,
//   },
//   stopRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 24,
//   },
//   stopIndicator: {
//     alignItems: 'center',
//     width: 20,
//     marginRight: 12,
//   },
//   dot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#ff6b4a',
//   },
//   line: {
//     width: 2,
//     height: 40,
//     backgroundColor: '#ff6b4a',
//     position: 'absolute',
//     top: 12,
//   },
//   stopText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   disclaimer: {
//     fontSize: 12,
//     color: '#666',
//     fontStyle: 'italic',
//     marginBottom: 16,
//   },
//   mapPreview: {
//     borderRadius: 8,
//     overflow: 'hidden',
//     height: 200,
//   },
//   mapImage: {
//     width: '100%',
//     height: '100%',
//   },
//   mapButton: {
//     position: 'absolute',
//     bottom: 16,
//     left: 16,
//     right: 16,
//     backgroundColor: '#333',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   mapButtonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });

// export default VehicleDetails;
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const VehicleDetails = ({ route, navigation }) => {
  const { transport } = route.params; // Get transport data passed from SearchResults.js
  const [routeDetails, setRouteDetails] = useState(null); // State for route details
  const [loading, setLoading] = useState(true); // Loading state for API request

  // Fetch vehicle details dynamically based on the transport ID
  useEffect(() => {
    // Simulating an API call to fetch route details based on transport ID
    fetch(`http://your-api-url.com/transport-details/${transport.id}`)
      .then((response) => response.json())
      .then((data) => {
        setRouteDetails(data); // Set the fetched data into state
        setLoading(false); // Set loading to false after fetching the data
      })
      .catch((error) => {
        console.error('Error fetching route details:', error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [transport.id]);

  if (loading) {
    // Show loading spinner while fetching data
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#ff6b4a" style={styles.loader} />
      </SafeAreaView>
    );
  }

  // If routeDetails is null, show a fallback message
  if (!routeDetails) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Unable to load route details.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header with Back Button */}
        <View style={styles.headerNav}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Bus Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: routeDetails.image }} // Fetch dynamic image URL
            style={styles.busImage}
          />
          <View style={styles.imageOverlay} />

          {/* Info Overlay */}
          <View style={styles.infoOverlay}>
            <View style={styles.companyHeader}>
              <MaterialIcons name="directions-bus" size={24} color="#ff6b4a" />
              <Text style={styles.companyName}>{routeDetails.company}</Text>
            </View>
            <Text style={styles.routeText}>
              {routeDetails.from} → {routeDetails.to}
            </Text>

            {/* Stats Bar */}
            <View style={styles.statsBar}>
              <View style={styles.statItem}>
                <MaterialIcons name="attach-money" size={16} color="#666" />
                <Text style={styles.statText}>Rs. {routeDetails.fare}</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <MaterialIcons name="route" size={16} color="#666" />
                <Text style={styles.statText}>{routeDetails.distance}</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <MaterialIcons name="directions-bus" size={16} color="#666" />
                <Text style={styles.statText}>{routeDetails.count}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Route Details Section */}
        <View style={styles.routeCard}>
          <View style={styles.routeHeader}>
            <Text style={styles.routeNo}>Route No: {routeDetails.routeNo}</Text>
            <Text style={styles.timing}>
              {routeDetails.timing.start} - {routeDetails.timing.end}
            </Text>
          </View>

          {/* Stops List */}
          <View style={styles.stopsContainer}>
            {routeDetails.stops.map((stop, index) => (
              <View key={index} style={styles.stopRow}>
                <View style={styles.stopIndicator}>
                  <View style={styles.dot} />
                  {index !== routeDetails.stops.length - 1 && <View style={styles.line} />}
                </View>
                <Text style={styles.stopText}>{stop}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.disclaimer}>
            *Students with valid ID cards get a 45% discount on the fare.
          </Text>

          {/* Map Section */}
          <View style={styles.mapPreview}>
            <Image
              source={{ uri: routeDetails.mapImage }} // Fetch dynamic map image URL
              style={styles.mapImage}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>View in Maps</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#ff6b4a',
  },
  headerNav: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    left: 0,
    right: 0,
    zIndex: 10,
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 280,
    position: 'relative',
  },
  busImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  infoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  companyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  companyName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  routeText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginLeft: 32,
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#ddd',
  },
  statText: {
    fontSize: 14,
    color: '#333',
  },
  routeCard: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  routeNo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  timing: {
    fontSize: 14,
    color: '#666',
  },
  stopsContainer: {
    marginBottom: 24,
  },
  stopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  stopIndicator: {
    alignItems: 'center',
    width: 20,
    marginRight: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff6b4a',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#ff6b4a',
    position: 'absolute',
    top: 12,
  },
  stopText: {
    fontSize: 16,
    color: '#333',
  },
  disclaimer: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  mapPreview: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 200,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  mapButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default VehicleDetails;

