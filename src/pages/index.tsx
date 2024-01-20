import { useEffect, useState } from 'react';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Is Vital Busy???</title>

        <meta name="description" content="Live count of people at Vital" />
        <meta property="og:title" content="Vital People Count" />
        <meta property="og:description" content="See how many people are currently at Vital" />
        <meta property="og:image" content="/vital.jpg" />
        <meta property="og:url" content="https://isvitalbusy.com" />

        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
          <main className="flex flex-col items-center justify-center flex-grow bg-white text-black text-center">
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
        </main>
        <footer className="text-center p-4">
          <p className="text-lg">
            Built with <span className="text-red-500">❤️</span> by Charlie
            <Link href="https://instagram.com/cyouclimbs">
              <i className="fab fa-instagram ml-2 cursor-pointer"></i>
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
