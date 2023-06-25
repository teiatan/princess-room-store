import styled from "@emotion/styled";

export const StyledHeader = styled.header`
    min-height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: white;
`;

export const StyledMain = styled.main`
    padding-top: 70px;
`;

export const StyledFooter = styled.footer`

`;

export const NotFixedPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`;