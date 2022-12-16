import { StyleSheet, Text, FlatList, Button, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
	const [usernames, setUsernames] = useState(['Yaya', 'Mamoudou']);
	const [user, setUser] = useState('');

	const handleInput = (value) => {
		setUser(value);
	};

	const addUser = () => {
		setUsernames([user, ...usernames]);
	};

	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				onChangeText={handleInput}
				style={styles.input}
				placeholder='Enter username'
			/>
			<Button onPress={addUser} title='Press me' />

			<FlatList
				data={usernames}
				renderItem={({ item }) => {
					return <Text style={styles.user}>{item}</Text>;
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		borderWidth: 4,
		borderColor: '#ccc',
		padding: 10,
		marginHorizontal: 16,
		borderRadius: 10,
		fontSize: 18,
	},
	user: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 20,
	},
});
