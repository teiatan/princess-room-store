import { ProductCard } from "components/ProductCard/ProductCard";
import { StyledList } from "./ProductsList.styled";

export const ProductsList = ({title, products=[]}) => {
    
    return (
        <>
            {title && <h2>{title}</h2>}
            <StyledList>
                {products.map(product => {
                    const { id, name, price, categoryName } = product;
                    return(
                        <ProductCard 
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            categoryName={categoryName}
                        />
                    )
                })}
            </StyledList>
        </>
    );
};