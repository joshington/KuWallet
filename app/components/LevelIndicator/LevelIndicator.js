import React from 'react';
import {View,Text,TextInput,Dimensions} from 'react-native';
import PropTypes from 'prop-types';


const LevelIndicator = ({dashColor,viewHeight,margRight}) => {
    return(
        <View  
            style={{backgroundColor:dashColor,height:viewHeight,width:Dimensions.get('window').width*0.2,
                borderRadius:5,marginRight:margRight
            }}
        />
    )
}

export default LevelIndicator;