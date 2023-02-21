import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__cart">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  <span>
                    Shipping: <br /> Free Shipping
                  </span>
                  <span>$0</span>
                </h6>

                <h4 className="d-flex align-items-center justify-content-between">
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">
                  Place on order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
