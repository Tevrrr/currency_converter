import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

import { useSelector } from 'react-redux';
import { getExchangeRates} from '../../redux/features/ExchangeRatesSlice.js'

const Header = () => {
    const exchangeRates = useSelector(getExchangeRates);
	const [USD, setUSD] = useState(exchangeRates.rates.USD);
	const [EUR, setEUR] = useState(exchangeRates.rates.EUR);
	const [UAH, setUAH] = useState(exchangeRates.rates.UAH);

	useEffect(() => {
        setUSD(exchangeRates.rates.USD);
        setEUR(exchangeRates.rates.EUR);
        setUAH(exchangeRates.rates.UAH);
	}, [exchangeRates]);
    return (
		<header className={styles.header}>
			<div>USD: {(UAH / USD).toFixed(2)} UAH</div>
			<div>|</div>
			<div>EUR: {(UAH / EUR).toFixed(2)} UAH</div>
		</header>
	);
}

export default Header;
