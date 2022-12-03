import axios from "../../apis/axios";

export const allUserData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("v2/users");
      dispatch({
        type: "GET_ALL_USERS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
