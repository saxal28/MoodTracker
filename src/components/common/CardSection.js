import React from "react";
import { View } from "react-native";

const CardSection = ({children, styles}) => {
    const { cardSectionStyle } = style;
    return (
        <View style={[cardSectionStyle, styles]}>
            {children}
        </View>
    )
}

const style = {
    cardSectionStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        borderWidth: 0,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { CardSection };