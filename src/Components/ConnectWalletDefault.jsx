import React from "react";

import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

const ConnectWalletDefault = () => {
  return (
    <div className="connect-wallet-btn">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "DONATUZ_V3_CLONE",
          url: "http://localhost:5173",
        }}
      />
    </div>
  );
};

export default ConnectWalletDefault;
