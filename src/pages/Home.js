import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Home() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>Você está na Página Home</Text>
                <Text style={{ fontSize: 16., textAlign: 'center' }}>Clique para ir para a Página 02  👇</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page')}>
                <Text style={styles.text}>Página 02</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 10
    },
    textContainer: {
        marginBottom: 10
    },
    text: {
        color: '#FFF',
        fontSize: 16
    }
})

export default Home