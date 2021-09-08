import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight, 
    Image,Dimensions,TextInput,ScrollView} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { AntDesign,Entypo} from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from "../components/Container/Container";
// import { AntDesign } from '@expo/vector-icons';
import TextHeader from "../components/TextHeader/TextHeader";
// import QRCode from ‘react-native-qrcode-svg’
import { MaterialCommunityIcons,MaterialIcons  } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
// import { AntDesign } from '@expo/vector-icons';
import image from './images/contact.png';
// import { ScrollView } from "react-native-gesture-handler";
import TextInLine from "../components/TextInLine/TextInLine";
// import Separator from "../components/Separator/Separator";


const IconAndText = ({customIcon,inlineText,size,marVert,marLeft,textColor,isBold}) => {
    return (
        <TouchableHighlight style={{marginVertical:marVert,marginLeft:marLeft}}>
            <View style={{flexDirection:"row"}}>
                {customIcon}
                <Text style={{fontSize:size,color:textColor,fontWeight: isBold ? "bold":null,
                    marginHorizontal:wp('3%')
                }}>
                    {inlineText}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

const TextAndIcon = ({text,textColor,textFontSize,marVert,customIcon}) => {
    return(
        <View style={{flexDirection:"row",marginVertical:marVert,alignSelf:"center"}}>
            <Text style={{color:textColor,fontSize:textFontSize,marginRight:hp('2%')}}>
                {text}
            </Text>
            {customIcon}
        </View>
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


const WithDrawAnother = ({route,navigation}) =>{
    return (
        <Container>
            <StatusBar />
            <ScrollView style={{marginBottom:hp('8%')}}>
                <TouchableOpacity style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('2%')}}
                    onPress={() => navigation.navigate('MyWallet')}
                >
                    <AntDesign name="arrowleft" size={30} color="black" />
                    <TextHeader 
                        headerText="Withdraw"
                        size={hp('3.5%')}
                        isBold
                    />
                </TouchableOpacity>
                <IconAndText 
                    customIcon={
                        <Entypo name="wallet" size={24} color="black" />
                    }
                    inlineText="Funds"
                    textColor="black"
                    size={hp('4%')}
                    // isBold
                    marLeft={wp('6%')}
                    marVert={hp('5%')}
                />
                <View style={{height:hp('28%'),width:wp('84%'),alignSelf:"center",
                    backgroundColor:"#3600C5",borderRadius:15}}>
                        <TextAndIcon 
                            text="Withdrawable Balance"
                            customIcon={
                                <MaterialIcons name="error-outline" size={24} color="white" />
                            }
                            textColor="white"
                            textFontSize={hp('3%')}
                            marVert={hp('3.8%')}
                        />
                        <Text style={{fontSize:hp('4.5%'),color:"white",fontWeight:"bold",
                            alignSelf:"flex-start",marginLeft:wp('6%'),marginBottom:hp('2.5%')}}>
                            US$2500.00
                        </Text>
                        <View style={{flexDirection:"row",marginLeft:wp('5%')}}>
                            <Text style={{color:"white",fontSize:hp('3%'),marginRight:wp('3%')}}>Available</Text>
                            <Text style={{color:"white",fontSize:hp('3%')}}>UD$2500.00</Text>
                        </View>
                </View>
                <IconAndText 
                    customIcon={
                        <AntDesign name="clockcircleo" size={24} color="gray" 
                            style={{fontWeight:"bold"}} />
                    }
                    inlineText="Recently updated on 03/08/2021"
                    textColor="gray"
                    size={hp('3%')}
                    marLeft={wp('2%')}
                    marVert={hp('5%')}
                />
                <TextHeader 
                    headerText="Withdraw to bank"
                    isBold
                    direction="flex-start"
                    marLeft={wp('6%')}
                    size={hp('4%')}
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
                <TouchableOpacity style={{
                    width:wp('40%'),backgroundColor:"blue",height:hp('7%'),justifyContent:"center",
                    borderRadius:wp('3%'),marginLeft:wp('5%'),marginTop:hp('3%')
                }} onPress={() => navigation.navigate('Withdraw')}>
                    <Text style={{color:"#ffffff",fontSize:hp('4%'),textAlign:"center"}}>
                        Proceed
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('5%')}}>
                    <AntDesign name="clockcircleo" size={24} color="gray" />
                    <Text style={{fontSize:hp('3.5%'),fontWeight:"bold",color:"gray",
                        marginHorizontal:wp('3%')
                    }}>
                        Recent withdrawals</Text>
                    <AntDesign name="down" size={24} color="gray" />
                </View>
            </ScrollView>
        </Container>
    )
}

export default WithDrawAnother