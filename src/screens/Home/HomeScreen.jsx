import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground
  
} from "react-native";
import React, { useState } from "react";
import AppNavigation from "../../navigation/AppNavigation";
import Header from "../../components/header/Header";
import header_bg from "../../../assets/images/home_screen/app_home_bg.jpg";
import { kpiDummyData } from "../../../data/kpi_data";
import ChartCard from "../../components/chartCards/ChartCard";
import ExampleChart from "../../components/dataCharts/ExampleChart";
import ExampleChart2 from "../../components/ExampleChart2";
// import { COLORS, SIZES, FONTS } from "../../constants/colors.js";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
    shadowColor: '#333',
    textShadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.50,
    shadowRadius: 5,
    elevation: 9
  },
  cardCantainer: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  }
});

const HomeScreen = () => {
  const [kpiData, setKpiData] = useState(kpiDummyData);
  function renderHeader() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={{
          width: 200,
          paddingVertical: 24,
          paddingHorizontal: 24,
          marginLeft: index === 0 ? 24 : 0,
          marginRight: 12,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginTop: 12, marginBottom: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.kpi_main_name}</Text>
        </View>

        <View style={{ marginTop: 12, flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'semi-bold' }}>{item.kpi_block_label_1}</Text>
          <Text style={{ fontSize: 18, fontWeight: 400 }}>{item.kpi_value_1}</Text>
        </View>
        <View style={{ marginTop: 12, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'semi-bold' }}>{item.kpi_block_label_2}</Text>
          <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.kpi_value_2}</Text>
        </View>
        <View style={{ marginTop: 12, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'semi-bold' }}>{item.kpi_block_label_3}</Text>
          <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.kpi_value_3}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={{ width: "100%", height: 300, flex: 1, justifyContent: "center" }}>
        <ImageBackground
          source={header_bg}
          resizeMode="cover"
          style={{ flex: 1, alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 10,
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => console.log("Notification on Press")}
            >
              {/* Uncomment and add an image source here */}
              {/* <Image 
                source={require('path/to/your/image.png')}
                resizeMode="contain"
                style={{ flex: 1 }}
              /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 36,
              marginTop: -50,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#777", fontWeight: "500", fontSize: 16 }}>
              Dashboard
            </Text>
            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "600" }}>
              Client Name
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "-60%",
            }}
          >
            <Text style={{ color: "#fff", marginLeft: 24, fontSize: 18 }}>
              Key Performance Indicators
            </Text>
            <FlatList
              data={kpiData}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              contentContainerStyle={{ marginTop: 8 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>{renderHeader()}</View>
      <View style={styles.cardCantainer}>
        <ExampleChart />
        <ExampleChart2 />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
