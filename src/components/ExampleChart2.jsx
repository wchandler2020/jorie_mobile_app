import { View, Text, StyleSheet, processColor, AppRegistry, Dimensions } from 'react-native'
import React from 'react'

import {LineChart} from 'react-native-charts-wrapper';
const devindWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: devindWidth - 34,
        backgroundColor: "#f1f1f1",
        height: 300,
        borderRadius: 10,
        shadowColor: "#333",
        textShadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.5,
        elevation: 9,
        shadowRadius: 5,
        paddingHorizontal: 10, // Add some padding to ensure content doesn't touch the edges
      },
    chart: {
      flex: 1
    }
  });

const ExampleChart2 = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>Bezier Line Chart</Text>
        <LineChart style={styles.chart} data={{dataSets: [{label: 'demo', values: [{y: 1}, {y: 2}, {y: 1}]}]}}/>
    </View>
  )
}

export default ExampleChart2