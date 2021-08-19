import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types'
import { Animated,View,Text,StatusBar,StyleSheet,Dimensions,TouchableHighlight,Image
 } from "react-native";
// import TextHeader from "../components/TextHeader/TextHeader";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Easing } from "react-native-reanimated";


// const Icon = ({ iconBackground}) => {
//     return (
//         <View  style={{
//             borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 3,
//             width: Dimensions.get('window').width * 0.1,
//             height: Dimensions.get('window').width * 0.1,
//             backgroundColor:iconBackground ? iconBackground :'gray',
//                 // justifyContent: 'center',
//             // alignSelf: direction,
//             // marginLeft:wp(margPercent),
//             // marginTop:wp('9%'),
//             // paddingTop:hp('5%')
//             // marginRight:margRight,
//             }}  
//         />
//     )
// };

// const LevelIndicat = ({dashColor,viewHeight}) => {
//     return(
//         <View  
//             style={{backgroundColor:dashColor,height:viewHeight,width:Dimensions.get('window').width*0.3,
//                 // borderRadius:5
//             }}
//         />
//     )
// }






const CustomIndicator = ({one,two,three}) => {
    return(
        <View style={{flexDirection:"row",alignItems:"center",marginLeft:wp('6%')}}>
            <View  style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 3,
                    width: Dimensions.get('window').width * 0.06,
                    height: Dimensions.get('window').width * 0.06,
                    backgroundColor:one || two || three ? 'blue' :'gray',
                }}
            />
            <View  
                style={{backgroundColor:two || three ? "blue":"gray",height:hp('0.5%'),width:Dimensions.get('window').width*0.2,
                    // borderRadius:5
                }}
            />
            <View  style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 3,
                    width: Dimensions.get('window').width * 0.06,
                    height: Dimensions.get('window').width * 0.06,
                    backgroundColor:two || three ?"blue":'gray',
                }}
            />   
            <View  
                style={{backgroundColor:three ? "blue":"gray",height:hp('0.5%'),width:Dimensions.get('window').width*0.2,
                    // borderRadius:5
                }}
            />
            <View  style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 3,
                    width: Dimensions.get('window').width * 0.06,
                    height: Dimensions.get('window').width *0.06,
                    backgroundColor:three ? "blue":'gray',
                }}
            />  
        </View>
    )
} 

export default CustomIndicator;