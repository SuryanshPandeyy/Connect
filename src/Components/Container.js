import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Container = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '100%'
    }
})