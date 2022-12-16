import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {

    const goTo = () => {
        navigation.navigate('Transactions')
    }
    return (
        <View>
            <Button onPress={goTo} title='Go to Transactions' />
        </View>
    )
}