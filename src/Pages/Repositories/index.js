import React, { useEffect, useState } from 'react';
import * as styled from './styled'
import { useHistory } from 'react-router-dom';

export default function Repositories() {

    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');

        if(repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/');
        }
    }, []);

    return (
        <styled.Container> 
            <styled.Title>Repositórios</styled.Title>
            <styled.List>
                {repositories.map(repository => {
                    return (
                        <styled.ListItem>Repositório: { repository }</styled.ListItem>
                    )
                })}
            </styled.List>
            <styled.LinkHome to='/'>Voltar</styled.LinkHome>
        </styled.Container>
    )
}