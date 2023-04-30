import {useState} from "react";
import {useSelector} from "react-redux";

function useGetTokenBalance(key) {
  const {userData} = useSelector((state) => state.generalReducer);
  const dd = userData?.data?.userData.tokens.filter((item) => item.tokenSymbol === key)[0];

  return [dd?.balance];
}

export {useGetTokenBalance};
