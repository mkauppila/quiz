import { Dispatch } from 'redux'

export const DUMMY_ACTION = 'DUMMY_ACTION'
export type DUMMY_ACTION = typeof DUMMY_ACTION
export const DUMMY_ACTION_SUCCESS = 'DUMMY_ACTION_SUCCESS'
export type DUMMY_ACTION_SUCCESS = typeof DUMMY_ACTION_SUCCESS
export const DUMMY_ACTION_FAILURE = 'DUMMY_ACTION_FAILURE'
export type DUMMY_ACTION_FAILURE = typeof DUMMY_ACTION_FAILURE

export interface DummyAction {
  type: DUMMY_ACTION
}

export interface DummyActionSuccess {
  type: DUMMY_ACTION_SUCCESS
  title: string
}

export interface DummyActionFailure {
  type: DUMMY_ACTION_FAILURE
}

function DummyAction() {
  return (dispatch: Dispatch<DummyAction>) => {
    dispatch({
      type: DUMMY_ACTION_SUCCESS,
      title: 'new title',
    })
  }
}

export default DummyAction