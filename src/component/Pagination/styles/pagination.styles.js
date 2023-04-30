import styled from "styled-components";

export const PaginationDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 5px;

  .newTable__paginationNumber {
    margin: 0px 1.2rem;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  .newTable__paginationNavigation {
    // width: 100%;
    display: flex;
    align-items: center;

    .newTable__paginationNavigation__button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 0.932988px solid #d0d5dd;
      box-shadow: 0px 0.932988px 1.86598px rgba(16, 24, 40, 0.05);
      border-radius: 7.4639px;
      padding: 0rem 1rem;
      height: 40px;
      margin: 0rem 1rem;
      text-decoration: none;
      cursor: pointer;

      color: #fff;
      background-color: transparent;

      font-style: normal;
      font-weight: 600;
      font-size: 14.037px;
      line-height: 19px;

      &:hover {
        transform: scale(0.97);
      }

      &:disabled {
        background: rgba(255, 255, 255, 0.3);
        color: rgba(52, 64, 84, 0.2);
      }
    }
  }
`;

export const Mobile_PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
  margin: 13px 0 10px 0;
  .__left {
    color: #fff;
  }
  .__current {
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  .__right {
    color: #fff;
  }
`;
