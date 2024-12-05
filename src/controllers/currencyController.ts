import { Request, Response } from 'express';
import CurrencyHandler from '../handlers/currencyHandler';

const CurrencyController = {
    getRates: async (req: Request, res: Response): Promise<void> => {
        try {
            const rates = await CurrencyHandler.fetchRates();
            res.status(200).json(rates);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    convertCurrency: async (req: Request, res: Response): Promise<void> => {
        try {
            const { amount, from, to } = req.body;
                if (amount < 0) {
                res.status(400).json({ error: 'Amount cannot be negative' });
                return;
            }
            if (!amount || !from || !to) {
                res.status(400).json({ error: 'Invalid input parameters' });
                return;
            }
            const conversionResult = await CurrencyHandler.convert(amount, from, to);
            res.status(200).json(conversionResult);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },    

        getHistoricalRates: async (req: Request, res: Response): Promise<void> => {
            try {
                const { base } = req.query;
                if (!base) {
                    res.status(400).json({ error: 'Base currency is required' });
                    return;
                }
                const historicalRates = await CurrencyHandler.getHistoricalRates(base as string);
                res.status(200).json(historicalRates);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        },
    };

export default CurrencyController;
