import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f7f2ef',
        paddingTop: Constants.statusBarHeight + 10
    },
     
    headerText: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    produto: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },

    produtoImg: {
        width: 100,
        height: 100
    },

    textoProduto: {
        paddingTop: 10,
        width: '100%',
    },
    
    textoProdutoTitulo: {
        fontSize: 18,
    },
    
    textoProdutoDescricao: {

    }

});