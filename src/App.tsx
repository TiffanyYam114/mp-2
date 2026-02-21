import Arctic from "./components/Arctic.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Item} from "./interfaces/Items.ts";

const Container = styled.div `
    width: 85vw;
    margin: auto;
`;

export default function App(){
    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.artic.edu/api/v1/artworks");
            const {data} : {data: Item[]} = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(() => console.log("Fetch successful"))
            .catch((e: Error) => console.log("Fetch failed: " + e));
    }, [data.length]);

    return(
        <Container>
            <Arctic data={data}/>
        </Container>
    )
}

