import React from 'react';
import { ContainerHeader, Catalog, Logo, Likes, BasketPage, RegisterPage } from "./Header.styled";
import { CatalogMenuHeader } from "./../CatalogMenuHeader/CatalogMenuHeader";
import SearchForm from '../common/SearchForm/SearchForm';

const handleSearch = (searchQuery) => {
  console.log('Search Query:', searchQuery);
};

export const Header = () => {   
    return (
        <ContainerHeader>
            <Catalog><CatalogMenuHeader />Каталог</Catalog>
            <Logo>LOGO</Logo>
            <SearchForm
                labelText=""
                inputPlaceholder="Пошук товарів"
                buttonFunction={handleSearch}                
            />
            <Likes>
                <svg>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                </svg>
            </Likes>
            
            <BasketPage>
                <svg>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                </svg>
                
            </BasketPage>
            
            <RegisterPage>Регістрація</RegisterPage>
        </ContainerHeader>
    );
}