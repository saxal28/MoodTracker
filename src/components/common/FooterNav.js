import React from "react";
import { Footer, FooterTab, Button, Icon, Text } from "native-base";
import { Actions } from "react-native-router-flux";

const FooterNav = ({ homeActive, weightActive, emotionsActive, strengthActive }) => {
    return (
        <Footer>
            <FooterTab>
                <Button 
                    onPress={() => Actions.home()}
                    active={homeActive}>
                    <Icon name="apps" active={homeActive}/>
                    <Text>Home</Text>
                </Button>
                <Button 
                    onPress={() => Actions.weight()}
                    active={weightActive}>
                    <Icon name="heart" active={weightActive} />
                    <Text>Weight</Text>
                </Button>
                <Button 
                    onPress={() => Actions.emotions()}
                    active={emotionsActive}>
                    <Icon name="happy" active={emotionsActive} />
                    <Text>Emotions</Text>
                </Button>
                <Button 
                    onPress={() => Actions.strength()}
                    active={strengthActive}>
                    <Icon name="trophy" active={strengthActive}/>
                    <Text>Strength</Text>
                </Button>
                      </FooterTab>
                 </Footer>
    )
}

export { FooterNav };