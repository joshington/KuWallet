import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox,TouchableOpacity} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from "../components/Container/Container";
import { AntDesign } from "@expo/vector-icons";
import TextHeader from "../components/TextHeader/TextHeader";
import Card from "../components/Card/Card";
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";


const WriteDownSeed = ({route,navigation}) => {
    return(
        <Container>
            <StatusBar />
            <View style={{marginVertical:hp('2%')}}>
                <View style={{flexDirection:"row",
                        marginHorizontal:wp('6%'),
                        }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ModalWallet')}
                                
                        >
                                <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <CustomIndicator 
                                two
                        />
                </View>
                <TextHeader 
                        headerText="Write Down Your Seed Phrase"
                        isBold
                        size={hp('3.3%')}
                        marTop={hp('1.5%')}
                        textColor="blue"
                />
                <TextHeader 
                        headerText="This is your seed phrase. Write it down on a
                        paper and keep it in a safe place. You'll be
                        asked to re-enter this phrase (in order) on the
                        next step."
                        isJust
                        size={hp('2.7%')}
                        marTop={hp('1%')}
                        textColor="black"
                        marHor={wp('5.5%')}
                />
                <View style={{flexDirection:"column",flexWrap:"wrap", justifyContent: "center",
                        alignItems:"center",marginTop:hp('0.2%'),marginHorizontal:wp('7%'),height:hp('60%')
                }}>
                <Card 
                        numberText={1}
                        cardText="future"
                        backColor="#dcdcdc"
                        size={hp('3%')}
                        textColor="black"
                        //     cardWid={wp('4%')}
                        cardHigh={hp('7%')}
                />
                        <Card 
                                numberText={2}
                                cardText="use"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={3}
                                cardText="abuse"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={4}
                                cardText="bubble"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={5}
                                cardText="disagree"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={6}
                                cardText="yard"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={7}
                                cardText="exit"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={8}
                                cardText="enact"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={9}
                                cardText="drum"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={10}
                                cardText="frequent"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={11}
                                cardText="target"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                        <Card 
                                numberText={12}
                                cardText="organ"
                                backColor="#dcdcdc"
                                size={hp('3%')}
                                textColor="black"
                                // cardWid={wp('46%')}
                                cardHigh={hp('7%')}
                        />
                </View>
                <ButtonWIthText 
                        text="Next"
                        isBold
                        background="blue" 
                        textColor="#ffffff"
                        onPress={() => navigation.navigate('ConfirmSeedPhrase')}
                        maTop={hp('0.7%')}
                        size={hp('5%')}
                />
            </View>
            
        </Container>
    )
}

export default WriteDownSeed;