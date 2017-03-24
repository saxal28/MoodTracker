import React from "react";
import { View } from "react-native";

const CardSection = ({children, style}) => {
    const { cardSectionStyle } = styles;
    return (
        <View style={[cardSectionStyle, style]}>
            {children}
        </View>
    )
}

const styles = {
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