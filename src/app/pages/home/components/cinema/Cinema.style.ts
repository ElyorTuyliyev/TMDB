import styled from "styled-components";

export const CinemaStyle = styled.div`
  .cinema__title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 24px 0;
  }

  .cinemas__wrapper {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    scrollbar-color: #000 #e4e4e4;
    scrollbar-width: thin;
  }

  .cinema__btn {
    padding: 5px 10px;
  }
`;
