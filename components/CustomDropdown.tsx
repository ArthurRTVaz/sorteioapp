import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CustomDropdown() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.title}>Nome da Lista</Text>
      </TouchableOpacity>
      <FontAwesome name="trash" size={24} color="#007ACC" style={styles.trashIcon} />
      <FontAwesome name={open ? "chevron-up" : "chevron-down"} size={20} color="#fff" style={styles.arrow} />
      {open && (
        <View style={styles.optionsContainer}>
          <Text style={styles.option}>Item 1</Text>
          <Text style={styles.option}>Item 2</Text>
          <Text style={styles.option}>Item 3</Text>
          <FontAwesome name="pencil" size={22} color="#007ACC" style={styles.editIcon} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEFA',
    padding: 15,
    borderRadius: 50,
    width: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: '#007ACC',
    textAlign: 'center',
  },
  trashIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  arrow: {
    marginTop: -10,
  },
  optionsContainer: {
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    width: 200,
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  editIcon: {
    marginTop: 10,
  },
}); 