const initialState = [
        {
                "id": 1,
                "name": "Iphone X",
                "price": 1500,
                "status": true
        },
        {
                "id": 2,
                "name": "Samsung S21 Ultra",
                "price": 2000,
                "status": true
        },
        {
                "id": 3,
                "name": "Iphone 6s",
                "price": 1000,
                "status": false
        },
        {
                "id": 4,
                "name": "Oppo",
                "price": "500",
                "status": "false"
        }
];

const products = (state = initialState, action) => {
        switch(action.type){
            default:
                return [...state];
        }
};

export default products;