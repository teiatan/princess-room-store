import React from 'react';
import { ContainerHeader, Catalog, Logo, Search, Likes, BasketPage, RegisterPage } from "./Header.styled";
import { BasicMenu } from "./../CatalogMenuHeader/CatalogMenuHeader";


export const Header = () => {
    return (
        <ContainerHeader>
            
            <Catalog><BasicMenu />Каталог</Catalog>
            <Logo>LOGO</Logo>
            <Search
                type="search"
                name="search"
                placeholder="Пошук"
                autoComplete="off"
                onChange={() => { }}
                value=""
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