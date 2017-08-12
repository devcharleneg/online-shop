/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import {Row,Col,Thumbnail,Button} from 'react-bootstrap';


class HomeCarousel extends React.Component {
  render() {
  	var img1 = require('./images/sale/sale1.jpg');
  	var img2 = require('./images/sale/sale2.png');
  	var img3 = require('./images/sale/sale3.png');
    return (
	  <Row>
	    <Col xs={6} md={4}>
	      <Thumbnail src={img1}>
	        <h3>Dell Inspiron 7460</h3>
	        <div className={s.price}>P 48, 000</div>
	        <p>Description</p>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed luctus dui. In sit amet lacinia lectus, eget elementum dolor. Vivamus condimentum felis quis turpis fringilla laoreet. Fusce pretium mauris ante, vitae finibus risus luctus vitae.</p>
	        <p>
	          <Button bsStyle="primary">Add to Cart</Button>&nbsp;
	        </p>
	      </Thumbnail>
	    </Col>
	    <Col xs={6} md={4}>
	      <Thumbnail src={img2}>
	        <h3>Acer Aspire E5</h3>
	        <div className={s.price}>P 30, 000</div>
	        <p>Description</p>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed luctus dui. In sit amet lacinia lectus, eget elementum dolor. Vivamus condimentum felis quis turpis fringilla laoreet. Fusce pretium mauris ante, vitae finibus risus luctus vitae.</p>
	        <p>
	          <Button bsStyle="primary">Add to Cart</Button>&nbsp;
	        </p>
	      </Thumbnail>
	    </Col>
	    <Col xs={6} md={4}>
	      <Thumbnail src={img3}>
	        <h3>Asus Vivobook</h3>
	        <div className={s.price}>P 35, 000</div>
	        <p>Description</p>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed luctus dui. In sit amet lacinia lectus, eget elementum dolor. Vivamus condimentum felis quis turpis fringilla laoreet. Fusce pretium mauris ante, vitae finibus risus luctus vitae.</p>
	        <p>
	          <Button bsStyle="primary">Add to Cart</Button>&nbsp;
	        </p>
	      </Thumbnail>
	    </Col>
	    </Row>
    );
  }
}

export default withStyles(s)(HomeCarousel);
