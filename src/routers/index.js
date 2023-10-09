import HomePage from "../Pages/HomePage/HomePage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../Pages/TypeProductPage/TypeProductPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
     {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true
    },
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page:NotFoundPage
    }
]