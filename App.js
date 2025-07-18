import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from './screens/Chats';
import Settings from './screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatsStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

const ChatsStackScreen = () => (
  <ChatsStack.Navigator screenOptions={{ headerShown: false }}>
    <ChatsStack.Screen name="ChatsMain" component={Chats} />
  </ChatsStack.Navigator>
);


const SettingsStackScreen = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingsStack.Screen name="SettingsMain" component={Settings} />
  </SettingsStack.Navigator>
);

const TabsScreen = () => (
  <Tab.Navigator  screenOptions={({ route }) => {
    return {
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Chats') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#4177fb',
      tabBarInactiveTintColor: 'gray',
    };
  }} >
    <Tab.Screen name="Chats" component={ChatsStackScreen} />
    <Tab.Screen name="Settings" component={SettingsStackScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
      <NavigationContainer>
  <TabsScreen />
    </NavigationContainer>
  );
}


export default App;
