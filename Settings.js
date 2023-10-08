import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [testnetEnabled, setTestnetEnabled] = useState(false);

  const handleLoginPress = () => {
    // add login functionality here in the future
  };

  const handleDarkModeToggle = () => {
    // add functionality for enabling/disabling Dark Mode here in the future
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleTestnetToggle = () => {
    // add functionality for enabling/disabling Testnet here in the future
    setTestnetEnabled(!testnetEnabled);
  };

  return (
    <View style={styles.container}>
      {/* "Login" button  */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Toggle for Dark Mode */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Dark Mode</Text>
        <Switch
          trackColor={{ false: 'grey', true: 'green' }}
          thumbColor={darkModeEnabled ? 'white' : 'white'}
          onValueChange={handleDarkModeToggle}
          value={darkModeEnabled}
        />
      </View>

      {/* Toggle for Testnet */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Testnet Feed and Profiles</Text>
        <Switch
          trackColor={{ false: 'grey', true: 'green' }}
          thumbColor={testnetEnabled ? 'white' : 'white'}
          onValueChange={handleTestnetToggle}
          value={testnetEnabled}
        />
      </View>

      {/* Add other settings content below if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 20, 
  },
  loginButton: {
    backgroundColor: 'grey',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10, 
  },
  toggleLabel: {
    flex: 1,
    fontSize: 18,
  },
});

export default Settings;
