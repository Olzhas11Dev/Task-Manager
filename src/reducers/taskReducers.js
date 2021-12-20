const initialState = {
  tasksData: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_TASKS':
      return { ...state, tasksData: action.payload };

    default:
      return state;
  }
};
