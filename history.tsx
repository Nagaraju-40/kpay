import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons library

const transactions = [
  {
    id: '1',
    type: 'Cashback',
    date: '1-Feb-2025',
    time: '11:00 AM',
    amount: 400,
    status: 'approved',
  },
  {
    id: '2',
    type: 'Bayer',
    date: '1-Feb-2025',
    time: '9:00 AM',
    amount: -2000,
    status: 'pending',
  },
];

const App = () => {
  const [filter, setFilter] = useState('all');

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'all') return true;
    return transaction.status === filter;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>

      <View style={styles.filterContainer}>
        {['all', 'pending', 'approved'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              filter === status && styles.activeButton,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text style={styles.filterText}>{status.charAt(0).toUpperCase() + status.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            {/* Add arrow icon based on transaction type */}
            <Icon
              name={item.type === 'Cashback' ? 'arrow-downward' : 'arrow-upward'}
              size={24}
              color={item.type === 'Cashback' ? 'green' : 'red'}
              style={styles.icon}
            />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionType}>{item.type}</Text>
              <Text style={styles.transactionDate}>
                {item.date} | {item.time}
              </Text>
            </View>
            <Text style={[styles.amount, { color: item.amount > 0 ? 'green' : 'red' }]}>
              ₹{Math.abs(item.amount)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'green', // Changed background color to green
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Changed text color to white for better visibility
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  filterText: {
    fontSize: 16,
    color: 'white',
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionType: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;