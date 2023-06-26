import { useSelector } from "react-redux";
import { ButtonsContainer, Container, StyledButton } from "./ProductInformation.styled"
import { selectSelectedProduct } from "redux/products/selectors";

export const ProductInformation = () => {
    const product = useSelector(selectSelectedProduct);
    const { name, price } = product;
    return(
        <Container>
            <h2>{name}</h2>
            <p>в наявності</p>
            <p>{price}грн</p>
            <ButtonsContainer>
                <StyledButton>Добавити в кошик</StyledButton>
                <StyledButton>Купити зараз</StyledButton>
            </ButtonsContainer>
        </Container>
    )
}