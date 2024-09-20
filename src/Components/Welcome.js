import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import Design from './Design'

const Welcome = () => {
    const [value, setValue] = useState('')
    return (
        <View style={styles.container}>
            <Design
                containerStyle={{
                    top: -30,
                    right: -30
                }}
                color={['#fff', 'rgba(255, 230, 0, 1)', 'rgba(128, 2, 255, 1)', 'rgba(255, 94, 94, 1)']}
            />
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.heading}>Find Your Dream Sector!</Text>

            <View style={styles.inputBox}>
                <Icon name='search' type={IconType.Feather} size={28} color='rgba(255, 138, 0, 1)' />
                <TextInput placeholder='What are you looking for?' value={value} onChangeText={txt => setValue(txt)}
                    placeholderTextColor="rgba(149, 149, 149, 1)"
                    style={styles.textInput}
                />
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(237, 255, 206, 1)',
        height: 190,
        width: 296,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        top: -90,
        padding: 25,
        position: 'relative',
        overflow: 'hidden'
    },
    welcomeText: {
        color: '#000',
        fontSize: 14,
    },
    heading: {
        color: '#000',
        fontSize: 26,
        fontWeight: '600',
        width: 180
    },
    inputBox: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 0,
        borderRadius: 15,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    textInput: {
        fontSize: 12
    },

})