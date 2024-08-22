import { View, Text, Image } from 'react-native'
import React from 'react'
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons, AntDesign} from '@expo/vector-icons'
import BottomTabNavigator from './BottomTabNavigator';
import About from '../screens/About/About';
// import Team from '../screens/team/Team';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
   <Drawer.Navigator 
   drawerContent={
    (props) => (
        <SafeAreaView>
            <View style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#98dbc6"
            }}>

                <Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 30}}>Jorie AI</Text>
                <Text>Company Logo Here...</Text>
            </View>
            <DrawerItemList {...props}/>
        </SafeAreaView>
        
    )
   }
   screenOptions={{
        drawerStyle: {
            backgroundColor: '#fff',
            width: 250
        },
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerShown: false,
        headerTintColor: '#000',
        drawerLabelStyle:{
            color: '#000',
            fontSize: 14,
            marginLeft: -10
        }
    }}>
        <Drawer.Screen 
            name='Home'
            options={{
                 drawerLabel: 'Home',
                title: 'Home',
                headerShadowVisible: true,
                drawerIcon: () => (
                    <Ionicons name='home-outline' size={24} color='#666' />
                )
            }}
            component={BottomTabNavigator}
        />
        <Drawer.Screen 
            name='About'
            options={{
                 drawerLabel: 'About',
                title: 'About Us',
                headerShadowVisible: true,
                drawerIcon: () => (
                    <AntDesign name='team' size={24} color='#666' />
                )
            }}
            component={About}
        />
        {/* <Drawer.Screen 
            name='Team'
            options={{
                 drawerLabel: 'Meet The Team',
                title: 'Team',
                headerShadowVisible: true,
                drawerIcon: () => (
                    <AntDesign name='team' size={24} color='#666' />
                )
            }}
            component={Team}
        /> */}

    </Drawer.Navigator>
  )
}

export default DrawerNavigation