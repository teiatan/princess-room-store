import { Container, ImageContainer, Name, Price } from "./ProductCard.styled"

export const ProductCard = ({ id, name, price, categoryName }) => {
    return (
        <Container to={`/products/${id}`}>
            <ImageContainer></ImageContainer>
            <Name>{name}</Name>
            <Price>{price}грн</Price>
        </Container>
    )
}