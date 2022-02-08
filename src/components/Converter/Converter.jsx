/** @format */

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import CurrencyString from '../_items/CurrencyString/CurrencyString';
import Arrows from '../_items/Arrows/Arrows';

import { useSelector } from 'react-redux';
import { getExchangeRates } from '../../redux/features/ExchangeRatesSlice';

const Converter = () => {
	const exchangeRates = useSelector(getExchangeRates);
	const [leftValue, setLeftValue] = useState(0);
	const [rightValue, setRightValue] = useState(0);
	const [leftCharCode, setLeftCharCode] = useState('UAH');
	const [rightCharCode, setRightCharCode] = useState('USD');

	const recalculateRight = (value) => {
		let nextValue = (
			(value * exchangeRates.rates[rightCharCode]) /
			exchangeRates.rates[leftCharCode]
		).toFixed(2);
		setRightValue(nextValue);
	};

	const recalculateLeft = (value) => {
		
        let nextValue = (
			(value * exchangeRates.rates[leftCharCode]) /
			exchangeRates.rates[rightCharCode]
		).toFixed(2);
		setLeftValue(nextValue);
	};

	return (
		<div className={styles.Converter}>
			<CurrencyString
				value={leftValue}
				setValue={setLeftValue}
				charCode={leftCharCode}
				setCharCode={setLeftCharCode}
				recalculate={recalculateRight}
			/>
			<Arrows />
			<CurrencyString
				value={rightValue}
				setValue={setRightValue}
				charCode={rightCharCode}
				setCharCode={setRightCharCode}
				recalculate={recalculateLeft}
			/>
		</div>
	);
};

export default Converter;
