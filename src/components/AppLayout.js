import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import pubAddressData from "../context/UserContext";

const AppLayout = () => {
  const [pubAddress, _setPubAddress] = useState("");

  return (
    <div>
      <pubAddressData.Provider value={{ pubAddress }}>
        <Header setPubAddress={_setPubAddress} />
        <div>
          {pubAddress === "" ? (
            <div className="flex flex-col justify-center items-center max-h-screen h-[100%] bg-orange-500 sm:text-2xl border-4">
              <div className="w-full text-center p-4">
                Please click the "Connect Wallet" button and make sure you have
                added "Open-Campus-Codex-Sepolia" network to your Metamask
                wallet.
              </div>

              <div className="w-full flex justify-center p-4">
                <ul className="list-disc text-justify">
                  <li>
                    <a
                      href="https://open-campus-docs.vercel.app/getting-started"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open-Campus Network Details
                      <span className="sm:text-3xl">
                        <ion-icon name="open"></ion-icon>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drpc.org/faucet/open-campus-codex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open-Campus Faucet
                      <span className="sm:text-3xl">
                        <ion-icon name="open"></ion-icon>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://opencampus-codex.blockscout.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open-Campus Explorer
                      <span className="sm:text-3xl">
                        <ion-icon name="open"></ion-icon>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </pubAddressData.Provider>
    </div>
  );
};

export default AppLayout;
export { pubAddressData };
