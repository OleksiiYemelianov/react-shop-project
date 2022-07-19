export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        const newQuantity = orderItem.quantity + 1;
                        return {
                            ...orderItem,
                            quantity: newQuantity,
                        };
                    } else {
                        return orderItem;
                    }
                }),
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        if (orderItem.quantity > 1) {
                            const newQuantity = orderItem.quantity - 1;
                            return {
                                ...orderItem,
                                quantity: newQuantity >= 0 ? newQuantity : 0,
                            };
                        } else {
                            return {
                                ...orderItem,
                                quantity: 0,
                            };
                        }
                    } else {
                        return orderItem;
                    }
                }),
            };
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);
            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            }
        };
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };

        default:
            return state;
    }
}