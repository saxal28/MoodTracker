import React from 'react';
import {  Fab, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const FabMenu = ({handlePress, active, style}) => {
    return (
         <Fab
            active={active}
            direction="up"
            style={styles.fabStyle}
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

const styles = {
    fabStyle: {
        backgroundColor: '#5067FF',
        shadowColor:"#333",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        }
    }
}

export { FabMenu }