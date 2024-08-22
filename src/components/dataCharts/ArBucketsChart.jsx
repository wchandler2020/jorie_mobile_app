import { View, Text, Dimensions, StyleSheet } from "react-native"; // Added StyleSheet import
import React from "react";
import { BarChart } from "react-native-chart-kit";

const ArBucketsChart = () => {
  // Specific data values for each month
  const dataValues = [50, 80, 65, 90, 100, 75]; // Example data

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
      paddingHorizontal: 10, // Add some padding to ensure content doesn't touch the edges
    },
  });

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.cardContainer}>
      <Text>Bezier Line Chart</Text>
      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: dataValues, // Use the specific data values array
            },
          ],
        }}
        width={devindWidth - 54} // Adjust width to fit within the card container
        height={240}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={chartConfig} // Use the chartConfig variable
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ArBucketsChart;
