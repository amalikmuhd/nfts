import APIs from "./api";

const NFTService = {
  EthNft: async () => {
    return APIs.get(
      `/collections?chain=eth-main&exchange=opensea&page_size=50`
    ).then((data) => {
      return data.data;
    });
  },

  PolyNft: async () => {
    return APIs.get(
      `/collections?chain=poly-main&exchange=opensea&page_size=50`
    ).then((data) => {
      return data.data;
    });
  },
};

export default NFTService;
