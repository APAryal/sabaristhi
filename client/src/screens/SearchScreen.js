
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
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

  const handleSearch = async () => {
    if (fromLocation && toLocation) {
      try {
        const response = await axios.get(`http://localhost:5002/api/routes/search/${fromLocation}/${toLocation}`);
        navigation.navigate('SearchResults', { results: response.data });
      } catch (error) {
        console.error('Search failed:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Where are you traveling today?</Text>

        <View style={styles.inputsContainer}>
          <TouchableOpacity
            style={styles.locationInput}
            onPress={() => setShowFromDropdown(true)}
          >
            <Ionicons name="location" size={20} color="#666" />
            <Text style={styles.inputText}>{fromLocation || 'Select From Location'}</Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.locationInput}
            onPress={() => setShowToDropdown(true)}
          >
            <Ionicons name="location" size={20} color="#666" />
            <Text style={styles.inputText}>{toLocation || 'Select To Location'}</Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <Modal visible={showFromDropdown} transparent={true} animationType="slide" onRequestClose={() => setShowFromDropdown(false)}>
          <ScrollView style={styles.dropdownContainer}>
            {locations.map((location) => (
              <TouchableOpacity
                key={location.id}
                onPress={() => {
                  setFromLocation(location.name);
                  setShowFromDropdown(false);
                }}
                style={styles.dropdownItem}
              >
                <Text>{location.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Modal>

        <Modal visible={showToDropdown} transparent={true} animationType="slide" onRequestClose={() => setShowToDropdown(false)}>
          <ScrollView style={styles.dropdownContainer}>
            {locations.map((location) => (
              <TouchableOpacity
                key={location.id}
                onPress={() => {
                  setToLocation(location.name);
                  setShowToDropdown(false);
                }}
                style={styles.dropdownItem}
              >
                <Text>{location.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Modal>

        <TouchableOpacity
          style={[styles.searchButton, (!fromLocation || !toLocation) && styles.searchButtonDisabled]}
          disabled={!fromLocation || !toLocation}
          onPress={handleSearch}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        <Text style={styles.recentsTitle}>Recent Searches</Text>
        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.recentItem}>
              <Text>{item.from} → {item.to}</Text>
              <Text>{item.price} • {item.distance}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 20 },
  inputsContainer: { gap: 12, marginBottom: 20 },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    gap: 12,
  },
  inputText: { flex: 1, fontSize: 16, color: '#000' },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    maxHeight: 300,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchButton: { backgroundColor: '#007AFF', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 24 },
  searchButtonDisabled: { backgroundColor: '#ccc' },
  searchButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  recentsTitle: { fontSize: 18, fontWeight: '600', marginBottom: 16 },
  recentItem: { padding: 16, backgroundColor: '#f8f9fa', borderRadius: 12, marginBottom: 12 },
});

export default SearchScreen;

