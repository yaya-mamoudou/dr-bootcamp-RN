import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		width: 60,
		flexDirection: 'row',
		position: 'relative',
	},
	box: {
		width: 30,
		height: 30,
		backgroundColor: colors.green_1,
		borderRadius: 25,
	},
	box2: {
		width: 30,
		height: 30,
		backgroundColor: colors.green_2,
		borderRadius: 25,
		position: 'absolute',
		right: -0,
	},
});
