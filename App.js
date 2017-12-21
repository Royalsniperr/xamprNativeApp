import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Xwall from './app/components/Xwall/Xwall';
import Home from './app/components/Home/Home';
import Dashboard from './app/components/Dashboard/Dashboard';
import ConsumerHeader from './app/components/TaskConsumer/ConsumerHeader';
import DynamicTopHeader from './app/components/TaskConsumer/DynamicTopHeader';
import TaskConsumer from './app/components/TaskConsumer/TaskConsumer';


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

const NavigationApp= StackNavigator({
  
    // Xwall:{screen:Xwall},
    Home:{screen:TaskConsumer},
  },
  {
  navigationOptions: {
    header:false
  }
  }
  );

  // const MainScreenNavigator= TabNavigator({  
  //   Dashboard:{screen:Dashboard},
  //     Xwall:{screen:Xwall},
  //   },
  //   // {
  //   // navigationOptions: {
  //   //   header:false
  //   // }
  //   // }
  //   );
  //   MainScreenNavigator.navigationOptions={
  //       title:"Tabs"
  //   };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 export default NavigationApp;

// export default MainScreenNavigator;