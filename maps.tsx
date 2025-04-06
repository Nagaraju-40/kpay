import React, { useEffect } from 'react';
import { View, StyleSheet, Linking } from 'react-native';

const App = () => {
  const openGoogleMaps = () => {
    const latitude = 16.5449;
const longitude = 81.5212;
const label = 'Bhimavaram';
 // Optional: Label for the location

    // Construct the URL for Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${label}`;

    // Open the URL using the Linking module
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  // Automatically open Google Maps when the component mounts
  useEffect(() => {
    openGoogleMaps();
  }, []);

  return (
    <View style={styles.container}>
      {/* No button or UI elements */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});

export default App;