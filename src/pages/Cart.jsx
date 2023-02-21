import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h3 className="text-center">Your cart is empty</h3>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-6 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">Taxes and shipping will calculate in checkout</p>
              <div>
                
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn w-100 ">
                  <Link to="/checkout">Checkout</Link>
                </motion.button>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  // const { id, image01, title, price, quantity } = props.item;

  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}pc</td>
      <motion.td whileTap={{ scale: 1.2 }} onClick={deleteProduct}>
        <i className="ri-delete-bin-line"></i>
      </motion.td>
    </tr>
  );
};

export default Cart;
