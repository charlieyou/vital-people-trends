import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [peopleCount, setPeopleCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/get_people_count');
      const data = await response.json();
      setPeopleCount(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black text-center">
      <p className="text-2xl mb-2">There are</p>
      {peopleCount !== null ? (
        <p className="text-9xl font-bold mb-2">{peopleCount}</p>
      ) : (
        <p className="text-9xl font-bold mb-2">...</p>
      )}
      <p className="text-2xl mb-4">people at</p>
      <Link href="https://www.vitalclimbinggym.com/brooklyn" passHref>
          <Image 
            src="/vital.png" 
            alt="Vital" 
            width={300} 
            height={120}
            className="inline-block"
          />
      </Link>
    </div>
  );
};

export default Home;
