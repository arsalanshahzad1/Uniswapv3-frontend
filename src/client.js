import {
  createThirdwebClient,
  getContract,
} from "thirdweb";
import { defineChain } from "thirdweb/chains";

export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
  secretKey: "koP8LkWMgiAIv1MGd7KWNNXYSY2kaBLMEAskEyT84Zsd_tWWYInckFLNgnf9PMaYXr54UbhQLN63-CZtgT9hQg"
});

export const factoryContract = getContract({
  client:client,
  chain: defineChain(42019),
  address: "0x8207e5908756DF39cBa3781143acbD8a72086398",

});

export const positionManagerContract = getContract({
  address: "0x87CA0bF49Eeb1e25B2EC7d420aEa085699C19323",
  chain: defineChain(42019),
  client:client,
});

export const positionManagerAddress = "0x87CA0bF49Eeb1e25B2EC7d420aEa085699C19323"
export const qouterAddress = "0x38ADCD3874847d2a4b371ED577611A48642302D4"
export const routerAddress = "0x4Ab112f6081D8507D4BbBf2F3aCfF602E6462365"