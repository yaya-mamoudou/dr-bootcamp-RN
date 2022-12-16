import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Bell from 'react-native-vector-icons/Ionicons'


export default function Categories() {
    const categories = [
        { name: 'all', image: '' },
        { name: 'Education', image: 'shrtco.de/VY4L1q' },
        { name: 'Health', image: 'shrtco.de/VY4L1q' },
        { name: 'Agriculture', image: 'shrtco.de/VY4L1q' },
        { name: 'Energy', image: 'shrtco.de/VY4L1q' },
        { name: 'Offers', image: 'shrtco.de/VY4L1q' },
        { name: 'Life', image: 'shrtco.de/VY4L1q' }
    ]
    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={categories}
                horizontal
                renderItem={({ item, index }) => {
                    const isFirst = index == 0
                    return (
                        <View style={{ marginLeft: 20, flexDirection: 'row', borderRadius: 8, backgroundColor: isFirst ? "#000" : '#ccc', paddingVertical: 10, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}>
                            {!isFirst && <Bell name='notifications-outline' size={15} />}
                            <Text style={{ fontSize: 18, marginLeft: !isFirst && 8, color: isFirst ? 'white' : '#3B3054' }}>{item.name}</Text>
                        </View>)
                }} />
        </View>
    )
}