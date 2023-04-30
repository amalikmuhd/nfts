import React from "react";
import { NFTDiv } from "./styles/nft.styles";
import Logo from "../../Asset/auction_1.jpg";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { GetSingleNFT, ModalChecker } from "../../store/action/nftAction";
import { NavLink, useNavigate } from "react-router-dom";

const NftShow = () => {
  const dispatch = useDispatch();
  const singleNFT = useSelector((state) => state?.NFTReducer?.singleNFT);

  return (
    <NFTDiv>
      <div className="content_show">
        <div className="content_show_img">
          <img
            src={
              singleNFT?.featured_image_url !== null
                ? singleNFT?.featured_image_url
                : singleNFT?.banner_image_url !== null
                ? singleNFT?.banner_image_url
                : singleNFT?.image_url !== null
                ? singleNFT?.image_url
                : Logo
            }
            alt={"st"}
            className="content_show_image"
          />
        </div>
        <div className="content_show_description">
          <div className="content_show_description_header">
            <h2>{singleNFT?.name}</h2>
          </div>
          <div className="content_show_description_description">
            <p>
              {singleNFT?.description
                ? singleNFT?.description
                : "There is no description at this point for this nft but will be uploaded soon. please check back later."}
            </p>
          </div>

          <div className="content_show_description_owner">
            <p>
              Owned By <span>{singleNFT?.name?.split(" ")[0]}</span>
            </p>
          </div>

          <div className="content_show_description_price">
            <div className="content_show_description_price_token">
              <p>
                Current Price{" "}
                <CurrencyFormat
                  value={singleNFT?.stats?.market_cap ?? 0}
                  displayType={"text"}
                  decimalScale={4}
                  fixedDecimalScale
                  // prefix={"$"}
                  suffix={` ETH`}
                />
              </p>
            </div>
            {/* <div className="content_show_description_price_money">
              <p>
                <CurrencyFormat
                  value={singleNFT?.stats?.market_cap ?? 0}
                  displayType={"text"}
                  decimalScale={4}
                  fixedDecimalScale
                  // prefix={"$"}
                  suffix={` $`}
                />
              </p>
            </div> */}
          </div>

          <NavLink
            to={`${singleNFT?.exchange_url}`}
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            <div className="content_show_description_button">
              <button>View in opensea</button>
            </div>
          </NavLink>
        </div>
      </div>
      <div
        className="content_close"
        onClick={() => {
          dispatch(ModalChecker(false));
          dispatch(GetSingleNFT({}));
        }}
      >
        <button>Close</button>
      </div>
    </NFTDiv>
  );
};

export default NftShow;
