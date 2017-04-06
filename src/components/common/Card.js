import React from 'react';
import { View, Text } from 'react-native';

const Card = ({children, style}) => {
    const { cardStyle } = styles;
    return (
        <View style={[cardStyle, style]}>
            {children}
        </View>
    )
}

const styles = {
    cardStyle: {
        marginTop: 64,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        minHeight: 50,
        flex:1,
    }
}

export {Card};