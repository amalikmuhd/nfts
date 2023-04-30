import styled from "styled-components";

export const LandingPageDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0px 200px;

  @media (max-width: 970px) {
    padding: 0px 100px;
  }

  @media (max-width: 720px) {
    padding: 0px 50px;
  }

  @media (max-width: 635px) {
    padding: 0px 10px;
  }

  .landing_wrapper {
    .landing_header_wrapper {
      width: 55%;
      .landing_section_one {
        font-size: 64px;
        color: #fff;
        font-weight: 900;

        @media (max-width: 720px) {
          font-size: 52px;
        }
      }

      .landing_section_two {
        font-size: 24px;
        color: #fff;
        opacity: 0.6;
        font-weight: 500;
        padding: 10px 0px;
      }

      @media (max-width: 1540px) {
        width: 70%;
      }

      @media (max-width: 1250px) {
        width: 80%;
      }

      @media (max-width: 720px) {
        width: 90%;
      }

      @media (max-width: 635px) {
        width: 100%;
      }
    }

    .button_wrapper {
      display: flex;
      align-items: center;
      gap: 30px;
      margin: 30px 0px;

      .button_wrapper_one {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        cursor: pointer;

        &:hover {
          background-color: #09080d;
        }

        .button_wrapper_one_icon_body {
          display: flex;
          align-items: center;
          justify-content: center;

          .button_wrapper_one_icon {
            font-size: 18px;
            color: #fff;
          }
        }

        .button_wrapper_one_text {
          font-size: 16px;
          font-weight: 500;
          font-style: normal;
        }
      }
    }
  }
`;
