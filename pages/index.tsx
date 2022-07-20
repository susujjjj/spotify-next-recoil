import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <Sidebar />
        {/* Sidebar */}
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
      <p className="cursor-pointer hover:text-white">Playlist name...</p>
    </div>
  );
};

export default Home;
