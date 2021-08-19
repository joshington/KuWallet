import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Switch,StatusBar,View,Text,Platform,CheckBox, TouchableOpacity, TouchableHighlight} from "react-native";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { AntDesign } from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from '../components/Icon/Icon';
import CustomLogo from "../components/CustomLogo/CustomLogo";
import Container from "../components/Container/Container";
import TextHeader from "../components/TextHeader/TextHeader";
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";

const Success =({route,navigation}) => {
    return(
        <Container>
            <StatusBar />
            <View style={{marginVertical:hp('5%')}}>
                <View style={{flexDirection:"row",
                        marginHorizontal:wp('6%'),
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ConfirmSeedPhrase')}
                            
                        >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <CustomIndicator 
                            three
                        />
                </View>
                <Icon 
                    iconBackground="#28FFBF"
                    direction="flex-end"
                    maTop={hp('5%')}
                    maRight={wp('15%')}
                />
            <View style={{flexDirection:"row"}}>
                    <Icon 
                        iconBackground="#82A3FF"
                        direction="flex-end"
                        maTop={hp('5%')}
                        maRight={wp('6%')}
                        marLeft={wp('10%')}
                    />
                    <CustomLogo 
                            customIcon={
                                <AntDesign name="checkcircle" size={hp('25%')} color="blue" 
                                    //  width={wp('15%')}
                                />
                                // <Ionicons name="shield-checkmark" size={hp('27%')} color="blue" 
                                //     width={wp('20%')}
                                // />
                                // <MaterialCommunityIcons name="shield-check-outline" size={hp('40%')} 
                                //     color="blue" 
                                // />
                            }
                            direction="center"
                            high={hp('40%')}
                    />
                    {/* <Icon 
                        iconBackground="#82A3FF"
                        direction="flex-start"
                        marLeft={wp('14%')}
                        maTop={hp('23%')}
                            // maRight={wp('15%')}
                    /> */}
                </View>
                <TextHeader 
                    headerText="Success!"
                    textColor="blue"
                    isBold
                    marTop={hp('2.5%')}
                    size={hp('6%')}
                />
                <TextHeader 
                    headerText="You've successfully protected your wallet.
                            Remember to keep your seed phrase safe,
                            it's your responsibility!"
                    marTop={hp('2%')}
                    size={hp('3%')}
                    // isJust
                    marHor={wp('5%')}
                />
                <TextHeader 
                    headerText="DefiSquid cannot recover your wallet
                    should you lose it. You can find your
                    seedphrase in Setings > Security & Privacy"
                    marTop={hp('0.6%')}
                    size={hp('3%')}
                    // isJust
                    marHor={wp('5%')}
                />
                <ButtonWIthText 
                    text="Next"
                    background="blue" 
                    textColor="#ffffff"
                    onPress={() => navigation.navigate('ReceiveBTC')}
                    maTop={hp('2.4%')}
                    
                />
            </View>
            

        </Container>
    )
}

export default Success;