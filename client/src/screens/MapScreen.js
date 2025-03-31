import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const MapScreen = ({ route, navigation }) => {
  const { stops, fromLocation, toLocation, routeInfo } = route.params;
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  // Transform stops data into coordinates
  const routeCoordinates = stops?.map(stop => ({
    latitude: parseFloat(stop.lat),
    longitude: parseFloat(stop.lon)
  })) || [];

  useEffect(() => {
    if (stops?.length > 0) {
      const coordinates = stops.map(stop => ({
        latitude: parseFloat(stop.lat),
        longitude: parseFloat(stop.lon)
      }));

      fitToCoordinates(coordinates);
    }
  }, [stops]);

  const fitToCoordinates = (coords) => {
    if (!coords || coords.length === 0) return;

    let minLat = coords[0].latitude;
    let maxLat = coords[0].latitude;
    let minLon = coords[0].longitude;
    let maxLon = coords[0].longitude;

    coords.forEach(coord => {
      minLat = Math.min(minLat, coord.latitude);
      maxLat = Math.max(maxLat, coord.latitude);
      minLon = Math.min(minLon, coord.longitude);
      maxLon = Math.max(maxLon, coord.longitude);
    });

    setRegion({
      latitude: (minLat + maxLat) / 2,
      longitude: (minLon + maxLon) / 2,
      latitudeDelta: (maxLat - minLat) * 1.5,
      longitudeDelta: (maxLon - minLon) * 1.5,
    });
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#ff6b00" />
        <Text style={styles.loadingText}>Loading Map...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <Text style={styles.routeName} numberOfLines={1}>
            {routeInfo?.name || 'Route'}
          </Text>
          <Text style={styles.routePath} numberOfLines={1}>
            {fromLocation} → {toLocation}
          </Text>
        </View>
      </View>

      <MapView
        style={styles.map}
        region={region}
        provider="google"
        showsUserLocation={false}
        showsTraffic={false}
        showsPointsOfInterest={false}
        customMapStyle={mapStyle}
      >
        {/* Static Polyline Route */}
        {routeCoordinates.length > 1 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={4}
            strokeColor="#ff6b00"
            lineDashPattern={[1]}
          />
        )}

        {/* Start Marker */}
        {stops.length > 0 && (
          <Marker
            coordinate={{
              latitude: parseFloat(stops[0].lat),
              longitude: parseFloat(stops[0].lon),
            }}
            title={`Start: ${fromLocation}`}
            description="Departure point"
          >
            <View style={[styles.marker, styles.startMarker]}>
              <Ionicons name="location" size={16} color="#fff" />
            </View>
          </Marker>
        )}

        {/* Stop Markers */}
        {stops.slice(1, -1).map((stop, index) => (
          <Marker
            key={`stop-${index}`}
            coordinate={{
              latitude: parseFloat(stop.lat),
              longitude: parseFloat(stop.lon),
            }}
            title={`Stop ${index + 1}`}
            description={stop.name || `Stop ${index + 1}`}
          >
            <View style={[styles.marker, styles.stopMarker]}>
              <Text style={styles.markerText}>{index + 1}</Text>
            </View>
          </Marker>
        ))}

        {/* End Marker */}
        {stops.length > 1 && (
          <Marker
            coordinate={{
              latitude: parseFloat(stops[stops.length - 1].lat),
              longitude: parseFloat(stops[stops.length - 1].lon),
            }}
            title={`End: ${toLocation}`}
            description="Destination point"
          >
            <View style={[styles.marker, styles.endMarker]}>
              <Ionicons name="flag" size={16} color="#fff" />
            </View>
          </Marker>
        )}
      </MapView>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Route Information</Text>
        <View style={styles.infoRow}>
          <Ionicons name="bus" size={18} color="#ff6b00" />
          <Text style={styles.infoText}>
            {routeInfo?.type || 'Vehicle'}: {routeInfo?.name || 'Route'}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location" size={18} color="#ff6b00" />
          <Text style={styles.infoText}>
            {stops.length} stops from {fromLocation} to {toLocation}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="information-circle" size={18} color="#ff6b00" />
          <Text style={styles.infoText}>
            Displaying simplified route path
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Custom map styling
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#ff6b00',
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
    zIndex: 10,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  headerInfo: {
    flex: 1,
  },
  routeName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  routePath: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 180, // Adjust for header and info card
  },
  marker: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  startMarker: {
    backgroundColor: '#4CAF50', // Green
  },
  stopMarker: {
    backgroundColor: '#ff6b00', // Orange
  },
  endMarker: {
    backgroundColor: '#F44336', // Red
  },
  markerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoCard: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#555',
    marginLeft: 8,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
});

export default MapScreen;