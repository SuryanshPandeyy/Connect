import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../assets/Icons/homeIcon.svg'
import Search from '../assets/Icons/searchIcon.svg'
import Play from '../assets/Icons/playIcon.svg'
import User from '../assets/Icons/userIcon.svg'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Home />
                <Text style={styles.btnText}>Home</Text>
            </Pressable>
            <Pressable>
                <Search />
            </Pressable>
            <Pressable>
                <Play />
            </Pressable>
            <Pressable>
                <User />
            </Pressable>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 10,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(238, 230, 255, 1)',
        borderRadius: 100,
        paddingHorizontal: 24,
        paddingVertical: 8
    }
})