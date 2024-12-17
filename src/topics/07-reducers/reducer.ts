export type CounterState = {
    count: number;
    status: string
}


export const initialState: CounterState = {
    count: 0,
    status: 'pending'
}

export const counterReducer = (state: CounterState, action: any): CounterState => {
    return state
}