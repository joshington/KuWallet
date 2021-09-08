import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from "../components/Container/Container";
import TextHeader from "../components/TextHeader/TextHeader";
import LevelIndicator from "../components/LevelIndicator/LevelIndicator";
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import { AntDesign } from "@expo/vector-icons";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";



const SimpleWithText =({text,background,textColor,onPress,maTop,size}) => {
    return(
        <>
            <TouchableHighlight 
                style={{backgroundColor:background,
                    alignSelf:"center",
                    width:wp('28%'),
                    height:hp('8%'),
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:12,
                    marginVertical:hp('0.55%'),
                    marginTop:maTop,
                    fontWeight:"bold",
                    activeOpacity:0.6,
                    underlayColor:"#DDDDDD",

                }}
                onPress={onPress}
            >
                <Text style={{fontSize:size ? size :hp('4%'),color:textColor}}>
                    {text}
                </Text>
            </TouchableHighlight>
        </>
    )
}


const ConfirmSeedPhrase = ({route,navigation}) => {
    return (
        <Container>
            <StatusBar />
            <View style={{marginVertical:hp('5%')}}>
                <View style={{flexDirection:"row",
                        marginHorizontal:wp('6%'),
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('WriteDownSeed')}
                            
                        >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <CustomIndicator 
                            three
                        />
                </View>
                <TextHeader 
                    headerText="Confirm Seed Phrase"
                    textColor="blue"
                    direction="center"
                    size={hp('4%')}
                    marTop={hp('5%')}
                    isBold
                    // marHor,
                    // marLeft
                />
                <TextHeader 
                    headerText="Select each word in the order it was presented to you"
                    textColor="black"
                    direction="center"
                    size={hp('2.7%')}
                    marTop={hp('2.5%')}
                    // isJust
                    marHor={wp('5%')}
                    // isBold
                    // marHor,
                    // marLeft
                />
                <View style={{height:hp('15%'),alignItems:"center",marginTop:hp('5%')}}>
                    <Text style={{fontSize:hp('8%'),color:"gray",fontWeight:"bold"}}>3.</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",
                    alignSelf:"center"
                }}>
                    <LevelIndicator 
                        dashColor="blue"
                        viewHeight={hp('0.8%')}
                        margRight={wp('6%')}
                    />
                    <LevelIndicator 
                        dashColor="gray"
                        viewHeight={hp('0.8%')}
                        margRight={wp('6%')}
                    />
                    <LevelIndicator 
                        dashColor="gray"
                        viewHeight={hp('0.8%')}
                        margRight={wp('6%')}
                    />
                </View>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",
                    marginTop:hp('5%')
                }}>
                    <SimpleWithText 
                        text="future"
                        isBold
                        background="blue" 
                        textColor="white"
                        onPress={() => console.log('this is a button')}
                        // maTop={hp('5%')}
                        size={hp('3.2%')}
                    />
                    <SimpleWithText 
                        text="frequent"
                        isBold
                        background="blue" 
                        textColor="white"
                        onPress={() => console.log('this is a button')}
                        // maTop={hp('5%')}
                        size={hp('3.2%')}
                    />
                    <SimpleWithText 
                        text="target"
                        isBold
                        background="blue" 
                        textColor="white"
                        onPress={() => console.log('this is a button')}
                        // maTop={hp('5%')}
                        size={hp('3.2%')}
                    />
                    <SimpleWithText 
                        text="abuse"
                        isBold
                        background="blue" 
                        textColor="white"
                        onPress={() => console.log('this is a button')}
                        // maTop={hp('5%')}
                        size={hp('3.2%')}
                    />
                    <SimpleWithText 
                        text="organ"
                        isBold
                        background="blue" 
                        textColor="white"
                        onPress={() => console.log('this is a button')}
                        // maTop={hp('5%')}
                        size={hp('3.2%')}
                    />
                    <SimpleWithText 
                        text="bubble"
                        isBold
                        background="blue" 
                        textColor="white"
                        onPress={() => console.log('this is a button')}
                        // maTop={hp('5%')}
                        size={hp('3.2%')}
                    />
                </View>
                <ButtonWIthText 
                    text="Next"
                    isBold
                    background="#dcdcdc" 
                    textColor="#000"
                    onPress={() => navigation.navigate('Success')}
                    maTop={hp('5%')}
                    size={hp('5%')}
                    
                />
            </View>
            
        </Container>
    )
}

export default ConfirmSeedPhrase;

// 0751 917427