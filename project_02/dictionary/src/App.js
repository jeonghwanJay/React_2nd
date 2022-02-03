import React, {useEffect} from 'react';
import styled from 'styled-components';
import  {Route, useHistory} from 'react-router-dom';
import PostingPage from './PostingPage';
import WordList from './WordList';
import Update from './UpDate';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const history = useHistory();
  useEffect(async() => {
    addDoc(collection(db, "bucket"), {word: '20a2020', byung: 'ddd', mean: 'ddd', exam: 'ddd', trans: 'asd', completed: "false"})
  }, []) 
  
  return (
    <div className="App">
      
      <Title>중국어 단어장</Title>
      <Line/>
      <Button onClick={() => {
        history.push('Postingpage')
      }}>+</Button>
      <Route path="/" exact>
        <WordList/>
      </Route>    
      <Route path="/Postingpage" exact>
        <PostingPage/>
      </Route>
      <Route path="/update" exact>
        <Update/>
      </Route>

    </div>
  );
}

const Title = styled.h1`
color: #08088A;
width: 175px;
margin: 10px auto auto auto;
`;

const Line = styled.hr`
border-top: 2px solid #08088A;

`;

const Button = styled.button`
display: flex;
position: fixed;
bottom: 10px;
right: 10px;
width: 50px;
height: 50px;
border-radius: 50%;
background: #08088A; 
cursor: pointer;
align-items: center;
justify-content: center; 
border: none;
font-size: 28px;
color: white;
`;
export default App;
