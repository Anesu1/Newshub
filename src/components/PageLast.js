import React from 'react';
import styled from 'styled-components';
import PageCard from './PageCard';

const PageLastWrapper = styled.div`

`;

function PageLast({title}) {
    return (
        <PageLastWrapper>
            <Heading>{title}</Heading>
            <PageCard />
        </PageLastWrapper>
    )
}

export default PageLast
