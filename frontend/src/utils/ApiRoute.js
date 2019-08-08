// ApiRest Routes
let base_url = "http://localhost:8000/";

export default {
    ProductsUrl() {
        return base_url + "api/products/";
    },
    OauthUrl() {
        return base_url + "oauth/token/";
    }
};
