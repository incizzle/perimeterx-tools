import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC<{}> = (props) => {
    const [ selectedTab, setSelectedTab ] = useState('')

    useEffect(() => {
        setSelectedTab(window.location.pathname)
    }, [])

    return (
        <HeaderContainer>
            <Title>Perimeterx Tools</Title>
            <TabContainer>
                <Tab to="/decode" selected={selectedTab === "/decode"} onClick={() => setSelectedTab('/decode')}>Decoder</Tab>
                <Tab to="/encode" selected={selectedTab === "/encode"} onClick={() => setSelectedTab('/encode')}>Encoder</Tab>
            </TabContainer>
        </HeaderContainer>
    );
}

const TabContainer = styled.div`
    margin-left: auto;
    display: flex;
    height: 100%;
`

const Tab = styled(Link)<{selected: Boolean}>`
    font-size: 20px;
    color: white;
    display: flex;
    cursor: pointer;
    min-width: 150px;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.selected && "white"};
    color: ${props => props.selected && "rgb(16 17 21)"};
    text-decoration: none;
    &:hover {
        background-color: white;
        color: rgb(16 17 21);
    }
`

const Title = styled.div`
    margin-left: 10px;
    font-size: 20px;
    color: white;
`

const HeaderContainer = styled.div`
    display: flex;
    background-color: rgb(16 17 21);
    height: 50px;
    align-items: center;
`

export default Header