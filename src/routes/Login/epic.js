import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/delay'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable'
import { LOGIN_REQUEST, loginSuccess } from './module'

export const loginEpic = action$ =>
    action$
        .ofType(LOGIN_REQUEST)
        .delay(1000)
        .switchMap(({ payload }) => Observable.of(loginSuccess({ username: payload.username })))