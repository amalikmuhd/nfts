import {useSelector} from "react-redux";

function useGetUserType(response) {
  const {userData} = useSelector((state) => state.generalReducer);

  console.log(userData?.data?.userData?._id, "user -id");

  let localId = userData?.data?.userData?._id;
  if (localId === response?.userID) {
    return "user";
  } else if (localId === response?.traderID) {
    return "trader";
  } else {
    return null;
  }
}

export {useGetUserType};
