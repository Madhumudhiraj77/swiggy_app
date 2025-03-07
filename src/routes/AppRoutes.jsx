import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES_NAMES } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import HomePage from "../components/HomePage";
import ShimmerRestaurantMenu from "../components/ShimmerRestaurantMenu";

const Help = lazy(() => import("../components/Help"));
const Body = lazy(() => import("../components/Body"));
const RestaurantMenu = lazy(() => import("../components/RestaurantMenu"));
const Cart = lazy(() => import("../components/Cart"));
const OrderConfirmed = lazy(() => import("../components/OrderConfirmed"));
const CategoriesRestaurants = lazy(() =>
  import("../components/CategoriesRestaurants")
);
const SearchCuisines = lazy(() => import("../components/SearchCuisines"));
const SearchRestaurantItemCard = lazy(() =>
  import("../components/SearchRestaurantItemCard")
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES_NAMES.HOME} element={<HomePage />}>
          <Route
            index
            element={
              <Suspense fallback={<Shimmer />}>
                <Body />
              </Suspense>
            }
          />
          <Route
            path={ROUTES_NAMES.SEARCH}
            element={
              <Suspense fallback={<ShimmerRestaurantMenu />}>
                <SearchCuisines />
              </Suspense>
            }
          >
            <Route
              path={ROUTES_NAMES.SEARCH_RESTAURANT_DETAILS}
              element={
                <Suspense fallback={<ShimmerRestaurantMenu />}>
                  <SearchRestaurantItemCard />
                </Suspense>
              }
            />
          </Route>

          <Route
            path={ROUTES_NAMES.HELP}
            element={
              <Suspense fallback={<Shimmer />}>
                <Help />
              </Suspense>
            }
          />
          <Route
            path={ROUTES_NAMES.CART}
            element={
              <Suspense fallback={<Shimmer />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path={ROUTES_NAMES.ORDER_CONFIRMED}
            element={
              <Suspense fallback={<Shimmer />}>
                <OrderConfirmed />
              </Suspense>
            }
          />
          <Route
            path={ROUTES_NAMES.CATEGORY_COLLECTIONS}
            element={
              <Suspense fallback={<Shimmer />}>
                <CategoriesRestaurants />
              </Suspense>
            }
          />
          <Route
            path={ROUTES_NAMES.RESTAURANT_DETAILS}
            element={
              <Suspense fallback={<ShimmerRestaurantMenu />}>
                <RestaurantMenu />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
