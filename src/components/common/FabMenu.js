import React from 'react';
import {  Fab, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const FabMenu = ({handlePress, active}) => {
    return (
         <Fab
            active={active}
            direction="up"
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => handlePress()}
         >
            <Icon name="md-apps" />
            <Button 
                style={{ backgroundColor: '#34A34F'}} 
                onPress={() => Actions.logDailyValues({visited: true})}
             >
                <Icon name="md-add" style={{color:'white'}}/>
            </Button>
            <Button 
                 style={{ backgroundColor: '#3B5998' }}
                onPress={() => Actions.trends()}
             >
                 <Icon name="md-stats" />
             </Button>
             <Button 
                 style={{ backgroundColor: '#DD5144' }}
                 onPress={() => Actions.trends()}
             >
                 <Icon name="md-trending-up" />
            </Button>
         </Fab>
    )
}

export { FabMenu }