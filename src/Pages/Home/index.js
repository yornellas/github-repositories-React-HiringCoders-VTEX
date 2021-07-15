import { useState } from 'react';
import axios from 'axios';
import * as styled from './styled'
import { useHistory } from 'react-router-dom';

function App(props) {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        return repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(error => {
      setErro(true);
    });
  }

  return (
    <styled.HomeContainer>
      <styled.Content>
        <styled.Input className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
        <styled.Button type="button" onClick={handlePesquisa}>Pesquisar</styled.Button>
      </styled.Content>
      {erro ? <styled.ErrorMsg>Ocorreu um erro :( . Tente novamente.</styled.ErrorMsg> : ''}
    </styled.HomeContainer>
  );
}

export default App;
