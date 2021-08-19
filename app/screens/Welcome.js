import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types'
import { Animated,View,Text,StatusBar,StyleSheet,Dimensions,TouchableHighlight,Image
 } from "react-native";
// import TextHeader from "../components/TextHeader/TextHeader";
import Container from "../components/Container/Container";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Easing } from "react-native-reanimated";
// import ButtonWIthText from '../components/ButtonWithText/ButtonWithText';


const Icon = ({ iconBackground,direction,margPercent,margRight}) => {
    // const iconStyles = [styles.icon];
    // //   if (visible) {
    // //     iconStyles.push(styles.iconVisible);
    // //   }
    // if (iconBackground && direction) {
    //     iconStyles.push({ 
    //         backgroundColor: iconBackground,
    //         justifyContent: direction,
    //     });
    // }
    // return (
    //    <View style={styles.icon} />
    // );
    
  
    // return <View style={styles.icon} />;
    return (
        <View  style={{
            borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 3,
            width: Dimensions.get('window').width * 0.1,
            height: Dimensions.get('window').width * 0.1,
            backgroundColor:iconBackground ? iconBackground :'#fff',
                // justifyContent: 'center',
            alignSelf: direction,
            marginLeft:wp(margPercent),
            marginTop:wp('9%'),
            // paddingTop:hp('5%')
            marginRight:margRight,
            }}  
        />
    )
};
  
Icon.propTypes = {
    visible: PropTypes.bool,
    checkmark: PropTypes.bool,
    iconBackground: PropTypes.string,
};
  


const ButtonWIthText =({text,background,textColor,onPress}) => {
    return(
        <>
            <TouchableHighlight 
                style={{backgroundColor:background,
                    alignSelf:"center",
                    width:wp('85%'),
                    height:hp('12%'),
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:12,
                    marginVertical:hp('0.55%'),
                    fontWeight:"bold",
                    activeOpacity:0.6,
                    underlayColor:"#DDDDDD",

                }}
                onPress={onPress}
            >
                <Text style={{fontSize:hp('4%'),color:textColor}}>
                    {text}
                </Text>
            </TouchableHighlight>
        </>
    )
}

ButtonWIthText.propTypes={
    text:PropTypes.string,
    background:PropTypes.string,
   
}

const Welcome = ({route, navigation}) => {
    //now since i want to animate the card every 5 seconds
    const [rotation, setRotation] = useState(0);


    //got solution from stack overflow
    const spinValue = new Animated.Value(0);
    useEffect(()=> {
        Animated.loop(
            Animated.sequence([
                Animated.delay(2000),
                Animated.timing(spinValue,
                    {
                        toValue: 1,
                        duration:10000,
                        easing:Easing.linear,
                        useNativeDriver:true
                    }
                ),
                    
            ]),{iterations:10}
           
        ).start()
    },[])
    
    //next,interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange:[0,1],
        outputRange:['0deg', '360deg']
    })


    return(
        <Container>
            <StatusBar translucent={false} barStyle="light-content" />
            <Text style={styles.header}>Welcome</Text>
            <Icon  iconBackground="#0077B6" 
                direction="flex-start"
                margPercent="10%"
            />
            <View style={styles.imageContainer}>
                <Animated.Image source={require('./images/truewallet.png')} 
                    style={{
                        resizeMode:"contain",alignSelf:"center",
                        height:hp('28%'),
                        width:wp('70%'),
                        transform: [{rotate: spin}],
                    }}
                />
            </View>
            <Icon  iconBackground="#88FFF7" 
                direction="flex-end"
                margPercent="20%"
                margRight={wp('11%')}
            />
            <Text style={styles.headerBig}>Wallet Setup</Text>
            <ButtonWIthText  
                text="Import Using Seed " 
                background="#EEEEEE" 
                onPress={() => navigation.navigate('WriteDownSeed')}
            />
            <ButtonWIthText  
                text="Create a New Wallet "
                background="#0077B6" 
                textColor="#ffffff"
                onPress={() => navigation.navigate('CreatePassword')}
            />
        </Container>
    )
  
}

const styles = StyleSheet.create({
    header:{
        // fontFamily:"Questrial",
        fontSize:hp('6%'),
        paddingTop:hp('2.7%'),
        alignSelf:"center"
    },
    headerBig:{
        fontSize:hp('6.8%'),
        alignSelf:"center"
    },
    // image:{
    //     resizeMode:"contain",
    //     alignSelf:"center",
    //     height:hp('28%'),
    //     width:wp('70%'),
    // },
    imageContainer:{
        alignItems:"center",
    }
})

export default Welcome; 

//najeera, hoima road 070
