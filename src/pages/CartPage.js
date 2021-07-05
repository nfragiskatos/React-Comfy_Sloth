import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContent, PageHero } from "../components";
import { useCartContext } from "../context/cart_context";
import { project } from "../ProjectProperties";

const CartPage = () => {
  const {
    cart,
    total_item,
    total_amount,
    shipping_fee,
    removeItem,
    toggleAmount,
    clearCart,
  } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to={project.nav.products} className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
