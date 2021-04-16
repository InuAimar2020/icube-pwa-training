const defaultState = {
    category: [
        {
            id: 2,
            name: "New Arrivals",
            products: [
                {
                    id: "123",
                    name: "Bags One",
                    price: 340000,
                    img: "/img/bagsone.jpg",
                },
                {
                    id: "234",
                    name: "Bags Two",
                    price: 546999,
                    img: "/img/bagstwo.jpg",
                },
                {
                    id: "567",
                    name: "Bags Three",
                    price: 547899,
                    img: "/img/bagsthree.jpg",
                },
                {
                    id: "890",
                    name: "Bags Four",
                    price: 589000,
                    img: "/img/bagsfour.jpg",
                },
                {
                    id: "111",
                    name: "Bags Five",
                    price: 765000,
                    img: "/img/bagsfive.jpg",
                },
                {
                    id: "112",
                    name: "Bags Six",
                    price: 876000,
                    img: "/img/bagssix.jpg",
                },
                {
                    id: "777",
                    name: "Bags Seven",
                    price: 765000,
                    img: "/img/bagstwo.jpg",
                },
                {
                    id: "888",
                    name: "Bags Eight",
                    price: 511000,
                    img: "/img/bagsthree.jpg",
                },
            ],
        },
        {
            id: 3,
            name: "Best Seller",
            products: [
                {
                    id: "123",
                    name: "Bags One",
                    price: 340000,
                    img: "/img/bagsone.jpg",
                },
                {
                    id: "234",
                    name: "Bags Two",
                    price: 546999,
                    img: "/img/bagstwo.jpg",
                },
                {
                    id: "567",
                    name: "Bags Three",
                    price: 547899,
                    img: "/img/bagsthree.jpg",
                },
                {
                    id: "890",
                    name: "Bags Four",
                    price: 589000,
                    img: "/img/bagsfour.jpg",
                },
                {
                    id: "111",
                    name: "Bags Five",
                    price: 765000,
                    img: "/img/bagsfive.jpg",
                },
                {
                    id: "112",
                    name: "Bags Six",
                    price: 876000,
                    img: "/img/bagssix.jpg",
                },
                {
                    id: "777",
                    name: "Bags Seven",
                    price: 765000,
                    img: "/img/bagstwo.jpg",
                },
                {
                    id: "888",
                    name: "Bags Eight",
                    price: 511000,
                    img: "/img/bagsthree.jpg",
                },
            ],
        },
    ],
    cart: [],
};

const categorylist = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_CATEGORY_PRODUCTS":
            return state.category;
        case "ADD_PRODUCT":
            const existingProduct = state.cart.filter(
                (product) => product.id === payload.id
            );

            if (existingProduct.length > 0) {
                const withoutExistingProduct = state.cart.filter(
                    (product) => product.id !== payload.id
                );
                const updatedUnitsProduct = {
                    ...existingProduct[0],
                    qty: existingProduct[0].qty + payload.qty,
                };

                return {
                    ...state,
                    cart: [...withoutExistingProduct, updatedUnitsProduct],
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, payload],
                };
            }
        case "REMOVE_PRODUCT":
            const withoutDeletedProduct = state.cart.filter(
                (product) => product.id !== payload.id
            );
            return {
                ...state,
                cart: withoutDeletedProduct,
            };
        default:
            return state;
    }
};

export default categorylist;
