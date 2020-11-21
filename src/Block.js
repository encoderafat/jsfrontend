import React,{useState,useEffect} from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import Spinner from './components/Spinner';
import {StyledBlockInfo} from './styles/StyledBlockInfo';

const Block = () => {
    const [hash,setHash] = useState('');
    const [number, setNumber] = useState('');
    const [parentHash,setParentHash] = useState('');
    const [stateRoot,setStateRoot] = useState('');
    const [extrinsicsRoot,setExtrinsicsRoot] = useState('');
    const [loading,setLoading] = useState(true);
    
      

    const chainState = async () => {
        const wsProvider = new WsProvider('wss://rpc.polkadot.io');
        const api = await ApiPromise.create({ provider: wsProvider });
        
        // Retrieve the latest header
        const lastHeader = await api.rpc.chain.getHeader();

        setNumber(lastHeader.number.toString());
        setHash(lastHeader.hash.toString());
        setParentHash(lastHeader.parentHash.toString());
        setStateRoot(lastHeader.stateRoot.toString());
        setExtrinsicsRoot(lastHeader.extrinsicsRoot.toString());

        setLoading(false);
    } 

    useEffect( () => {
        chainState();
    })

    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <StyledBlockInfo>
                <div className='blockinfo-content'>
                    <div className='blockinfo-text'>
                        <h1>LATEST BLOCK : {number}</h1>
                        <h2>HASH : {hash}</h2>
                        <h2>PARENT HASH : {parentHash}</h2>
                        <h2>STATE ROOT : {stateRoot}</h2>
                        <h2>EXTRINSICS ROOT : {extrinsicsRoot}</h2>
                    </div>
                </div>
            </StyledBlockInfo>
        )
    }

}

export default Block;