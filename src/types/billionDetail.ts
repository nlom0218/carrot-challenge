export type BillionDetail = {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: [
    {
      exchange: string;
      ticker: string;
      companyName: string;
      numberOfShares: number;
      sharePrice: number;
      currencyCode: string;
      exchangeRate: number;
      interactive: boolean;
      currentPrice: number;
    }
  ];
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
};
