import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight, 
    Image,Dimensions,TextInput} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { AntDesign, MaterialIcons,Ionicons} from '@expo/vector-icons';
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



const Separator = ({dashColor,viewHeight,maTop,marLeft,bord}) => {
    return(
        <View  
            style={{backgroundColor:dashColor,height:viewHeight,width:Dimensions.get('window').width*0.88,
                marginTop:maTop,marginLeft:marLeft,borderRadius:bord,
            }}
        />
    )
}

const CustomInput = ({placeText,back,wid,high,fontBig,bord,marLeft,maTop}) => {
    return(
        <TextInput 
            style={{backgroundColor:back,width:wid,height:high,fontSize:fontBig,
                borderRadius:bord,marginLeft:marLeft,marginTop:maTop
            }}
            placeholder={placeText}
            keyboardType="number-pad"

            // placeholderTextColor="000fff"

        />
    )
}

const IconAndText = ({customIcon,inlineText,size,marVert,marLeft}) => {
    return (
        <TouchableHighlight style={{marginVertical:marVert,marginLeft:marLeft}}>
            <View style={{flexDirection:"row"}}>
                {customIcon}
                <Text style={{fontSize:size,marginLeft:wp('3%'),color:"#9A9A9A",fontWeight:"bold"}}>{inlineText}</Text>
            </View>
        </TouchableHighlight>
    )
}


const AddFundWallet = ({route,navigation}) => {
    return(
        <Container>
            <StatusBar />
            <ScrollView>
                <View style={{marginBottom:hp('5%')}}>
                    <TouchableOpacity style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('2%')}}
                        onPress={() => navigation.navigate('MyWallet')}
                    >
                        <AntDesign name="arrowleft" size={30} color="black" />
                        <TextHeader 
                            headerText="Add Funds to Wallet"
                            size={hp('3.5%')}
                            isBold
                        />
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",marginTop:hp('4%')}}>
                        <TextHeader 
                            headerText="Balance:"
                            size={hp('3.7%')}
                            marLeft={wp('5%')}
                            // marTop={hp('6%')}
                        />
                        <TextHeader 
                            headerText="US$ 1500.00"
                            size={hp('3.7%')}
                            isBold
                            marLeft={wp('1.2%')}
                        />
                    </View>
                    <Separator 
                        dashColor="gray"
                        viewHeight={hp('0.3%')}
                        maTop={hp('2%')}
                        marLeft={wp('5%')}
                    />
                    <TextHeader 
                            headerText="Amount"
                            size={hp('3.7%')}
                            isBold
                            marLeft={wp('5%')}
                            direction="flex-start"
                            marTop={hp('4%')}
                    />
                    <CustomInput 
                        placeText="Enter Amount"
                        back="#dcdcdc"
                        wid={wp('90%')}
                        high={hp('12%')}
                        fontBig={hp('5%')}
                        bord={hp('2.3%')}
                        marLeft={wp('5%')}
                        maTop={hp('4%')}
                    />
                    <TextHeader 
                        headerText="Select bank account"
                        size={hp('3.7%')}
                        isBold
                        marLeft={wp('5%')}
                        direction="flex-start"
                        marTop={hp('4%')}
                    />
                    <Separator 
                        dashColor="gray"
                        viewHeight={hp('0.3%')}
                        maTop={hp('2%')}
                        marLeft={wp('5%')}
                    />
                    <View style={{flexDirection:"row",marginTop:hp('3%'),
                    justifyContent:"space-around"}}>
                        <TextHeader 
                            headerText="INDIAN OVERSEAS BANK +4564"
                            direction="flex-start"
                            // marTop={hp('3%')}
                            size={hp('2.6%')}
                            marLeft={wp('5%')}
                            textColor="gray"
                            isBold
                        />
                        <Ionicons name="ios-radio-button-on-outline" size={24} color="blue" />
                    </View>
                    <TextHeader 
                        headerText="Pay from"
                        isBold
                        direction="flex-start"
                        marLeft={wp('5%')}
                        size={hp('4%')}
                        marTop={hp('2%')}
                    />
                    <Separator 
                        dashColor="gray"
                        viewHeight={hp('0.3%')}
                        maTop={hp('2%')}
                        marLeft={wp('5%')}
                    />
                    <IconAndText 
                        inlineText="UPI"
                        size={hp('3%')}
                        marVert={hp('2%')}
                        marLeft={wp('4%')}
                        customIcon={
                            <Image source={require('./images/upi.png')}
                                style={{width:wp('13%'),height:hp('5%'),
                                 marginHorizontal:wp('3%')}}
                            // resizeMode="contain"
                            // style={{width: 60, height: 60}}
                            />
                        }
                    />
                    <Separator 
                        dashColor="gray"
                        viewHeight={hp('0.3%')}
                        maTop={hp('2%')}
                        marLeft={wp('5%')}
                    />
                    <IconAndText 
                        inlineText="Net Banking"
                        size={hp('3%')}
                        marVert={hp('2%')}
                        marLeft={wp('4%')}
                        customIcon={
                            <Image source={require('./images/netbank.png')}
                                style={{width:wp('13%'),height:hp('5%'),
                                 marginHorizontal:wp('3%')}}
                            // resizeMode="contain"
                            // style={{width: 60, height: 60}}
                            />
                        }
                    />
                    <Separator 
                        dashColor="gray"
                        viewHeight={hp('0.3%')}
                        maTop={hp('2%')}
                        marLeft={wp('5%')}
                    />
                    <IconAndText 
                        customIcon={
                            <Image source={require('./images/others.png')}
                                style={{width:wp('13%'),height:hp('5%'),
                                 marginHorizontal:wp('3%')}}
                            // resizeMode="contain"
                            // style={{width: 60, height: 60}}
                            />
                        }
                        inlineText="Others"
                        size={hp('3%')}
                        marVert={hp('2%')}
                        marLeft={wp('4%')}
                    />
                </View>
            </ScrollView>
            
        </Container>
    )
}

export default AddFundWallet;




