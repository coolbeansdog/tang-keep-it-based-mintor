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
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        TANG CAT 
        <br />
        <hr className="my-2 border-black w-1/2 mx-auto" /> {/* Adjust width to center on all devices */}
        <span className="block text-3xl md:text-5xl">汤 猫</span> {/* Removed extra spaces and used block */}
      </h1>
    </div>
    

    <div className="flex flex-col items-center p-12">
      <MintComponent />
    </div>

    <p className="font-raleway mt-4 text-lg text-black text-center">
      A free mint and homage to the Base ecosystem from the Tang Cat team. Let’s knock it out of the park!
    </p>

      {/* Footer */}
      <Footer />
    </div>
  );
}
