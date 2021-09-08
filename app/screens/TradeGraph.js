import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Animated,View,Text,StatusBar,StyleSheet,Dimensions,TouchableHighlight,Image,TouchableOpacity
 } from "react-native";
import TextHeader from "../components/TextHeader/TextHeader";
// import { Dimensions } from "react-native";
import { AntDesign,FontAwesome5,Ionicons} from '@expo/vector-icons';
import Container from "../components/Container/Container";
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";


const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
const screenWidth = Dimensions.get("window").width;

const TradeButton = ({text,butColor}) => {
    return(
        <TouchableOpacity style={{borderRadius:15,justifyContent:"center",
            backgroundColor:butColor,width:wp('40%'),height:hp('10%')}}>
            <Text style={{textAlign:"center",color:"white",fontSize:hp('4.5%')}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const TradeGraph = ({route,navigation}) => {
    return(
            <Container>
                <StatusBar />
                <TouchableOpacity style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('0.5%')}}
                    onPress={() => navigation.navigate('MyWallet')}
                >
                    <AntDesign name="arrowleft" size={30} color="black" />
                    <TextHeader 
                        headerText="Trading"
                        size={hp('3.5%')}
                        isBold
                    />
                </TouchableOpacity>

                <View style={{marginTop:hp('0.5%'),flexDirection:"row",
                    justifyContent:"space-between",marginHorizontal:wp('5%'),
                    marginBottom:hp('3%')
                    
                }}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{height:hp('10%'),width:wp('18%'),backgroundColor:"black",
                            alignItems:"center",justifyContent:"center",borderRadius:hp('1%')}}>
                            <FontAwesome5 name="bitcoin" size={36} color="orange" />
                        </View>
                        <View style={{marginLeft:wp('4%')}}>
                            <Text style={{fontWeight:"bold"}}>BTC</Text>
                            <Text style={{marginTop:hp('3%'),color:"gray",fontWeight:"bold"}}>
                                Bitcoin
                            </Text>
                        </View>
                        <Text style={{color:"green",fontWeight:"bold"}}>
                            8.9%
                        </Text>
                    </View>
                 
                    {/* <Image 
                        source={require('./images/curve.png')}
                        style={{borderRadius:70,width:wp('18%'),height:hp('8%')}}
                                // resizeMode="contain"
                                // style={{width: 60, height: 60}}
                    /> */}
                    <View style={{marginLeft:wp('3%')}}>
                        <Text style={{fontWeight:"bold"}}>$10,945.00</Text>
                        <Text style={{marginTop:hp('3%'),color:"gray",fontWeight:"bold"}}>
                            1.00 BTC</Text>
                    </View>
                </View>


                {/* <LineChart
                    data={{
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
                        datasets: [
                            {
                                data: [0, 4, 8, 12, 16],
                                color: (opacity = 1) => "blue"
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width*0.94} // from react-native
                    height={hp('35%')}
                    // yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "black",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 250) => `rgba(255, 255, 255, ${opacity})`,
                        // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "1", 
                        }
                    }}
                    line
                    style={{
                        marginTop: hp('2%'),
                        borderRadius: 3,alignSelf:"center",
                        marginHorizontal:wp('3%')
                    }}
                /> */}

                {/* <LineChart data={data} areaChart  
                    style={{height:hp('20%')}}
                /> */}
                <Image 
                    source={require('./images/graph.png')}
                    style={{width:wp('80%'),height:hp('42%'),marginBottom:hp('3%'),
                        alignSelf:"center"
                    }}
                    // marginHorizontal:wp('8%')}}
                                    // resizeMode="contain"
                                    // style={{width: 60, height: 60}}
                />
                <Text style={{fontSize:hp('3%'),marginLeft:wp('3%')}}>Estimated purchase value</Text>
                <Text style={{fontSize:hp('3%'),fontWeight:"bold",marginLeft:wp('3%')}}>0.031</Text>
                <View 
                    style={{backgroundColor:"gray",height:hp('0.3%'),marginHorizontal:wp('3%')}}
                />
                <Text style={{fontSize:hp('3%'),marginTop:hp('2%'),color:"gray",fontWeight:"bold",
                    marginLeft:wp('3%')
                }}>
                    Trade Value
                </Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",
                    marginHorizontal:wp('3%')}}>
                    <Text style={{fontWeight:"bold",marginTop:hp('2%')}}>345 USD</Text>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{backgroundColor:"blue",width:wp('16%'),
                            height:hp('7%'),justifyContent:"center",borderTopLeftRadius:hp('1.5%'),
                            borderBottomLeftRadius:hp('1.5%'),borderTopRightRadius:hp('1.5%'),
                            borderBottomRightRadius:hp('1.5%')
                        }}
                        >
                            <Text style={{textAlign:"center",color:"white",fontWeight:"bold"}}>
                                25%
                            </Text>    
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent:"center",
                            backgroundColor:"#B4D6C1",borderTopRightRadius:hp('1.5%'),
                            borderBottomRightRadius:hp('1.5%'),width:wp('30%')
                        }}>
                            <View style={{flexDirection:"row",alignSelf:"center",
                                justifyContent:"space-between"}}>
                                <Text style={{textAlign:"center",fontWeight:"bold"}}>50%</Text>
                                <Text style={{textAlign:"center",fontWeight:"bold"}}>100%</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View 
                    style={{backgroundColor:"gray",height:hp('0.2%'),marginTop:hp('1.5%'),
                        marginHorizontal:wp('3%')
                    }}
                />
                <View 
                    style={{backgroundColor:"#F2F4F4",height:hp('0.6%'),marginTop:hp('3%')}}
                />
            <View style={{height:hp('14%'),marginTop:hp('0.3%'),
                flexDirection:"row",justifyContent:"space-around",
                alignItems:"center",shadowColor:"#000",shadowOffset:{width:0, height:10},
                shadowOpacity:0.53,shadowRadius:13.97,elevation:21
            }}
            >
                <TradeButton 
                    text="Buy"
                    butColor="blue"
                />
                <TradeButton 
                    text="Sell"
                    butColor="red"
                />
            </View>
        </Container>
    )
   
}



export default TradeGraph