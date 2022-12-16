import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				<BottomTabNavigator />
			</NavigationContainer>
		</SafeAreaView>
	);
}
