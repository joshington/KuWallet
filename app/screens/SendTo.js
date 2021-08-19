import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight, Image} from "react-native";
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
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
// import { AntDesign } from '@expo/vector-icons';
import image from './images/contact.png';


const ContactProfile = () => {
    return(
        <View>
            <Image />
        </View>
    )
}
const SendTo = ({route,navigation}) => {
    return(
        <Container>
            <StatusBar />
            <TouchableOpacity onPress={() => navigation.navigate('ReceiveBTC')}>
                <View style={{flexDirection:"row",marginTop:hp('4%'),
                    justifyContent:"space-between",marginHorizontal:wp('4%')
                }}>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={() => navigation.navigate('ReceiveBTC')}>
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <TextHeader 
                            headerText="Send to"
                            size={hp('3.5%')}
                            isBold
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="close" size={40} color="black"  
                            style={{alignSelf:"flex-end"}} 
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
           
            <TextHeader 
                headerText="From"
                isBold
                direction="flex-start"
                size={hp('4%')}
                marLeft={wp('4%')}
            />
            <View style={{marginTop:hp('5%'),marginLeft:wp('5%')}}>
                <View style={{flexDirection:"row"}}>
                    <Image 
                        source={require('./images/contact.png')}
                        style={{borderRadius:70,width:wp('25%'),height:hp('14%')}}
                        // resizeMode="contain"
                        // style={{width: 60, height: 60}}

                    />
                    <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                        <Text style={{fontWeight:"bold",fontSize:hp('3%'),marginBottom:hp('6%')}}>
                            Account 1</Text>
                       <Text style={{fontSize:hp('2.6%')}}>Balance: $2500.00</Text>
                    </View>
                </View>
            </View>
            <TextHeader 
                headerText="To"
                marTop={hp('2%')}
                isBold
                direction="flex-start"
                size={hp('4%')}
                marLeft={wp('4%')}
            />
            <View style={{marginTop:hp('2%'),marginLeft:wp('5%')}}>
                <View style={{flexDirection:"row"}}>
                    <Image 
                        source={require('./images/contact.png')}
                        style={{borderRadius:70,width:wp('25%'),height:hp('14%')}}
                        // resizeMode="contain"
                        // style={{width: 60, height: 60}}

                    />
                    <View style={{marginLeft:wp('5%'),marginTop:hp('1%')}}>
                        <Text style={{fontWeight:"bold",fontSize:hp('3%'),marginBottom:hp('6%')}}>
                            Account 1</Text>
                       <Text style={{fontSize:hp('2.6%')}}>023113151313513....</Text>
                    </View>
                    <MaterialCommunityIcons name="close" size={40} color="black"  
                        style={{alignSelf:"flex-end",marginBottom:hp('6%')}} 
                    />
                </View>
            </View>
            <ButtonWIthText 
                text="Next"
                background="blue" 
                textColor="#ffffff"
                onPress={() => navigation.navigate('AmountBTC')}
                maTop={hp('15%%')}
                
            />
        </Container>
    )
}

export default SendTo;