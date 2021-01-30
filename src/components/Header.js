import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
    </div>
)

Header.defaultProps = {
    title: 'Test title switch apps'
};

export default Header