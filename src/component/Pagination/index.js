import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useWindowDimensions from "../../hooks/useWindowDimension";
import {
  Mobile_PaginationDiv,
  PaginationDiv,
} from "./styles/pagination.styles";

const PaginationComponent = ({ onPrev, onNext, skip, details }) => {
  const { width } = useWindowDimensions();

  return width <= 650 ? (
    <Mobile_PaginationDiv>
      <div
        className="__left"
        onClick={() => onPrev()}
        style={{
          color: `${skip === 0 ? "#344054" : "#fff"}`,
        }}
      >
        <AiOutlineArrowLeft size={20} />
      </div>
      <span className="__current">Page {skip}</span>
      <div
        className="__right"
        onClick={() => onNext()}
        style={{
          color: `${
            skip === Number(details?.number_of_pages) - 1 ? "#344054" : "#fff"
          }`,
        }}
      >
        <AiOutlineArrowRight size={20} />
      </div>
    </Mobile_PaginationDiv>
  ) : (
    <PaginationDiv>
      <div className="newTable__paginationNumber">Page {skip}</div>
      <div className="newTable__paginationNavigation">
        <button
          className="newTable__paginationNavigation__button"
          style={{
            color: `${skip === 0 ? "#344054" : "#fff"}`,
            border: `1px solid ${skip === 0 ? "#344054" : "#fff"}`,
          }}
          onClick={() => onPrev()}
        >
          previous
        </button>
        <button
          className="newTable__paginationNavigation__button"
          style={{
            color: `${
              skip === Number(details?.number_of_pages) - 1 ? "#344054" : "#fff"
            }`,
            border: `1px solid ${
              skip === Number(details?.number_of_pages) - 1 ? "#344054" : "#fff"
            }`,
          }}
          onClick={() => onNext()}
        >
          next
        </button>
      </div>
    </PaginationDiv>
  );
};

export { PaginationComponent };
