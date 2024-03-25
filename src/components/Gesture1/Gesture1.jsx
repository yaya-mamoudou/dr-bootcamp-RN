import { View, Text, Animated, PanResponder } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../../constants/colors'

export default function Gesture1() {
    let pan = useRef(new Animated.ValueXY()).current

    let panResponder = useRef(new PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            pan.extractOffset();
        },
    })).current

    return (
        <View>
            <Animated.View style={[
                { width: 100, height: 100, backgroundColor: colors.green_2, borderRadius: 50, justifyContent: 'center', alignItems: 'center' },
                { transform: [{ translateX: pan.x }, { translateY: pan.y }] }
            ]} {...panResponder.panHandlers}>
                <Text>Drag me</Text>
            </Animated.View>
        </View>
    )
}