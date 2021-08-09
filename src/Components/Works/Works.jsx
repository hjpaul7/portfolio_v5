import React from "react";
import { Divider, Card, Button, Row, Col, Image } from "antd";
import mobileShield from "../../img/mobile-shield.png";
import wheeler2 from "../../img/wheeler2.jpg";
import na from "../../img/na.png";
import bookworm from "../../img/bookwormz.png";
import efa from "../../img/efa.png";

const Works = () => {
  const { Meta } = Card;

  return (
    <>
      <div className="completed-works">
        <Divider orientation="left">Completed Works</Divider>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <Card
              hoverable
              style={{ width: "100%", marginBottom: "20px" }}
              cover={
                <Image
                  className="completed-works-image"
                  alt="code-databank"
                  src={mobileShield}
                />
              }
              actions={[
                <Button
                  type="ghost"
                  href="https://github.com/hustin-paul/code-databank"
                  target="blank"
                  style={{ width: "80%" }}
                >
                  Visit &raquo;
                </Button>,
              ]}
            >
              <Meta
                title="EFA Code-Databank"
                description="Tool to help LA's search, post, log errors and ask for help"
              />
            </Card>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  className="completed-works-image"
                  alt="la-hours"
                  src={mobileShield}
                />
              }
              actions={[
                <Button
                  type="ghost"
                  href="https://github.com/hustin-paul/la-hours"
                  target="blank"
                  style={{ width: "80%" }}
                >
                  Visit &raquo;
                </Button>,
              ]}
            >
              <Meta
                title="Learning Assistant Portal"
                description="Track hours, invoices, and view the learning gym schedule"
              />
            </Card>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <div>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <Image
                    className="completed-works-image"
                    alt="la-hours"
                    src={wheeler2}
                  />
                }
                actions={[
                  <Button
                    type="ghost"
                    href="https://github.com/hustin-paul/Housing_RedBadge"
                    target="blank"
                    style={{ width: "80%" }}
                  >
                    Visit &raquo;
                  </Button>,
                ]}
              >
                <Meta
                  title="Affordable Housing IN"
                  description="A resource to find and add Affordable Housing in Indiana"
                />
              </Card>
            </div>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <div>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <Image
                    className="completed-works-image"
                    alt="la-hours"
                    src={na}
                  />
                }
                actions={[
                  <Button
                    type="ghost"
                    href="https://hpj-na-client.herokuapp.com/"
                    target="blank"
                    style={{ width: "80%" }}
                  >
                    Visit &raquo;
                  </Button>,
                ]}
              >
                <Meta
                  title="Narcotics Anonymous IN"
                  description="A resource to find local meetings in Indianapolis"
                />
              </Card>
            </div>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <div>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <Image
                    className="completed-works-image"
                    alt="la-hours"
                    src={bookworm}
                  />
                }
                actions={[
                  <Button
                    type="ghost"
                    href="https://github.com/seanqiusd/BookWormzAPI"
                    target="blank"
                    style={{ width: "80%" }}
                  >
                    Visit &raquo;
                  </Button>,
                ]}
              >
                <Meta
                  title="BookWorm"
                  description="A C# console app for a book sharing API"
                />
              </Card>
            </div>
          </Col>
          <Col xl={8} lg={12} md={12} sm={24} xs={24}>
            <div>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <Image
                    className="completed-works-image"
                    alt="la-hours"
                    src={efa}
                  />
                }
                actions={[
                  <Button
                    type="ghost"
                    href="https://hustin-paul.github.io/staticLayout/"
                    target="blank"
                    style={{ width: "80%" }}
                  >
                    Visit &raquo;
                  </Button>,
                ]}
              >
                <Meta
                  title="Eleven Fifty Static Layout"
                  description="Static layout project for web dev Gold Badge"
                />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Works;
