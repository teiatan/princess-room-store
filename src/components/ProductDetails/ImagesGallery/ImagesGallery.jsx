import { Container, ImageContainer, StyledButton } from "./ImagesGallery.styled"

export const ImagesGallery = ({images=[1, 2, 3]}) => {
    return (
        <Container>
            <StyledButton></StyledButton>
            {images.map(image => {
                return(
                    <ImageContainer key={image}/>
                )
            })}
            <StyledButton></StyledButton>
        </Container>
    )
}