import React from "react";
import { Header, Title, Button, Subtitle, Left, Right, Body} from "native-base";

const Navbar = ({title, subtitle}) => {
    return (
        <Header
            hasTabs style={{backgroundColor: "#333"}}
            iosBarStyle="light-content"
        >
            <Body>
                <Title style={{color:'white'}}>{title}</Title>
            </Body>
        </Header>
    )
}

export { Navbar };