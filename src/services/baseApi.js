import axios from "axios";

const ApiClient = () => {
  const baseURL = "https://jsonplaceholder.typicode.com";

  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(
    async (config) => {
      //   const session = await getSession();
      //   Object.assign(config.headers, { "Content-Type": "application/json" });
      //   if (session) {
      //     Object.assign(config.headers || {}, {
      //       "x-access-token": session?.user?.accessToken,
      //     });
      //   }
      return config;
    },
    (error) => {
      console.log("error", error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (config) => {
      return config.data;
    },
    (error) => {
      console.log("error", error);
      return Promise.reject(error);
    }
  );
  return instance;
};
export default ApiClient;
