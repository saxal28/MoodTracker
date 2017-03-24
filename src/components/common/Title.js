import React from "react";
import { View, Text} from 'react-native';

const Title = ({ children }) => {
    const { textStyle } = style;
    return (
        <View>
            <Text style={textStyle}>
                {children}
            </Text>
        </View>
    )
}

const style = {
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    }
}

export { Title };