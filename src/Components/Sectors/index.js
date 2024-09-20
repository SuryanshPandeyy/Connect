import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import SmallHeader from '../SmallHeader'
import SectorBox from './SectorBox'
import HomeService from '../../assets/Icons/home_service.svg'
import HealthCare from '../../assets/Icons/healthcare_service.svg'

const Sectors = () => {
    return (
        <Container>
            <SmallHeader title="Popular Sectors" />

            <View style={styles.container}>
                <SectorBox title='Home Services' bgColor='rgba(237, 255, 206, 1)'
                    designStyle={styles.designStyle}
                    designColor={['', 'rgba(255, 230, 0, 1)', '#fff', 'rgba(255, 94, 94, 1)']}
                    gradientColor={['rgba(201, 176, 255, 1)', 'rgba(236, 243, 255, 1)']}
                >
                    <HomeService height={120} width={120} />
                </SectorBox>

                <SectorBox title='Healthcare' bgColor='rgba(206, 255, 243, 1)'
                    designStyle={styles.designStyle}
                    designColor={['', 'rgba(255, 230, 0, 1)', '#fff', 'rgba(255, 94, 94, 1)']}
                    gradientColor={['rgba(201, 176, 255, 1)', 'rgba(236, 243, 255, 1)']}
                >
                    <HealthCare height={110} width={110} />
                </SectorBox>
            </View>
        </Container>
    )
}

export default Sectors

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        width: '100%'
    },
    designStyle: {
        position: 'absolute',
        top: -30,
        right: -40
    }
})