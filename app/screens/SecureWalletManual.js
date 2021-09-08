import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox,StyleSheet,Dimensions,TouchableOpacity} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from '../components/Container/Container';
import TextHeader from "../components/TextHeader/TextHeader";
import CustomLogo from "../components/CustomLogo/CustomLogo";
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";

const LevelIndicator = ({dashColor,viewHeight}) => {
    return(
        <View  
            style={{backgroundColor:dashColor,height:viewHeight,width:Dimensions.get('window').width*0.3,
                borderRadius:5
            }}
        />
    )
}

const Bullet = ({bulletText,marLeft}) => {
    return(
        <View style={{flexDirection:"row",marginLeft:marLeft}}>
            <Text style={{fontSize:hp('3%')}}>.</Text>
            <Text style={{fontSize:hp('3%')}}>{bulletText}</Text>
        </View>
    )
}

const SecureWalletManual = ({route, navigation}) => {
    return (
        <Container>
            <StatusBar />
            <View>
                <View style={{flexDirection:"row",marginHorizontal:wp('6%')}}>
                        <TouchableOpacity onPress={() => navigation.navigate('SecureWallet')}
                            
                        >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <CustomIndicator 
                            two
                        />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignSelf:"center"}}>
                    <TextHeader 
                        headerText="Secure Your Wallet"
                        isBold
                        size={hp('3%')}
                        marTop={hp('2.5%')}
                        textColor="blue"
                    />
                    <CustomLogo 
                        customIcon={
                            <MaterialIcons name="error-outline" size={30} color="black" />
                        }
                        direction="flex-end"
                        marLeft={wp('5%')}
                    />
                </View>
            <View style={{flexDirection:"row",alignSelf:"flex-start",marginLeft:wp('5%'),
                    marginTop:hp('1.8%')
                }}>
                    <TextHeader 
                            headerText="Secure Your Wallet's"
                            size={hp('3%')}
                            direction="flex-start"
                            // marHor={wp('5%')}
                            // marTop={hp('5%')}
                    />
                    <TextHeader 
                            headerText=" 'Seed Phrase' "
                            size={hp('3%')}
                            direction="flex-start"
                            // marHor={wp('1%')}
                            // marTop={hp('5%')}
                            textColor="blue"
                    />
            </View>
            <TextHeader 
                    headerText="Manual"
                    size={hp('3%')}
                    direction="flex-start"
                    // marHor={wp('1%')}
                    marTop={hp('1.5%')}
                    textColor="#000"
                    isBold
                    marHor={wp('5%')}
                />
                <TextHeader 
                    headerText="Write down your seed phrase on a piece of 
                                paper and store in a safe place."
                    size={hp('3%')}
                    direction="flex-start"
                    // marHor={wp('1%')}
                    marTop={hp('1.3%')}
                    textColor="#000"
                    // isBold
                    marHor={wp('5%')}
                    isJust
                />
                <View style={{flexDirection:"row",marginTop:hp('1.2%'),marginLeft:wp('5%')}}>
                    <TextHeader 
                        headerText="Security level:"
                        size={hp('3%')}
                    />
                    <TextHeader 
                        headerText="Very strong"
                        size={hp('3%')}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:hp('1.2%'),
                    marginHorizontal:wp('2%')
                }}>
                    <LevelIndicator 
                        dashColor="#008000"
                        viewHeight={wp('2%')}
                        viewHeight={hp('0.8%')}
                    />
                    <LevelIndicator 
                        dashColor="#008000"
                        viewHeight={wp('2%')}
                        viewHeight={hp('0.8%')}
                    />
                    <LevelIndicator 
                        dashColor="#008000"
                        viewHeight={wp('2%')}
                        viewHeight={hp('0.8%')}
                    />
                </View>
                <TextHeader 
                    marTop={hp('1.2%')}
                    headerText="Risks are:"
                    direction="flex-start"
                    marLeft={wp('3%')}
                    size={hp('3%')}
                />
                <Bullet 
                    marLeft={wp('4%')}
                    bulletText="You lose it"
                />
                <Bullet 
                    marLeft={wp('4%')}
                    bulletText="You forget where you put it"
                />
                <Bullet 
                    marLeft={wp('4%')}
                    bulletText="Someone else finds it"
                />
                <View style={{flexDirection:"row",marginHorizontal:wp('5%'),marginTop:hp('1.2%')}}>
                    <TextHeader 
                        // marTop={hp('5%')}
                        headerText="Other options:"
                        direction="flex-start"
                        marLeft={wp('0.2%')}
                        size={hp('3%')}
                    />
                    <TextHeader 
                        // marTop={hp('5%')}
                        headerText="Doesn't have to paper!"
                        direction="flex-start"
                        size={hp('3%')}
                        isJust
                    />
                </View>
                <TextHeader 
                    marTop={hp('1.2%')}
                    headerText="Tips:"
                    direction="flex-start"
                    marLeft={wp('3%')}
                    size={hp('3%')}
                />
                <Bullet 
                    marLeft={wp('4%')}
                    bulletText="Store in bank vault"
                />
                <Bullet 
                    marLeft={wp('4%')}
                    bulletText="Store in a safe"
                />
                <Bullet 
                    marLeft={wp('4%')}
                    bulletText="Store in multiple secret places"
                />
                <ButtonWIthText 
                    text="Create Password"
                    isBold
                    background="blue" 
                    textColor="#ffffff"
                    onPress={() => navigation.navigate('ModalWallet')}
                    maTop={hp('1.6%')}
                    size={hp('4%')}
                    
                />
            </View>
            
        </Container>
    )
}

export default SecureWalletManual;