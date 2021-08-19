import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight, 
    Image,Dimensions,TextInput} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { AntDesign } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from "../components/Container/Container";
// import { AntDesign } from '@expo/vector-icons';
import TextHeader from "../components/TextHeader/TextHeader";
// import QRCode from ‘react-native-qrcode-svg’
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
// import { AntDesign } from '@expo/vector-icons';
import image from './images/contact.png';
import { ScrollView } from "react-native-gesture-handler";
import TextInLine from "../components/TextInLine/TextInLine";
// import Separator from "../components/Separator/Separator";


const IconAndText = ({customIcon,inlineText,size,marVert,marLeft,textColor,isBold}) => {
    return (
        <TouchableHighlight style={{flexDirection:"row",marginVertical:marVert,marginLeft:marLeft}}>
            <View>
                {customIcon}
                <Text style={{fontSize:size,color:textColor,fontWeight: isBold ? "bold":null}}>{inlineText}</Text>
            </View>
        </TouchableHighlight>
    )
}


const NameAndValue = ({Name,val}) => {
    return(
        <View style={{fontWeight:"bold",marginVertical:hp('2%'),marginLeft:wp('6%')}}>
            <Text style={{color:"gray",fontSize:hp('3.5%'),fontWeight:"bold"}}>{Name}</Text>
            <Text style={{color:"black",fontSize:hp('4%'),fontWeight:"bold"}}>{val}</Text>
        </View>
    )
}
NameAndValue.propTypes = {
    Name:PropTypes.string,
    val:PropTypes.any
}

const Withdraw = () => {
    return(
        <Container>
            <StatusBar />
            <View style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('2%')}}>
                <AntDesign name="arrowleft" size={30} color="black" />
                <TextHeader 
                    headerText="Withdraw"
                    size={hp('3.5%')}
                    isBold
                />
            </View>
            <IconAndText 
                inlineText="Withdrawal"
                textColor="black"
                size={hp('4%')}
                isBold
                marLeft={wp('6%')}
                marVert={hp('5%')}
            />
            <IconAndText 
                inlineText="Funds will be transferred to this account"
                textColor="gray"
                size={hp('3%')}
                marLeft={wp('6%')}
                marVert={hp('2%')}
            />
            <NameAndValue 
                Name="Acount number"
                val={78978977897897}
            />
            <NameAndValue 
                Name="Bank"
                val="Bank of India"
            />
            <NameAndValue 
                Name="Branch"
                val="Gurugram"
            />
            <TouchableOpacity style={{
                width:wp('40%'),backgroundColor:"blue",height:hp('7%'),justifyContent:"center",
                borderRadius:wp('3%'),marginLeft:wp('5%'),marginTop:hp('3%')
            }}>
                <Text style={{color:"#ffffff",fontSize:hp('4%'),textAlign:"center"}}>Confirm</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Withdraw;