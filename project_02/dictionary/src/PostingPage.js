import React from 'react'
import styled from 'styled-components';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createWordFB } from './redux/modules/word';

const PostingPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const wordRef = useRef('');
    const byungRef = useRef('');
    const meanRef = useRef('');
    const examRef = useRef('');
    const transRef = useRef('');

const addWordList = () => {
    dispatch(createWordFB({
        word: wordRef.current.value,
        byung: byungRef.current.value,
        mean: meanRef.current.value,
        exam: examRef.current.value,
        trans: transRef.current.value,
        completed: false,
    }));
    history.push('/');
};
    return (
        <>
        <Title>단어 추가하기</Title>       
        <List1>단어</List1>
        <INPUT1 type="text" ref={wordRef} id="input_word"></INPUT1>
        <List2>병음</List2>
        <INPUT2 type="text" ref={byungRef} id="input_byung"></INPUT2>
        <List3>의미</List3>
        <INPUT3 type="text" ref={meanRef} id="input_mean"></INPUT3>
        <List4>예문</List4>
        <INPUT4 type="text" ref={examRef} id="input_exam"></INPUT4>
        <List5>해석</List5>
        <INPUT5 type="text" ref={transRef} id="input_trans"></INPUT5>
        <BUTTON type='submit' onclick={addWordList}>저장하기</BUTTON>         
        </>

        );
    };

 
const Title = styled.h3`
    width: 105px;
    margin: 50px auto auto auto;
    color: #08088A;
`;

const List1 = styled.h5`
    width: 100px;
    height: 0;
    margin-top: 70px;
    margin-left: 800px;
    font-size: 16px;
    color: #08088A;
`;

const INPUT1 = styled.input`
    width: 300px;
    margin-left: 800px;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color:#08088A;
    font-size: 20px;
    &:focus {
        outline: none;
    }
`;

const List2 = styled.h5`
    width: 100px;
    height: 0;
    margin-top: 70px;
    margin-left: 800px;
    font-size: 16px;
    color: #08088A;
`;

const INPUT2 = styled.input`
    width: 300px;
    margin-left: 800px;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color:#08088A;
    font-size: 20px;
    &:focus {
        outline: none;
    }
`;

const List3 = styled.h5`
    width: 100px;
    height: 0;
    margin-top: 70px;
    margin-left: 800px;
    font-size: 16px;
    color: #08088A;
`;

const INPUT3 = styled.input`
    width: 300px;
    margin-left: 800px;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color:#08088A;
    font-size: 20px;
    &:focus {
        outline: none;
    }
`;

const List4 = styled.h5`
    width: 100px;
    height: 0;
    margin-top: 70px;
    margin-left: 800px;
    font-size: 16px;
    color: #08088A;
`;

const INPUT4 = styled.input`
    width: 300px;
    margin-left: 800px;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color:#08088A;
    font-size: 20px;
    &:focus {
        outline: none;
    }
`;

const List5 = styled.h5`
    width: 100px;
    height: 0;
    margin-top: 70px;
    margin-left: 800px;
    font-size: 16px;
    color: #08088A;
`;

const INPUT5 = styled.input`
    width: 300px;
    margin-left: 800px;
    border-left-width:0;
    border-right-width:0;
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color:#08088A;
    font-size: 20px;
    &:focus {
        outline: none;
    }
`;

const BUTTON = styled.button`
    display: flex;
    width: 180px;
    height: 40px;
    background: green;
    margin-left: 860px;
    margin-top: 33px;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    font-size: 19px;
    cursor: pointer;
`;
export default PostingPage;