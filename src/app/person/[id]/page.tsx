import Image from 'next/image';

const getBillion: (id: string) => Promise<{
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
}> = async (id) => {
  return fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  ).then((res) => res.json());
};

export default async function Person({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const billion = await getBillion(id);

  return (
    <div className="billionDetail">
      <div className="billionDetailImage">
        <Image src={billion.squareImage} alt={billion.name} fill />
      </div>

      <div className="billionDetailInfo">
        <h2>Name: {billion.name}</h2>
        <p>Country: {billion.country}</p>
        <p>State: {billion.state}</p>
        <p>City: {billion.city}</p>
        <p>Net Worth: ${(billion.netWorth / 1000).toFixed(0)}M</p>
        <p>Industries: {billion.industries.join(', ')}</p>
        <p>Bio: {billion.bio.join(', ')}</p>
        <p>About: {billion.about.join(', ')}</p>
        <h3>Financial Assets</h3>
        <div className="financialAssets">
          {billion.financialAssets.map((asset, key) => (
            <div className="financialAssetItem" key={key}>
              <p>{asset.companyName}</p>
              <p>{asset.ticker}</p>
              <p>{asset.numberOfShares}</p>
              <p>{asset.sharePrice}</p>
              <p>{asset.currencyCode}</p>
              <p>{asset.exchangeRate}</p>
              <p>{asset.interactive}</p>
              <p>{asset.currentPrice}</p>
              <p>{asset.exchange}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
