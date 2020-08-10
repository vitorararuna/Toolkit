import { all } from 'redux-saga/effects';

import product from './produtct/saga';

export default function* rootSaga(){
  return yield all([
    product  
  ]);
}