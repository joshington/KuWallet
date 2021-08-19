import React from 'react';
import PropTypes from 'prop-types';
import { View,Text } from 'react-native';




const TextHeader = ({headerText,textColor,direction,size,marTop}) => {
    return (
        <View style={{marginTop:marTop}}>
            <Text style={{color:textColor,alignSelf:direction,fontWeight:"bold", fontSize:size}}>
                {headerText}
            </Text>
        </View>
    )
}
TextHeader.propTypes={
    headerText:PropTypes.string,
    textColor:PropTypes.string,
    direction:PropTypes.string,
}


export default TextHeader;