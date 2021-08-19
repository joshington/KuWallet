import React,{useState,useEffect} from 'react';
import { View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StepIndicator from 'react-native-step-indicator';
 

const StepWithArrow = () => {
    // const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];
// constructor() {
//     this.state = {
//         currentPosition: 0
//     }
// }
    const [currentPosition, setCurrentPosition] = useState(0);
    
    const onPageChange = (position) => (
        setCurrentPosition(position)
    )
    return (
        <>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
                <StepIndicator
                    customStyles={customStyles}
                    // currentPosition={currentPosition}
                    stepCount={3}
                    // renderStepIndicator
                    // labels={labels}
                />
            </View>
            
        </>
        
    )
}
 

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#1E90FF'
}

export default StepWithArrow;
