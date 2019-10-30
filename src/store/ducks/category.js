
import category from  '../../mocks/categoryMocks';
export const Types = {
    ADD: "cidades/ADD",
    REMOVE: "cidades/REMOVE",
    LIST: "cidades/LIST",
    DETAIL: "cidades/DETAIL"
};

const INITIAL_STATE = category

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, category: action.payload };
        case Types.REMOVE:
            return { ...state, category: action.payload };

        case Types.LIST:
            return { ...state, category: action.payload.category };
        case Types.DETAIL:
            return { ...state, category: action.payload.data };
        default:
            return {category:state};

    }
}

export const Creators = {
    ListCategory: () => {
        //const request = api.get();
        const request = category;
        return {
            type: Types.LIST,
            payload: request
        }
    }
}