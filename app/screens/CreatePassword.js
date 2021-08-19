import React, {useState,useEffect} from "react";
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity,ScrollView} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from '../components/Container/Container';
import StepWithArrow from "../components/StepWithArrow/StepWithArrow";
import TextHeader from "../components/TextHeader/TextHeader";
import InputWithBorder from "../components/InputWithBorder/InputWithBorder";
import { Feather, AntDesign} from '@expo/vector-icons';
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";
// import { ScrollView } from "react-native-gesture-handler";



const CreatePassword = ({route,navigation}) => {
    const [enabled, setEnabled] = useState(false);

    //controlling the check box
    const [checked,setChecked] = useState(true);

    const controlCheck = (value) => {
        setChecked(value);
    }
    const toggleSwitch = (value) => {
        //to handle switch toggle
        setEnabled(value);
        //state changes according to swwitch
    }
    const thumbColorOn = Platform.OS === "android" ? "#ffffff" : "#f3f3f3"
    const thumbColorOff = Platform.OS === "android" ? "#f04141" : "#f3f3f3"
    const trackColorOn = Platform.OS === "android" ? "#98e7f0" : "#0cd1e8"
    const trackColorOff = Platform.OS === "android" ? "#f3adad" : "#f04141"
    return(
        <Container>
            <StatusBar />
            <ScrollView style={{marginVertical:hp('5%')}}>
                    {/* <StepWithArrow /> */}
                <View style={{flexDirection:"row",
                    marginHorizontal:wp('6%'),
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}
                        
                    >
                        <AntDesign name="arrowleft" size={30} color="black" />
                    </TouchableOpacity>
                    <CustomIndicator 
                        one
                    />
                </View>
            
                <TextHeader 
                    headerText="Create Password" 
                    direction="center" textColor="blue" 
                    size={hp('4%')}
                    marTop={hp('5%')}
                    isBold
                    
                />
                <TextHeader 
                    headerText="This password will unlock your Metamask wallet only on this service" 
                    direction="center"
                    size={hp('3%')}
                    marTop={hp('2.5%')}
                />
                <InputWithBorder 
                    radi={wp('8%')}
                    text="New Password"
                    placeText="********"
                    size={hp('3%')}
                    viewTopMar={hp('4%')}
                    viewHigh={hp('10%')}
                    viewWidth={wp('90%')}
                    borderGage={wp('0.4%')}
                    textLeft={wp('5%')}
                    customIcon={
                        <Feather name="eye" size={24} color="black" />
                    }
                />
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:hp('2.8%'),marginLeft:wp('10%')}}>Password Strength:</Text>
                <Text style={{fontSize:hp('2.8%'),marginLeft:wp('5%'),color:"green"}}>Good</Text>
                </View>
                <InputWithBorder 
                    radi={wp('8%')}
                    text="Confirm Password"
                    placeText="********"
                    size={hp('3%')}
                    viewVerMar={hp('0.5%')}
                    viewHigh={hp('10%')}
                    viewWidth={wp('90%')}
                    borderGage={wp('0.4%')}
                    textLeft={wp('5%')}
                    customIcon={
                        <Feather name="eye" size={24} color="black" />
                    }
                />
                <View style={{marginTop:hp('5%'),flexDirection:"row",justifyContent:"space-around"}}>
                    <Text style={{fontSize:hp('2.9%'),fontWeight:"bold"}}>
                        Sign in with Face ID?
                    </Text>
                    <Switch 
                        style={{transform:[{scaleX: 2.0}, {scaleY: 1.9}],height:hp('4%')}}
                        // thumbColor={enabled ? thumbColorOn : thumbColorOff}
                        thumbColor={thumbColorOn}
                        trackColor={{true:'blue',false:'grey'}}
                        value={enabled}
                        onValueChange={toggleSwitch}
                    />
                </View>
                
                <View style={{ flexDirection: 'row',marginTop:hp('6%'),justifyContent:"space-between",
                    marginHorizontal:wp('6%')
                }}>
                    <CheckBox
                        value={checked}
                        onValueChange={controlCheck}
                        style={{transform: [{scaleX:2}, {scaleY:2}]}}
                        tintColors={{true: 'blue'}}
                    />
                    <TextHeader 
                        headerText="I understand that DeGe cannot recover this password for me." 
                        size={hp('3%')}
                        // marTop={hp('3%')}
                    />
                </View>
                <ButtonWIthText 
                    text="Create Password "
                    background="blue" 
                    textColor="#ffffff"
                    onPress={() => navigation.navigate('SecureWallet')}
                    maTop={hp('2.4%')}
                    
                />
            </ScrollView>
            

        </Container>
    )
}
export default CreatePassword;
