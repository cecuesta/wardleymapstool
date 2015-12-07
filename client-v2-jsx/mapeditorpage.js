/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Navbar = require('react-bootstrap').Navbar;
var NavbarHeader = require('react-bootstrap').Navbar.Header;
var NavbarCollapse = require('react-bootstrap').Navbar.Collapse;
var NavbarBrand= require('react-bootstrap').NavbarBrand;
var PageHeader= require('react-bootstrap').PageHeader;
var NavItem = require('react-bootstrap').NavItem;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Nav = require('react-bootstrap').Nav;
var MapEditor = require('./mapeditor');
var RouterMixin = require('react-mini-router').RouterMixin;
var MapStore = require('./store/mapstore');
var MapTitleDescription = require('./maptitledescription');
var Button = require('react-bootstrap').Button;
var MapStatus = require('./mapstatus');
var EditableShortText = require('./editableshorttext');

var logoStyle = {
  height : 30,
  marginTop : -5
};
var urllite = require('urllite');
var url = urllite(window.location);
var mapId = url.hash;

//remove # at the beginning
if(mapId) {
  mapId = mapId.substring(1);
}

var origin = url.origin;

  var MapEditorPage = React.createClass({
    render: function() {
        return (
            <Grid fluid={true}>
              <Row className="show-grid">
                <Col xs={16} md={16}>
                  <Navbar fluid={true}>
                    <NavbarHeader>
                      <NavbarBrand>
                          <a href="/">
                            <img src="/logo.png" alt="Home" style={logoStyle}>
                            </img>
                          </a>
                      </NavbarBrand>
                    </NavbarHeader>
                    <Nav>
                      <NavItem eventKey={1} href="#">
                        <Glyphicon glyph="download-alt"></Glyphicon>
                        &nbsp;Download
                      </NavItem>
                      <NavItem eventKey={2} href="#">
                        <Glyphicon glyph="share"></Glyphicon>
                        &nbsp;Share...
                      </NavItem>
                    </Nav>
                    <Nav pullRight>
                       <NavItem eventKey={8} href="/profile">
                         <Glyphicon glyph="user"></Glyphicon> Username
                       </NavItem>
                       <NavItem eventKey={9} href="/logout">
                         <Glyphicon glyph="log-out"></Glyphicon> Logout
                       </NavItem>
                     </Nav>
                  </Navbar>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={10} sm={10} md={10} lg={10}>
                  <MapTitleDescription store={MapStore}/>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                  <MapStatus  store={MapStore}/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={16} md={16}>
                  <MapEditor mapid={mapId} origin={origin} store={MapStore}/>
                </Col>
              </Row>
            </Grid>
        );
    }
  });

  module.exports = MapEditorPage;