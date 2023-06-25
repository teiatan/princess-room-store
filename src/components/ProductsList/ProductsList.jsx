import { ProductCard } from "components/ProductCard/ProductCard";

export const ProductsList = ({title, products=[]}) => {
    return (
        <>
            {title && <h2>{title}</h2>}
            <ul>
                {products.map(product => {
                    return(
                        <ProductCard key={product.id}/>
                    )
                })}
            </ul>
        </>
    );
};