import * as ReadAPI from '../utils/api-utils'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { GET_ALL_CATEGORIES } from '../actions/category_actions'

const categories = () => ReadAPI.getAllCategories()

export function * getCategoriesSaga () {
  try {
    console.log('entrou aqui')
    const result = yield call(categories)
    yield put({ type: GET_ALL_CATEGORIES, categories: result })
  } catch (e) {
    console.log(e)
  }
}

export function * watchGetCategories () {
  console.log('entrou watchGetCategories')
  yield takeLatest(GET_ALL_CATEGORIES, getCategoriesSaga)
}

export function * helloSaga () {
  yield console.log('Hello Sagas!')
}

export default function * rootSaga () {
  yield all([helloSaga(), watchGetCategories()])
}
