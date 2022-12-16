import { View, Button } from 'react-native'
import React from 'react'

export default function Transactions({ navigation }) {

    const goTo = () => {
        navigation.navigate('Bookmarks')
    }
    return (
        <View>
            <Button onPress={goTo} title='Go to Bookmarks' />
        </View>
    )
}