import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png';
import imgSabonete from '../../assets/sabonete.jpg';
import styles from './styles';

export default function Produtos() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    PAGINA PRODUTOS
                </Text>
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            </View>

            <FlatList
                data={[1,2,3,4,5,6,7,8,9,10]}
                showsVerticalScrollIndicator={true}
                renderItem={() => (
                    <View style={styles.produto}>
                        <Image source={imgSabonete} style={styles.produtoImg}></Image>
                        <View style={styles.textoProduto}>
                            <Text style={styles.textoProdutoTitulo} >Título</Text>
                            <Text>Descricao</Text>
                            <TouchableOpacity
                                style={styles.botaoDetalhes}
                                onPress={() => (console.log('apertou'))}>
                                <Text>Ver mais detalhes</Text>
                                <Feather name="arrow-right"/>
                            </TouchableOpacity>
                        </View>
                    </View>    
                )}

            />
        </View>
    );
}