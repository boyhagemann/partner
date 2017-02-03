import { LOAD, RELOAD } from '../epics'

export const load = () => ({ type: LOAD })

export const reload = () => ({ type: RELOAD })
