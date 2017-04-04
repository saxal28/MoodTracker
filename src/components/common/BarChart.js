import React from 'react';
import { VictoryPie, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native';
import { days, months, daysArr, formatFullDate, fakeData, sortData } from "../../util";
import { View, Text } from 'react-native';

const BarChart = ({data, y}) => {
    return (
        <View>            
                <VictoryPie
                    labels={data => data.mood}
                    data={data}
                    x="date"
                    y={y}
                />
        </View>
    )
}

export { BarChart };
