import { styled } from "@styles";

export const CheckoutFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  width: 100%;
  background: #fff8f5 0% 0% no-repeat padding-box;
  padding: 25px;
  box-shadow: 0px 5px 10px #00000029;
`;

export const FooterContent = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

export const Payment = styled.div`
  margin-top: 25px;
  background-color: ${props => props.theme.colors.mainColor};
  width: fit-content;
  border-radius: 2px;
  cursor: pointer;
  p {
    padding: 14px 25px;
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.typography.baseFontSize};
    letter-spacing: 0.32px;
    text-transform: capitalize;
  }
`;
