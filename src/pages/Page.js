import { View, Text, StyleSheet } from 'react-native'

function Page() {

    return (

        <View style={styles.container}>
            <Text>Page 02</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Page