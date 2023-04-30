import styled from "styled-components";

export const Navdiv = styled.div`
  width: 100vw;
  background-color: #121117;
  position: fixed;
  top: 0;

  .nav_wrapper {
    width: 100%;
    padding: 30px 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 970px) {
      padding: 30px 100px;
    }

    @media (max-width: 720px) {
      padding: 30px 50px;
    }

    @media (max-width: 635px) {
      padding: 30px 10px;
    }

    .nav_content_State {
      display: flex;
      align-items: center;
      gap: 40px;
      color: #fff;

      .active {
        color: red;
      }

      .nav_content_State_text_body {
        .nav_content_State_text {
          color: #fff;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          padding: 8px 14px;
        }
      }
    }
  }

  .search_wrapper {
    .search_icon_body {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 5px;
      cursor: pointer;

      .search_icon {
        color: #fff;
        font-size: 24px;
      }
    }
  }
`;
