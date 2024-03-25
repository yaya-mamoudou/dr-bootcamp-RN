import { View, Animated, Text, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './Animation1.styles';

export default function Animation1({ navigation }) {
	let rotate = useRef(new Animated.Value(0)).current;
	let radius = useRef(new Animated.Value(0)).current;
	let scale = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		StartLoader();
	}, []);

	const StartLoader = () => {
		Animated.loop(
			Animated.sequence([
				Animated.parallel([
					Animated.timing(radius, {
						toValue: 50,
						duration: 500,
						useNativeDriver: true,
						easing: Easing.easeInOut,
					}),
					Animated.timing(scale, {
						toValue: 1.2,
						duration: 500,
						useNativeDriver: true,
						easing: Easing.easeInOut,
					}),
					Animated.timing(rotate, {
						toValue: 180,
						duration: 500,
						useNativeDriver: true,
						easing: Easing.easeInOut,
					}),
				]),
				Animated.parallel([
					Animated.timing(radius, {
						toValue: 0,
						duration: 1300,
						useNativeDriver: true,
						easing: Easing.easeInOut,
					}),
					Animated.timing(scale, {
						toValue: 1,
						duration: 1300,
						useNativeDriver: true,
						easing: Easing.easeInOut,
					}),
					Animated.timing(rotate, {
						toValue: 0,
						duration: 1300,
						useNativeDriver: true,
						easing: Easing.easeInOut,
					}),
				]),
			])
		).start();
	};

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.box,
					{
						borderRadius: radius,
						transform: [
							{ scale },
							{
								rotate: rotate.interpolate({
									inputRange: [0, 180],
									outputRange: ['180deg', '0deg'],
								}),
							},
						],
					},
				]}
			/>
			<Animated.View
				style={[
					styles.box2,
					{
						borderRadius: radius,
						transform: [
							{ scale },
							{
								rotate: rotate.interpolate({
									inputRange: [0, 180],
									outputRange: ['180deg', '0deg'],
								}),
							},
						],
					},
				]}
			/>
		</View>
	);
}
