import { db } from '../../firebase';
import { 
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';

// ACTION
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';
const DELETE = 'word/DELETE';
const UPDATE = 'word/UPDATE';
const COMPLETE = 'word/COMPLETE'

const initialState = {
    list: [
        {
            word: "지증증왕",
            byung: "병음",
            mean: "옛날 왕",
            exam: "을지문덕",
            trans: "KING"
        },
        {
            word: "볼펜",
            byung: "병음",
            mean: "무언가 적을때 필요한거",
            exam: "삼색볼펜",
            trans: "pencil"
        }
    ]
}

export function loadWord (word_list) {
    return {type: LOAD, word_list}
}

export function createWord (word) {
    return {type: CREATE, word}
}

export function deleteWord (word_index) {
    return {type: DELETE, word_index}
}

export function completeWord (word_index) {
    return {type: UPDATE, word_index}
}

export function updateWord (word_index, word) {
    return {type: COMPLETE, word_index, word}
}


export const loadWordFB = (item_num) => {
    return async function (dispatch) {
      console.log("load");
      const q = query(collection(db, "word"), limit(item_num));
  
      const word_data = await getDocs(q);
      let word_list = [];
  
      word_data.forEach((v) => {
        word_list.push({id: v.id, ...v.data()});
      });
  
      dispatch(loadWord(word_list));
    }
  }
  
  export const createWordFB = (word) => {
    return async function (dispatch) {
      const docRef = await addDoc(collection(db, "word"), word);
      const word_data = { id: docRef.id, ...word };
  
      dispatch(createWord(word_data));
    }
  }
  
  export const updateWordFB = (word_id, word) => {
    return async function (dispatch, getState) {
      const docRef = doc(db, "word", word_id.word_id);
      await updateDoc(docRef, word);
  
      const _word_list = getState().word.list;
      const word_index = _word_list.findIndex((v) => {
        return v.id === word_id.word_id;
      });
  
      dispatch(updateWord(word_index, word));
    }
  }
  
  export const completeWordFB = (word_id, word_completed) => {
    return async function (dispatch, getState) {
      const docRef = doc(db, "word", word_id);
      if(word_completed === false) {
        await updateDoc(docRef, {completed: true})
      } else if (word_completed === true) {
        await updateDoc(docRef, {completed: false})
      }
  
      const _card_list = getState().card.list;
      const word_index = _card_list.findIndex((v) => {
        return v.id === word_id;
      });
  
      dispatch(completeWord(word_index));
    }
  }
  
  export const deleteWordFB = (word_id) => {
    return async function (dispatch, getState) {
      if(!word_id) {
        window.alert("아이디가 없습니다!");
        return;
      }
      const docRef = doc(db, "word", word_id);
      await deleteDoc(docRef);
  
      const _word_list = getState().word.list;
      const word_index = _word_list.findIndex((V) => {
        return V.id === word_id;
      });
  
      dispatch(deleteWord(word_index));
    }
  }



export default function reducer (state = initialState, action = {}) {
    switch (action.type) {
        case 'word/LOAD': 
            return {list: action.word_list}
        
        case 'word/CREATE':
            const new_word_list = [...state.list, action.word];
           return {list: new_word_list}
           
        case 'word/UPDATE': {
            const new_word_list = state.list.map((v, i) => {
              if(parseInt(action.word_index) === i) { 
                return {
                  ...v, 
                  word:action.word.word,
                  byung:action.word.byung,
                  mean:action.word.mean,
                  exam:action.word.exam,
                  trans:action.word.trans
                };
              }else {
                return v;
              }
            });
            console.log(new_word_list);
            return {...state, list: new_word_list}
        }
        
        case 'word/COMPLETE': {
            const new_word_list = state.list.map((v, i) => {
              if(parseInt(action.word_index) === i) { 
                if(v.completed === true) {
                  return {...v, completed: false};
                } else {
                  return {...v, completed: true};
                }
              }else {
                return v;
              }
            });
      
            return {...state, list: new_word_list};
          }

        case 'card/DELETE': {
            const new_word_list = state.list.filter((v, i) => {
              return parseInt(action.word_index) !== i;
            });
            return {...state, list: new_word_list};
          }

        default:
            return state;   
        }

        
}