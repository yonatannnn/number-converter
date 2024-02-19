import React, { useState } from 'react';
import './converter.css';

const Converter = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const callFunction = (e) => {
        const value = inputValue.trim();

        if (e.target.id === '1') {
            setResult(binaryToOctal(value));
        } else if (e.target.id === '2') {
            setResult(binaryToDecimal(value));
        } else if (e.target.id === '3') {
            setResult(octalToDecimal(value));
        } else if (e.target.id === '4') {
            setResult(octalToBinary(value));
        } else if (e.target.id === '5') {
            setResult(decimalToOctal(value));
        } else if (e.target.id === '6') {
            setResult(decimalToBinary(value));
        }
    };

    const binaryToOctal = (binaryNumber) => {
        if (!/^[01]+$/.test(binaryNumber)) {
            return "Invalid binary number";
        }
        const decimalNumber = parseInt(binaryNumber, 2);
        return decimalNumber.toString(8);
    };

    const decimalToBinary = (decimalNumber) => {
        decimalNumber = parseInt(decimalNumber, 10);
        console.log(Number.isInteger(decimalNumber))
        if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
            return "Invalid decimal number";
        }
        return decimalNumber.toString(2);
    };

    const binaryToDecimal = (binaryNumber) => {
        if (!/^[01]+$/.test(binaryNumber)) {
            return "Invalid binary number";
        }
        return parseInt(binaryNumber, 2);
    };

    const octalToBinary = (octalNumber) => {
        if (!/^[0-7]+$/.test(octalNumber)) {
            return "Invalid octal number";
        }
        const decimalNumber = parseInt(octalNumber, 8);
        return decimalNumber.toString(2);
    };

    const octalToDecimal = (octalNumber) => {
        if (!/^[0-7]+$/.test(octalNumber)) {
            return "Invalid octal number";
        }
        return parseInt(octalNumber, 8);
    };

    const decimalToOctal = (decimalNumber) => {
        decimalNumber = parseInt(decimalNumber, 10);
        console.log(Number.isInteger(decimalNumber))
        if (!Number.isInteger(decimalNumber) || decimalNumber < 0) {
            return "Invalid decimal number";
        }
        return decimalNumber.toString(8);
    };

    return (
        <div className="converter-container">
            <h1 className="converter-title">{props.title}</h1>
            <div className='result-container'>
                <input
                    className="converter-input"
                    type="text"
                    placeholder="Enter value"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className='result'>
                    Result: <span>{result}</span>
                </div>
            </div>

            <button
                className='converter-button'
                id={props.id}
                onClick={callFunction}
            >
                Convert
            </button>
        </div>
    );
}

export default Converter;
