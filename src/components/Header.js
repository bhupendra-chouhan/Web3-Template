import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ setPubAddress }) => {
  const [account, setAccount] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(!open);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        // Save the connected account to localStorage
        localStorage.setItem("connectedAccount", accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask to use this dApp.");
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      // Check if MetaMask is installed
      if (window.ethereum) {
        try {
          // Check if we have a stored account
          const storedAccount = localStorage.getItem("connectedAccount");

          if (storedAccount) {
            // Verify if the account is still connected to MetaMask
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
            });

            if (accounts.length > 0) {
              // If the stored account matches any of the current MetaMask accounts
              if (accounts.includes(storedAccount)) {
                setAccount(storedAccount);
              } else {
                // If the stored account is no longer available, update with the new primary account
                setAccount(accounts[0]);
                localStorage.setItem("connectedAccount", accounts[0]);
              }
            } else {
              // No accounts available, clear storage
              localStorage.removeItem("connectedAccount");
              setAccount(null);
            }
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
          localStorage.removeItem("connectedAccount");
          setAccount(null);
        }
      }
    };

    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          localStorage.setItem("connectedAccount", accounts[0]);
        } else {
          setAccount(null);
          localStorage.removeItem("connectedAccount");
        }
      });

      // Listen for chain changes
      window.ethereum.on("chainChanged", () => {
        // Reload the page on chain change as recommended by MetaMask
        window.location.reload();
      });
    }

    // Cleanup listeners when component unmounts
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", () => {});
        window.ethereum.removeListener("chainChanged", () => {});
      }
    };
  }, []);

  useEffect(() => {
    if (account) {
      setPubAddress(account);
    }
  }, [account, setPubAddress]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="m-0 text-5xl font-bold min-w-fit">
        Solidity dApp Template
      </h1>
      <div
        onClick={() => handleOpenMenu()}
        className="text-4xl absolute top-4 right-3 md:hidden cursor-pointer"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div
        className={`${
          open ? "top-20 left-0" : "top-[-496px]"
        } flex flex-col md:flex-row md:justify-around items-center text-nowrap md:pb-0 py-3 absolute md:static bg-white md:bg-[transparent] gap-5 w-full md:w-auto pl-3 md:border-none border-2 border-blue-400 rounded-b-2xl transition-all duration-500 ease-in-out z-10`}
      >
        <div className="w-5/6 lg:text-xl">
          <ul className="flex gap-5 justify-around w-full md:w-1/2 ">
            <li
              key={2}
              className="cursor-pointer border-blue-400 hover:bg-blue-500 hover:text-white text-black md:text-white  border rounded-lg p-2 hover:text-blue-500"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              key={2}
              className="cursor-pointer border-blue-400 hover:bg-blue-500 hover:text-white text-black md:text-white  border rounded-lg p-2 hover:text-blue-500"
            >
              <Link to="https://github.com/bhupendra-chouhan/" target="_blank">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-400 text-gray-900 rounded-lg cursor-pointer text-base"
        >
          {account
            ? `${account.slice(0, 6)}...${account.slice(-4)}`
            : "Connect Wallet"}
        </button>
      </div>
    </header>
  );
};

export default Header;
