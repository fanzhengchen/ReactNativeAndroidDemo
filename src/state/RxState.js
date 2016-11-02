/**
 * Created by mark on 16-11-2.
 */
import Rx from "rxjs";
import React, {PropTypes, Component} from "react";
export function createAction() {
    return new Rx.Subject();
}

export function createActions(actionNames) {
    return actionNames.reduce((akk, name) => ({...akk, [name]: createAction()}), {});
}

export function createState(reducer$, initialState$ = Rx.Observable.of({})) {
    return initialState$
        .merge(reducer$)
        .scan((state, [scope, reducer]) =>
            ({...state, [scope]: reducer(state[scope])}))
        .publishReplay(1)
        .refCount();
}

export function connect(selector = state => state) {
    return function wrapWithConnect(WrappedComponent) {
        return class Connect extends Component {


            constructor(props) {
                super(props);
                this.state = {
                    state$: null,
                    abc: this,
                };
            }

            static contextTypes = {
                state$: PropTypes.object.isRequired,
            };

            componentWillMount() {
                // console.log(this.context);
                // if (!this.context.state$) {
                //     this.context.state$ = Rx.Observable.create();
                // }

                this.subscription = this.context.state$.map(selector).subscribe(this.setState.bind(this));
            }


            componentWillUnmount() {
                this.subscription.unsubscribe();
            }

            render() {
                return (
                    <WrappedComponent {...this.state} {...this.props} />
                );
            }
        };
    };
}

export class RxStateProvider extends Component {
    static propTypes = {
        state$: PropTypes.object.isRequired,
    };

    static childContextTypes = {
        state$: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {state$: this.props.state$};
    }

    render() {
        return this.props.children;
    }
}