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
    case 'REMOVE_TODO':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default: return state
  }
}
