import React,{useState,useEffect} from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import Spinner from './components/Spinner';
import Button from './components/Button';
import Input from './components/Input';
import {StyledBlockInfo} from './styles/StyledBlockInfo';
import {StyledSearchBox} from './styles/StyledSearchBox';

const Search = () => {
    const [hash,setHash] = useState('');
    const [number, setNumber] = useState('');
    const [parentHash,setParentHash] = useState('');
    const [stateRoot,setStateRoot] = useState('');
    const [extrinsicsRoot,setExtrinsicsRoot] = useState('');
    const [type,setType] = useState('');
    const [loading,setLoading] = useState(false);
    const [showCard,setShowCard] = useState(false);
    const [bNumber,setBNumber] = useState(0);
    const [sHash, setSHash] = useState(null);

    const chainState = async () => {
        const wsProvider = new WsProvider('wss://rpc.polkadot.io');
        const api = await ApiPromise.create({ provider: wsProvider });

        if (sHash) {
            // Retrieve the latest header
            const lastHeader = await api.rpc.chain.getHeader(sHash);

            setNumber(lastHeader.number.toString());
            setHash(lastHeader.hash.toString());
            setParentHash(lastHeader.parentHash.toString());
            setStateRoot(lastHeader.stateRoot.toString());
            setExtrinsicsRoot(lastHeader.extrinsicsRoot.toString());

            setLoading(false);
            setShowCard(true);
            return 1;
        } else {
            return 0;
        }
        
        
    } 

    useEffect(() => {
        chainState();
    },[sHash])

    const chainNumber = async (value) => {
        const wsProvider = new WsProvider('wss://rpc.polkadot.io');
        const api = await ApiPromise.create({ provider: wsProvider });

        const hash = await api.rpc.chain.getBlockHash(value);
        console.log(hash.toString());
        let hval = hash.toString();
        setSHash(hval);
    }

    const onChangeHash = (e) => {
        let hval = e.target.value;
        setType(hval);
        //0x394a198a78a781f41476bf0482fc66d4ac2245d11e778c4028c186dc38b1cdbd
    }

    const onChangeNumber = (e) => {
        let hval = e.target.value;
        setBNumber(hval);
    }

    const searchGo = () => {
        setSHash(type);
    }

    const searchNumber = () => {
        chainNumber(bNumber);
        
    }

    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <>  
                <StyledSearchBox>
                    <div className="searchbox-content">
                        <div className="searchbox-text">
                            <h2>SEARCH BY HASH</h2>
                        </div>
                        <div className="searchbox-controls">
                            <Input placeholder="Hash 0x..." callback={onChangeHash}/>
                            <Button text="Search" callback={searchGo}></Button>
                        </div>
                    </div>
                </StyledSearchBox>

                <StyledSearchBox>
                    <div className="searchbox-content">
                        <div className="searchbox-text">
                            <h2>SEARCH BY NUMBER</h2>
                        </div>
                        <div className="searchbox-controls">
                            <Input placeholder="Number eg. 2561939" callback={onChangeNumber}/>
                            <Button text="Search" callback={searchNumber}></Button>
                        </div>
                    </div>
                </StyledSearchBox>
                
                {showCard ?
                <StyledBlockInfo>
                    <div className='blockinfo-content'>
                        <div className='blockinfo-text'>
                            <h1>BLOCK NUMBER : {number}</h1>
                            <h2>HASH : {hash}</h2>
                            <h2>PARENT HASH : {parentHash}</h2>
                            <h2>STATE ROOT : {stateRoot}</h2>
                            <h2>EXTRINSICS ROOT : {extrinsicsRoot}</h2>
                        </div>
                    </div>
                </StyledBlockInfo> : <div></div>}
            </>
        )
    }
}

export default Search;