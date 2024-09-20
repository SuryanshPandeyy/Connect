import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectorDesign1 from '../../assets/Icons/sectorDesign1.svg'
import SectorDesign2 from '../../assets/Icons/sectorDesign2.svg'

const Service = () => {
    return (
        <View style={{
            gap: 15
        }}>
            <ServiceBox />
            <ServiceBox />
            <ServiceBox />
        </View>
    )
}

const ServiceBox = () => {
    return (
        <View style={styles.box}>
            <View style={styles.sectorDesign1}>
                <SectorDesign1 />
            </View>
            <View style={styles.sectorDesign2}>
                <SectorDesign2 />
            </View>
            <Image source={require('../../assets/Image/img1.png')} style={styles.image} />
            <View style={{
                flex: 1
            }}>
                <Text style={styles.heading}>Rohit Singhania</Text>
                <Text style={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                </Text>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>Know More</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Service

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255, 231, 234, 1)',
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        borderRadius: 100,
        width: 58,
        aspectRatio: 1
    },
    heading: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600'
    },
    desc: {
        color: '#000',
        fontSize: 12,
    },
    btn: {
        backgroundColor: 'rgba(207, 118, 221, 1)',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginTop: 10,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 11
    },
    sectorDesign1: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    sectorDesign2: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
})