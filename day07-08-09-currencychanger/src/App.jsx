import { useState } from "react";
import InputBox from "./components/InputBox";
import GetCurrency from "./hooks/GetCurrency";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const currencyOptions = GetCurrency(from);
  const options = Object.keys(currencyOptions);

  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setTo(from);
    setFrom(to);
  };

  const convertAmount = () => {
    setConvertedAmount(amount * currencyOptions[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/164636/pexels-photo-164636.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                currencyOptions={options}
                amount={amount}
                selectCurrency={from}
                onCurrencyChange={(currency) => {
                  setAmount(currency);
                }}
                onAmountChange={(currency) => {
                  setAmount(currency);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                inputDisabled
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
