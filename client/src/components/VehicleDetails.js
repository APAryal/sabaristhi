
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define the getVehicleIcon function
const getVehicleIcon = (vehicleType) => {
  switch (vehicleType) {
    case 'bus':
      return 'bus-outline';
    case 'car':
      return 'car-outline';
    case 'bike':
      return 'bicycle-outline';
    default:
      return 'help-outline';
  }
};

const VehicleDetails = ({ route, navigation }) => {
  const { transport } = route.params;

  const stops = [
    'Koteshwor',
    'Tinkune',
    'Baneshwor',
    'Putalisadak'
  ];

  const RouteStop = ({ name, isLast }) => (
    <View style={styles.stopContainer}>
      <View style={styles.stopIndicator}>
        <View style={styles.dot} />
        {!isLast && <View style={styles.line} />}
      </View>
      <Text style={styles.stopText}>{name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.routeInfo}>
              <Ionicons 
                name={getVehicleIcon(transport.vehicle?.type)} 
                size={24} 
                color="#ff6b00" 
              />
              <Text style={styles.routeTitle}>
                {transport.vehicle?.name || 'Riddhi Siddhi Travels'}
              </Text>
            </View>
            <Text style={styles.routePath}>{transport.from} ⟶ {transport.to}</Text>
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="cash-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Rs. {transport.fare}</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="map-outline" size={20} color="#666" />
              <Text style={styles.infoText}>{transport.distance} km</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={20} color="#666" />
              <Text style={styles.infoText}>{transport.vehicle?.count} {transport.vehicle?.type}</Text>
            </View>
          </View>
        </View>

        {/* Route Details */}
        <View style={styles.routeDetails}>
          <View style={styles.routeHeader}>
            <Text style={styles.routeNumber}>Route No: 23</Text>
            <Text style={styles.timing}>{transport.estimatedTime}</Text>
          </View>

          {/* Stops */}
          <View style={styles.stopsContainer}>
            {stops.map((stop, index) => (
              <RouteStop 
                key={stop} 
                name={stop} 
                isLast={index === stops.length - 1} 
              />
            ))}
          </View>

          <Text style={styles.discountText}>
            *Students with valid ID cards get a 45% discount on the fare.
          </Text>

          <TouchableOpacity style={styles.mapButton}>
            <Ionicons name="map" size={20} color="#fff" />
            <Text style={styles.mapButtonText}>View in Maps</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#fff5ec',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerContent: {
    gap: 8,
  },
  routeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  routeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  routePath: {
    color: '#666',
  },
  infoCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  routeDetails: {
    padding: 16,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  routeNumber: {
    fontSize: 18,
    fontWeight: '600',
  },
  timing: {
    color: '#666',
  },
  stopsContainer: {
    marginVertical: 20,
  },
  stopContainer: {
    flexDirection: 'row',
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
    backgroundColor: '#ff6b00',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#ddd',
    marginTop: 4,
  },
  stopText: {
    fontSize: 16,
    color: '#333',
  },
  discountText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginVertical: 16,
  },
  mapButton: {
    backgroundColor: '#ff6b00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default VehicleDetails;