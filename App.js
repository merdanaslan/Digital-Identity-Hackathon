import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LensProvider, Theme, Environment } from '@lens-protocol/react-native-lens-ui-kit';
import Profiles from './Profiles';
import Feed from './Feed';
import Search from './Search';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <LensProvider environment={Environment.mainnet} theme={Theme.light}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profiles"
            component={Profiles}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="cog"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

export default App;
