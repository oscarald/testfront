import { combineReducers } from "redux";
import allProductsReducer from "./allProductsReducer";
import detailProductReducer from "./detailReducer";
import searchReducer from "./searchReducer";
import usersReducers from "./usersReducers";
import filterCategoriesReducer from "./filterCategoryReducer";
import userIdReducer from "./userIdReducer";
<<<<<<< Updated upstream
=======
import shoppingCartReducer from "./shoppingCartReducer";
import reviewsReducer from "./reviewsReducer";
>>>>>>> Stashed changes

export default combineReducers({
    allProductsReducer,
    detailProductReducer,
    searchReducer,
    filterCategoriesReducer,
    usersReducers,
    userIdReducer,
<<<<<<< Updated upstream
=======
    shoppingCartReducer,
    reviewsReducer
>>>>>>> Stashed changes
});
