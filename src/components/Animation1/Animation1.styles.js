import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 16,
	},
	box: {
		width: 30,
		height: 30,
		backgroundColor: colors.green_1,
	},
	box2: {
		width: 30,
		height: 30,
		backgroundColor: colors.green_2,
	},
});
