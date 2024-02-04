"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import classNames from "classnames";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { bNetwork, signer } from "@/contract/Web3_Instance";
import { ethers } from "ethers";
import { Context } from "@/components/Context";
import Token_ABI from "@/contract/Token_ABI.json";
import { SelectData } from "@/utils/SelectData";

const Page = () => {
    const [selectedOption, setSelectedOption] = useState<string>("Registration");
    const { userAddress } = useContext(Context);
    const [allow, setAllow] = useState<string>("");
    const [value, setValue] = useState<any>({
        yourAddress: "",
        refferalAddress: "",
        beliverAddress: "",
        package: "",
    });

    console.log(value);

    const handleSelectPackageChange = (selectedValue: string) => {
        setValue((prevState: any) => ({
            ...prevState,
            package: selectedValue,
        }));
    };

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const registerUser = async (e: any) => {
        e.preventDefault();
        try {
            const gasPrice = await signer.getGasPrice();

            const myContract = bNetwork();
            const userExisit = await myContract!.isUserExists(userAddress);
            const gasFee = await myContract!.gasfees();
            const convert = Number(gasFee?._hex).toString();
            console.log(convert);
            if (!value.refferalAddress || !value.beliverAddress) {
                alert("Some value is missing");
                return;
            }
            if (userExisit === false) {
                const registration = await myContract!.registrations_user(value.refferalAddress, value.beliverAddress, {
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

    const approveUSDT = async () => {
        try {
            const gasPrice = await signer.getGasPrice();
            const myContract = bNetwork();
            const getFeeTokenAddress = await myContract!.getFeeToken();
            const secondInstance = new ethers.Contract(getFeeTokenAddress, Token_ABI, signer);
            const planetName =
                value.package === "Earth"
                    ? "5000000000000000000"
                    : value.package === "Moon"
                    ? "10000000000000000000"
                    : value.package === "Mars"
                    ? "25000000000000000000"
                    : value.package === "Mercury"
                    ? "50000000000000000000"
                    : value.package === "Venus"
                    ? "100000000000000000000"
                    : value.package === "Jupiter"
                    ? "250000000000000000000"
                    : value.package === "Saturn"
                    ? "500000000000000000000"
                    : value.package === "Uranus"
                    ? "1000000000000000000000"
                    : value.package === "Neptune"
                    ? "2500000000000000000000"
                    : value.package === "Pluto"
                    ? "5000000000000000000000"
                    : "5000000000000000000";
            const approve = await secondInstance.approve(myContract!.address, planetName, {
                gasPrice: gasPrice,
                gasLimit: "200000",
            });
            await approve.wait();
            console.log(approve);
        } catch (error) {
            console.log(error);
        }
    };

    const checkApproveUSDT = async () => {
        try {
            const gasPrice = await signer.getGasPrice();
            const myContract = bNetwork();
            const getFeeTokenAddress = await myContract!.getFeeToken();
            const secondInstance = new ethers.Contract(getFeeTokenAddress, Token_ABI, signer);
            const checkAllowance = await secondInstance.allowance(userAddress, myContract!.address);
            const allowance = Number(checkAllowance?._hex);
            setAllow(allowance.toString());
        } catch (error) {
            console.log(error);
        }
    };

    const buyPlanetUser = async (e: any) => {
        e.preventDefault();
        try {
            const gasPrice = await signer.getGasPrice();

            const myContract = bNetwork();
            if (value.package && value.beliverAddress) {
                const buyPlanet = await myContract!.buyPlannet_user(value.package, value.beliverAddress, {
                    gasPrice: gasPrice,
                    gasLimit: "200000",
                });
                await buyPlanet.wait();
                console.log(buyPlanet);
            } else {
                alert("Some value is missing");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkApproveUSDT();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center">
                <p className="text-2xl w-fit font-semibold border-b-4 border-b-yellow-500">Create New Believer</p>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-5">
                <Button variant="custom_yellow" onClick={approveUSDT}>
                    Approve
                </Button>
                <p className="text-zinc-500 mt-2">Please, Approve the wallet before proceeding further</p>
            </div>

            <div className="w-full h-full items-center justify-center flex flex-col my-4  ">
                <div className="w-fit  flex flex-col  ">
                    <div className="flex items-center justify-center">
                        <div className="my-3">
                            {["Registration", "Buy Planet"].map((option) => (
                                <Button
                                    key={option}
                                    className={classNames(
                                        "text-md mx-4  py-2 px-6 rounded-md transition-all duration-300",
                                        {
                                            "bg-yellow-500 hover:bg-yellow-700 text-white": selectedOption === option,
                                            "bg-zinc-800 text-gray-300": selectedOption !== option,
                                        }
                                    )}
                                    onClick={() => handleOptionChange(option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {selectedOption === "Registration" ? (
                        <form
                            action=""
                            className="flex flex-col gap-y-5 bg-zinc-900 py-4 px-6 rounded-lg"
                            onSubmit={registerUser}
                        >
                            <label htmlFor="">Your Address</label>
                            <Input
                                type="text"
                                placeholder="Enter your address"
                                className="w-96"
                                value={userAddress || value?.yourAddress}
                                onChange={(e) => setValue({ ...value, yourAddress: e.target.value })}
                            />
                            <label htmlFor="">Referral Address</label>
                            <Input
                                type="text"
                                placeholder="Enter your referral address"
                                value={value.refferalAddress}
                                onChange={(e) => setValue({ ...value, refferalAddress: e.target.value })}
                            />
                            <label htmlFor="">New Believer Address</label>
                            <Input
                                type="text"
                                placeholder="Enter new believer address"
                                value={value.beliverAddress}
                                onChange={(e) => setValue({ ...value, beliverAddress: e.target.value })}
                            />

                            <div className="w-full flex items-center justify-center">
                                <Button type="submit" variant="custom_yellow" className="w-fit px-6">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <form
                            action=""
                            className="flex flex-col gap-y-5 bg-zinc-900 py-4 px-6 rounded-lg"
                            onSubmit={buyPlanetUser}
                        >
                            <label htmlFor="">Your Address</label>
                            <Input
                                type="text"
                                placeholder="Enter your address"
                                className="w-96"
                                value={userAddress || value?.yourAddress}
                                onChange={(e) => setValue({ ...value, yourAddress: e.target.value })}
                            />
                            <label htmlFor="">Believer Address</label>
                            <Input
                                type="text"
                                placeholder="Enter  believer address"
                                value={value.beliverAddress}
                                onChange={(e) => setValue({ ...value, beliverAddress: e.target.value })}
                            />
                            <label>Select Package</label>
                            <Select
                                // options={perPageDropDownOptions}
                                // onValueChange={onValueChange}
                                // defaultValue={value}
                                name="selectedPackage"
                                value={value.package}
                                onValueChange={handleSelectPackageChange}
                            >
                                <SelectTrigger className="w-[180px] border border-yellow-400">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent defaultValue="Earth">
                                    {SelectData.map((item) => (
                                        <SelectItem key={item.id} value={item.value}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <div className="w-full flex items-center justify-center">
                                <Button type="submit" variant="custom_yellow" className="w-fit px-6">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
