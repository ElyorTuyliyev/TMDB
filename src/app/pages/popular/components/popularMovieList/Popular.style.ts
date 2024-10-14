import styled from "@emotion/styled";

export const PopularMovieListStyle = styled.div`
  .popular__wrapper {
    display: flex;
    gap: 16px;
  }

  .popular__sort-wrapper {
    max-width: 254px;
    height: fit-content;
    width: 100%;
  }

  .popular__movie-list-wrapper {
    width: 100%;
    display: grid;
    gap: "16px";
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
  }

  .popular__movie-list-btn {
    margin: 10px 0;
    font-weight: 600;
    font-size: 18px;
  }
`;
