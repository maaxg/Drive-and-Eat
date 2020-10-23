import React, {useRef} from 'react'
import {View, Text} from 'react-native'
import {styles} from '../styles/DrawerBottomStyles'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DrawerContent from '../screens/DrawerContent'

const DrawerBottom = () =>
{
    const renderHeader = () => <View style={styles.header} />
    const fall = new Animated.Value(1)
    return (
        <View style={[styles.container]}>
           
        <BottomSheet
                snapPoints={['90%', '30%']}
                renderContent={() => (<DrawerContent />)}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledInnerScrolling={true}
            />
             <Animated.View
            style={{
                alignItems: 'center',
                opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)),
            }}
            >
       
            </Animated.View>
            </View>
        )

} 
export default DrawerBottom