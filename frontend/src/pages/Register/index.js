import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    const history = useHistory();  

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
           name,
           email,
           city,
           uf, 
        };
        try{
            const response = await api.post('moderators', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
        }catch (err){
            alert('Erro no cadastro, tente novamente.');
        }
        
    }

    return(
       <div className="register-container">
           <div className="content">
               <section>
              <img src={ logoImg } alt="MobiliTaxi"/>

              <h1>Cadastro</h1>
              <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a se informar e se proteger de possiveis falcatruas com taxis.</p>

              <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#0489B1" /> 
                    Voltar para a home
            </Link>
               </section>
               
               <form onSubmit={handleRegister}>
                <input 
                placeholder="Nome" type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input  
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <div className="input-group">
                    <input 
                    placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    />
                    <input
                    placeholder="UF" 
                    style={{ width: 80 }}
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />
                </div>

                <button className="button" type="submit">Cadastrar</button>
               </form>
           </div>
       </div>
    );
}