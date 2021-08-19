import React from 'react';
import PropTypes from 'prop-types';
import { View,ScrollView} from 'react-native';


const Container = ({children}) => {
    // const containerStyles = [styles.container];
    // if (backgroundColor){
    //     containerStyles.push({backgroundColor})
    // }
    return (
        <ScrollView style={{flex:1,backgroundColor:"#ffffff"}}>
            {children}
        </ScrollView>
    );
};

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;