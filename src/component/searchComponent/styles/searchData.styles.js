import styled from "styled-components";

export const SearchDiv = styled.div`
  width: 75%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 0px;
  position: relative;
  transition: 2s all;

  .spinnerControl {
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search_icon_wrapper {
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 20px;

    .search_icon_wrapper_icon_body {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .search_icon_wrapper_icon {
        font-size: 24px;
        color: #16151a;
      }
    }
  }

  .search_Content {
    width: 100%;
    padding: 40px 50px;

    .search_Content_input {
      input {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        background: #ffffff;
        border: 1px solid #aaa7a7;
        border-radius: 7.5px;
        padding: 15px 15px;
        outline: none;
        margin-right: 15px;
        width: 55%;

        @media screen and (max-width: 720px) {
          width: 50%;
        }

        @media screen and (max-width: 500px) {
          width: 95%;
          margin: 0px 0px 20px 0px;
        }
      }
    }

    .explore_nft {
      width: 100%;
      margin: 30px 0px 5px 0px;
      padding: 20px 0px 5px 0px;

      .explore_nft_container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        .explore_nft_wrapper {
          width: 23%;
          height: 570px;
          box-shadow: 0px 0px 8px 4px rgba(21, 20, 26, 0.404);
          padding: 30px;
          border-radius: 8px;
          background-color: #16151a;
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 30px;

          @media (max-width: 1540px) {
            width: 30%;
          }

          @media (max-width: 1250px) {
            width: 48%;
          }

          @media (max-width: 600px) {
            width: 100%;
          }

          .explore_nft_image {
            img {
              width: 100%;
              height: 240px;
              border-radius: 8px;
            }
          }

          .explore_nft_name {
            p {
              color: #fff;
              font-size: 22px;
              font-weight: 600;
            }
          }

          .explore_nft_user {
            p {
              font-size: 22px;
              font-weight: 600;
              color: #ffffff78;

              span {
                color: #fff;
              }
            }
          }

          .explore_nft_amount {
            p {
              color: #fff;
              font-size: 20px;
              font-weight: 400;
            }
          }

          .explore_nft_button {
            display: flex;
            align-items: center;

            .explore_nft_button_wrapper {
              background-color: transparent;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 20px;
              display: flex;
              align-items: center;
              gap: 10px;
              padding: 10px 20px;
              cursor: pointer;

              .explore_nft_button_wrapper_icon_body {
                display: flex;
                align-items: center;
                justify-content: center;

                .explore_nft_button_wrapper_icon {
                  font-size: 18px;
                  color: #fff;
                }
              }

              p {
                font-size: 16px;
                font-weight: 500;
                font-style: normal;
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 920px) {
      padding: 40px 20px;
    }
  }

  @media (max-width: 720px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;
