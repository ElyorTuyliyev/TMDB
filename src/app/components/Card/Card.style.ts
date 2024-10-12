import styled from "@emotion/styled";

export const CardStyle = styled.div`
  .cinema__img-wrapper {
    position: relative;
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

  .cinema__img {
    width: 150px;
    min-height: 230px;
    border-radius: 10px;
  }

  .cinema__text-wrapper {
    transform: translate(20px, -27px);
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

  .cinema__date {
    font-size: 13px;
  }

  .cinema__title {
    font-weight: 600;
    width: 140px;
  }
`;
