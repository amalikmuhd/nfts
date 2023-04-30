import {useSelector} from "react-redux";

function getUserType(response, userData) {
  let localId = userData?.data?.userData?._id;
  if (localId === response?.userID) {
    return "user";
  } else if (localId === response?.traderID) {
    return "trader";
  } else {
    return null;
  }
}

export {getUserType};
