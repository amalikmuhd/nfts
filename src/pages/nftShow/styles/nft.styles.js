import styled from "styled-components";
import bgPic from "../../../Asset/inner_bg.jpg";

export const NftDiv = styled.div`
  width: 100vw;
  height: ${({ loading }) => (loading ? "100vh" : "unset")};
  background-color: #09080d;

  .hero {
    background-image: linear-gradient(
        to right,
        rgba(15, 10, 21, 0.707),
        rgba(15, 10, 21, 0.707)
      ),
      url(${bgPic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 64px;
      color: #fff;
      font-weight: 900;

      @media (max-width: 720px) {
        font-size: 52px;
      }
    }
  }

  .spinnerControl {
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination {
    padding: 40px 200px;
    width: 100vw;

    @media (max-width: 970px) {
      padding: 0px 100px;
    }

    @media (max-width: 720px) {
      padding: 0px 50px;
    }

    @media (max-width: 635px) {
      padding: 0px 10px;
    }
  }

  .explore_nft {
    padding: 40px 200px;
    width: 100vw;

    @media (max-width: 970px) {
      padding: 0px 100px;
    }

    @media (max-width: 720px) {
      padding: 0px 50px;
    }

    @media (max-width: 635px) {
      padding: 0px 10px;
    }

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
`;
