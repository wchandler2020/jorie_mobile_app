import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";

const ClaimResultsTrendsChart = () => {
  // Specific data values for each month
  const dataValues = [
    { name: "January", population: 50, color: "#f00", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "February", population: 80, color: "#0f0", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "March", population: 65, color: "#00f", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "April", population: 90, color: "#ff0", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "May", population: 100, color: "#0ff", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    { name: "June", population: 75, color: "#f0f", legendFontColor: "#7F7F7F", legendFontSize: 15 },
  ]; // Example data with color

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
      <Text>Claim Results Trends</Text>
      <PieChart
        data={dataValues}
        width={devindWidth - 54} // Adjust width to fit within the card container
        height={240}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]} // Adjust center position
        absolute
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ClaimResultsTrendsChart;
