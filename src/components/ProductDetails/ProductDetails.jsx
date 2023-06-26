import { ImagesGallery } from "./ImagesGallery/ImagesGallery";
import { Container, Image } from "./ProductDetails.styled";
import { ProductInformation } from "./ProductInformation/ProductInformation";

export const ProductDetails = () => {
    
    return (
        <Container>
            <ImagesGallery />

            <Image />

            <ProductInformation  />
        </Container>
    );
};