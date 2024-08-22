import { View, Platform, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator();

    const screenOptions = {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: Platform.OS === 'ios' ? 90 : 60,
            backgroundColor: "#ffffff"
        }
    };

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : 'home-outline'} 
                            size={24} 
                            color={focused ? 'blue' : 'gray'} 
                        />
                    ),
                }}
            />
            {/* Add other Tab.Screen components here with their respective icons */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
