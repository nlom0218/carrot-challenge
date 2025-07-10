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

  console.log(billion);

  return (
    <div>
      <Image
        src={billion.squareImage}
        alt={billion.name}
        width={100}
        height={100}
      />

      <h2>{billion.name}</h2>
      <p>{billion.position}</p>
      <p>{billion.country}</p>
      <p>{billion.state}</p>
      <p>{billion.city}</p>
      <p>{billion.netWorth}</p>
      <p>{billion.industries.join(', ')}</p>
      <p>{billion.bio.join(', ')}</p>
      <p>{billion.about.join(', ')}</p>
      <div>
        {billion.financialAssets.map((asset, key) => (
          <div key={key}>
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
  );
}
