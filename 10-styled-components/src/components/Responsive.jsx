import styled from 'styled-components'

import device from '../responsive/breakpoints'

const Responsive = styled.div`
    display:grid;
    grid-template-columns:repeat(1,1fr);
    justify-items:center;
    
    ${device.tablet`
        grid-template-columns:repeat(2,1fr);
    `}

    ${device.laptop`
        grid-template-columns:repeat(4,1fr);
    `}

    ${device.desktop`
        grid-template-columns:repeat(6,1fr);
    `}

    /* @media screen and (min-width:1024px){
        grid-template-columns:repeat(4,1fr);
    } */
`

export default Responsive
