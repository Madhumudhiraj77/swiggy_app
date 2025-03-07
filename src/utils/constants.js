// Restaurant List API (Desktop)
export const SWIGGY_API = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}`;

// Restaurant List API (Mobile)
export const SWIGGY_API_MOBILE = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.387158&lng=78.545031&carousel=true&third_party_vendor=1")}`;

// Category Image API
export const SWIGGY_CATEGORY_API = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

// Restaurant Logo Image API
export const RESTAURANT_LOGO = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Restaurant Details API
export const RESTAURANT_DETAILS_API = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.387158&lng=78.545031&restaurantId=")}`;

// Empty Cart Image API
export const EMPTY_CART_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0";

// 404 Not Found Image API
export const NOT_FOUND_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87";

// Category Restaurants List API
export const CATEGORY_RESTAURANTS_API = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&collection=")}`;

// Category Restaurants API (Mobile)
export const CATEGORY_RESTAURANTS_API_MOBILE = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/mapi/restaurants/list/v5?lat=17.387158&lng=78.545031&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2")}`;

// Search Cuisines API
export const SEARCH_CUISINES_API = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=17.387158&lng=78.545031")}`;

// Search Cuisines Images API
export const SEARCH_CUISINES_IMAGES_API = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

// Search Results API
export const SEARCH_RESULTS_API = `https://swiggy-app-clone.vercel.app//proxy?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/search/suggest?lat=17.387158&lng=78.545031&str=")}`;

// Auto Suggest Search Images API
export const AUTO_SUGGEST_SEARCH_IMAGES_API = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/";

export const SEARCH_RESTAURANT_CARD_API = "https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.387158&lng=78.545031&str="

export const ROUTES_NAMES = {
  HOME: "/",
  HELP: "/support",
  RESTAURANT_DETAILS: "/:areaName/:restaurantName/:resId",
  CART: "/cart",
  ORDER_CONFIRMED: "/orderConfirmed",
  CATEGORY_COLLECTIONS: "/collections/:collectionId",
  SEARCH:'/search',
  SEARCH_RESTAURANT_DETAILS : '/search/resItem'
};

export const colors = [
  "rgb(224,238,245)", // Light Blue
  "rgb(246,230,233)", // Light Pink
  "rgb(251,238,215)", // Light Orange
  "rgb(229,241,211)", // Light Green
];

// http://localhost:3001