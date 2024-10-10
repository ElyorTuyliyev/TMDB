import styled from "styled-components";

export const CinemaStyle = styled.div`
  .cinema__title-wrapper {
    display: flex;
    align-items: center;
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

  .cinema__img-wrapper {
    position: relative;
  }

  .cinema__img {
    width: 150px;
    border-radius: 10px;
  }
  .cinema__img-icon {
    position: absolute;
    width: 25px;
    height: 25px;
    display: flex;
    background-color: #e3dcdc94;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    right: 10px;
    top: 10px;
  }

  .cinema__percentage-wrapper {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #081c22;
  }

  .cinema__percentage {
    width: 35px;
    height: 35px;
    border: 3px solid #d2d531;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 14px;
  }

  .cinema__text-wrapper {
    transform: translate(20px, -27px);
  }

  .cinema__title {
    font-weight: 600;
  }

  .cinema__date {
    font-size: 14px;
  }
`;
