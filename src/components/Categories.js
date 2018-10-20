import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return(
    <div>
    <section className="home-cat-sec text-center">
    <div className="container">
      <h2 className="site-title">Browse by top categories</h2>
      <div className="row">
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>Concerts</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>Cricket</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>Theatre & Arts</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>Amusement Parks</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>Sports</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
        <div className="col-sm-4 cat-box">
          <a href="#" className="block-link">
            <div className="cat-txt">
              <h3>Restaurants</h3>
            </div>
            <img src="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg" alt="" className="img-full-width"/>
          </a>
        </div>
      </div>
    </div>
  </section>

<section class="home-cat-sec text-center">
<div class="container-fluid">
  <h2 class="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/" target="_blank"><img src="http://www.kyazoonga.com/images/iticket-logo.png" style={ {width: '100px'} } /></a> to create and sell your event tickets online <small>Discover and purchase tickets to cool events created and listed by organizers directly</small></h2>
  <div class="row">
    <div class="col-sm-6 cat-box">
      <div id="dvYoutube">

      </div>
    </div>
    <div class="col-sm-6 cat-box">
      <a href="#" class="block-link">
        <div class="cat-txt">
          <h3>Kyazoonga Blog</h3>
        </div>
        <img src="https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="" class="img-full-width" />
      </a>
    </div>
  </div>
</div>
</section>

</div>
        );
    }
}


export default Categories;