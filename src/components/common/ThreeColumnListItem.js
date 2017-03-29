import React from "react";
import { ListItem, Grid, Col, Text } from 'native-base';

const ThreeColumnListItem = ({ col1, col2, col3, bold }) => {

    const { boldText, unboldText } = styles;

    return (
        <ListItem>
            <Grid>
                <Col>
                    <Text style={bold ? boldText : unboldText}>{col1}</Text>
                </Col>
                <Col>
                    <Text style={bold ? boldText : unboldText}>{col2}</Text>
                </Col>
                <Col>
                    <Text style={bold ? boldText : unboldText}>{col3}</Text>
                </Col>
            </Grid>
        </ListItem>
    );
};

const styles = {
    boldText: {
        fontWeight: "bold"
    },
    unboldText: {
        fontWeight: '400'
    }
}

export { ThreeColumnListItem }