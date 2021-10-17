/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
        width:150px;
        height:40px;
        background:${props => props.theme.color.lightblue};
        color: #fff;
        font-family:${props => props.theme.fam.semibold};
        border:none;
        border-radius:4px;
`;

function Button({children}) {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}

export default Button
