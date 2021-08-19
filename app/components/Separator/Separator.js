import React from 'react';
import PropTypes from 'prop-types';
import { View,Text, StyleSheet } from 'react-native';


 
const Separator = ({sepLen,backColor}) => {
    return(
        <View 
            style={{height:StyleSheet.hairlineWidth,width:sepLen,backgroundColor:backColor}}
        />
    )
}

export default Separator;