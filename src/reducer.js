const initialState = {
  notes: []
};
export default function notesApp(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        notes: [
          ...state.notes,
          {
            id: action.id,
            text: action.text,
            date: action.date
          }
        ]
      };
    }
    case "DELETE_NOTE": {
      return {
        notes: state.notes.filter(item => item.id != action.id)
      };
    }
  }
  return state;
}
