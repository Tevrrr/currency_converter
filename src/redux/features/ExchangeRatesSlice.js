import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	base: 'RUB',
	rates: {
		AUD: 0.018624,
		AZN: 0.022603,
		GBP: 0.00976,
		AMD: 6.37812,
		BYN: 0.033892,
		BGN: 0.02258,
		BRL: 0.070374,
		HUF: 4.085652,
		HKD: 0.10297,
		DKK: 0.085942,
		USD: 0.013213,
		EUR: 0.011558,
		INR: 0.987167,
		KZT: 5.691682,
		CAD: 0.016827,
		KGS: 1.120858,
		CNY: 0.084014,
		MDL: 0.23652,
		NOK: 0.116356,
		PLN: 0.05257,
		RON: 0.057107,
		XDR: 0.009394,
		SGD: 0.017764,
		TJS: 0.149246,
		TRY: 0.17908,
		TMT: 0.046181,
		UZS: 143.405567,
		UAH: 0.370439,
		CZK: 0.280191,
		SEK: 0.120859,
		CHF: 0.012221,
		ZAR: 0.204416,
		KRW: 15.858039,
		JPY: 1.521195,
	},
};

const ExchangeRatesSlice = createSlice({
	name: 'ExchangeRates',
	initialState,
	reducers: {},
});

export const { } = ExchangeRatesSlice.actions;

export const getExchangeRates = (state) => state.exchangeRates;

export default ExchangeRatesSlice.reducer;
