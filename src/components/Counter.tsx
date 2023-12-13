import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialCount);
    return (
        <View>
            <View style={styles["btn-container"]}>
                <Button title="Increment" onPress={increment} color="blue"/>
                <Button title="Decrement" onPress={decrement} color="red" />
                <Button title="Reset" onPress={reset} color="yellow" />
            </View>
            <Text>Count is {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    'btn-container': {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})