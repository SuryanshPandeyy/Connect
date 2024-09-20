import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import SmallHeader from '../SmallHeader'
import LinearGradient from 'react-native-linear-gradient'
import CategoryBox from './CategoryBox'
import Construction from '../../assets/Icons/construction.svg'
import Film from '../../assets/Icons/film.svg'
import Pets from '../../assets/Icons/pets.svg'
import Home from '../../assets/Icons/home.svg'
import Events from '../../assets/Icons/events.svg'
import Healthcare from '../../assets/Icons/healthcare.svg'

const Categories = () => {
    const items = [
        {
            title: 'Construction',
            icon: Construction,
            borderColor: 'rgba(203, 224, 255, 1)',
            color: 'rgba(203, 224, 255, 1)'
        },
        {
            title: 'Entertainment',
            icon: Film,
            borderColor: 'rgba(255, 233, 190, 1)',
            color: 'rgba(255, 233, 190, 1)'
        },
        {
            title: 'Pet Care',
            icon: Pets,
            borderColor: 'rgba(255, 176, 221, 1)',
            color: 'rgba(255, 176, 221, 1)'
        },
        {
            title: 'Home Care',
            icon: Home,
            borderColor: 'rgba(0, 255, 230, 1)',
            color: 'rgba(192, 252, 246, 1)'
        },
        {
            title: 'Events',
            icon: Events,
            borderColor: 'rgba(255, 200, 171, 1)',
            color: 'rgba(255, 200, 171, 1)'
        },
        {
            title: 'HealthCare',
            icon: Healthcare,
            borderColor: 'rgba(207, 207, 255, 1)',
            color: 'rgba(207, 207, 255, 1)'
        },
    ]
    return (
        <View style={styles.backContainer}>
            <Container style={styles.container}>
                <SmallHeader title='Explore Categories' />
                <View style={styles.categories}>
                    {items?.map((cat, i) => {
                        return (
                            <CategoryBox key={i} title={cat.title} borderColor={cat.borderColor} colors={['rgba(255, 255, 255, 1)', cat.color]}>
                                <cat.icon />
                            </CategoryBox>
                        )
                    })}
                </View>
            </Container>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    backContainer: {
        backgroundColor: 'rgba(237, 255, 206, 1)'
    },
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 15,
        columnGap: 10
    }
})