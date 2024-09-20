import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Categories from '../Components/Category/Categories'
import Sectors from '../Components/Sectors'
import Recommendation from '../Components/Recommendation'
import Menu from '../Components/Menu'

const Home = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <Header />
                <Welcome />
                <View style={{
                    marginTop: -90
                }}>
                    <Categories />
                    <Sectors />
                    <Recommendation />
                </View>
            </ScrollView>
            <Menu />
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})