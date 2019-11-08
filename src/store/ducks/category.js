
import category from  '../../mocks/categoryMocks';
export const Types = {
    ADD: "category/ADD",
    REMOVE: "category/REMOVE",
    LIST: "category/LIST",
    DETAIL: "category/DETAIL",
    UPDATEALL: "category/UPDATEALL"
};

const INITIAL_STATE = category

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
            return { ...state, category: action.payload };

        case Types.LIST:
            return { category: action.payload.category };
        case Types.DETAIL:
            return { ...state, category: action.payload.category };
        case Types.UPDATEALL:
            return { ...state, category: action.payload.category };
        default:

            return category;

    }
}

export const Creators = {
    addCategory: title => ({
        type: Types.ADD,
        title
      }),
    updateAllCategory: (categorys) => {
        //const request = api.get();
        const request = categorys;
        return {
            type: Types.UPDATEALL,
            payload: request
        }
    }
}