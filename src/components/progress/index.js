import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";

const Progress = ({ number, title }) => {
  return (
    <div className="box">
      <Row>
        <Col>
          <div className="percent">
            <svg>
              <defs>
                <linearGradient id="Gradient">
                  <stop offset={"0%"} stopColor="#eecda3" />
                  <stop offset={"100%"} stopColor="#ef629f" />
                </linearGradient>
              </defs>
              <circle cx="70" cy="70" r="80" strokeLinecap="round"></circle>
              <circle cx="70" cy="70" r="70" strokeLinecap="round"></circle>
            </svg>
            <div className="number">
              <h3>
                {number}
                <span>%</span>
              </h3>
            </div>
            <h6 className="text">{title}</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Progress;
