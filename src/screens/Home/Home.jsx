import { View, Animated, Text, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './Home.styles'
import {
    Animation1,
    Animation2,
    Animation3,
    Gesture1
} from '../../components'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Animation1 />
            <Animation2 />
            <Animation3 />
            {/* <Gesture1 /> */}
        </View>

    )
}