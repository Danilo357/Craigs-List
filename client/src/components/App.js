import React from "react";
import { useUsers } from "../hooks";

function App() {
  const { users } = useUsers();
  const { subs } = useUsers();

  console.log(users);

  return (
    <div className="main">
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
              <a href="https://accounts.craigslist.org/login/home">
                my account
              </a>
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
              <a href="https://www.youtube.com/user/craigslist">
                craigslist TV
              </a>
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
      <div className="container">
        <nav id="topban" className="regular">
          <div>
            <input
              className="enter-area"
              type="text"
              placeholder="Las Vegas"
            ></input>
          </div>
          <div className="custom-area no-name">
            <h2 className="area"></h2>
          </div>
        </nav>
        {users.map((user, i) => (
          <div key={i}>
            <p className="categories">{user.name}</p>
          </div>
        ))}
      </div>
      <div className="rightside">
        <div id="rightbar">
          <div id="langlinks">
            <select name="lang" id="chlang" className="js-only">
              <option value="?lang=da&amp;setlang=1">dansk</option>
              <option value="?lang=de&amp;setlang=1">deutsch</option>
              <option value="?lang=en&amp;cc=us&amp;setlang=1">english</option>
              <option value="?lang=es&amp;cc=mx&amp;setlang=1">español</option>
              <option value="?lang=fr&amp;setlang=1">français</option>
              <option value="?lang=it&amp;setlang=1">italiano</option>
              <option value="?lang=pt&amp;setlang=1">português</option>
              <option value="?lang=fi&amp;setlang=1">suomi</option>
              <option value="?lang=sv&amp;setlang=1">svenska</option>
              <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
              <option value="?lang=tr&amp;setlang=1">türkçe</option>
              <option value="?lang=ru&amp;setlang=1">русский</option>
              <option value="?lang=zh&amp;setlang=1">中文</option>
              <option value="?lang=ja&amp;setlang=1">日本語</option>
              <option value="?lang=ko&amp;setlang=1">한국말</option>
            </select>

            <div id="nojschlang" className="no-js ">
              <a href="?lang=da&amp;setlang=1">dansk</a>
              <br />
              <a href="?lang=de&amp;setlang=1">deutsch</a>
              <br />
              <b>english</b>
              <br />
              <a href="?lang=es&amp;cc=mx&amp;setlang=1">español</a>
              <br />
              <a href="?lang=fr&amp;setlang=1">français</a>
              <br />
              <a href="?lang=it&amp;setlang=1">italiano</a>
              <br />
              <a href="?lang=pt&amp;setlang=1">português</a>
              <br />
              <a href="?lang=fi&amp;setlang=1">suomi</a>
              <br />
              <a href="?lang=sv&amp;setlang=1">svenska</a>
              <br />
              <a href="?lang=vi&amp;setlang=1">tiếng việt</a>
              <br />
              <a href="?lang=tr&amp;setlang=1">türkçe</a>
              <br />
              <a href="?lang=ru&amp;setlang=1">русский</a>
              <br />
              <a href="?lang=zh&amp;setlang=1">中文</a>
              <br />
              <a href="?lang=ja&amp;setlang=1">日本語</a>
              <br />
              <a href="?lang=ko&amp;setlang=1">한국말</a>
              <br />
            </div>
          </div>

          <ul className="menu collapsible">
            <li className="expand s">
              <h5 className="ban hot active">nearby cl</h5>
              <ul className="acitem">
                <li className="s">
                  <a href="//bakersfield.craigslist.org/">bakersfield</a>
                </li>
                <li className="s">
                  <a href="//elko.craigslist.org/">elko</a>
                </li>
                <li className="s">
                  <a href="//flagstaff.craigslist.org/">flagstaff</a>
                </li>
                <li className="s">
                  <a href="//fresno.craigslist.org/">fresno</a>
                </li>
                <li className="s">
                  <a href="//goldcountry.craigslist.org/">gold country</a>
                </li>
                <li className="s">
                  <a href="//hanford.craigslist.org/">hanford</a>
                </li>
                <li className="s">
                  <a href="//imperial.craigslist.org/">imperial co</a>
                </li>
                <li className="s">
                  <a href="//inlandempire.craigslist.org/">inland empire</a>
                </li>
                <li className="s">
                  <a href="//losangeles.craigslist.org/">los angeles</a>
                </li>
                <li className="s">
                  <a href="//merced.craigslist.org/">merced</a>
                </li>
                <li className="s">
                  <a href="//modesto.craigslist.org/">modesto</a>
                </li>
                <li className="s">
                  <a href="//mohave.craigslist.org/">mohave co</a>
                </li>
                <li className="s">
                  <a href="//orangecounty.craigslist.org/">orange co</a>
                </li>
                <li className="s">
                  <a href="//palmsprings.craigslist.org/">palm springs</a>
                </li>
                <li className="s">
                  <a href="//phoenix.craigslist.org/">phoenix</a>
                </li>
                <li className="s">
                  <a href="//prescott.craigslist.org/">prescott</a>
                </li>
                <li className="s">
                  <a href="//provo.craigslist.org/">provo</a>
                </li>
                <li className="s">
                  <a href="//reno.craigslist.org/">reno</a>
                </li>
                <li className="s">
                  <a href="//saltlakecity.craigslist.org/">salt lake</a>
                </li>
                <li className="s">
                  <a href="//sandiego.craigslist.org/">san diego</a>
                </li>
                <li className="s">
                  <a href="//slo.craigslist.org/">san luis obispo</a>
                </li>
                <li className="s">
                  <a href="//santabarbara.craigslist.org/">santa barbara</a>
                </li>
                <li className="s">
                  <a href="//santamaria.craigslist.org/">santa maria</a>
                </li>
                <li className="s">
                  <a href="//showlow.craigslist.org/">show low</a>
                </li>
                <li className="s">
                  <a href="//stgeorge.craigslist.org/">st george</a>
                </li>
                <li className="s">
                  <a href="//stockton.craigslist.org/">stockton</a>
                </li>
                <li className="s">
                  <a href="//tucson.craigslist.org/">tucson</a>
                </li>
                <li className="s">
                  <a href="//ventura.craigslist.org/">ventura</a>
                </li>
                <li className="s">
                  <a href="//visalia.craigslist.org/">visalia-tulare</a>
                </li>
                <li className="s">
                  <a href="//yuma.craigslist.org/">yuma</a>
                </li>
              </ul>
            </li>
            <li className="s">
              <h5 className="ban hot">us cities</h5>
              <ul className="acitem">
                <li className="s">
                  <a href="http://atlanta.craigslist.org/">atlanta</a>
                </li>
                <li className="s">
                  <a href="http://austin.craigslist.org/">austin</a>
                </li>
                <li className="s">
                  <a href="http://boston.craigslist.org/">boston</a>
                </li>
                <li className="s">
                  <a href="http://chicago.craigslist.org/">chicago</a>
                </li>
                <li className="s">
                  <a href="http://dallas.craigslist.org/">dallas</a>
                </li>
                <li className="s">
                  <a href="http://denver.craigslist.org/">denver</a>
                </li>
                <li className="s">
                  <a href="http://detroit.craigslist.org/">detroit</a>
                </li>
                <li className="s">
                  <a href="http://houston.craigslist.org/">houston</a>
                </li>
                <li className="s">
                  <a href="http://lasvegas.craigslist.org/">las&nbsp;vegas</a>
                </li>
                <li className="s">
                  <a href="http://losangeles.craigslist.org/">
                    los&nbsp;angeles
                  </a>
                </li>
                <li className="s">
                  <a href="http://miami.craigslist.org/">miami</a>
                </li>
                <li className="s">
                  <a href="http://minneapolis.craigslist.org/">minneapolis</a>
                </li>
                <li className="s">
                  <a href="http://newyork.craigslist.org/">new&nbsp;york</a>
                </li>
                <li className="s">
                  <a href="http://orangecounty.craigslist.org/">
                    orange&nbsp;co
                  </a>
                </li>
                <li className="s">
                  <a href="http://philadelphia.craigslist.org/">philadelphia</a>
                </li>
                <li className="s">
                  <a href="http://phoenix.craigslist.org/">phoenix</a>
                </li>
                <li className="s">
                  <a href="http://portland.craigslist.org/">portland</a>
                </li>
                <li className="s">
                  <a href="http://raleigh.craigslist.org/">raleigh</a>
                </li>
                <li className="s">
                  <a href="http://sacramento.craigslist.org/">sacramento</a>
                </li>
                <li className="s">
                  <a href="http://sandiego.craigslist.org/">san&nbsp;diego</a>
                </li>
                <li className="s">
                  <a href="http://seattle.craigslist.org/">seattle</a>
                </li>
                <li className="s">
                  <a href="http://sfbay.craigslist.org/">sf&nbsp;bayarea</a>
                </li>
                <li className="s">
                  <a href="http://washingtondc.craigslist.org/">wash dc</a>
                </li>
              </ul>
            </li>
            <li className="s">
              <h5 className="ban hot">us states</h5>
              <ul className="acitem">
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/al">alabama</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ak">alaska</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/az">arizona</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ar">arkansas</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ca">california</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/co">colorado</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ct">connecticut</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/dc">dc</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/de">delaware</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/fl">florida</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ga">georgia</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/gu">guam</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/hi">hawaii</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/id">idaho</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/il">illinois</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/in">indiana</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ia">iowa</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ks">kansas</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ky">kentucky</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/la">louisiana</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/me">maine</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/md">maryland</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ma">mass</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/mi">michigan</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/mn">minnesota</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ms">mississippi</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/mo">missouri</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/mt">montana</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/nc">n carolina</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ne">nebraska</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/nv">nevada</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/nj">new jersey</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/nm">new mexico</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ny">new york</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/nh">n hampshire</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/nd">north dakota</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/oh">ohio</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ok">oklahoma</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/or">oregon</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/pa">pennsylvania</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/pr">puerto rico</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ri">rhode island</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/sc">s carolina</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/sd">south dakota</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/tn">tennessee</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/tx">texas</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/ut">utah</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/vt">vermont</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/va">virginia</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/wa">washington</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/wv">west virginia</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/wi">wisconsin</a>
                </li>
                <li className="s">
                  <a href="//geo.craigslist.org/iso/us/wy">wyoming</a>
                </li>
              </ul>
            </li>
            <li className="">
              <h5 className="">cl worldwide </h5>
              <ul className="">
                <li className="">
                  <a href="//calgary.craigslist.org/">calgary</a>
                </li>
                <li className="">
                  <a href="//edmonton.craigslist.org/">edmonton</a>
                </li>
                <li className="">
                  <a href="//halifax.craigslist.org/">halifax</a>
                </li>
                <li className="">
                  <a href="//montreal.craigslist.org/">montreal</a>
                </li>
                <li className="">
                  <a href="//ottawa.craigslist.org/">ottawa</a>
                </li>
                <li className="">
                  <a href="//saskatoon.craigslist.org/">saskatoon</a>
                </li>
                <li className="">
                  <a href="//toronto.craigslist.org/">toronto</a>
                </li>
                <li className="">
                  <a href="//vancouver.craigslist.org/">vancouver</a>
                </li>
                <li className="">
                  <a href="//victoria.craigslist.org/">victoria</a>
                </li>
                <li className="">
                  <a href="//winnipeg.craigslist.org/">winnipeg</a>
                </li>
              </ul>
            </li>
            <li className="">
              <h5 className="">ca provs</h5>
              <ul className="acitem">
                <li className="">
                  <h5></h5>
                  <ul className="acitem">
                    <li className="">
                      <a href="//geo.craigslist.org/iso/eg">egypt</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/et">ethiopia</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/gh">ghana</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ke">kenya</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ma">morocco</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/za">south africa</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/tn">tunisia</a>
                    </li>
                  </ul>
                </li>

                <li className="s">
                  <h5 className="t">americas</h5>
                  <ul className="item">
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ar">argentina</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/bo">bolivia</a>
                    </li>
                    <li className="">
                      <a href="http://rio.craigslist.org/">brazil</a>
                    </li>
                    <li className="">
                      <a href="https://www.craigslist.org/about/sites#CA">
                        canada
                      </a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/cl">chile</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/co">colombia</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/cr">costa rica</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/do">dom republic</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ec">ecuador</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/sv">el salvador</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/gt">guatemala</a>
                    </li>
                    <li className="">
                      <a href="http://mexicocity.craigslist.org/">mexico</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ni">nicaragua</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/pa">panama</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/pe">peru</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/pr">puerto rico</a>
                    </li>
                    <li className="">
                      <a href="https://www.craigslist.org/about/sites#US">
                        united states
                      </a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/uy">uruguay</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/vi">
                        us virgin islands
                      </a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ve">venezuela</a>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <h5></h5>
                  <ul className="">
                    <li className="">
                      <a href="//geo.craigslist.org/iso/bd">bangladesh</a>
                    </li>
                    <li className="">
                      <a href="http://shanghai.craigslist.org/">china</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/hk">hong kong</a>
                    </li>
                    <li className="">
                      <a href="http://bangalore.craigslist.org/">india</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/id">indonesia</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ir">iran</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/iq">iraq</a>
                    </li>
                    <li className="">
                      <a href="http://telaviv.craigslist.org/">israel</a>
                    </li>
                    <li className="">
                      <a href="http://tokyo.craigslist.org/">japan</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/kw">kuwait</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/lb">lebanon</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/my">malaysia</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/pk">pakistan</a>
                    </li>
                    <li className="">
                      <a href="http://manila.craigslist.org/">philippines</a>
                    </li>
                    <li className="">
                      <a href="http://moscow.craigslist.org/">russia</a>
                    </li>
                    <li className="">
                      <a href="http://singapore.craigslist.org/">singapore</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/kr">south korea</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/tw">taiwan</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/th">thailand</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/tr">turkey</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ae">uae</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/vn">vietnam</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ps">west bank</a>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <h5></h5>
                  <ul className="">
                    <li className="">
                      <a href="//geo.craigslist.org/iso/at">austria</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/be">belgium</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/bg">bulgaria</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/hr">croatia</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/cz">czech republic</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/dk">denmark</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/fi">finland</a>
                    </li>
                    <li className="">
                      <a href="http://paris.craigslist.org/">france</a>
                    </li>
                    <li className="">
                      <a href="http://berlin.craigslist.org/">germany</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/gr">greece</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/hu">hungary</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/is">iceland</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ie">ireland</a>
                    </li>
                    <li className="">
                      <a href="http://rome.craigslist.org/">italy</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/lu">luxembourg</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/nl">netherlands</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/no">norway</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/pl">poland</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/pt">portugal</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ro">romania</a>
                    </li>
                    <li className="">
                      <a href="http://moscow.craigslist.org/">russia</a>
                    </li>
                    <li className="">
                      <a href="http://madrid.craigslist.org/">spain</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/se">sweden</a>
                    </li>
                    <li className="">
                      <a href="http://zurich.craigslist.org/">switzerland</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/tr">turkey</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ua">ukraine</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/gb">united kingdom</a>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <h5></h5>
                  <ul className="item">
                    <li className="">
                      <a href="//geo.craigslist.org/iso/eg">egypt</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/iq">iraq</a>
                    </li>
                    <li className="">
                      <a href="http://telaviv.craigslist.org/">israel</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/kw">kuwait</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/lb">lebanon</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/tr">turkey</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ae">uae</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/ps">west bank</a>
                    </li>
                  </ul>
                </li>

                <li className="">
                  <h5></h5>
                  <ul className="acitem">
                    <li className="">
                      <a href="http://sydney.craigslist.org/">australia</a>
                    </li>
                    <li className="">
                      <a href="//geo.craigslist.org/iso/gu">guam</a>
                    </li>
                    <li className="">
                      <a href="http://auckland.craigslist.org/">new zealand</a>
                    </li>
                    <li className="">
                      <a href="http://manila.craigslist.org/">philippines</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
