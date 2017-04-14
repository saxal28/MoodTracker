import React from "react";
import { Header, Title, Button, Subtitle, Left, Right, Body, Icon} from "native-base";

const Navbar = ({title, subtitle, leftButton, rightButton, leftButtonAction, rightButtonAction, disableMenuButton, transparent}) => {
    return (
        <Header
            hasTabs style={{backgroundColor: transparent ? "transparent" : "#333"}}
            iosBarStyle="light-content"
        >
            <Left />
            <Body>
                <Title style={{color:'white'}}>{title}</Title>
            </Body>
            <Right>
                <Button disabled={disableMenuButton} transparent>
                    <Icon name="calendar" style={{color: 'white'}}/>
                </Button>
                
            </Right>
        </Header>
    )
}

export { Navbar };