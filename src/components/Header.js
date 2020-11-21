import React from 'react';
import {Link} from '@reach/router';
import {StyledHeader} from '../styles/StyledHeader';

const Header = () => {
    return (
    <StyledHeader>
        <div>
            <Link to="/">
                <h2>POLKADOT BLOCK EXPLORER</h2>
            </Link>
            <Link to="/search">
                <h2>SEARCH</h2>
            </Link>            
        </div>
    </StyledHeader>
    )
};

export default Header;