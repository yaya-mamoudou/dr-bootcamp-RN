import { View, Animated, Text, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { styles } from './Animation3.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../constants/colors';

let duration = 1000;
let scale = 3;

export default function Animation3() {
	let scale1 = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		StartLoader();
	}, []);

	const StartLoader = () => {
		Animated.loop(
			Animated.sequence([
				Animated.parallel([
					Animated.timing(scale1, {
						toValue: scale,
						useNativeDriver: true,
						duration: duration,
						easing: Easing.bezier(0, 0.7, 0.8, 1),
					}),
				]),
				Animated.parallel([
					Animated.timing(scale1, {
						toValue: 1,
						useNativeDriver: true,
						duration: duration,
					}),
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
							transform: [{ scale: scale1 }],
						},
					]}
				>
					<Icon name='heart' color={colors.green_1} />
				</Animated.View>
			</View>
		</View>
	);
}
