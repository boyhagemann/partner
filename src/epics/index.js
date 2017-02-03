import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

export const RELOAD = 'components.reload'
export const LOAD = 'components.load'
export const SUCCESS = 'components.success'
export const ERROR = 'components.error'

export const loadComponents = action$ => action$
    .ofType(LOAD)
    .flatMap( action =>
      Observable.ajax({
        url: 'http://api.komparu.dev/v1/resource2?limit=10',
        responseType: 'json',
        headers: {
          'X-Auth-Domain': "partner.komparu.com",
          'X-Auth-Token': "foi3d04mG2354irfV5wSGxlr"
        }
      })
      .map( payload => ({ type: SUCCESS, payload }))
      .catch(payload => Observable.of({ type: ERROR, payload, error: true }))
    )


export const reloadComponents = action$ => action$
    .ofType(RELOAD)
    .map( () => ({ type: LOAD }))

export default combineEpics(
  loadComponents,
  reloadComponents
)
