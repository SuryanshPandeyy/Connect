import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

const SmallHeader = ({ style, title, children }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{title}</Text>
            <Icon name='dots-three-horizontal' type={IconType.Entypo} color='#000'/>
        </View>
    )
}

export default SmallHeader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    text: {
        fontWeight: '900',
        color: '#000',
        fontSize: 17
    }
})