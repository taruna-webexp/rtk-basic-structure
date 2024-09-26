import ApiClient from "./baseApi";

const userApi = {
  getAllUsers: () => {
    return ApiClient().get("/users");
  },
};

export default userApi;
