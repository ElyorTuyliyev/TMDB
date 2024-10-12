import styled from "styled-components";

const FooterStyle = styled.div`
  .footer {
    background-color: #032541;
    padding: 50px 0;
  }

  .footer__wrapper {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .footer__list-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    color: #fff;
  }

  .footer__link-list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export default FooterStyle;
