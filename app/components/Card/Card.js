import React from 'react';
import PropTypes, { number } from 'prop-types';
import { View,ScrollView,Text} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';



const Card =({numberText,cardText,backColor,size,textColor,cardHigh}) => {
    return (
        <View style={{backgroundColor:backColor,flexDirection:"row",
            width:wp('38%'),height:cardHigh,borderRadius:12,justifyContent:"center",
            alignItems:"center",marginVertical:8,marginRight:wp('6%')
        }}>
            <Text style={{color:textColor,fontSize:size}}>{numberText}.</Text>
            <Text  style={{color:textColor,fontSize:size}}>{cardText}</Text>
        </View>
    )
}

Card.propTypes = {
    numberText:PropTypes.number,
    cardText:PropTypes.string
}

export default Card;