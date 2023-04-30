import styled from "styled-components";

export const NFTDiv = styled.div`
  width: 75%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 0px;

  .content_show {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 70px;
    /* border-top: 1px solid #121117; */
    border-bottom: 1px solid #121117;

    .content_show_img {
      width: 48%;

      .content_show_image {
        width: 100%;
        border-radius: 8px;
        height: 450px;
      }

      @media (max-width: 720px) {
        width: 100%;
      }
    }

    .content_show_description {
      width: 48%;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 20px;

      .content_show_description_header {
        h2 {
          color: #121117;
          font-size: 32px;
          font-weight: 700;
        }
      }

      .content_show_description_description {
        p {
          color: #121117;
          font-size: 18px;
          font-weight: 400;
        }
      }

      .content_show_description_owner {
        p {
          color: #121117;
          font-size: 24px;
          font-weight: 400;

          span {
            font-weight: 700;
          }
        }
      }

      .content_show_description_price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .content_show_description_price_token {
          p {
            color: #121117;
            font-size: 16px;
            font-weight: 400;
          }
        }

        .content_show_description_price_money {
          p {
            color: #121117;
            font-size: 16px;
            font-weight: 500;
          }
        }
      }

      .content_show_description_button {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          background-color: transparent;
          color: #121117;
          border: 1px solid #121117;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          font-style: normal;
        }
      }

      @media (max-width: 720px) {
        width: 100%;
      }
    }

    @media (max-width: 920px) {
      padding: 50px 20px;
    }

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }

  .content_close {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;

    button {
      background-color: transparent;
      color: #121117;
      border: 1px solid #121117;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
    }
  }

  @media (max-width: 720px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;
