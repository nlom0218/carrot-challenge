import Image from 'next/image';
import Link from 'next/link';

const getBillions: () => Promise<
  {
    id: string;
    name: string;
    squareImage: string;
    netWorth: string;
    industries: string[];
  }[]
> = async () => {
  return fetch('https://billions-api.nomadcoders.workers.dev/', {
    cache: 'force-cache',
  }).then((res) => res.json());
};

export default async function Home() {
  const billions = await getBillions();

  return (
    <div>
      {billions.map((billion) => (
        <Link key={billion.id} href={`/person/${billion.id}`}>
          <Image
            src={billion.squareImage}
            alt={billion.name}
            width={100}
            height={100}
          />
          <h2>{billion.name}</h2>
          <p>{billion.netWorth}</p>
          <p>{billion.industries.join(', ')}</p>
        </Link>
      ))}
    </div>
  );
}
