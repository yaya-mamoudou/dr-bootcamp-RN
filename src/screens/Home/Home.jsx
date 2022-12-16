import { View, Image, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Home.styles'
import Bell from 'react-native-vector-icons/Ionicons'
import Search from 'react-native-vector-icons/Feather'
import Categories from '../../components/Categories/Categories'
import BookMark from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Home({ navigation }) {

    const goTo = () => {
        navigation.navigate('Transactions')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profile} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' }} />
                        <View>
                            <Text style={styles.welcomeText}>Welcome back!</Text>
                            <Text style={styles.name}>Yaya mamoudou</Text>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <Bell name='notifications-outline' size={25} />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Search name='search' size={19} color="#ccc" />
                    <TextInput style={styles.input} placeholder='Search campaign, charities... s' />
                </View>
            </View>
            <Categories />
            <View style={styles.bigCardContainer}>
                <Image style={styles.bigCardImg} source={{ uri: 'https://images.unsplash.com/photo-1665686440627-936e9700a100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' }} />
                <View style={styles.cardTextArea}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.cardTitle}>Proper food for homeless</Text>
                            <Text>Initiate by: digitalrenter.com</Text>
                        </View>
                        <View style={[styles.iconContainer, { backgroundColor: '#ccc' }]}>
                            <Bell name='notifications-outline' size={20} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={[{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }]}>
                            <Bell name='notifications-outline' size={20} />
                            <Text>78%</Text>
                        </View>

                        <View style={[{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }]}>
                            <Bell name='notifications-outline' size={20} />
                            <Text>78%</Text>
                        </View>

                        <View style={[{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }]}>
                            <Bell name='notifications-outline' size={20} />
                            <Text>78 days left</Text>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 20, alignItems: 'center' }}>
                <Text style={{ fontWeight: '700', fontSize: 18 }}>Latest Crowdfunding</Text>
                <Text>See all</Text>
            </View>

        </View>

    )
}