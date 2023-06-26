import { ProductDetails } from "components/ProductDetails/ProductDetails";
import { ProductsList } from "components/ProductsList/ProductsList";
import { SubscibtionForm } from "components/SubscibtionForm/SubscibtionForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "redux/products/operations";
import { selectAllProducts } from "redux/products/selectors";

function ProductDetailsPage() {

    const dispatch = useDispatch();
    const { productId } = useParams();

    useEffect(()=>{
        dispatch(getProductById(productId));
    }, [dispatch, productId]);

    const allProducts = useSelector(selectAllProducts);
    return (
        <>
            <ProductDetails />
            
            <ProductsList
                title='Схожі товари'
                products={allProducts}
            />

            <ProductsList
                title='Рекомендовані товари'
                products={allProducts}
            />

            <SubscibtionForm />
        </>
    )
};

export default ProductDetailsPage;