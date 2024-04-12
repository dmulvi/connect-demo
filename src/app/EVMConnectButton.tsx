"use client";

import {
  BlockchainTypes,
  CrossmintEVMWalletAdapter,
  CrossmintEnvironment,
} from "@crossmint/connect";
import { add } from "lodash";
import React, { useState } from "react";

const EVMConnectButton: React.FC = () => {
  //const EVMConnectButton = () => {
  const [address, setAddress] = useState<string | undefined>(undefined);

  const crossmintConnect = new CrossmintEVMWalletAdapter({
    chain: BlockchainTypes.ETHEREUM,
    environment: CrossmintEnvironment.STAGING,
  });

  const handleClick = async () => {
    // prompt user to trust your app
    //const _address = await crossmintConnect.connect();
    await crossmintConnect.connect();
    const addresses = crossmintConnect.publicKeys();
    console.log("addresses:", addresses);

    // store the result in react state
    ///setAddress(_address);
  };

  const connected = address != null;

  // If connected, displays their address, else displays "Connect"
  return (
    <button onClick={handleClick} disabled={connected}>
      {connected ? `${address.slice(0, 6)}...` : "Connect"}
    </button>
  );
};

export default EVMConnectButton;
