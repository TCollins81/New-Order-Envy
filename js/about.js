import React from 'react';
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'


export default React.createClass ({
  getDefaultProps(){
    return {

    }
  },
  render () {
    return (
      <section className="about">
        <div className="aboutWrapper">
        <h1 className="aboutTitle">
        Welcome to Order Envy!
        </h1>
        <p className="aboutDescription"> Have you ever placed an order for lunch or dinner and suddenly the server brings out the entree of the neighboring table and you instantly second guess your decision? No worries! Just search for whatever you are craving and let us do the rest. We proudly showcase the world renowned restaurants of The Pearl Brewery in San Antonio, Texas to give you the ability to preview how an entree will look before you order, search for the best places that cater to dietary restrictions, as well as the opportunity to browse through the entree selections to familarize yourself with all of the culinary creations of the hottest chefs in San Antonio before you step foot inside the restaurant! Check out the Pearl restaurants below and rememeber... Dont get mad. Get ORDER ENVY. </p>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c8.0.200.200/p200x200/11143345_996395780405455_1877908404817920053_n.png?oh=97ddb0cef49902c2c25969cf3474fb52&oe=5941F22D" alt="bakery lorraine logo"/>
          <div className="infoWrapper">
          <h2 className="restaurantName"> BAKERY LORRAINE </h2>
            <p className="restaurantHours"> Mon - Sun 7AM - 8PM
           </p>
            <p className="restaurantContact"> 306 Pearl Parkway Suite 110 <br></br>
              San Antonio,TX 78215
            </p>
            <a className="phoneLink" href="tel:2108625582"> (210) 862-5582 </a>
          </div>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-0/p200x200/16807517_1557609267600316_7061097067900876656_n.jpg?oh=09c081639e0f1de5674f88a2852775cf&oe=592DA9A6" alt="boiler house logo"/>
          <h2 className="restaurantName"> BOILER HOUSE </h2>
          <p className="restaurantHours">
             Mon - Thurs 11am - 10pm <br></br>
             Fri 11am - Midnight <br></br>
             Sat 10am - Midnight <br></br>
             Sun 10am - 10pm
          </p>
          <p className="restaurantContact"> 312 Pearl Parkway Building 3 <br></br>
             San Antonio, TX 78215
          </p>
          <a className="phoneLink" href="tel:2103544644"> (210) 354-4644 </a>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c1.7.100.100/p112x112/12495245_532085670298983_7909236998744342473_n.png?oh=6938f870db2212d114a1bff4943ff7f6&oe=592CC06B" alt="botika logo"/>
          <h2 className="restaurantName"> BOTIKA </h2>
          <p className="restaurantHours"> Mon Closed <br></br>
             Tues - Thurs 5pm - 10pm Dinner <br></br>
             Fri - Sat 5pm - 10:30pm Dinner <br></br>
             Tues - Fri 3pm - 6pm Happy Hour <br></br>
             Sat 2pm - 5pm Happy Hour <br></br>
             Fri - Sat 10:30pm - 12am Late Night Menu <br></br>
             Sun 11am - 3pm Brunch </p>
          <p className="restaurantContact"> 303 Pearl Parkway <br></br>
             San Antonio, TX 78215</p>
           <a className="phoneLink" href="tel:2109519393"> (210) 951-9393 </a>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/12240882_448018695389508_920700878730368404_o.jpg?oh=010e7cb93b132b52614d885775259f0f&oe=593B03AF" alt="aged meat"/>
          <h2 className="restaurantName"> CURED </h2>
            <p className="restaurantHours">Mon - Fri  11am - 3pm Lunch <br></br>
               Mon - Sat 5pm - 11pm Dinner <br></br>
               Sat 10am - 3pm Bunch <br></br>
             Sun Closed <br></br>
               Mon - Sat 3pm - 6pm Happy Hour </p>
             <p className="restaurantContact">306 Pearl Parkway <br></br>
                San Antonio, TX 78215</p>
              <a className="phoneLink" href="tel:2103143929"> (210) 314-3929 </a>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c66.66.828.828/s100x100/227137_455269841202647_363334880_n.jpg?oh=c41faf060d857215937e7f437ba9e8e5&oe=592DCCDD" alt="the granary logo"/>
          <h2 className="restaurantName"> THE GRANARY </h2>
            <p className="restaurantHours"> Sun & Mon Closed <br></br>
              Tues - Sat 11am - 4:30pm - Lunch <br></br>
              Tues - Fri 4:30pm - 5:30pm - Social Hour <br></br>
              Tues - Thurs 5:30pm - 10pm - Dinner <br></br>
              Fri - Sat  5:30pm - 11pm - Dinner</p>
            <p className="restaurantContact">602 Avenue A <br></br>
              San Antonio, Texas 78215</p>
            <a className="phoneLink" href="tel:2102280124"> (210) 228-0124 </a>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/1979467_831339140229173_5375992120322013724_n.jpg?oh=1d71545e4c6d6d2b234ea2856ebfab23&oe=592BF2F1" alt="green outdoor area"/>
          <div className="infoWrapperGreen">
          <h2 className="restaurantName"> GREEN </h2>
            <p className="restaurantHours"> Mon - Thurs 8am - 9pm <br></br>
              Fri 8am - 8pm <br></br>
              Sat Closed <br></br>
              Sun 9am - 9pm</p>
            <p className="restaurantContact">200 E. Grayson Street Suite 120 <br></br>
              San Antonio, TX 78215</p>
            <a className="phoneLink" href="tel:2103205865">(210) 320-5865</a>
          </div>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-1/c201.14.172.172/p200x200/258902_173268346068437_3225926_o.jpg?oh=7b6a1460b9aa375762e23ba2122b9ae5&oe=59295900" alt="il sogno osteria logo"/>
          <h2 className="restaurantName"> IL SOGNO OSTERIA </h2>
            <p className="restaurantHours">Mon Closed <br></br>
              Tues - Fri 11:30am - 3pm - Lunch <br></br>
              Tues - Fri 7:30am - 10am - Breakfast <br></br>
              Tues - Sat 6pm - 9:30 pm - Dinner <br></br>
              Sat & Sun 9:30am - 3pm - Brunch <br></br>
              Sun 6pm - 9pm - Dinner </p>
            <p className="restaurantContact">200 East Grayson Street Suite 100 <br></br>
              San Antonio, TX 78215</p>
            <a className="phoneLink" href="tel:2102233900">(210) 223-3900 </a>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/p200x200/15873137_1353918791325057_5248673796172502500_n.jpg?oh=f863db42de36f544347a718a1e870eb2&oe=592E67B9" alt="la gloria storefront"/>
          <div className="infoWrapper">
          <h2 className="restaurantName"> LA GLORIA </h2>
            <p className="restaurantHours"> Mon - Thurs 11am - 10pm <br></br>
                Fri - Sat 11am - Midnight <br></br>
                Sun 11am - 10pm</p>
              <p className="restaurantContact">100 East Grayson Street <br></br>
                San Antonio, TX 78215</p>
              <a className="phoneLink" href="tel:2102679040">(210) 267-9040 </a>
          </div>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/p200x200/12043040_699317563537726_4630572670181650633_n.jpg?oh=7722db4da030484e15acfd2fe60a2d2d&oe=59407458" alt="nao logo"/>
          <h2 className="restaurantName"> NAO LATIN GASTRO BAR </h2>
            <p className="restaurantHours"> Mon - Fri 11am - 1:30pm - Lunch <br></br>
              Sat - Sun  10am - 3pm - Brunch <br></br>
              Wed - Thurs 5:30pm - 9pm - Dinner <br></br>
              Fri - Sat 5:30pm - 10pm - Dinner </p>
            <p className="restaurantContact">312 Pearl Parkway <br></br>
              San Antonio, TX 78215</p>
            <a className="phoneLink" href="tel:2105546484">(210) 554-6484</a>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/p200x200/15027988_754291928043676_6107994312378210796_n.png?oh=6e1f8bed07a834380433b14681bd0c2b&oe=593E6792" alt="southerleigh logo"/>
          <h2 className="restaurantName"> SOUTHERLEIGH </h2>
            <p className="restaurantHours"> Mon - Wed 11am - 11pm <br></br>
              Thurs - Fri 11am - 1am <br></br>
              Sat 10am - 12am <br></br>
              Sun 10am - 4pm</p>
            <p className="restaurantContact">303 Pearl Parkway Suite 120 <br></br>
              San Antonio, TX 78215</p>
        </div>

        <div className="restaurant">
          <img className="restaurantImg" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/14680940_1644647679160075_7518158022578371762_o.jpg?oh=dfe29ba024055d5db9964eacb2358ae1&oe=5929DA63" alt="supper patio"/>
          <h2 className="restaurantName"> SUPPER </h2>
            <p className="restaurantHours"> Breakfast 7am - 10am Daily <br></br>
                Lunch 11am - 2pm Daily <br></br>
                Sun - Thurs 5pm - 10pm Dinner <br></br>
                Fri - Sat 5pm - 11pm Dinner</p>
              <p className="restaurantContact">Hotel Emma <br></br>
                136 E. Grayson <br></br>
                San Antonio, TX 78215</p>
              <a className="phoneLink" href="tel:2104488351"> (210) 448-8351</a>
        </div>

        <h2 className="moreInfo">For more information about the The Pearl Brewery click <a className="pearlLink" href="http://atpearl.com">HERE</a>.</h2>
        </div>
      </section>

    )
  }
})
