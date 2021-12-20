import Axios from 'axios';

export const fetchTasksAction = () => {
  return async (dispatch) => {
    let response = await Axios.get('https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks');
    dispatch({ type: 'FETCH_ALL_TASKS', payload: response.data });
  };
};

export const addTaskAction = (task) => {
  return async (dispatch) => {
    let response = await Axios.post('https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks', task);
    dispatch(fetchTasksAction());
  };
};

export const removeTaskAction = (task) => {
  return async (dispatch) => {
    let response = await Axios.delete(
      `https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks/${task.id}`,
      task,
    );
    dispatch(fetchTasksAction());
  };
};

export const checkStatusAction = (array, task) => {
  return async (dispatch) => {
    let founded = array.find((elem) => elem.id === task.id);

    if (founded) {
      founded.status = !task.status;
      await Axios.put(`https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks/${task.id}`, founded);
    }
    dispatch(fetchTasksAction());
  };
};
