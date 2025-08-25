import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Assuming you're using Expo Router

const partnerCompanies = [
  { id: '1', name: 'SWAL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpZZ1bNShf0c8rtZndmfPUNMeZSSE33tUYw&s' },
  { id: '2', name: 'NAGARJUNA(NACL)', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGt6ciRiXi1CQ/company-logo_200_200/company-logo_200_200/0/1655535271242/nacl_industries_limited_logo?e=2147483647&v=beta&t=cF4yPIor7FLNEMkPgdjkmPk4RllCeQJbup-aBHEQwDc' },
  { id: '3', name: 'UPL', logo: 'https://files.lbr.cloud/public/2022-09/upl_ltd-logo-462x558.jpg?VersionId=VSdheNEoVUGd7UuxB3hc1mQAfMv5Rrnr' },
  { id: '4', name: 'ADAMA', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwgAqbuyWbyrnLhpmuMvNWtfPnZxYhq7JmA&s' },
  { id: '5', name: 'SYNGENTA', logo: 'https://datavid.com/hubfs/logos/datavid%20syngenta%20partner%20logo.png' },
  { id: '6', name: 'CRYSTAL', logo: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/CaptureCCP2022030zs309083520220303092811.jpg' },
];

const PartnerCompaniesScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
        </TouchableOpacity>
        <Text style={styles.header}>PARTNER BRANDS</Text>
        <TouchableOpacity onPress={() => router.push('/cart')} style={styles.cartIcon}>
          <Ionicons name="cart-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={partnerCompanies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/types")} // Navigate to /types for all companies
          >
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.companyName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  cartIcon: {
    position: 'absolute',
    right: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PartnerCompaniesScreen;
