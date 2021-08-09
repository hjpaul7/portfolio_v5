<Row justify="start">
  <Col span={8}>
    <div className="background"></div>
    <div className="intro-left">
      <img src={avatar_1} alt="avatar" className="avatar" />
      <p>Hustin Jeffers</p>
      <p>Web Developer</p>
    </div>
  </Col>
  <Col span={10} offset={1}>
    {/* <div className="container-fluid"> */}
    {/* <Row justify="center"> */}
    <div className="intro">
      <h3 className="display-4 mb-3 mt-4">About Me</h3>
      <hr />
      <h6 className="display-6 mb-3">
        JS | Typscript | React | HTML5 | CSS3 | C#
      </h6>
      <div className="icon-row mb-4">
        <div>
          <i
            className="devicon-javascript-plain icon-spacing"
            style={{ marginRight: "-2px" }}
          ></i>
        </div>
        <div>
          <i
            className="devicon-typescript-plain icon-spacing"
            style={{ marginRight: "5px" }}
          ></i>
        </div>
        <div>
          <i className="devicon-react-original icon-spacing"></i>
        </div>
        <div>
          <i className="devicon-html5-plain icon-spacing"></i>
        </div>
        <div>
          <i
            className="devicon-css3-plain icon-spacing"
            style={{ marginRight: "-7px" }}
          ></i>
        </div>
        <div>
          <i className="devicon-csharp-plain icon-spacing"></i>
        </div>
      </div>
      <p className="intro-text">
        I'm a Web Developer graduated from Eleven Fifty Academy in Indianapolis.
        I have a lot of ideas to push out and a passion for developing web apps
        that benefit the greater good and improve resources for the Indianapolis
        community. A few examples of projects I've worked on are Affordable
        Housing in Indiana and a revamp of the Indianapolis Narcotics Anonymous
        web page. The Affordable Housing Indiana project is a resource to
        provide find Section 8 and Section 42 in Indiana, and the Indianapolis
        Narcotics Anonymous project is to search, and find information about
        local meetings in Indianapolis.
      </p>
      <br />
      <p className="intro-text">
        I also enjoy building projects that help Eleven Fifty Academy. Current
        projects are listed below!
      </p>
      <br />
      <p className="intro-text">
        I'm looking forward to expanding my network and sending my resume out,
        which is downloadable below along with my LinkedIn and Github. Give me a
        visit, I always appreciate opinions on my work on GitHub. Let's
        collaborate?
      </p>
      <a
        href="https://www.linkedin.com/in/hustin-jeffers-3270571a8/"
        target="_blank"
        className="card-link"
        style={{
          fontSize: "14px",
          color: "lightcoral",
          textDecoration: "none",
        }}
      >
        LinkedIn
      </a>
      <a
        href="files/Hustin-Jeffers.pdf"
        target="_blank"
        className="card-link"
        style={{
          fontSize: "14px",
          color: "lightcoral",
          textDecoration: "none",
        }}
      >
        Resume
      </a>
    </div>
    <div style={{ padding: "20px" }}>
      <Divider orientation="left">Completed Works</Divider>
    </div>
    <Row justify="center" gutter={[16, 16]}>
      <div className="completed-works">
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: "100%", marginBottom: "20px" }}
              cover={
                <Image
                  alt="code-databank"
                  src={mobileShield}
                  style={{
                    width: "100%",
                    height: "10vw",
                    objectFit: "cover",
                  }}
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
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  alt="la-hours"
                  src={mobileShield}
                  style={{
                    width: "100%",
                    height: "10vw",
                    objectFit: "cover",
                  }}
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
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  alt="la-hours"
                  src={wheeler2}
                  style={{
                    width: "100%",
                    height: "10vw",
                    objectFit: "cover",
                  }}
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
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  alt="la-hours"
                  src={na}
                  style={{
                    width: "100%",
                    height: "10vw",
                    objectFit: "cover",
                  }}
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
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  alt="la-hours"
                  src={bookworm}
                  style={{
                    width: "100%",
                    height: "10vw",
                    objectFit: "cover",
                  }}
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
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <Image
                  alt="la-hours"
                  src={efa}
                  style={{
                    width: "100%",
                    height: "10vw",
                    objectFit: "cover",
                  }}
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
      </div>
    </Row>
  </Col>
</Row>;
