import { takeLatest, all, put } from 'redux-saga/effects'
import { setPostsData } from '../actions/postsActions'

function* doPostDatas({ payload }) {
  try {
    yield put(payload)
  } catch (e) {
    console.log(e)
  }
}

export default function* postsSaga() {
  yield all([takeLatest(setPostsData, doPostDatas)])
}
