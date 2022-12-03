import axios from "../../apis/axios";

export const allUserData = () => {
  return async (dispatch) => {
    try {
      const ids = [1, 2, 3, 4, 5, 6];
      const userData = [];
      for (let index = 0; index < ids.length; index++) {
        const { data } = await axios.get("v2/users");
        userData.push(data);
      }
      dispatch({
        type: "GET_ALL_USERS",
        payload: userData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
