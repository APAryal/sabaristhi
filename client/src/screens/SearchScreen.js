import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
  StatusBar,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const SearchScreen = ({ navigation }) => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const [recentSearches] = useState([
    { id: '1', from: 'Koteshwor', to: 'Putalisadak', price: 'Rs. 20', distance: '4.3 Km' },
    { id: '2', from: 'New Road', to: 'Lalitpur', price: 'Rs. 25', distance: '5.1 Km' },
  ]);

  const locations = [
    { id: '1', name: 'Koteshwor', area: 'Central Kathmandu' },
    { id: '2', name: 'Putalisadak', area: 'Central Kathmandu' },
    { id: '3', name: 'New Road', area: 'Central Kathmandu' },
    { id: '4', name: 'Lalitpur', area: 'Patan' },
    { id: '5', name: 'Thamel', area: 'Tourist District' },
    { id: '6', name: 'Balaju', area: 'North Kathmandu' },
    { id: '7', name: 'Kalanki', area: 'West Kathmandu' },
    { id: '8', name: 'Baneshwor', area: 'East Kathmandu' },
  ];

  const LocationInput = ({ placeholder, value, onPress }) => (
    <TouchableOpacity style={styles.locationInput} onPress={onPress}>
      <Ionicons name="location" size={20} color="#666" />
      <Text style={[styles.inputText, !value && styles.placeholderText]}>
        {value || placeholder}
      </Text>
      <Ionicons name="chevron-down" size={20} color="#666" />
    </TouchableOpacity>
  );

  const LocationDropdown = ({ visible, onClose, onSelect, currentValue }) => (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownHeader}>
            <Text style={styles.dropdownTitle}>Select Location</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.dropdownList}>
            {locations.map((location) => (
              <TouchableOpacity
                key={location.id}
                style={[
                  styles.dropdownItem,
                  currentValue === location.name && styles.selectedItem,
                ]}
                onPress={() => {
                  onSelect(location.name);
                  onClose();
                }}
              >
                <View style={styles.locationInfo}>
                  <Ionicons
                    name="location-sharp"
                    size={20}
                    color={currentValue === location.name ? '#007AFF' : '#666'}
                  />
                  <View>
                    <Text style={styles.locationName}>{location.name}</Text>
                    <Text style={styles.locationArea}>{location.area}</Text>
                  </View>
                </View>
                {currentValue === location.name && (
                  <Ionicons name="checkmark" size={24} color="#007AFF" />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const handleSearch = async () => {
    if (!fromLocation || !toLocation) return;

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5002/api/routes/search/${fromLocation}/${toLocation}`);
      navigation.navigate('SearchResults', { results: response.data });
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{ uri: 'https://example.com/your-city-image.jpg' }}
        style={styles.headerBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>SawariSathi</Text>
          <Text style={styles.headerSubtitle}>Your travel guide for the city</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>Where are you traveling today?</Text>

        <View style={styles.inputsContainer}>
          <LocationInput
            placeholder="My location"
            value={fromLocation}
            onPress={() => setShowFromDropdown(true)}
          />
          <LocationInput
            placeholder="Search Destination"
            value={toLocation}
            onPress={() => setShowToDropdown(true)}
          />
        </View>

        <LocationDropdown
          visible={showFromDropdown}
          onClose={() => setShowFromDropdown(false)}
          onSelect={setFromLocation}
          currentValue={fromLocation}
        />

        <LocationDropdown
          visible={showToDropdown}
          onClose={() => setShowToDropdown(false)}
          onSelect={setToLocation}
          currentValue={toLocation}
        />

        <TouchableOpacity
          style={[
            styles.searchButton,
            (!fromLocation || !toLocation) && styles.searchButtonDisabled,
          ]}
          disabled={!fromLocation || !toLocation || loading}
          onPress={handleSearch}
        >
          <Text style={styles.searchButtonText}>{loading ? 'Searching...' : 'Search'}</Text>
        </TouchableOpacity>

        <Text style={styles.recentsTitle}>Recent Searches</Text>
        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recentItem}>
              <View style={styles.recentItemLeft}>
                <Ionicons name="time-outline" size={20} color="#666" />
                <View style={styles.recentItemText}>
                  <Text style={styles.recentRoute}>
                    {item.from} → {item.to}
                  </Text>
                  <Text style={styles.recentDetails}>
                    {item.price} • {item.distance}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    height: height * 0.25,
    width: width,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    gap: 12,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  placeholderText: {
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: height * 0.7,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  dropdownList: {
    padding: 16,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedItem: {
    backgroundColor: '#f8f9fa',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  locationName: {
    fontSize: 16,
    fontWeight: '500',
  },
  locationArea: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  searchButtonDisabled: {
    backgroundColor: '#ccc',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  recentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recentsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginBottom: 12,
  },
  recentItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recentItemText: {
    gap: 4,
  },
  recentRoute: {
    fontSize: 16,
    fontWeight: '500',
  },
  recentDetails: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    padding: 8,
  },
});

export default SearchScreen;