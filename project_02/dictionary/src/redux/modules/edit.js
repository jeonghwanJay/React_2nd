import { db } from '../../firebase';
import { 
  collection,
  getDocs,
} from 'firebase/firestore';


// Action
const EDIT = 'edit/EDIT';

const initialState = {
  list: [

  ]
}

// Action Creaters
export function editWord(word_list) {
  return {type: EDIT, word_list};
}


//middlewares
export const editWordFB = (word_id) => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    let word_list = [];

    word_data.forEach((v) => {
      word_list.push({id: v.id, ...v.data()});
    });

    dispatch(editWord(word_list));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'edit/EDIT': {
      return {list: action.word_list};
    }
    default:
      return state;
  }
}