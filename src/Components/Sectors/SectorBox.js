import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Design from '../Design'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('screen')

const SectorBox = ({ children, title, bgColor, designColor, designStyle, gradientColor }) => {
    const navigation = useNavigation()

    return (
        <Pressable style={[styles.container, {
            backgroundColor: bgColor
        }]} onPress={() => navigation.navigate('Sector', title)}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.icon}>
                {children}
            </View>
            <Design color={designColor} containerStyle={designStyle} gradientColor={gradientColor} />
        </Pressable>
    )
}

export default SectorBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 20,
        padding: 20,
        position: 'relative',
        overflow: 'hidden'
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
        color: '#000',
        zIndex: 2
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 12,
        zIndex: 2
    }
})