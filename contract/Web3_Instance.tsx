import { ethers } from "ethers";
import BNetworkABI from "./BNetwork_ABI.json";

declare global {
    interface Window {
        ethereum?: any;
    }
}

const B_Network_Address = "0xAE521258c29B67262F5128c10c25741C7327ee5a";

export const bNetwork = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const bNetworkContract = new ethers.Contract(B_Network_Address, BNetworkABI, signer);
    return bNetworkContract;
};