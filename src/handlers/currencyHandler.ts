import axios from 'axios';
import { getPastMondays } from '../services/currencyService';

const CurrencyHandler = {
    fetchRates: async () => {
        const response = await axios.get('https://api.frankfurter.app/latest');
        return response.data;
    },

    convert: async (amount: number, from: string, to: string) => {
        const response = await axios.get(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        return response.data;
    },

    getHistoricalRates: async (base: string) => {
        const targetCurrencies = ['USD', 'ILS', 'GBP', 'EUR'];
        const mondays = getPastMondays();
        const ratesPromises = mondays.map(async (date) => {
            const response = await axios.get(`https://api.frankfurter.app/${date}`, {
                params: { base, symbols: targetCurrencies.join(',') },
            });
            return { date, rates: response.data.rates };
        });

        return await Promise.all(ratesPromises);
    },
};

export default CurrencyHandler;
