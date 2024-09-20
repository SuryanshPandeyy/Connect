import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

const Header = ({ bgColor }) => {
  return (
    <View>
      <LinearGradient style={styles.background} colors={bgColor || ['rgba(151, 102, 255, 1)', 'rgba(247, 243, 255, 1)']}>
        <View style={styles.header}>
          <Icon name='menu' type={IconType.Feather} color='#fff' size={27} />
          <View>
            <Icon name='infinite' style={styles.infiniteIcon} type={IconType.Ionicons} color='#fff' size={35} />
            <View style={styles.dot} />
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  background: {
    height: 186,
    borderBottomRightRadius: 60
  },
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
  dot: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 138, 0, 1)',
    position: 'absolute',
    right: -4,
    top: -2
  }
})