/** @format */

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import CurrencyString from '../_items/CurrencyString/CurrencyString';
import Arrows from '../_items/Arrows/Arrows';

import { useSelector, useDispatch } from 'react-redux';
import {
	getExchangeRates,
	fetchExchangeRates,
} from '../../redux/features/ExchangeRatesSlice';

const Converter = () => {
	const dispatch = useDispatch();
	const exchangeRates = useSelector(getExchangeRates);
	const [leftValue, setLeftValue] = useState(0);
	const [rightValue, setRightValue] = useState(0);
	const [leftCharCode, setLeftCharCode] = useState('UAH');
	const [rightCharCode, setRightCharCode] = useState('USD');

	useEffect(() => {
		dispatch(fetchExchangeRates());
		console.log(1);
	}, [dispatch]);

	const recalculateRight = (value, сharCode) => {
		let nextValue = (
			(value * exchangeRates[rightCharCode]) /
			exchangeRates[сharCode]
		).toFixed(2);
		setRightValue(nextValue);
	};

	const recalculateLeft = (value, сharCode) => {
		let nextValue = (
			(value * exchangeRates[leftCharCode]) /
			exchangeRates[сharCode]
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
