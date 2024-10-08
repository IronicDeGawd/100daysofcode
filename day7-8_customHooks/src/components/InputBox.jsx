/* eslint-disable react/prop-types */
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <div className="text-black/40 mb-2 inline-block">
          {label}
          <input
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount}
            onChange={() => {}}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
