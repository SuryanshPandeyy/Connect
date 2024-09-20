import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'
import Notification from '../assets/Icons/notification.svg'
import Paw1 from '../assets/Icons/paw1.svg'
import Paw2 from '../assets/Icons/paw2.svg'
import Dog1 from '../assets/Icons/dog1.svg'
import Dog2 from '../assets/Icons/dog2.svg'
import Cat1 from '../assets/Icons/cat1.svg'
import FilterIcon from '../assets/Icons/filter.svg'
import HumanIcon from '../assets/Icons/human.svg'
import BoxDesign from '../assets/Icons/boxDesign.svg'
import Swiper from 'react-native-swiper'
import SmallHeader from '../Components/SmallHeader'

import Grooming from '../assets/Icons/grooming.svg'
import Walking from '../assets/Icons/walking.svg'
import Dating from '../assets/Icons/dating.svg'
import Training from '../assets/Icons/training.svg'
import Service from '../Components/SectorPage/Service'
import Rating from '../Components/SectorPage/Rating'
import Menu from '../Components/Menu'

const Sector = ({ navigation, route }) => {

    const services = [
        {
            title: 'Pet Grooming',
            icon: Grooming,
            style: {
                alignSelf: 'flex-end'
            },
            containerStyle: {
                height: 193
            }
        },
        {
            title: 'Pet Walking',
            icon: Walking,
            containerStyle: {
                height: 150,
                paddingVertical: 10,
                paddingBottom: 20
            },
            circle1Style: {
                right: -40,
                top: -50,
                left: ''
            },
            circle2Style: {
                left: -50,
                bottom: -45,
                right: '',
            },
        },
        {
            title: 'Pet Dating',
            icon: Dating,
            style: {
                alignSelf: 'flex-end',
            },
            containerStyle: {
                height: 140,
                paddingVertical: 20,
                gap: 5,
            },
            circle1Style: {
                right: -40,
                top: -50,
                left: ''
            },
            circle2Style: {
                left: -40,
                bottom: -30,
                right: '',
            },
        },
        {
            title: 'Pet Training',
            icon: Training,
            containerStyle: {
                height: 193,
                gap: 3
            }
        },
        {
            title: 'Pet Adoption',
            icon: require('../assets/Icons/adoption.png'),
            type: 'Image',
            style: {
                alignSelf: 'flex-start'
            },
            containerStyle: {
                height: 193
            }
        }
    ]

    return (
        <>
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <LinearGradient style={{
                    flex: 1
                }} colors={['rgba(255, 181, 177, 1)', 'rgba(205, 126, 217, 1)']}>

                    <View style={styles.header}>
                        <Icon name='menu' type={IconType.Feather} color='#fff' size={27} />
                        <Icon name='infinite' style={styles.infiniteIcon} type={IconType.Ionicons} color='#fff' size={35} />
                        <View style={styles.notificationIcon}>
                            <Notification height={25} width={25} />
                        </View>
                    </View>

                    <View style={{
                        paddingHorizontal: 30, position: 'relative'
                    }}>
                        <Text style={{
                            fontWeight: '800',
                            fontSize: 23,
                            color: '#000'
                        }}>Hello,</Text>
                        <Text style={{ fontSize: 16, color: '#000', fontWeight: '500' }}>
                            Fancy for a wash today!
                        </Text>

                        <View style={styles.paw1}>
                            <Paw1 />
                        </View>
                        <View style={styles.paw2}>
                            <Paw2 />
                        </View>

                        <View style={styles.animals}>
                            <Dog1 />
                            <Dog2 />
                            <Cat1 />
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.input}>
                            <Icon name='search' type={IconType.Feather} color='rgba(255, 102, 148, 1)' size={30} />
                            <TextInput
                                style={{ flex: 1 }}
                                placeholder='What are you looking for?' placeholderTextColor='rgba(255, 102, 148, 1)'
                            />
                            <FilterIcon width={25} height={25} />
                        </View>

                        <View style={{
                            height: 200,
                            width: '100%'
                        }}>
                            <Swiper
                                showsPagination={true}
                                paginationStyle={{
                                    bottom: 40,
                                }}
                                dotColor='#fff'
                                activeDotColor='rgba(255, 102, 148, 1)'>
                                {Array(3).fill(0)?.map((item, i) => {
                                    return (
                                        <LinearGradient key={i}
                                            colors={['rgba(255, 181, 177, 1)', 'rgba(205, 126, 217, 0.5)']} style={styles.box}>
                                            <View style={styles.innerBox}>
                                                <View>
                                                    <View style={styles.circle} />
                                                    <Text style={[styles.boxText1, { color: 'rgba(255, 102, 148, 1)' }]}>Book Now!</Text>
                                                    <Text style={styles.boxText2}>-20%</Text>
                                                </View>
                                                <Text style={styles.boxText3}>All-New Groomers in Town!</Text>
                                                <View style={styles.humanIcon}>
                                                    <HumanIcon />
                                                </View>
                                                <View style={styles.boxDesign}>
                                                    <BoxDesign />
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    )
                                })}
                            </Swiper>
                        </View>

                        <SmallHeader title='Popular Services' />

                        <View style={{
                            flexDirection: 'row',
                            gap: 10
                        }}>
                            <View style={{
                                gap: 10
                            }}>
                                {services?.filter((_, i) => i % 2 == 0)?.map((item, i) => (
                                    <View style={[styles.service, item?.containerStyle]} key={i}>
                                        <View style={[styles.circle1, item?.circle1Style]} />
                                        <View style={[styles.circle2, item?.circle2Style]} />
                                        <View style={item?.style}>
                                            {item?.type == 'Image' ? <Image source={item?.icon} /> : <item.icon />}
                                        </View>
                                        <Text style={styles.serviceText}>
                                            {item.title}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                            <View style={{
                                gap: 10
                            }}>
                                {services?.filter((_, i) => i % 2 == 1)?.map((item, i) => (
                                    <View style={[styles.service, item?.containerStyle]} key={i}>
                                        <View style={[styles.circle1, item?.circle1Style]} />
                                        <View style={[styles.circle2, item?.circle2Style]} />
                                        <View style={item?.style}>
                                            {item?.type == 'Image' ? <Image source={item?.icon} /> : <item.icon />}
                                        </View>
                                        <Text style={styles.serviceText}>
                                            {item.title}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* <FlatList
                            scrollEnabled={false}
                            columnWrapperStyle={styles.serviceContent}
                            numColumns={2}
                            data={services}
                            ItemSeparatorComponent={() => <View style={styles.serviceSeparator} />}
                            keyExtractor={item => item.title}
                            renderItem={({ item }) => {
                                return (
                                    <View style={[styles.service]}>
                                        <View style={styles.circle1} />
                                        <View style={styles.circle2} />
                                        <View style={item?.style}>
                                            {item?.type == 'Image' ? <Image source={item?.icon} /> : <item.icon />}
                                        </View>
                                        <Text style={styles.serviceText}>
                                            {item.title}
                                        </Text>
                                    </View>
                                )
                            }}
                        /> */}

                        <SmallHeader title='Service Providers' style={{
                            marginTop: 25
                        }} />
                        <Service />
                        <SmallHeader title='Ratings' style={{
                            marginTop: 25
                        }} />
                        <Rating />
                    </View>
                    <LinearGradient colors={['#fff', '#ccc']} style={{
                        width: '100%',
                        height: 20,
                        position: 'absolute',
                        bottom: 0
                    }}/>
                </LinearGradient>
            </ScrollView>
            <Menu />
        </>
    )
}

export default Sector

const styles = StyleSheet.create({
    header: {
        marginTop: 40,
        paddingHorizontal: 25,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infiniteIcon: {
        transform: [
            {
                rotateX: '180deg'
            }
        ]
    },
    notificationIcon: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 9
    },
    paw1: {
        position: 'absolute',
        bottom: -52,
        left: 50
    },
    paw2: {
        position: 'absolute',
        right: 0
    },
    animals: {
        position: 'absolute',
        right: 20,
        flexDirection: 'row',
        bottom: -90,
        alignItems: 'flex-end',
        zIndex: 9
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 82,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30
    },
    input: {
        backgroundColor: 'rgba(255, 237, 242, 1)',
        paddingHorizontal: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    box: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 30,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    innerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30,
    },
    circle: {
        width: 160,
        height: 160,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 215, 229, 1)',
        position: 'absolute',
        left: -70,
        top: -40
    },
    boxText1: {
        width: 50,
        aspectRatio: 1,
        fontSize: 20,
        fontWeight: '800',
    },
    boxText2: {
        fontWeight: '600',
        fontSize: 15,
        left: 20
    },
    boxText3: {
        fontSize: 20,
        fontWeight: '800',
        width: 100,
        marginLeft: 30,
        color: '#000',
        top: -10,
    },
    humanIcon: {
        marginLeft: -18,
        top: 10,
        zIndex: 2
    },
    boxDesign: {
        position: 'absolute',
        top: -10,
        right: -20
    },
    service: {
        backgroundColor: 'rgba(255, 231, 234, 1)',
        // flex: .5,
        paddingVertical: 30,
        borderRadius: 30,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    serviceSeparator: {
        marginVertical: 10
    },
    serviceContent: {
        justifyContent: 'space-between',
        columnGap: 15
    },
    serviceText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000',
        fontWeight: '500'
    },
    circle1: {
        position: 'absolute',
        top: -30,
        left: -30,
        width: 85,
        aspectRatio: 1,
        backgroundColor: 'rgba(255, 203, 203, 1)',
        borderRadius: 100
    },
    circle2: {
        position: 'absolute',
        bottom: -45,
        right: -35,
        width: 85,
        aspectRatio: 1,
        backgroundColor: 'rgba(255, 203, 203, 1)',
        borderRadius: 100
    }
})