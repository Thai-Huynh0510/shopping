import { configureStore} from "@reduxjs/toolkit";
import cart from '../stores/redux'
const store = configureStore({
    reducer: {
        cart: cart,

    }
})

export default store