import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  // Categories with Icons
  const categories = [
    { id: '1', title: 'Mango Crop', icon: 'local-florist' },
    { id: '2', title: 'Offers', icon: 'local-offer' },
    { id: '3', title: 'Herbicides', icon: 'local-drink' },
    { id: '4', title: 'Growth Promoters', icon: 'spa' },
    { id: '5', title: 'Fertilizers', icon: 'local-dining' },
  ];

  // Featured Items (Icons Instead of Images)
  const featured = [
    { id: '1', title: 'Crop Doctor', icon: 'healing', route: '/crop-doctor' },
    { id: '2', title: 'Vedika', icon: 'person', route: '/vedika' },
  ];

  // Tools with Icons
  const tools = [
    { id: '1', title: 'Weather Forecast', icon: 'cloud', route: '/weather' },
    { id: '2', title: 'Mandi Price', icon: 'balance', route: '/mandi-price' },
    { id: '3', title: 'Crop Care', icon: 'local-florist', route: '/crop-care' },
    { id: '4', title: 'Fertilizer Calculator', icon: 'calculate', route: '/fertilizer-calculator' },
  ];

  // Render Category Item
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={() => router.push(`/${item.title.toLowerCase().replace(' ', '-')}`)}>
      <MaterialIcons name={item.icon} size={40} color="green" />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  // Render Featured Item
  const renderFeatured = ({ item }) => (
    <TouchableOpacity style={styles.featuredItem} onPress={() => router.push(item.route)}>
      <MaterialIcons name={item.icon} size={50} color="white" />
      <Text style={styles.featuredText}>{item.title}</Text>
    </TouchableOpacity>
  );

  // Render Tool Item
  const renderTool = ({ item }) => (
    <TouchableOpacity style={styles.toolItem} onPress={() => router.push(item.route)}>
      <MaterialIcons name={item.icon} size={30} color="white" />
      <Text style={styles.toolText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search products here..." placeholderTextColor="gray" />
        <TouchableOpacity style={styles.micButton}>
          <MaterialIcons name="mic" size={20} color="orange" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />

      {/* Featured Section */}
      <Text style={styles.sectionTitle}>Featured</Text>
      <FlatList
        data={featured}
        renderItem={renderFeatured}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.featuredList}
      />

      {/* Tools */}
      <Text style={styles.sectionTitle}>Tools</Text>
      <FlatList
        data={tools}
        renderItem={renderTool}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.toolList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  micButton: {
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 100,
  },
  categoryText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  featuredList: {
    marginBottom: 20,
  },
  featuredItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
    width: 120,
  },
  featuredText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
  toolList: {
    marginBottom: 20,
  },
  toolItem: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
    width: 100,
  },
  toolText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
});
