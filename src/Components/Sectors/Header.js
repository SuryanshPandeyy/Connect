import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon, { IconType } from 'react-native-dynamic-vector-icons'

const Header = ({ bgColor }) => {
  return (
    <View>
        <View style={styles.header}>
          <Icon name='menu' type={IconType.Feather} color='#fff' size={27} />
          <Icon name='infinite' style={styles.infiniteIcon} type={IconType.Ionicons} color='#fff' size={35} />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  background: {
    height: 186,
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
  }
})