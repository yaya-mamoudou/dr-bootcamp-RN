import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home/Home';
import Settings from '../screens/Settings';
import Transactions from '../screens/Transactions';
import Bookmarks from '../screens/Bookmarks';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Transactions" component={Transactions} />
            <Tab.Screen name="Bookmarks" component={Bookmarks} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}