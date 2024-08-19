import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const devindWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: devindWidth -34,
    backgroundColor: "#f1f1f1",
    height: 300,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#333',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.50,
    elevation: 9,
    shadowRadius: 5
  }
})

const ChartCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>ChartCard</Text>
    </View>
  )
}

export default ChartCard