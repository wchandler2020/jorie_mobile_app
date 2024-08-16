import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import home_bg from '../../../assets/images/home_screen/app_home_bg.jpg'

const Header = () => {
  return (
    <View style={{
        width: '100%',
        height: 200,
        ...styles.shadow
    }}>
      {/* <ImageBackground source={home_bg} 
                       resizeMode='cover ' 
                       style={{flex: 1,
                               alignItems: 'center'
                              }}/> */}

        <Text>IT IS HERE!!!</Text>
    </View>
  )
}

export default Header