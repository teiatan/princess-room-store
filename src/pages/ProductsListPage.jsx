import { ProductsList } from "components/ProductsList/ProductsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "redux/products/operations";
import { selectAllProducts } from "redux/products/selectors";

function ProductsListPage() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllProducts());
    }, [dispatch]);

    const allProducts = useSelector(selectAllProducts);

    return (
        <>
            <ProductsList
                title="Усі товари"
                products={allProducts}
            />
        </>
    )
};

export default ProductsListPage;