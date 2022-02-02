import React, {useState} from 'react'
import styled from 'styled-components'

const WordList = () => {
    
    const [wordList, setWordList] = useState({
        word: "김밥",
        byung: "병음",
        mean: "먹는거",
        exam: "나는 배고플때 종종 김밥을 먹곤한다.",
        trans: "I used to ate Gimbab when i hungry"
    });
    
    return (
        <Wordwrap>
            <Buttonwrap>
                <button>체크</button>
                <button>수정</button>
                <button>삭제</button>
            </Buttonwrap>
            <Textwrap>
                <h1>{wordList.word}</h1>
                <h2>{wordList.byung}</h2>
                <h2>{wordList.mean}</h2>
                <p>{wordList.exam}</p>
                <p>{wordList.trans}</p>
            </Textwrap>
        </Wordwrap>
    )
}

const Wordwrap = styled.div`
    width: 400px;
    height: 180px;
    border: 2px solid #08088A;
    border-radius: 30px;
    margin-left: 20px;
    margin-top: 20px;
`;

const Buttonwrap = styled.button`

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

const Textwrap = styled.text`
    
    & h1 {
        font-size: 16px;
        margin-left: 18px;
        
    }
      h2 {
          font-size: 14px;
          margin-left: 18px;
      }
      p {
          font-size: 12px;
          margin-left: 18px;
          color: blue;
          
      }
    
`;


export default WordList