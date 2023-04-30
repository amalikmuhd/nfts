import {
  NFT_DATA,
  LOADING,
  SINGLE_NFT,
  OPEN_MODAL,
  TOTAL_DATA,
  SEARCH_DATA,
  SEARCH_LOADER,
  SEARCH_CHECKER,
} from "../type";

const initialState = {
  nftData: {},
  loader: true,
  singleNFT: {},
  openModal: false,
  totalData: [],
  searchData: [],
  searchLoader: false,
  searchChecker: false,
};

const NFTReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NFT_DATA: {
      return {
        ...state,
        nftData: payload,
      };
    }

    case LOADING: {
      return {
        ...state,
        loader: payload,
      };
    }

    case SINGLE_NFT: {
      return {
        ...state,
        singleNFT: payload,
      };
    }

    case OPEN_MODAL: {
      return {
        ...state,
        openModal: payload,
      };
    }

    case TOTAL_DATA: {
      return {
        ...state,
        totalData: payload,
      };
    }

    case SEARCH_DATA: {
      return {
        ...state,
        searchData: payload,
      };
    }

    case SEARCH_LOADER: {
      return {
        ...state,
        searchLoader: payload,
      };
    }

    case SEARCH_CHECKER: {
      return {
        ...state,
        searchChecker: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default NFTReducer;
