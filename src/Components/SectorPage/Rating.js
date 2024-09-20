import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RatingActive from '../../assets/Icons/ratingActive.svg'
import RatingIcon from '../../assets/Icons/rating.svg'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

const Rating = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>13 Reviews</Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 5
                }}>
                    <Text style={styles.headerText}>Write a Review</Text>
                    <Icon name='square-edit-outline' type={IconType.MaterialCommunityIcons} color='rgba(255, 102, 148, 1)'/>
                </View>
            </View>
            <View style={{
                gap: 15
            }}>
                <RatingBox image={require('../../assets/Image/rating1.png')} rating={4} />
                <RatingBox image={require('../../assets/Image/rating2.png')} rating={4} />
            </View>
        </View>
    )
}

const RatingBox = ({ image, rating }) => {
    return (
        <View style={styles.box}>
            <View style={styles.details}>
                <Text style={styles.heading}>Pooja Jain</Text>
                <View style={styles.rating}>
                    {Array(5).fill()?.map((item, i) => {
                        return (
                            <View key={i}>
                                {i < rating ? <RatingActive /> : <RatingIcon />}
                            </View>)

                    })}
                </View>
                <Text style={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                </Text>
            </View>

            <Image source={image} style={styles.image} />
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    headerText: {
        color: 'rgba(255, 102, 148, 1)',
        fontSize: 14,
    },
    box: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'rgba(255, 204, 210, 1)',
        flexDirection: 'row',
        width: '100%',
        overflow: 'hidden'
    },
    details: {
        padding: 15,
        gap: 6,
        flex: 1
    },
    heading: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700'
    },
    desc: {
        fontSize: 10,
        color: '#000'
    },
    image: {
        height: '100%',
        width: 100
    },
    rating: {
        flexDirection: 'row',
        gap: 2
    }
})