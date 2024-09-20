import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Design = ({ containerStyle, color, gradientColor }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <LinearGradient style={[styles.circle, styles.bigCircle]}
                useAngle
                angle={90}
                colors={gradientColor || ['#fff', '#fff']}>
                <View style={[styles.circle, {
                    backgroundColor: color?.[1]
                }]} />
            </LinearGradient>
            <View style={[styles.smallCircle1, {
                backgroundColor: color?.[2]
            }]} />
            <View style={[styles.smallCircle2, {
                backgroundColor: color?.[3]
            }]} />
        </View>
    )
}

export default Design

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    circle: {
        width: 70,
        aspectRatio: 1,
        borderRadius: 50,
    },
    bigCircle: {
        padding: 53,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    smallCircle1: {
        position: 'absolute',
        top: 50,
        left: -16,
        width: 35,
        aspectRatio: 1,
        borderRadius: 50
    },
    smallCircle2: {
        position: 'absolute',
        bottom: -10,
        right: 45,
        width: 20,
        aspectRatio: 1,
        borderRadius: 50
    }
})