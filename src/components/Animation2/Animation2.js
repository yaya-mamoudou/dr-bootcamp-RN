import { View, Animated, Text, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './Animation2.styles';

let duration = 500;
let scale = 0.5;
let position = 30;

export default function Animation2() {
	let translateX1 = useRef(new Animated.Value(0)).current;
	let scale1 = useRef(new Animated.Value(1)).current;
	let translateX2 = useRef(new Animated.Value(0)).current;
	let scale2 = useRef(new Animated.Value(scale)).current;
	let zIndex1 = useRef(new Animated.Value(0)).current;
	let zIndex2 = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		StartLoader();
	}, []);

	const StartLoader = () => {
		Animated.loop(
			Animated.parallel([
				Animated.sequence([
					Animated.parallel([
						Animated.timing(translateX1, {
							toValue: position,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(scale1, {
							toValue: scale,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(zIndex1, {
							toValue: 1,
							useNativeDriver: true,
							duration: duration,
						}),
					]),
					Animated.parallel([
						Animated.timing(translateX1, {
							toValue: 0,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(scale1, {
							toValue: 1,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(zIndex1, {
							toValue: 0,
							useNativeDriver: true,
							duration: duration,
						}),
					]),
				]),

				Animated.sequence([
					Animated.parallel([
						Animated.timing(translateX2, {
							toValue: -position,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(scale2, {
							toValue: 1,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(zIndex2, {
							toValue: 0,
							useNativeDriver: true,
							duration: duration,
						}),
					]),
					Animated.parallel([
						Animated.timing(translateX2, {
							toValue: 0,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(scale2, {
							toValue: scale,
							useNativeDriver: true,
							duration: duration,
						}),
						Animated.timing(zIndex2, {
							toValue: 1,
							useNativeDriver: true,
							duration: duration,
						}),
					]),
				]),
			])
		).start();
	};

	return (
		<View>
			<View style={styles.container}>
				<Animated.View
					style={[
						styles.box,
						{
							transform: [{ translateX: translateX1 }, { scale: scale1 }],
							zIndex: zIndex1.interpolate({
								inputRange: [0, 1],
								outputRange: [1, 0],
							}),
						},
					]}
				/>
				<Animated.View
					style={[
						styles.box2,
						{
							transform: [{ translateX: translateX2 }, { scale: scale2 }],
							zIndex: zIndex2.interpolate({
								inputRange: [0, 1],
								outputRange: [0, 1],
							}),
						},
					]}
				/>
			</View>
			{/* <Text>Loading</Text> */}
		</View>
	);
}
