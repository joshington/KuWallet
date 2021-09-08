import React from "react";
import {NavigationContainer,DefaultTheme,DarkTheme, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from "../screens/Welcome";
import CreatePassword  from "../screens/CreatePassword";
import SecureWallet from '../screens/SecureWallet';
import SecureWalletManual from "../screens/SecureWalletManual";
import ModalWallet  from "../screens/ModalWallet";
import WriteDownSeed from "../screens/WriteDownSeed";
import ConfirmSeedPhrase from "../screens/ConfirmSeedPhrase";
import Success from "../screens/Success";
import ReceiveBTC from "../screens/ReceiveBTC";
import ScanCode from "../screens/ScanCode";
import SendTo from "../screens/SendTo";
import ConfirmBTC from "../screens/ConfirmBTC";
import AmountBTC from "../screens/AmountBTC";
import AddFundWallet from "../screens/AddFundWallet";
import Withdraw from "../screens/Withdraw";
import MyWallet from "../screens/MyWallet";
import MyWalletAnother from "../screens/MyWalletAnother";
import WithDrawAnother from "../screens/WithdrawAnother";
import TradeGraph from "../screens/TradeGraph";


const Stack = createStackNavigator()


// const MyStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen  name="Welcome"  component={Welcome} />
//         </Stack.Navigator>
//     )
// }

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Welcome"  component={Welcome} />
                <Stack.Screen options={{headerShown:false}} name="CreatePassword"  component={CreatePassword} />
                <Stack.Screen options={{headerShown:false}} name="SecureWallet"  component={SecureWallet} />
                <Stack.Screen options={{headerShown:false}} name="SecureWalletManual"  component={SecureWalletManual} />
                <Stack.Screen options={{headerShown:false}} name="ModalWallet"  component={ModalWallet} />
                <Stack.Screen options={{headerShown:false}} name="WriteDownSeed"  component={WriteDownSeed} />
                <Stack.Screen options={{headerShown:false}} name="ConfirmSeedPhrase"  component={ConfirmSeedPhrase} />
                <Stack.Screen options={{headerShown:false}} name="Success"  component={Success} />
                <Stack.Screen options={{headerShown:false}} name="ReceiveBTC"  component={ReceiveBTC} />
                <Stack.Screen options={{headerShown:false}} name="ScanCode"  component={ScanCode} />
                <Stack.Screen options={{headerShown:false}} name="SendTo"  component={SendTo} />
                <Stack.Screen options={{headerShown:false}} name="AmountBTC"  component={AmountBTC} />
                <Stack.Screen options={{headerShown:false}} name="ConfirmBTC"  component={ConfirmBTC} />
                <Stack.Screen options={{headerShown:false}} name="MyWallet"  component={MyWallet} />
                <Stack.Screen options={{headerShown:false}} name="Withdraw"  component={Withdraw} />
                <Stack.Screen options={{headerShown:false}} name="WithdrawAnother"  component={WithDrawAnother} />
                <Stack.Screen options={{headerShown:false}} name="MyWalletAnother"  component={MyWalletAnother} />
                <Stack.Screen options={{headerShown:false}} name="AddFundWallet"  component={AddFundWallet} />   
                <Stack.Screen options={{headerShown:false}} name="TradeGraph"  component={TradeGraph} />   

         </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;