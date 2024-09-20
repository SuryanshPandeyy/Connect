import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecommendDesign1 from '../../assets/Icons/recommendDesign1.svg'
import RecommendDesign2 from '../../assets/Icons/recommendDesign2.svg'
import RecommendDesign3 from '../../assets/Icons/recommendDesign3.svg'
import RecommendDesign4 from '../../assets/Icons/recommendDesign4.svg'

const Box = ({ heading, time }) => {
    return (
        <View style={styles.container}>
            <View style={styles.desing1}>
                <RecommendDesign3 />
            </View>
            <View style={styles.desing1}>
                <RecommendDesign1 />
            </View>
            <View style={styles.desing2}>
                <RecommendDesign4 />
            </View>
            <View style={styles.desing2}>
                <RecommendDesign2 />
            </View>
            <View style={styles.image} />
            <View style={{
                gap: 5,
                flex: 1
            }}>
                <Text style={styles.heading}>
                    {heading}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={styles.time}>{time}</Text>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Explore</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Box

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(246, 244, 255, 1)',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        gap: 10,
        overflow: 'hidden'
    },
    image: {
        backgroundColor: 'rgba(255, 197, 197, 1)',
        width: 84,
        aspectRatio: 1,
        borderRadius: 10
    },
    heading: {
        fontWeight: '900',
        color: '#000',
        fontSize: 14,
        width: '85%'
    },
    time: {
        color: 'rgba(6, 0, 71, 1)',
        fontSize: 11
    },
    btn: {
        backgroundColor: 'rgba(153, 91, 255, 1)',
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    btnText: {
        fontSize: 12,
        color: '#fff'
    },
    desing1: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    desing2: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
})