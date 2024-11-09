'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import MintComponent from './components/MintComponent';
export default function Home() {
  return (

    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Tang Cat</h1>
        <p className="mt-4 text-lg text-slate-500">
        This is the complementary PFP NFT collection for the Base meme coin, $TANG, which is based on a cat with a deformed paw and has over 300k followers across social media platforms (IG: evil_tangyuan412).
        </p>
      </div>

      <div className="flex flex-col items-center p-12">
          <MintComponent />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
