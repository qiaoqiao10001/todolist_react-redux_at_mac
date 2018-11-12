import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from './actionTypes'

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type:ADD_ITEM
})
export const getDeleteItemAction = (idx) => ({
    type:DELETE_ITEM,
    idx
})