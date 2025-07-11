import Image from 'next/image';
import Link from 'next/link';
import { Billion } from '@/types/billion';

const getBillions: () => Promise<Billion[]> = async () => {
  return fetch('https://billions-api.nomadcoders.workers.dev/', {
    cache: 'force-cache',
  }).then((res) => res.json());
};

export default async function Home() {
  const billions = await getBillions();

  return (
    <div className="billions">
      {billions.map((billion) => (
        <Link
          key={billion.id}
          href={`/person/${billion.id}`}
          className="billion"
        >
          <div className="billionImage">
            <Image src={billion.squareImage} alt={billion.name} fill />
            <div className="imageBackground" />
            <div className="billionInfo">
              <h2 className="billionName">{billion.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
