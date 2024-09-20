import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CategoryBox = ({ title, colors, style, children, borderColor }) => {
    return (
        <LinearGradient colors={colors || ['#fff', '#fff']} style={[styles.container, style, {
            borderColor: borderColor || '#fff',
            borderWidth: .5,
        }]}
            useAngle={true}
            angle={90}>
            {children}
            <Text style={styles.text}>{title}</Text>
        </LinearGradient>
    )
}

export default CategoryBox

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 12
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    }
})