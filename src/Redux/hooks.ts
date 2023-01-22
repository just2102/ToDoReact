import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootStateType, AppDispatchType } from './store'

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector