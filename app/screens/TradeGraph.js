import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types'
import { Animated,View,Text,StatusBar,StyleSheet,Dimensions,TouchableHighlight,Image
 } from "react-native";
// import TextHeader from "../components/TextHeader/TextHeader";
// import { Dimensions } from "react-native";

import Container from "../components/Container/Container";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
};

const TradeGraph = () => {
    return(
        <Container>
            <View>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
            </View>
        </Container>
    
    )
}

export default TradeGraph