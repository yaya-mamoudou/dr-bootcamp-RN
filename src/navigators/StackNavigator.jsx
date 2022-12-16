import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Transactions from '../screens/Transactions';
import Bookmarks from '../screens/Bookmarks';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Transactions' component={Transactions} />
            <Stack.Screen name='Bookmarks' component={Bookmarks} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    )
}