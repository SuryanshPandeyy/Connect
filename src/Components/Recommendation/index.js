import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import SmallHeader from '../SmallHeader'
import Box from './Box'

const Recommendation = () => {
    const items = [
        {
            title: 'Now share the Construction Sectors with your anyone and can save it as bookmark',
            time: 'Updated  |  06:30 AM'
        },
        {
            title: 'Now share the Construction Sectors with your anyone and can save it as bookmark',
            time: 'Updated  |  06:30 AM'
        },
    ]
    return (
        <Container>
            <SmallHeader title='Recommended For You' />
            <View style={{
                gap: 15
            }}>
                {items?.map((box, i) => {
                    return (
                        <Box key={i} heading={box.title} time={box.time} />
                    )
                })}
            </View>
        </Container>
    )
}

export default Recommendation

const styles = StyleSheet.create({})