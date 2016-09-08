export default function todo (state=[], action){
  switch (action.type){
    case 'ADD_TODO':
      if(action.text) {
        return [
          ...state,
          {
            id: action.id,
            text: action.text
          }

        ]
      }else{
        return state
      }
    default: return state
  }
}
