import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
    </div>
)

Header.defaultProps = {
    title: 'Nostalgia apps'
};

export default Header