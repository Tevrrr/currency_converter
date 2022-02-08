/** @format */

import React from 'react';
import Converter from '../../components/Converter/Converter';
import Header from '../../components/Header/Header';
import HorizontalLine from '../../components/_items/HorizontalLine/HorizontalLine';
import styles from './styles.module.css';

const CurrencyConverter = () => {
	return (
		<div className={styles.CurrencyConverter}>
			<Header />
			<HorizontalLine />
			<Converter />
		</div>
	);
};

export default CurrencyConverter;
