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

const LinkButton = ({linkUrl,customIcon,backColor,sizeWidth}) =>{
    return(
        <TouchableHighlight style={{width:sizeWidth,height:hp('8%'),backgroundColor:backColor,
            borderRadius:10,alignSelf:"center",marginTop:hp('5%')
        }}>
            <View style={{flexDirection:"row",width:sizeWidth,justifyContent:"space-around",
                alignItems:"center",marginTop:hp('2%')
            }}>
                <Text style={{fontSize:hp('3%')}}>{linkUrl}</Text>
                {customIcon}
            </View>
        </TouchableHighlight>
    )
} 
const ReceiveBTC = ({route,navigation}) => {
    return(
        <Container>
            <StatusBar />
            <TouchableOpacity onPress={() => navigation.navigate('Success')}>
                <View style={{flexDirection:"row",marginTop:hp('4%'),marginLeft:wp('6%')}}>
                    <AntDesign name="arrowleft" size={30} color="black" />
                    <TextHeader 
                        headerText="Receive BTC"
                        size={hp('3.5%')}
                    />
                </View> 
            </TouchableOpacity>
            <TextHeader 
                headerText="Recieve using QR code"
                size={hp('3.5%')}
                isBold
                marTop={hp('2%')}
            />
            <View style={{marginVertical:hp('3.5%'),alignSelf:"center"}}>
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
                headerText="Scan address to recieve payment"
                size={hp('2.6%')}
                // marTop={hp('8%')}
            />
            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <LinkButton 
                    linkUrl="https://app.slack.123"
                    customIcon={
                        <MaterialCommunityIcons name="file-multiple-outline" size={24} color="blue" />
                    }
                    backColor="gray"
                    sizeWidth={wp('63%')}
                />
                <LinkButton 
                    customIcon={
                        <Fontisto name="share" size={24} color="blue" />
                    }
                    sizeWidth={wp('17%')}
                    backColor="gray"
                />
            </View>
           <ButtonWIthText 
                 text="Request Payment"
                 isBold
                 background="blue" 
                 textColor="#ffffff"
                 onPress={() => navigation.navigate('SendTo')}
                 maTop={hp('2.1%')}
           />
        </Container>
    )
}

export default ReceiveBTC