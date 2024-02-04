"use client";
import React, { useContext, useState } from "react";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import { bNetwork, signer } from "@/contract/Web3_Instance";
import { Context } from "@/components/Context";

const Page = () => {
    const [selectedOption, setSelectedOption] = useState<string>("Yes");
    const { userAddress } = useContext(Context);
    const [inviteAddress, setInviteAddress] = useState<string>("");
    const params = useSearchParams();
    const queryUrl = params.get("rr");

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const registerUser = async (e: any) => {
        e.preventDefault();
        try {
            const signers = signer;
            const gasPrice = await signers.getGasPrice();

            const myContract = bNetwork();
            const userExisit = await myContract!.isUserExists(userAddress || inviteAddress);
            const gasFee = await myContract!.gasfees();
            const convert = Number(gasFee?._hex).toString();
            if (userExisit === false) {
                const registration = await myContract!.registrations(queryUrl, {
                    gasPrice: gasPrice,
                    gasLimit: "200000",
                    value: convert,
                });
                await registration.wait();
                console.log(registration);
            } else {
                alert("You already registered");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const registerUserByManager = async () => {
        try {
            const signers = signer;
            const gasPrice = await signers.getGasPrice();

            const myContract = bNetwork();
            const ownerAddress = await myContract!.owner();
            const userExisit = await myContract!.UserRegister(userAddress);
            const gasFee = await myContract!.gasfees();
            const convert = Number(gasFee?._hex).toString();
            if (userExisit === false) {
                const registration = await myContract!.registrations(ownerAddress, {
                    gasPrice: gasPrice,
                    gasLimit: "200000",
                    value: convert,
                });
                await registration.wait();
                console.log(registration);
            } else {
                alert("You already registered");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black z-50">
            <div className="w-full max-w-lg mx-auto bg-[#121212] rounded-lg shadow-lg p-8">
                <h2 className="text-4xl bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent text-center font-bold mb-6">
                    Registration For Believe Network
                </h2>
                <div className="mb-10">
                    <p className="text-gray-400 text-center">Do you already have an Upline?</p>
                    <div className="flex justify-around mt-4">
                        {["Yes", "No"].map((option) => (
                            <button
                                key={option}
                                className={classNames(
                                    "text-lg font-semibold py-2 px-6 rounded-full transition-all duration-300",
                                    {
                                        "bg-yellow-500 hover:bg-yellow-700 text-white": selectedOption === option,
                                        "bg-gray-700 text-gray-300": selectedOption !== option,
                                    }
                                )}
                                onClick={() => handleOptionChange(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedOption === "Yes" ? (
                    <form className="space-y-4" onSubmit={registerUser}>
                        <div className="flex flex-col">
                            <label htmlFor="bnId" className="text-gray-400 mb-2">
                                Enter BN Id or Address
                            </label>
                            <input
                                id="bnId"
                                onChange={(e) => setInviteAddress(e.target.value)}
                                value={(queryUrl as string) || inviteAddress}
                                type="text"
                                className="bg-gray-800 text-white rounded-lg p-3 focus:ring-yellow-500 focus:border-yellow-500"
                                placeholder="BN Id or Address"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300"
                        >
                            Accept
                        </button>
                    </form>
                ) : (
                    <button
                        className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300"
                        onClick={registerUserByManager}
                    >
                        Sign up
                    </button>
                )}
            </div>
        </div>
    );
};

export default Page;
