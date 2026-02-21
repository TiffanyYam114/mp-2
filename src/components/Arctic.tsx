import styled from "styled-components";
import type {Item} from "../interfaces/Items.ts";

const ContainerDiv = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #abdcab;
    font-family: Dubai, Verdana, sans-serif;
    border: 5px saddlebrown solid;
`;

const SingleItemDiv=styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 45%;
    padding: 2vw;
    margin: 2vw;
    background-color: tan;
    border: 4px saddlebrown solid;
    font: small-caps calc(2px + 1vw) Garamond, serif;
    text-align: center;
`;

const StyledTitle = styled.h3 `
    color: black;
    font-size: calc(2px + 2.5vw);
`;

const StyledDescription = styled.p `
    color: saddlebrown;
    font-family: Georgia, serif;
    font-size: calc(5px + 1vw);
`;

const StyledOrigin = styled.p `
    color: #612f0c;
    font-size: calc(5px + 1.5vw);
    font-weight: bold;
`

const StyledImage = styled.img `
    max-width: 75%;
    margin: 2vw auto;
`

export default function Arctic(props : { data : Item[] }){
    return (
        <ContainerDiv>
            {
                props.data.map((item : Item) =>
                    <SingleItemDiv key={item.id} >
                        <StyledTitle>{item.title}</StyledTitle>
                        <StyledOrigin>{item.place_of_origin}, {item.date_display}</StyledOrigin>
                        <StyledDescription>{item.artwork_type_title}</StyledDescription>
                        <StyledDescription>{item.medium_display}</StyledDescription>

                        {/* This api requires concatenating several strings to get the image source */}
                        <StyledImage src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                                     alt={`image of ${item.title}`} />
                    </SingleItemDiv>
                )
            }
        </ContainerDiv>
    );
}

