import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    height: var(--height-header);
    z-index: 99;
    
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Main = styled.main`
    min-height: 100%;
    padding-bottom: var(--height-footer);
`;

export const Footer = styled.footer`
    transform: translateY(-100%);
`;