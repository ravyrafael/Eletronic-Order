
import data from  '../../mocks/categoryMocks';
export const Types = {
    ADD: "category/ADD",
    REMOVE: "category/REMOVE",
    LIST: "category/LIST",
    DETAIL: "category/DETAIL"
};

const INITIAL_STATE = data

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            console.log(state)
            var id = state[state.length-1].id + 1;
            return [
                ...state,
                {
                  id: id,
                  title: action.title,
                }
              ]
        case Types.REMOVE:
            return { ...state, category: action.payload };

        case Types.LIST:
            return { category: action.payload.category };
        case Types.DETAIL:
            return { ...state, category: action.payload.data };
        default:
            return data;

    }
}

export const Creators = {
    addCategory: title => ({
        type: Types.ADD,
        title
      }),
    ListCategory: () => {
        //const request = api.get();
        const request = data;
        return {
            type: Types.LIST,
            payload: request
        }
    }
}