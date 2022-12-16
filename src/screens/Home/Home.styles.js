import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		// paddingHorizontal: 16,
	},
	header: {
		backgroundColor: '#B8E5CF',
		padding: 16,
		paddingVertical: 50,
	},
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	profile: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	welcomeText: {
		color: '#3C6150',
	},
	name: {
		color: '#3C6150',
		fontSize: 16,
		fontWeight: '800',
	},
	iconContainer: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		backgroundColor: 'white',
		borderRadius: 14,
		paddingHorizontal: 20,
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 50,
	},
	input: {
		fontSize: 16,
		marginLeft: 10,
	},
	bigCardImg: {
		height: 120,
	},
	bigCardContainer: {
		marginHorizontal: 16,
		borderRadius: 15,
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: '#ccc',
		marginTop: 20,
	},
	cardTitle: {
		fontSize: 20,
		fontWeight: '700',
	},
	cardTextArea: {
		padding: 15,
	},
});
