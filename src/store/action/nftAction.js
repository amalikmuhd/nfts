import {
  LOADING,
  NFT_DATA,
  OPEN_MODAL,
  SEARCH_CHECKER,
  SEARCH_DATA,
  SEARCH_LOADER,
  SINGLE_NFT,
  TOTAL_DATA,
} from "../type";

export const getAllNFT = (param) => (dispatch) => {
  dispatch({ type: NFT_DATA, payload: param });
};

export const Loader = (param) => (dispatch) => {
  dispatch({ type: LOADING, payload: param });
};

export const GetSingleNFT = (param) => (dispatch) => {
  dispatch({ type: SINGLE_NFT, payload: param });
};

export const ModalChecker = (param) => (dispatch) => {
  dispatch({ type: OPEN_MODAL, payload: param });
};

export const getTotalData = (param) => (dispatch) => {
  dispatch({ type: TOTAL_DATA, payload: param });
};

export const getSearchData = (param) => (dispatch) => {
  dispatch({ type: SEARCH_DATA, payload: param });
};

export const getSearchLoader = (param) => (dispatch) => {
  dispatch({ type: SEARCH_LOADER, payload: param });
};

export const getSearchChecker = (param) => (dispatch) => {
  dispatch({ type: SEARCH_CHECKER, payload: param });
};
