import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SearchDiv } from "./styles/searchData.styles";
import author from "../../Asset/auction_1.jpg";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import {
  getSearchChecker,
  getSearchData,
  GetSingleNFT,
  ModalChecker,
} from "../../store/action/nftAction";
import { BsFillHandbagFill } from "react-icons/bs";
import Spiner, { SpinerDark } from "../spinner";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const totalData = useSelector((state) => state?.NFTReducer?.totalData);
  const searchData = useSelector((state) => state?.NFTReducer?.searchData);
  const searchLoader = useSelector((state) => state?.NFTReducer?.searchLoader);

  const [query, setQuery] = useState("");

  const HandleChange = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setQuery(value);

      const filterforSearch = totalData?.filter((item) =>
        item?.name?.toLowerCase().includes(value?.toLowerCase())
      );

      dispatch(getSearchData(filterforSearch.slice(0, 4)));
    } else {
      setQuery("");
      dispatch(getSearchData([]));
    }
  };

  return (
    <SearchDiv>
      <div className="search_icon_wrapper">
        <div
          className="search_icon_wrapper_icon_body"
          onClick={() => {
            dispatch(getSearchChecker(false));
            setQuery("");
            dispatch(getSearchData([]));
          }}
        >
          <AiOutlineClose className="search_icon_wrapper_icon" />
        </div>
      </div>

      {searchLoader ? (
        <div className="spinnerControl">
          <SpinerDark />
        </div>
      ) : (
        <div className="search_Content">
          <div className="search_Content_input">
            <input
              type={"text"}
              value={query || ""}
              placeholder={"search..."}
              onChange={HandleChange}
            />
          </div>

          <div className="explore_nft">
            <div className="explore_nft_container">
              {query !== "" && query !== null ? (
                searchData?.map((item, key) => (
                  <div key={key} className="explore_nft_wrapper">
                    <div className="explore_nft_image">
                      <img
                        src={
                          item?.featured_image_url !== null
                            ? item?.featured_image_url
                            : item?.banner_image_url !== null
                            ? item?.banner_image_url
                            : item?.image_url !== null
                            ? item?.image_url
                            : author
                        }
                        alt="section"
                      />
                    </div>
                    <div className="explore_nft_name">
                      <p>{item?.name}</p>
                    </div>
                    <div className="explore_nft_user">
                      <p>
                        Owned By <span>{item?.name?.split(" ")[0]}</span>
                      </p>
                    </div>
                    <div className="explore_nft_amount">
                      <p>
                        <CurrencyFormat
                          value={item?.stats?.market_cap ?? 0}
                          displayType={"text"}
                          decimalScale={4}
                          fixedDecimalScale
                          // prefix={"$"}
                          suffix={` ETH`}
                        />
                      </p>
                    </div>
                    <div className="explore_nft_button">
                      <button
                        className="explore_nft_button_wrapper"
                        onClick={() => {
                          dispatch(getSearchChecker(false));
                          setQuery("");
                          dispatch(getSearchData([]));
                          dispatch(ModalChecker(true));
                          dispatch(GetSingleNFT(item));
                        }}
                      >
                        <div className="explore_nft_button_wrapper_icon_body">
                          <BsFillHandbagFill className="explore_nft_button_wrapper_icon" />
                        </div>
                        <p>Place a Bid</p>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p>Search not found...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </SearchDiv>
  );
};

export default SearchComponent;
