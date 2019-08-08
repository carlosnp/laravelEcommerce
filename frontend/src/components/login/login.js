// 
import ApiRoute from "@/utils/ApiRoute";

export default {
    name: "login",
    data() {
        return {
            dialog: false,
            user: {
                username: "",
                password: "",
                token: ""
            }
        };
    },
    methods: {
        login() {
            this.$axios.post(ApiRoute.OauthUrl(), this.user).then(response => {
                this.dialog = false;
                this.$router.push("/");
            });
        }
    }
};
