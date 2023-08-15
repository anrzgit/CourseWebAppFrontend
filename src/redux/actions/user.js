import { server } from '../store';
import axios from 'axios';




export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,{ email, password },{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'loginSuccess', payload: data});
    
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const register = (formdata) => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/register`, formdata, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const  {data}  = await axios.get(
      `${server}/profile`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    console.log(data);

    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response.data.message,
    });
  }
};

export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });
    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });
    dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response.data.message,
    });
  }
};

// //add to playlist
// export const addToPlaylist = (id) => async dispatch => {
//   try {
//     dispatch({ type: 'addToPlaylistRequest' });

//     const { data } = await axios.post(
//       `${server}/playlist/add`,{
//         id
//       },{
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       }
//     );

//     dispatch({ type: 'addToPlaylistSuccess', payload: data.message });
//   } catch (error) {
//     dispatch({
//       type: 'addToPlaylistFail',
//       payload: error.response.data.message,
//     });
//   }
// }


// //remove from playlist
// export const removeFromPlaylist = (id) => async dispatch => {
//   try {
//     dispatch({ type: 'removeFromPlaylistRequest' });

//     const { data } = await axios.delete(
//       `${server}/playlist/remove?id=${id}`,{
//         withCredentials: true,
//       }
//     );

//     dispatch({ type: 'removeFromPlaylistSuccess', payload: data.message });
//   } catch (error) {
//     dispatch({
//       type: 'removeFromPlaylistFail',
//       payload: error.response.data.message,
//     });
//   }
// }


