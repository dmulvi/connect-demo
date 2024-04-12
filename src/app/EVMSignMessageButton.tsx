"use client";

import {
  BlockchainTypes,
  CrossmintEVMWalletAdapter,
  CrossmintEnvironment,
} from "@crossmint/connect";
import React from "react";

const EVMSignMessageButton = () => {
  const crossmintConnect = new CrossmintEVMWalletAdapter({
    chain: BlockchainTypes.ETHEREUM,
    environment: CrossmintEnvironment.STAGING,
  });

  const plainMessage = "This is a test message";

  async function handleClick() {
    // prompt user to trust your app
    const _signature = await crossmintConnect.signMessage(plainMessage);

    if (_signature != null) {
      // user signed plainMessage.
      // You should now validate _signature, using your choice method, such as ethers.utils.recoverAddress()
    } else {
      // user rejected.
    }
  }

  return <button onClick={handleClick}>Sign Message</button>;
};

export default EVMSignMessageButton;
