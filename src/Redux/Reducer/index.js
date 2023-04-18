const initialState = {
    login: JSON.parse(localStorage.getItem('login')),
    login: false,
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_LOGIN":
            return {
                ...state,
                login: action.payload
            }
        default: return state
    }
}