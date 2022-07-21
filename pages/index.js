// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import Sidebar from '../components/Sidebar';

// const Home: NextPage = () => {
//   return (
//     <div className="bg-black h-screen overflow-hidden">
//       <main className="">
//         <Sidebar />
//         {/* Sidebar */}
//         {/* Center */}
//       </main>
//       <div>{/* Player */}</div>
//     </div>
//   );
// };

// export default Home;

import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
