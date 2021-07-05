import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero } from "../components";
import { useCartContext } from "../context/cart_context";
import { project } from "../ProjectProperties";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to={project.nav.products} className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div className="empty">
            <h2>Payment options intentionally left blank</h2>
            <Link to={project.nav.homepage} className="btn">
              homepage
            </Link>
          </div>
          // <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
