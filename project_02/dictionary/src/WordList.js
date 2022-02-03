import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadWordFB, completeWordFB, deleteWordFB } from './redux/modules/word';
import { useInView } from 'react-intersection-observer';
import localStorage from 'redux-persist/es/storage';

let item = 9;

const WordList = (props) => {
    
    const data = useSelector((state) => state.word.list );
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [ref, inView] = useInView();

    useEffect(() => {
        if(inView) {
            item += 4;
            dispatch(loadWordFB(item));
        };
    },[inView]);

    const completeWord = (word_index, word_completed) => {
        dispatch(completeWordFB(data[word_index].id, word_completed));
      }
    
      const deleteClick = (word_index) => {
        dispatch(deleteWordFB(data[word_index].id));
      }


        return (
            <Container>
            <Cardwrap>
               {data.map((list, index) => {
                   return (
                    <Wordwrap complete={list.completed} className='list_word' key={index}>
                    <Buttonwrap>
                        <button onClick={() => {
                            completeWord(index, list.completed);
                        }}>체크</button>
                        <button onClick={() => {
                            history.push('/UpDate' + list.id + '/' + list.word + '/' + list.byung + '/' + list.mean + "/" + list.exam + "/" + list.trans + "/edit");
                        }}>수정</button>
                        <button onClick={() => {
                            deleteClick(index);
                        }}>삭제</button>
                    </Buttonwrap>
                    <Textwrap>
                        <h1>{list.word}</h1>
                        <h2>{list.byung}</h2>
                        <h2>{list.mean}</h2>
                        <p>{list.exam}</p>
                        <p>{list.trans}</p>
                    </Textwrap>
                    </Wordwrap>
               )})}
    
             </Cardwrap>     
                   
                      
            </Container>
            
        )}

    
const Container = styled.div`

`;

const Cardwrap = styled.div`

`;

const Wordwrap = styled.div`
    width: 400px;
    height: 180px;
    border: 2px solid #08088A;
    border-radius: 30px;
    margin-left: 20px;
    margin-top: 20px;
`;

const Buttonwrap = styled.div`

    background: white;
    border: none;
    margin-left: 250px;
    margin-top: 10px;
    & button {
        cursor: pointer;
        background: pink;
        border: 2px solid #08088A;
        border-radius: 10px;
        color: #08088A;
}
`;

const Textwrap = styled.div`
    
    & h1 {
        font-size: 16px;
        margin-left: 18px;
        
    }
    & h2 {
          font-size: 14px;
          margin-left: 18px;
      }
    & p {
          font-size: 12px;
          margin-left: 18px;
          color: blue;
          
      }
    
`;
    
export default WordList;