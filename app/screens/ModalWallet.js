import React, {useState,useEffect} from "react";
import PropTypes from 'prop-types';
import { Text, TouchableHighlight, View, StyleSheet,StatusBar,Pressable,Dimensions, Button,
    TouchableOpacity
} from 'react-native';


import Modal from "react-native-modal";
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Container from '../components/Container/Container';
import { Feather,AntDesign } from '@expo/vector-icons';
// import Separator from "../components/Separator/Separator";
import TextHeader from "../components/TextHeader/TextHeader";
import ButtonWIthText from "../components/ButtonWithText/ButtonWithText";
import CustomIndicator from "../components/CustomIndicator/CustomIndicator";


const Separator = ({dashColor,viewHeight,maTop}) => {
    return(
        <View  
            style={{backgroundColor:dashColor,height:viewHeight,width:Dimensions.get('window').width,
                marginTop:maTop
            }}
        />
    )
}

//a button for opening our modal
// const Button = ({ title, onPress }) => {
//     return (
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text style={styles.text}>{title}</Text>
//       </TouchableOpacity>
//     );
// };


const ModalWallet = ({route, navigation}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const toggleModal = (visible) => {
    //     setModalVisible(visible)
    // }
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return(
        <Container>
            <StatusBar />
            <View style={{marginTop:hp('5%')}}>
                <View style={{flexDirection:"row",
                        marginHorizontal:wp('6%'),
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('SecureWalletManual')}
                            
                        >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </TouchableOpacity>
                        <CustomIndicator 
                            two
                        />
                </View>
                <Separator dashColor="gray" viewHeight={hp('0.15%')} maTop={hp('10%')} />
                <View style = {styles.container}>
                    <TextHeader 
                            headerText="Tap to reveal your seed phrase"
                            // isJust
                            isBold
                            size={hp('3%')}
                            // marTop={hp('0.7%')}
                            // marHor={wp('6%')}
                            textColor="white"
                            marHor={wp('3%')}
                    />
                    <TextHeader 
                            headerText="Make  sure no one is watching  your screen."
                            // isJust
                            marHor={wp('3%')}
                            size={hp('3%')}
                            // marTop={hp('0.7%')}
                            // marHor={wp('6%')}
                            textColor="black"
                            marTop={hp('3%')}
                    />
                    {/* <View style={styles.separator} /> */}
                    {/* <Button  title="button" onPress={handleModal} /> */}
                    <TouchableHighlight style={{width:wp('39%'),backgroundColor:"blue",height:hp('9%'),
                        borderRadius:wp('7%'),alignContent:"center",marginTop:hp('3%'),justifyContent:"center"
                    }}
                        onPress={() => navigation.navigate('WriteDownSeed')}
                    >
                        <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                            <Feather name="eye" size={26} color="white" />
                            <Text style={{textAlign:"center",color:"white",fontSize:hp('4%')}}>View</Text>
                        </View>
                    </TouchableHighlight>
                    <Modal isVisible={isModalVisible}>
                        <View style={{flex:1}}>
                            <Text>Hello</Text>
                            <Button  title="Hide modal" onPress={handleModal} />
                        </View>
                    </Modal>
                
                    
                    {/* <TouchableHighlight onPress = {() => {toggleModal(true)}}>
                        <Text style = {styles.text}>Open Modal</Text>
                    </TouchableHighlight> */}
                </View>
                
                <Separator dashColor="gray" viewHeight={hp('0.15%')} maTop={hp('7%')}  />
                <ButtonWIthText 
                    text="Next"
                    isBold
                    background="#dcdcdc" 
                    textColor="#000"
                    onPress={() => navigation.navigate('WriteDownSeed')}
                    maTop={hp('5%')}
                    size={hp('5%')}
                    
                />
            </View>
            
            
                
                {/* <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable> */}
    
        </Container>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        marginTop: 15,
        paddingVertical: 15,
        borderRadius: 25,
        width: "80%",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
    container: {
        // flex: 1,
        borderRadius:wp('3%'),
        marginHorizontal:wp('9%'),
        backgroundColor:"#9a9a9a",
        height:hp('40%'),
        marginTop:hp('8%'),
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    // container: {
    //     alignItems: 'center',
    //     backgroundColor: '#ede3f2',
    //     padding: 100
    // },
    // modal: {
    //     flex: 1,
    //     alignItems: 'center',
    //     backgroundColor: '#f7021a',
    //     padding: 150
    // },
    // text: {
    //     color: '#3f2949',
    //     marginTop: 10
    // },
    // centeredView: {
    // //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   marginTop: 30,
    // //   backgroundColor:"gray"
    // },
    // modalView: {
    //   margin: 40,
    //   backgroundColor: "gray",
    //   borderRadius: 20,
    // //   padding: wp('35%'),
    //   width: wp('75%'),
    //   height:hp('55%'),
    //   alignItems: "center",
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 2
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 4,
    //   elevation: 5
    // },
    // button: {
    //   borderRadius: 20,
    //   padding: 10,
    //   elevation: 2
    // },
    // buttonOpen: {
    //   backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //   backgroundColor: "#2196F3",
    // },
    // textStyle: {
    //   color: "white",
    //   fontWeight: "bold",
    //   textAlign: "center"
    // },
    // modalText: {
    //   marginBottom: 15,
    //   textAlign: "center"
    // }
});


export default ModalWallet