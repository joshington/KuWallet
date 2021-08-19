import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox,TouchableOpacity} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from '../components/Container/Container';
import Icon from '../components/Icon/Icon';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import TextHeader from "../components/TextHeader/TextHeader";
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import CustomLogo from "../components/CustomLogo/CustomLogo";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";
// import {
//     heightPercentageToDP as hp,
//     widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';


const SecureWallet = ({route, navigation}) => {
    return (
       <Container>
           <View style={{marginBottom:hp('5%')}}>
            <View style={{flexDirection:"row",marginHorizontal:wp('6%'),marginTop:hp('5%')
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CreatePassword')}
                            
                        >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <CustomIndicator 
                            two
                        />
                </View>
            <StatusBar />
            <Icon 
                    iconBackground="#28FFBF"
                    direction="flex-end"
                    maTop={hp('5%')}
                    maRight={wp('15%')}
            />
                <View style={{flexDirection:"row"}}>
                    <Icon 
                        iconBackground="#82A3FF"
                            direction="flex-start"
                            marLeft={wp('14%')}
                            maTop={hp('23%')}
                            // maRight={wp('15%')}
                    />
                    <CustomLogo 
                            customIcon={
                                <Ionicons name="shield-checkmark" size={hp('27%')} color="blue" 
                                    width={wp('20%')}
                                />
                                // <MaterialCommunityIcons name="shield-check-outline" size={hp('40%')} 
                                //     color="blue" 
                                // />
                            }
                            direction="center"
                            high={hp('40%')}
                    />
                </View>
            <TextHeader 
                    headerText="Secure Your Wallet"
                    isBold
                    size={hp('4%')}
                    marTop={hp('3%')}
            />
            <TextHeader 
                    headerText="Don't risk losing your funds. protect your wallet by
                    saving your Seed phrase in a place
                    you trust."
                    isJust
                    size={hp('3%')}
                    marTop={hp('2%')}
                    marHor={wp('6%')}
            />
            <TextHeader 
                    headerText="It's the only way to recover your wallet if you get
                    locked out of the app or get a new device."
                    isJust
                    size={hp('3%')}
                    marTop={hp('0.7%')}
                    marHor={wp('6%')}
            />
            <TextHeader 
                    headerText="Remind Me Later"
                    textColor="blue"
                    isBold
                    size={hp('4%')}
                    marTop={hp('0.7%')}
                    marHor={wp('6%')}
            />
                <ButtonWIthText 
                    text="Start"
                    isBold
                    background="blue" 
                    textColor="#ffffff"
                    onPress={() => navigation.navigate('SecureWalletManual')}
                    maTop={hp('2.1%')}
                    
                />
            </View>
            
       </Container>
    )
}
export default SecureWallet;