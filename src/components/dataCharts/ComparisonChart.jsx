import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const ComparisonChart = () => {
  // Data values normalized between 0 and 1
  const dataValues = [0.5, 0.8, 0.65, 0.9, 1.0, 0.75]; // Example normalized data

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
      marginTop: 10,
      shadowColor: "#333",
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.5,
      elevation: 9,
      shadowRadius: 5,
      paddingHorizontal: 10,
    },
  });

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.cardContainer}>
      <Text>Comparison Chart</Text>
      <ProgressChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"], // Array of labels
          datasets: [
            {
              data: dataValues, // Use the specific normalized data values array
            },
          ],
        }}
        width={devindWidth - 54} // Adjust width to fit within the card container
        height={240}
        chartConfig={chartConfig} // Use the chartConfig variable
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ComparisonChart;
