import React from "react";
import Navigator from "./config/routes";
import Welcome from "./screens/Welcome";
import CreatePassword  from "./screens/CreatePassword";
import SecureWallet from './screens/SecureWallet';
import SecureWalletManual from "./screens/SecureWalletManual";
import ModalWallet  from "./screens/ModalWallet";
import WriteDownSeed from "./screens/WriteDownSeed";
import ConfirmSeedPhrase from "./screens/ConfirmSeedPhrase";
import Success from "./screens/Success";
import ReceiveBTC from "./screens/ReceiveBTC";
import ScanCode from "./screens/ScanCode";
import SendTo from "./screens/SendTo";
import ConfirmBTC from "./screens/ConfirmBTC";
import AmountBTC from "./screens/AmountBTC";
import AddFundWallet from "./screens/AddFundWallet";
import Withdraw from "./screens/Withdraw";

export default () => (
    <Navigator />
)
  
