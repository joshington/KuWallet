import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight, 
    Image,Dimensions} from "react-native";
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


const AmountBTC = ({route,navigation}) => {
    return(
        <Container>
            <StatusBar />
            {/* <View style={{flexDirection:"row",marginTop:hp('4%'),
                    justifyContent:"space-between",marginHorizontal:wp('4%')
                }}> */}
                    <TouchableOpacity onPress={() => navigation.navigate('SendTo')}>
                        <View style={{flexDirection:"row",marginLeft:wp('5%'),marginTop:hp('2%')}}>
                            <AntDesign name="arrowleft" size={30} color="black" />
                            <TextHeader 
                                headerText="Amount"
                                size={hp('3.5%')}
                                isBold
                            />
                        </View>
                    </TouchableOpacity>
                    
                    {/* <MaterialCommunityIcons name="close" size={40} color="black"  
                        style={{alignSelf:"flex-end"}} 
                    /> */}
                    <View style={{flexDirection:"row",justifyContent:"space-around",
                        marginLeft:wp('25%'),marginTop:hp('6%')}}>
                        <TextHeader 
                            headerText="BTC"
                            isBold
                            direction="center"
                            size={hp('3%')}
                            // marLeft={wp('4%')}
                        />
                        <TextHeader 
                            headerText="Use max"
                            isBold
                            direction="center"
                            size={hp('3%')}
                            // marLeft={wp('4%')}
                            textColor="blue"
                        />
                    </View>
                    
                    <TextHeader 
                        headerText="0.2140 |"
                        isBold
                        direction="center"
                        size={hp('5%')}
                        // marLeft={wp('4%')}
                        marTop={hp('6%')}
                        textColor="blue"
                    />
                    <TouchableHighlight style={{width:wp('35%'),
                        backgroundColor:"gray",height:hp('7%'),alignItems:"center",alignSelf:"center",
                        justifyContent:"center",borderRadius:hp('5%'),marginTop:hp('10%')
                    }}
                    >
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontWeight:"bold",fontSize:hp('2.8%')}}>
                                $55.993
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TextHeader 
                        headerText="Balance: 1.52365 BTC"
                        isBold
                        marTop={hp('6%')}
                        size={hp('3.2%')}
                    />
                    <ButtonWIthText 
                        text="Next"
                        background="blue"
                        textColor="white"
                        maTop={hp('5%')}
                        onPress={() => navigation.navigate('ConfirmBTC')}
                    />
            {/* </View> */}
        </Container>
    )
}

export default AmountBTC;