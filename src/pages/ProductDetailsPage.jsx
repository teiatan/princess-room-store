import { ProductDetails } from "components/ProductDetails/ProductDetails";
import { ProductsList } from "components/ProductsList/ProductsList";
import { SubscibtionForm } from "components/SubscibtionForm/SubscibtionForm";

function ProductDetailsPage() {
    return (
        <>
            <ProductDetails />
            
            <ProductsList
                title='Схожі товари'
            />

            <ProductsList
                title='Рекомендовані товари'
            />

            <SubscibtionForm />
        </>
    )
};

export default ProductDetailsPage;