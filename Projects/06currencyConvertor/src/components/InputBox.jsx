import React, { useId } from "react";

function InputBox({ // InputBox component starts
  label, // props for label
  amount, // props for amount
  onAmountChange, // callback for amount change
  onCurrencyChange, // callback for currency change
  currencyOptions = [], // props for currency options, default is empty array
  selectCurrency = "usd", // props for selected currency, default is "usd"
  amountDisable = false, // props for disabling amount input, default is false
  currencyDisable = false, // props for disabling currency select, default is false

  className = "", // props for additional class names
}) { // destructuring props
  const amountInputId = useId(); // generating unique id for amount input
  return (
    <div // container div for input box
      className={`bg-white p-3 rounded-lg text-sm flex ${className}`} // applying class names
    >
      <div className="w-1/2"> {/* div for amount input */}
        <label
          htmlFor={amountInputId} // associating label with amount input
          className="text-black/40 mb-2 justify-start flex"
        >
          {label} {/* displaying label */}
        </label>
        <input
          id={amountInputId} // id for amount input
          className="outline-none w-full bg-transparent py-1.5" // styling for amount input
          type="number" // setting input type to number
          placeholder="Amount" // placeholder text
          disabled={amountDisable} /* disabling amount input if true */
          value={amount} /* setting amount value */
          onChange={(e) => // handling input change
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right"> {/* div for currency select */}
        <p className="text-black/40 mb-2 w-full">Currency Type</p> {/* displaying currency type label */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" // styling for currency select
          value={selectCurrency} /* setting selected currency value */
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // handling currency select change
          disabled={currencyDisable} /* disabling currency select if true */
        >
          {currencyOptions.map((currency) => ( // mapping through currency options
            <option key={currency} value={currency}>
              {currency} {/* displaying currency options */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox; // exporting InputBox component