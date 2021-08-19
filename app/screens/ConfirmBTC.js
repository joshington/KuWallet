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


const ContactProfile = () => {
    return(
        <View>
            <Image />
        </View>
    )
}


const Separator = ({dashColor,viewHeight,maTop}) => {
    return(
        <View  
            style={{backgroundColor:dashColor,height:viewHeight,width:Dimensions.get('window').width*0.88,
                marginTop:maTop
            }}
        />
    )
}


const ConfirmBTC = ({route,navigation}) => {
    return(
        <ScrollView>
            <Container>
                <StatusBar />
                <TouchableOpacity onPress={() => navigation.navigate('AmountBTC')}>
                    <View style={{flexDirection:"row",marginTop:hp('4%'),
                        justifyContent:"space-between",marginHorizontal:wp('4%')
                    }}>
                        <View style={{flexDirection:"row"}}>
                            <AntDesign name="arrowleft" size={30} color="black" />
                            <TextHeader 
                                headerText="Confirm"
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
                    headerText="Amount"
                    isBold
                    direction="center"
                    size={hp('3%')}
                    // marLeft={wp('4%')}
                />
                <TextHeader 
                    headerText="0.2140 BTC"
                    isBold
                    direction="center"
                    size={hp('3%')}
                    textColor="blue"
                    // marLeft={wp('4%')}
                    marTop={hp('1%')}
                />
                <TextHeader 
                    headerText="From"
                    isBold
                    direction="flex-start"
                    size={hp('3%')}
                    marLeft={wp('4%')}
                />
                <View style={{marginTop:hp('1.2%'),marginLeft:wp('5%')}}>
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
                        <Text style={{fontSize:hp('2.6%')}}>Balance $2500.00</Text>
                        </View>
                    </View>
                </View>
                <TextHeader 
                    headerText="To"
                    marTop={hp('0.5%')}
                    isBold
                    direction="flex-start"
                    size={hp('4%')}
                    marLeft={wp('4%')}
                />
                <View style={{marginTop:hp('1%'),marginLeft:wp('5%')}}>
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
                        {/* <MaterialCommunityIcons name="close" size={40} color="black"  
                            style={{alignSelf:"flex-end",marginBottom:hp('6%')}} 
                        /> */}
                    </View>
                </View>
                <View style={{height:hp('42%'),backgroundColor:"gray",
                            marginVertical:hp('4%'),marginHorizontal:wp('6%'),borderRadius:hp('2.2%')}}>
                    <TextInLine 
                        text1="Amount"
                        text2="0.2140 BTC"
                        marVert={hp('3%')}
                        size={hp('3%')}
                    />
                    <TextInLine 
                        text1="Network fee"
                        text2="0.12 BTC"
                        marVert={hp('4%')}
                        size={hp('3%')}
                    />
                    <Separator dashColor="black" viewHeight={hp('0.2%')} maTop={hp('1%')} />
                    <TextInLine 
                        text1="Total Amount"
                        text2="0.3340 BTC"
                        marVert={hp('4%')}
                        size={hp('3%')}
                    />
                    <TextHeader 
                        headerText="$13,833.61"
                        isBold
                        textColor="blue"
                        direction="flex-end"
                        marRight={wp('5%')}
                    />
                </View>
                <ButtonWIthText 
                    text="Send"
                    textColor="white"
                    background="blue"
                    maBot={hp('2%')}
                />
                
            </Container>
        </ScrollView>
       
    )
}

export default ConfirmBTC;