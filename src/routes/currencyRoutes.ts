import { Router } from 'express';
import CurrencyController from '../controllers/currencyController';

const currencyRouter = Router();

currencyRouter.get('/rates', CurrencyController.getRates);
currencyRouter.post('/convert', CurrencyController.convertCurrency);
currencyRouter.get('/historical', CurrencyController.getHistoricalRates);

export default currencyRouter;
