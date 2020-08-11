import { call, takeLatest, takeEvery, put, all } from "redux-saga/effects";
import api from '../../services/api';
import { setProducts, setProductsRequest } from './slice';


function* setProductRequest() {
    console.log("saga")
    const prod = yield call(api.get, `/products`);
    console.log(prod);
    yield put(setProducts(prod.data));
}



export default all([
    takeEvery(setProductsRequest.type, setProductRequest)
]);