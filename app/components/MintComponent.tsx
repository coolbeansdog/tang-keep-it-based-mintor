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
  contractAddress='0x5BaAeCa6eCD5583e8eB409ad5Cd7E0F36E78781e'
  tokenId='0'

> 
  <NFTCreator />
  <NFTMedia square={false}/>
  <NFTCollectionTitle />
  <NFTQuantitySelector />
  <NFTAssetCost />
    <NFTMintButton />
</NFTMintCard>
  );
}
