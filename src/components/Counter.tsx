import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialCount);

    return (
        <View style={styles.container}>
            <View style={styles["btn-container"]}>
                <Button title="Increment" onPress={increment} color="blue" />
                <Button title="Reset" onPress={reset} color="#000" />
                <Button title="Decrement" onPress={decrement} color="red" />
            </View>
            <Text>Count is {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    'btn-container': {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
    }
})