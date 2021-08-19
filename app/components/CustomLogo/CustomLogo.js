import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox} from "react-native";

const CustomLogo = ({customIcon,direction,marLeft}) => {
    return (
        <View style={{alignSelf:direction, marginLeft:marLeft}}>
            {customIcon}
        </View>
    )
}
CustomLogo.propTypes = {
    customIcon:PropTypes.element,
    direction:PropTypes.string,
}

export default CustomLogo;