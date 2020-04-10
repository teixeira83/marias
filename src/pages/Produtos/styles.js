import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#836FFF',
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight + 10,
    },
    
    imgLogo: {
        marginLeft: 30
    },

    header: {
        justifyContent:"flex-end",
        flexDirection: 'row'
    },
    
    headerSearch: {
        justifyContent: 'flex-end',
        paddingTop: 5,
        paddingRight: 15
    },

    inputSearch: {
        color: '#F8F8FF'
    },

    produto: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#FFFAFA',
        margin: 10,
        borderRadius: 15,
    },

    produtoImg: {
        width: 100,
        height: 100
    },

    textoProduto: {
        paddingTop: 5,
        marginLeft: 15,
    },
    
    textoProdutoTitulo: {
        fontSize: 22,
    },
    
    textoProdutoDescricao: {
        fontSize: 18,
    },

    botaoDetalhes: {
        flexDirection: 'row',
        paddingTop: 20,
       justifyContent: 'flex-end'
    },

    iconeDetalhes: {
        paddingTop: 5,

    },

    produtoLista: {
        width: '100%'
    }

});