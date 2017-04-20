import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native';
import { days, months, daysArr, formatFullDate, fakeData, sortData } from "../../util";

import { View, Text } from 'react-native';

const LineChart = ({data, y}) => {
    console.log('Chart Data: ', data)
    return (
        <View>            
            <VictoryChart
                domainPadding={40}
                theme={VictoryTheme.material}
            >
                <VictoryAxis 
                tickFormat = {x => daysArr[x]} />
                <VictoryAxis 
                dependentAxis
                tickFormat={x => x}/>
                <VictoryLine 
                    style= {{
                        padding: 20,
                        labels: {fontSize: 12}
                    }}
                    labels="Series 1"
                    data={data}
                    x="date"
                    y={y}
                />
            </VictoryChart>
        </View>
    )
}

export { LineChart };
