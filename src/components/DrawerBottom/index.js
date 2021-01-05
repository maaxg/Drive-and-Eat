import React, {useRef, useState} from 'react'
import {View, Text} from 'react-native'
import {styles} from './DrawerBottomStyles'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DrawerContent from '../../screens/DrawerContent'

const DrawerBottom = () =>
{
    const [changeScroll, setScroll] = useState(true)
    const fall = new Animated.Value(1)
    
    return (
        <View style={[styles.container]}>
           
        <BottomSheet
                snapPoints={['100%', '30%']}
                renderContent={() => (<DrawerContent />)}
                initialSnap={1}
                callbackNode={fall}
                enabledInnerScrolling={changeScroll}
                onOpenStart={() => {setScroll(false)}}
                
           
             
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