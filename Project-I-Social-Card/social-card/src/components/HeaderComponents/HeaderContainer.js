import React from 'react';
import './Header.css';

import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';    

const HeaderContainer = () => {
    return (
        <React.Fragment>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </React.Fragment>
    );
};

export default HeaderContainer;