import React from "react";

import { useConnect } from "thirdweb/react";
import { createWallet, injectedProvider } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

const ConnectWalletButton = () => {
  const { connect, isConnecting, error } = useConnect();
  return (
    <button
      onClick={() =>
        connect(async () => {
          // create a wallet instance
          const metamask = createWallet("io.metamask"); // autocomplete the wallet id
          // trigger the connection
          await metamask.connect({ client });
          // return the wallet
          return metamask;
        })
      }
    >
      Connect
    </button>
  );
};

export default ConnectWalletButton;
