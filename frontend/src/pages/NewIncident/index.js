import React,{ useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();
        
        const data = {
            title,
            description, 
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,  
                }
            })

            history.push('/profile');
        }catch (err) {
            alert('Erro ao cadastrar novo caso, tente novamente');
        }

    }

    return(
        
            <div className="new-incident-container">
                <div className="content">
                    <section>
                   <img src={ logoImg } alt="MobiliTaxi"/>
     
                   <h1>Cadastrar novo caso</h1>
                   <p>Escreva o caso detalhadamente para para ajudar pessoas a terem uma viagem tranquila e prazerosa.</p>
     
                   <Link className="back-link" to="/profile">
                     <FiArrowLeft size={16} color="#0489B1" /> 
                         Voltar para a home
                 </Link>
                    </section>
                    
                    <form onSubmit={handleNewIncident}>
                     <input 
                     placeholder="Titulo do caso" type="text"
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     />

                     <textarea 
                     placeholder="Descrição" 
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                     />

                    
                     <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
    );
}
