import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight} from "react-native";
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
// import TextHeader from "../components/TextHeader/TextHeader";

const ScanCode =({route,navigation}) => {
    return(
        <Container>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="close" size={40} color="black"  
                    style={{alignSelf:"flex-end",marginTop:hp('5%'),marginRight:wp('4%')}} 
                />
            </TouchableOpacity>
            <View style={{marginTop:hp('6%'),alignSelf:"center"}}>
                <QRCode
                    // value=’some string value'
                    color={'#000'}
                    backgroundColor={'white'}
                    size={hp('40%')}
                    // logo={require('../../../embed_logo_file_path')} // or logo={{uri: base64logo}}
                    // logoMargin={2}
                    // logoSize={20}
                    // logoBorderRadius={10}
                    // logoBackgroundColor={‘transparent’}
                />
            </View>
            <TextHeader 
                headerText="Scanning...."
                isBold
                size={hp('4%')}
                marTop={hp('8%')}
            />
        </Container>
    )
}

export default ScanCode;