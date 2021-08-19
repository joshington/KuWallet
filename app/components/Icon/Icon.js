import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types'
import { Animated,View,Text,StatusBar,StyleSheet,Dimensions,TouchableHighlight,Image
 } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Icon = ({ iconBackground,direction,maTop,maRight,marLeft}) => {
    // const iconStyles = [styles.icon];
    // //   if (visible) {
    // //     iconStyles.push(styles.iconVisible);
    // //   }
    // if (iconBackground && direction) {
    //     iconStyles.push({ 
    //         backgroundColor: iconBackground,
    //         justifyContent: direction,
    //     });
    // }
    // return (
    //    <View style={styles.icon} />
    // );
    
  
    // return <View style={styles.icon} />;
    return (
        <View  style={{
            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 3,
            width: Dimensions.get('window').width * 0.1,
            height: Dimensions.get('window').width * 0.1,
            backgroundColor:iconBackground ? iconBackground :'#fff',
                // justifyContent: 'center',
            alignSelf: direction,
            // marginLeft:wp(margPercent),
            marginTop:maTop,
            marginRight:maRight,
            // paddingTop:hp('5%')
            marginLeft:marLeft,
            }}  
        />
    )
};
  
Icon.propTypes = {
    visible: PropTypes.bool,
    checkmark: PropTypes.bool,
    iconBackground: PropTypes.string,
};
  
export default Icon;