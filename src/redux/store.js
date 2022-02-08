/** @format */

import { configureStore } from '@reduxjs/toolkit';

import ExchangeRatesReducer from './features/ExchangeRatesSlice';

export default configureStore({
	reducer: {
		exchangeRates: ExchangeRatesReducer,
	},
});
