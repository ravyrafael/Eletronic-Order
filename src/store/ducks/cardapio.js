
import cardapio from  '../../mocks/cardapioMocks';
export const Types = {
    ADD: "cidades/ADD",
    REMOVE: "cidades/REMOVE",
    LIST: "cidades/LIST",
    DETAIL: "cidades/DETAIL"
};

const INITIAL_STATE = [{
    id: 1,
    nome: '',

}]

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, cardapio: action.payload };
        case Types.REMOVE:
            return { ...state, cardapio: action.payload };

        case Types.LIST:
            return { ...state, cardapio: action.payload.data };
        case Types.DETAIL:
            return { ...state, cardapio: action.payload.data };
        default:
            return {cardapio:state};

    }
}

export const Creators = {
    ListCardapio: () => {
        //const request = api.get();
        const request = [];
        return {
            type: Types.LIST,
            payload: request
        }
    }
}