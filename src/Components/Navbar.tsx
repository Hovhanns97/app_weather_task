import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    width: 100%;
    height: 80px;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SearchSection = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
`

const Search = styled.input`
    width: 250px;
    height: 25px;
`

const Button = styled.button `
    height: 30px;
`

const RadioSection = styled.div`
    width: 80px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    color: black;
`


const Navbar = () => {

    const onSearchChange = (e) => {
                
    }
    return (
        <>
            <Bar>
                <SearchSection >
                    <Search onChange={onSearchChange}></Search>
                    <Button>Search City</Button>
                </SearchSection>
                <RadioSection>
                    <input type="radio" id="cel" name="mesuring" checked/>
                    <label htmlFor="cel">&#8451;</label>
                    <input type="radio" id="far" name="mesuring"/>
                    <label htmlFor="far">&#8457;</label>
                </RadioSection>
            </Bar>
        </>
    )
}

export default Navbar