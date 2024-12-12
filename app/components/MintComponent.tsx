import { NFTMintCard } from '@coinbase/onchainkit/nft';
import { NFTMedia } from '@coinbase/onchainkit/nft/view'; 
import {
  NFTCreator, 
  NFTCollectionTitle, 
  NFTQuantitySelector, 
  NFTAssetCost, 
  NFTMintButton, 
} from '@coinbase/onchainkit/nft/mint'; 

 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0xc983CB41b2bc64c4db2809CF36381BC3fb467d16'
  className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto"
>
  <NFTCreator />
  <NFTMedia square={true} />
  
  <NFTCollectionTitle className="text-[#000] font-bold text-lg md:text-xl text-center mt-2"/>
  <NFTQuantitySelector className="text-center mt-2" />
  <NFTAssetCost className="text-gray-600 text-sm mt-2 text-center"/>
  <NFTMintButton className="rounded-full w-full mt-4"/>
</NFTMintCard>
  );
}
