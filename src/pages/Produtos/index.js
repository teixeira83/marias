import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, View, Text, FlatList, TouchableOpacity } from 'react-native'

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import imgSabonete from '../../assets/sabonete.jpg';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [carregando, setCarregando] = useState(false);


    async function carregarProdutos() {
        
        if (carregando) {
            return;
        }

        if (total > 0 && produtos.length == total) {
            return;
        }

        setCarregando(true);

        const response = await api.get('produtos', {
            params: {page}
        });
        setProdutos([...produtos, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setCarregando(false);
    }
    
    useEffect( () => {
        carregarProdutos();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.imgLogo}/> 
            <View style={styles.header}>
                <TextInput placeholder="Procure seu produto aqui" style={styles.inputSearch}/>
                <TouchableOpacity>
                    <Feather name="search" style={styles.headerSearch} size={20} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={produtos}
                keyExtractor={produto => String(produto.id)}
                showsVerticalScrollIndicator={true}
                onEndReached={carregarProdutos}
                onEndReachedThreshold={0.2}
                style={styles.produtoLista}
                renderItem={({ item: produto}) => (
                    <View style={styles.produto}>
                        <Image source={{ uri: produto.imgUrl }}
                            style={styles.produtoImg}></Image>
                        <View style={styles.textoProduto}>
                            <Text style={styles.textoProdutoTitulo}>{produto.titulo}</Text>
                            <Text style={styles.textoProdutoDescricao}>{produto.descricao}</Text>
                            <View style={styles.viewBotaoDetalhes}> 
                                <TouchableOpacity
                                    style={styles.botaoDetalhes}
                                    onPress={() => (console.log('apertou'))}>
                                    <Text style={styles.buttonDetalhes}>Ver mais detalhes</Text>
                                    <Feather name="arrow-right" style={styles.iconeDetalhes} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>    
                )}
            />
        </View>
    );
    
}
