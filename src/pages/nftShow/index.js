import React, { useEffect, useState } from "react";
import { NftDiv } from "./styles/nft.styles";
import author from "../../Asset/auction_1.jpg";
import { BsFillHandbagFill } from "react-icons/bs";
import NFTService from "../../service/nftApi";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../../component/spinner";
import {
  getAllNFT,
  GetSingleNFT,
  Loader,
  ModalChecker,
} from "../../store/action/nftAction";
import { PaginationComponent } from "../../component/Pagination";
import CurrencyFormat from "react-currency-format";

const NFT = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state?.NFTReducer?.loader);
  const nftData = useSelector((state) => state?.NFTReducer?.nftData);

  const [change, setChange] = useState(false);

  const fetchData = async () => {
    dispatch(Loader(true));
    const constants = await Promise.all([
      NFTService.EthNft(),
      NFTService.PolyNft(),
    ]);

    const totalsArray = [...constants[0]?.results, ...constants[1]?.results];

    const parentArray = [];
    const total_arrays_value = totalsArray.length / 12;

    for (let i = 0; i < Math.ceil(total_arrays_value); i++) {
      parentArray.push(totalsArray.splice(0, 12));
    }

    dispatch(
      getAllNFT({
        total: 100,
        number_of_pages: Math.ceil(total_arrays_value),
        page: 0,
        result: parentArray,
      })
    );
    dispatch(Loader(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const IncreamentPage = async () => {
    if (Number(nftData?.page) <= Number(nftData?.number_of_pages) - 2) {
      const num = Number(nftData?.page) + 1;

      setChange(!change);
      dispatch(getAllNFT({ ...nftData, page: num }));
      setChange(!change);
    }
  };

  const DecreamentPage = () => {
    if (Number(nftData?.page) > 0) {
      const num = Number(nftData?.page) - 1;

      setChange(!change);
      dispatch(getAllNFT({ ...nftData, page: num }));
      setChange(!change);
    }
  };

  return (
    <>
      <NftDiv loading={loading}>
        <div className="hero">
          <p>Explore NFTs</p>
        </div>

        {loading ? (
          <div className="spinnerControl">
            <Spiner />
          </div>
        ) : (
          <div className="explore_nft">
            <div className="explore_nft_container">
              {nftData?.result[nftData?.page]?.map((item, key) => (
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
              ))}
            </div>
          </div>
        )}

        {Object.keys(nftData).length > 0 && !loading && (
          <div className="pagination">
            <PaginationComponent
              skip={nftData?.page}
              onNext={IncreamentPage}
              onPrev={DecreamentPage}
              details={nftData}
            />
          </div>
        )}
      </NftDiv>
    </>
  );
};

export default NFT;
