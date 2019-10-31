
import cardapio from  '../../mocks/cardapioMocks';
export const Types = {
    ADD: "cardapio/ADD",
    REMOVE: "cardapio/REMOVE",
    LIST: "cardapio/LIST",
    DETAIL: "cardapio/DETAIL"
};

const INITIAL_STATE = cardapio

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:

            var id = state[state.length-1].id + 1;
            return [
                ...state,
                {
                  id: id,
                  title: action.title,
                }
              ]
        case Types.REMOVE:
            return { ...state, cardapio: action.payload };

        case Types.LIST:
            return { cardapio: action.payload.cardapio };
        case Types.DETAIL:
            return { ...state, cardapio: action.payload.cardapio };
        default:
            return cardapio;

    }
}

export const Creators = {
    addcardapio: title => ({
        type: Types.ADD,
        title
      }),
    Listcardapio: () => {
        //const request = api.get();
        const request = cardapio;
        return {
            type: Types.LIST,
            payload: request
        }
    }
}