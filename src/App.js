import "./App.css";
import Nav from "./component/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import NFT from "./pages/nftShow";
import NotFound from "./pages/pageNotFound";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSearchLoader, getTotalData } from "./store/action/nftAction";
import { useDispatch, useSelector } from "react-redux";
import NFTService from "./service/nftApi";
import SearchComponent from "./component/searchComponent";
import ModalComponent from "./component/modal/modalComponent";
import NftShow from "./component/nftShowMore/nftShow";

function App() {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state?.NFTReducer?.openModal);
  const searchChecker = useSelector(
    (state) => state?.NFTReducer?.searchChecker
  );

  const fetchData = async () => {
    dispatch(getSearchLoader(true));
    const constants = await Promise.all([
      NFTService.EthNft(),
      NFTService.PolyNft(),
    ]);

    const totalsArray = [...constants[0]?.results, ...constants[1]?.results];

    dispatch(getTotalData(totalsArray));
    dispatch(getSearchLoader(false));
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/view_nft" element={<NFT />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <ModalComponent open={searchChecker}>
          <SearchComponent />
        </ModalComponent>

        <ModalComponent open={openModal}>
          <NftShow />
        </ModalComponent>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
}

export default App;
