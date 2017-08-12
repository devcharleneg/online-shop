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
import {Carousel,Image} from 'react-bootstrap';


class HomeCarousel extends React.Component {
  render() {
  	var img1 = require('./images/carousel1.jpg');
  	var img2 = require('./images/carousel2.jpg');
  	var img3 = require('./images/carousel3.jpg');
    return (
	  <Carousel>
	    <Carousel.Item>
	      <Image width={900} height={500} src={img1}/>
	      <Carousel.Caption>
	        <h3>First slide label</h3>
	        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	      </Carousel.Caption>
	    </Carousel.Item>
	    <Carousel.Item>
	      <img width={900} height={500} alt="900x500" src={img2}/>
	      <Carousel.Caption>
	      </Carousel.Caption>
	    </Carousel.Item>
	    <Carousel.Item>
	      <img width={900} height={500} alt="900x500" src={img3}/>
	      <Carousel.Caption>
	        <h3>Third slide label</h3>
	        <p></p>
	      </Carousel.Caption>
	    </Carousel.Item>
	  </Carousel>

    );
  }
}

export default withStyles(s)(HomeCarousel);
