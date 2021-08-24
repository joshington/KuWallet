import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight, 
    Image,Dimensions,TextInput} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import QRCode from 'react-native-qrcode-svg';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from "../components/Container/Container";
import { AntDesign,FontAwesome5,Feather} from '@expo/vector-icons';
import TextHeader from "../components/TextHeader/TextHeader";
// import QRCode from ‘react-native-qrcode-svg’
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto, Ionicons} from '@expo/vector-icons';
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
// import { AntDesign } from '@expo/vector-icons';
import image from './images/contact.png';
import { ScrollView } from "react-native-gesture-handler";
import TextInLine from "../components/TextInLine/TextInLine";
// import Separator from "../components/Separator/Separator";



const WalletCard = ({amount,amountBTC,dollarAmount,percent}) => {
    return(
        <View style={{flexDirection:"row",marginHorizontal:wp('2%'),marginTop:hp('2%')}}>
            <View style={{width:wp('18%'),height:hp('30%'),
                backgroundColor:"black",flexDirection:"column",borderTopLeftRadius:hp('3%'),
                borderBottomLeftRadius:hp('3%'),justifyContent:"space-around",alignItems:"center"}}
            >
                <Text style={{fontSize:hp('2.5%'),color:"white",transform:[{rotate: '-90deg'}],
                    fontWeight:"bold",textAlign:"center"}}
                >
                    WALLET</Text>
                <Text style={{fontSize:hp('5%'),color:"white",transform:[{rotate: '-90deg'}],
                    textAlign:"center",fontWeight:"bold"
                }}>
                    ...
                </Text>
            </View>
            <View style={{height:hp('30%'),width:hp('37%'),backgroundColor:'blue',alignSelf:"center",
                borderTopRightRadius:hp('4%'),borderBottomRightRadius:hp('4%'),
                marginLeft:wp('2%')
            
            }}>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:hp('3%')}}>
                    <TextHeader 
                        headerText="Estimated Balance"
                        textColor="white"
                        size={hp('2.5%')}
                        isBold
                    />
                    <View style={{width:wp('17%'),backgroundColor:"gray",borderRadius:hp('10%')}}>
                        <Text style={{fontWeight:"bold",textAlign:"center"}}>USD</Text>
                    </View>
                </View>
                <Text style={{fontWeight:"bold",color:"white",marginLeft:wp('4%'),fontSize:hp('3%')}}>
                    US$ {amount}.00</Text>
                <Text style={{fontWeight:"bold",color:"white",marginLeft:wp('4%'),fontSize:hp('3%')}}>
                    {amountBTC} BTC
                </Text>
                <View style={{flexDirection:"row",marginTop:hp('5%')}}>
                    <Text style={{fontWeight:"bold",color:"white",marginLeft:wp('4%'),
                        fontSize:hp('3%')
                    }}>
                        ${dollarAmount}
                    </Text>
                    <AntDesign name="caretup" size={30} color="green" 
                        style={{marginLeft:wp('5%')}}
                    />
                    <Text style={{fontWeight:"bold",color:"green",marginLeft:wp('4%'),
                        fontSize:hp('3%')
                    }}>
                        +{percent}%
                    </Text>
                </View>
                
            </View>
        </View>
      
    )
}
7
const MyWalletAnother = () => {
    return(
        <Container>
            <StatusBar />
            <View style={{flexDirection:"row",marginTop:hp('3%'),marginLeft:wp('35%')}}>
                <TextHeader 
                    headerText="My Wallet"
                    size={hp('4%')}
                    isBold
                />
                <Ionicons name="ios-notifications-outline" size={24} color="black" 
                    style={{marginLeft:wp('14%')}}
                />
            </View>
            <WalletCard 
                amount={2500.00}
                amountBTC={1.5264}
                dollarAmount={492.23}
                percent={8.9}
            />
            <View style={{flexDirection:"row"}}>
                <View style={{height:hp('15%'),width:wp('15%')}}>
                    <Feather name="send" size={24} color="black" />
                </View>
            </View>
            <TextHeader 
                headerText="My Coins"
                direction="flex-start"
                size={hp('4%')}
                isBold
                marTop={hp('4%')}
                marLeft={wp('4%')}
            />
            <View style={{marginLeft:wp('4%'),marginTop:hp('2%'),flexDirection:"row",
                
            }}>
                <View style={{height:hp('10%'),width:wp('18%'),backgroundColor:"black",
                    alignItems:"center",justifyContent:"center",borderRadius:hp('1%')}}>
                    <FontAwesome5 name="bitcoin" size={36} color="orange" />
                </View>
                <View style={{marginLeft:wp('4%')}}>
                    <Text style={{fontWeight:"bold"}}>BTC</Text>
                    <Text style={{marginTop:hp('3%')}}>$31990</Text>
                </View>
                <Text style={{color:"green",fontWeight:"bold"}}>8.9%</Text>
                <View style={{marginLeft:wp('24%')}}>
                    <Text style={{fontWeight:"bold"}}>$25k</Text>
                    <Text style={{marginTop:hp('3%')}}>1.5264 BTC</Text>
                </View>
            </View>
            
        </Container>
    )
}

export default MyWalletAnother;