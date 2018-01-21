export const DUMMY_ACTION = 'change-title'
export type DUMMY_ACTION = typeof DUMMY_ACTION

export interface DummyAction {
  type: DUMMY_ACTION
}

export default {
  type: 'change-title'
} as DummyAction
