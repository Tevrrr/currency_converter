/** @format */

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import { useSelector } from 'react-redux';
import { getExchangeRates } from '../../redux/features/ExchangeRatesSlice.js';

const Header = () => {
	const exchangeRates = useSelector(getExchangeRates);
	const [USD, setUSD] = useState(exchangeRates.USD);
	const [EUR, setEUR] = useState(exchangeRates.EUR);
	const [UAH, setUAH] = useState(exchangeRates.UAH);

	useEffect(() => {
		setUSD(exchangeRates.USD);
		setEUR(exchangeRates.EUR);
		setUAH(exchangeRates.UAH);
	}, [exchangeRates]);
	return (
		<header className={styles.header}>
			<div>USD: {(UAH / USD).toFixed(2)} UAH</div>
			<div>|</div>
			<div>EUR: {(UAH / EUR).toFixed(2)} UAH</div>
		</header>
	);
};

export default Header;
