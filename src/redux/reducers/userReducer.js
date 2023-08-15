import { createReducer } from "@reduxjs/toolkit";


export const userReducer = createReducer({
    // Add initial state here
}, {
    // Add reducers here
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.user = null;
    },
    clearError: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.messege = null;
    },
    loadUserRequest: (state, action) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated =  true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.user = null;
    },
    logoutRequest: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
    registerRequest: (state, action) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.user = null;
    },

})


export const profileReducer = createReducer({
  // Add initial state here
},{
  // Add reducers here
  updateProfileRequest: (state) => {
    state.loading = true;
  },
  updateProfileSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateProfileFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  updateProfilePictureRequest: (state) => {
    state.loading = true;
  },
  updateProfilePictureSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  updateProfilePictureFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  changePasswordRequest: (state) => {
    state.loading = true;
  },
  changePasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  changePasswordFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  forgotPasswordRequest: (state) => {
    state.loading = true;
  },
  forgotPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  forgotPasswordFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  resetPasswordRequest: (state) => {
    state.loading = true;
  },
  resetPasswordSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  resetPasswordFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  removeFromPlaylistRequest: state => {
    state.loading = true;
  },
  removeFromPlaylistSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  removeFromPlaylistFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

})


export const subscriptionReducer = createReducer({
  // Add initial state here
},{
  // Add reducers here
  buySubscriptionRequest: (state) => {
    state.loading = true;
  },
  buySubscriptionSuccess: (state, action) => {
    state.loading = false;
    state.subscriptionId = action.payload;
  },
  buySubscriptionFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  cancelSubscriptionRequest: (state) => {
    state.loading = true;
  },
  cancelSubscriptionSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  cancelSubscriptionFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state, action) => {
    state.error = null;
  },
  clearMessage: (state, action) => {
    state.message = null;
  },
})