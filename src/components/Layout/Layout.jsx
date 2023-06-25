import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { StyledFooter, StyledHeader, StyledMain, NotFixedPageContainer } from "./Layout.jstyled";
import { PageContainer } from "../PageContainer/PageContainer";

export function Layout() {

  const willRedirect = ('/' === useLocation().pathname);

  return (
    <div>
      {willRedirect && <Navigate to={`/products`} />}

      <StyledHeader>
        <PageContainer>
          <Header />
        </PageContainer>
      </StyledHeader>

      <NotFixedPageContainer>
        <StyledMain>
          <PageContainer>
            <Outlet />
          </PageContainer>
        </StyledMain>

        <StyledFooter>
          <PageContainer>
            <Footer />
          </PageContainer>
        </StyledFooter>
      </NotFixedPageContainer>
    </div>
  );
}
