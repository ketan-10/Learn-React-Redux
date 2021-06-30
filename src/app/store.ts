import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import { pokemonApi } from '../features/pokemon/pokemon-api-slice';


// holds all the 'state'
// holds all the 'reducers' to on 'a action dispatch' it knows what to do 
// The store is injected in `main.tsx` '<Provider store={store}>'
export const store = configureStore({
  reducer: {
    // works like combinereducer
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});


type Hello =  typeof store.getState;

// we dispatch a action on store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;