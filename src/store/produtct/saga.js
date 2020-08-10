import { call, takeEvery, put} from "redux-saga/effects";
import api from '../../services/api';
import { setProducts } from './slice';
import { SET_PRODUCT_REQUEST } from '../../constants/sagaActions';



function* setProductRequest() {
    const prod = yield call(api.get, `/products`);

    yield put(setProducts(prod));
}



export default function* rootSaga() {
    yield takeEvery(SET_PRODUCT_REQUEST, setProductRequest);
}