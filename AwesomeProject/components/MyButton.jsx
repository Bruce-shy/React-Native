import React, {useState} from 'react'
import { Button, StyleSheet, View, Text } from 'react-native';

const MyButton = () => {
    const [visibile, setVisibile] = useState(true)
    const _onPressButton = (e) => {
        // console.log(e)
        console.log(e.target)
        console.log('我是一个按钮呦')
        setVisibile(!visibile)
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={(e) => { _onPressButton(e) }}
                    title={visibile ? '隐藏按钮': '显示按钮' }
                />
            </View>
            {visibile&&<Text>我出现了</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyButton