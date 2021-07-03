export const CurrencyCodes = Object.freeze({
  UAH: "UAH",
  USD: "USD",
  EUR: "EUR",
  PLN: "PLN",
  GBP: "GBP",
});

export const CountryCodes = Object.freeze({
  UKR: "UKR",
  USA: "USA",
  EUR: "EUR",
  POL: "POL",
  GBR: "GBR",
});

export const currenciesByCode = {
  [CurrencyCodes.UAH]: {
    code: CurrencyCodes.UAH,
    sign: "₴",
    country: CountryCodes.UKR,
  },
  [CurrencyCodes.USD]: {
    code: CurrencyCodes.USD,
    sign: "$",
    country: CountryCodes.USA,
  },
  [CurrencyCodes.EUR]: {
    code: CurrencyCodes.EUR,
    sign: "€",
    country: CountryCodes.EUR,
  },
  [CurrencyCodes.PLN]: {
    code: CurrencyCodes.PLN,
    sign: "zł",
    country: CountryCodes.POL,
  },
  [CurrencyCodes.GBP]: {
    code: CurrencyCodes.GBP,
    sign: "£",
    country: CountryCodes.GBR,
  },
};

export const currencies = Object.values(currenciesByCode);

export const ratesByCode = {
  [CurrencyCodes.UAH]: 1,
  [CurrencyCodes.USD]: 27.4121,
  [CurrencyCodes.EUR]: 32.4107,
  [CurrencyCodes.PLN]: 7.1589,
  [CurrencyCodes.GBP]: 37.6916,
};
