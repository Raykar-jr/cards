import { CreatePacksDataType, DeleteParamType, UpdatePackDataType } from 'common/api/DataTypes'

const initState = {} as ModalStateType<ModalStateDataType>

export const modalsReducer = (state = initState, action: ActionType): ModalStateType<ModalStateDataType> => {
  switch (action.type) {
    case 'modals/OPEN-MODAL':
      return { ...state, title: action.payload.title, data: action.payload.data }
    case 'modals/CLOSE-MODAL':
      return { ...state, title: '' }
    default:
      return state
  }
}

// actions
export const openModal = (title: string, data: { name: string; private: boolean; _id?: string }) =>
  ({ type: 'modals/OPEN-MODAL', payload: { title, data } } as const)
export const closeModal = () => ({ type: 'modals/CLOSE-MODAL', payload: {} } as const)

// types
export type ModalStateType<D> = {
  title: string
  data: D
}

export type ModalStateDataType = CreatePacksDataType | UpdatePackDataType | DeleteParamType

type ActionType = ReturnType<typeof openModal> | ReturnType<typeof closeModal>
