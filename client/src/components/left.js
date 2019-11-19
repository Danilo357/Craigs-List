import React from "react";
function Left(props) {
  return (
    <div className="leftside">
      <div id="leftbar">
        <div id="logo">
          <a href="https://www.craigslist.org/about/sites">craigslist</a>
        </div>

        <ul id="postlks">
          <li>
            <a id="post" href="https://post.craigslist.org/c/lvg">
              create a posting
            </a>
          </li>
          <li>
            <a href="https://accounts.craigslist.org/login/home">my account</a>
          </li>
        </ul>

        <form
          id="search"
          className="homepage-search"
          action="/search/"
          method="GET"
        >
          <input type="hidden" name="sort" value="rel"></input>
          <input type="hidden" name="ordinal" id="ordinal" value="1"></input>
          <input type="hidden" name="ratio" id="ratio" value="0"></input>
          <input type="hidden" name="clicked" id="clicked" value="0"></input>
          <input
            id="query"
            className="search"
            name="query"
            data-autocomplete="search-count"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder="search craigslist"
            autoFocus="autofocus"
            autoComplete="off"
          ></input>
        </form>

        <h4 id="calban">
          <a href="/d/events-classes/search/eee">event calendar</a>
        </h4>
        <table className="cal">
          <tbody>
            <tr className="days">
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
              <th>S</th>
            </tr>
            <tr>
              <td className="">11</td>
              <td className="">12</td>
              <td className="">13</td>
              <td className="">14</td>
              <td className="today ">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-15">
                  15
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-16">
                  16
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-17">
                  17
                </a>
              </td>
            </tr>
            <tr>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-18">
                  18
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-19">
                  19
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-20">
                  20
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-21">
                  21
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-22">
                  22
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-23">
                  23
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-24">
                  24
                </a>
              </td>
            </tr>
            <tr>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-25">
                  25
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-26">
                  26
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-27">
                  27
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-28">
                  28
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-29">
                  29
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-11-30">
                  30
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-01">
                  1
                </a>
              </td>
            </tr>
            <tr>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-02">
                  2
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-03">
                  3
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-04">
                  4
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-05">
                  5
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-06">
                  6
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-07">
                  7
                </a>
              </td>
              <td className="">
                <a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-12-08">
                  8
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <ul className="leftlinks" id="user_resources">
          <li>
            <a href="https://www.craigslist.org/about/help/">
              help, faq, abuse, legal
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/scams">
              avoid scams &amp; fraud
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/safety">
              personal safety tips
            </a>
          </li>
          <br />
          <li>
            <a href="//www.craigslist.org/about/terms.of.use.en-us">
              terms of use<sup className="neu">new</sup>
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/privacy.policy">
              privacy policy
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/help/system-status">
              system status
            </a>
          </li>
          <br />
        </ul>

        <ul className="leftlinks" id="about_craigslist">
          <li>
            <a href="https://www.craigslist.org/about/">about craigslist</a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/craigslist_is_hiring">
              craigslist is hiring in sf
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/open_source">
              craigslist open source
            </a>
          </li>
          <br />
          <li>
            <a href="http://blog.craigslist.org/">craigslist blog</a>
          </li>
          <br />
          <li>
            <a href="https://www.craigslist.org/about/best/all/">
              best-of-craigslist
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.youtube.com/user/craigslist">craigslist TV</a>
          </li>
          <br />

          <li>
            <a href="http://www.craigslistjoe.com/">"craigslist joe"</a>
          </li>
          <br />
          <li>
            <a href="http://craigconnects.org/">craig connects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Left;
