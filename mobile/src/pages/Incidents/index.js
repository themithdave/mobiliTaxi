import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';

import api from '../../services/api';  

import logoImg from '../../assets/logo1x.png';

import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

       


    

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if(total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();    
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{total} Casos.</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>

            <TouchableOpacity style={styles.actionUf} >
                            <Text style={styles.actionTextUf}>Rio de Janeiro
                            <Feather name="chevron-down" size={16} color="#2860EF"/>
                            </Text>
                        </TouchableOpacity>
            
            <TouchableOpacity style={styles.action} onPress={() =>{ Linking.openURL('http://www.rioigo.com/2016/07/12/taxi-como-funciona/#:~:text=T%C3%81XI%20NO%20RIO%20DE%20JANEIRO%2C%20COMO%20FUNCIONA.&text=Os%20taxis%20comuns%20do%20Rio,ponto%20do%20bairro%20de%20origem.')}}>
                            <Text style={styles.actionText}>Veja as regulamentações do taxi</Text>
                        </TouchableOpacity>

            <Text style={styles.subTitle}>Estes são os casos reportados por usarios para ajudar e melhorar sua estadia no estado.</Text>

            <FlatList 
                data={incidents}
                style={styles.incidentList} 
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (  
                    <View style={styles.incident}>
                <Text style={styles.incidentProperty}>Nome:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <TouchableOpacity 
                style={styles.detailsButton} 
                onPress={() => navigateToDetail(incident)}
                >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#2860EF"/>
                </TouchableOpacity>
            </View>
                )}
            />

           
        </View>
        
    );
}