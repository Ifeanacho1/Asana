import "./css/Header.css"

const Header = () => {
  return (
    <>
      <header>
        <div className="HeaderDivL">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png" alt="" className="Logo"/>
            <ul className="HeaderUlL">
                <li>Product</li>
                <li>Solutions</li>
                <li>Learning & support</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className="HeaderDivR">
            <img src="https://images.seeklogo.com/logo-png/27/2/globe-logo-png_seeklogo-276795.png" alt="" className="WorldLogo"/>
            <ul className="HeaderUlR">
                <li>Contact sales</li>
                <li>Log in</li>
            </ul>
            <button className="HeaderBtn">Get started</button>
        </div>
      </header>

      <section>
            <h1 className="SectionH1">Supercharge your teams </h1>
            <h2 className="SectionH2">with AI that gets work done</h2>
            <h3 className="SectionH3">Give your teams AI that understands their work, keeps projects moving, and gets</h3>
            <h4 className="SectionH4">better the more your teams use it.</h4>
            <div className="ButtonDiv">
                <button className="SectionBtn1">Get started</button>
                <button className="SectionBtn2">Contact sales</button>
            </div>
      </section>
        
      <div className="SecondSection">
        <img src="https://embed-ssl.wistia.com/deliveries/5db8175a0d68c14dcbed7b9fcc50dbac.webp?image_crop_resized=1920x820" alt="" className="SecondSectionImg"/>
      </div> 

      <div className="ThirdSection">
        <div className="ThirdSectionDivL">
            <h1 className="TSDH">85% of Fortune 100
                <br/>companies choose Asana¹</h1>
        </div>
        <div className="ThirdSectionDivR">
            <img src="https://cdn.vectorstock.com/i/500p/29/26/amazon-logo-icon-vector-25322926.jpg" alt="" className="Amazon"/>
            <img src="https://cdn.freebiesupply.com/images/large/2x/accenture-logo-black-and-white.png" alt="" className="Accenture"/>
            <img src="https://trama-static.s3.eu-central-1.amazonaws.com/images/hall-of-fame/logos/89-logo.png" alt="" className="Johnson"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Dell_logo_2016_black.svg/3840px-Dell_logo_2016_black.svg.png" alt="" className="Dell"/>
            <img src="https://www.pngall.com/wp-content/uploads/5/Merck-And-Co-Logo-Background-PNG-Image.png" alt="" className="Merck"/>
        </div>
      </div>

      <div className="FourthSecion">
        <h1 className="FSH1">The platform for human + AI 
            <br/>collaboration</h1>
        </div>

      <div className="FifthSection">
        <div className="DivLine">
            <div className="FifthSectionUp">
                <button className="FifthSectionUpBtn1">Marketing</button>
                <button className="FifthSectionUpBtn2">Operations</button>
                <button className="FifthSectionUpBtn3">IT</button>
                <button className="FifthSectionUpBtn4">Leadership</button>
             </div>
            <div className="FifthSectionDown">
                <div className="FifthSectionDownDivL">
                    <img src="https://assets.asana.biz/transform/a06e7cef-41f6-4474-b06e-ae0e43501edb/homepage_ai_update?io=transform:fill,width:960&format=webp" alt="" className="FifthSectionDownImg"/>
                </div>
                <ul className="FifthSectionDownUlR">
                    <h1 className="FifthSectionDownH1R">Maximize campaign ROI</h1>
                    <li className="FifthSectionDownLiR">Streamline campaign management</li>
                    <li className="FifthSectionDownLiR">Enhance creative production</li>
                    <li className="FifthSectionDownLiR">Manage events and editorial calendars</li>
                    <button className="FifthSectionDownUlRBtn">Get started</button>                  
                </ul>
            </div>
        </div>
      </div>

        <div className="SixthSection">
            <h1 className="SSH1">See how Asana keeps work 
                <br/>moving across use cases</h1>
        </div>

        <div className="SeventhSection">
            <div className="SeventhSectionUp">
                <button className="SevenSectionUpBtn1">
                    <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="" className="SevenSectionUpBtn1Img"/>
                </button>
                <button className="SevenSectionUpBtn2">
                    <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="SevenSectionUpBtn2Img"/>
                </button>
            </div>
            <div className="SeventhSectionDown">
                <div className="SeventhSectionDownDiv1">
                    <img src="https://assets.asana.biz/transform/1fdda26a-ab23-4138-bd1a-956fca2c91cc/Illustration-ReportingTiles?io=transform:fill,width:1440&format=webp" alt="" className="SeventhSectionDownDiv1Img"/>
                    <h1 className="SeventhSectionDownDiv1H1">Campaign 
                        <br />management</h1>
                    <h2 className="SeventhSectionDownDiv1H2">Plan, track, and complete your
                        <br />campaigns all in one place.</h2>
                    <div className="SeventhSectionDownDiv1Div">
                        <h1 className="SeventhSectionDownDiv1Divh1">See campaign 
                            <br />management</h1>
                            <button className="SeventhSectionDownDiv1DivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="SeventhSectionDownDiv1DivBtnImg"/>
                            </button>
                        </div>
                </div>
                <div className="SeventhSectionDownDiv2">
                    <img src="https://assets.asana.biz/transform/5da0ba11-381c-4ce8-a264-0124cedbb07b/Illustration-EmptyCanvas?io=transform:fill,width:1440&format=webp" alt="" className="SeventhSectionDownDiv2Img"/>
                    <h1 className="SeventhSectionDownDiv2H1">Creative Production</h1>
                    <h2 className="SeventhSectionDownDiv2H2">Accelerate creative work by
                        <br />automating workflows from start 
                        <br />to finish.</h2>
                    <div className="SeventhSectionDownDiv2Div">
                        <h1 className="SeventhSectionDownDiv2Divh1">See creative production</h1>
                            <button className="SeventhSectionDownDiv2DivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="SeventhSectionDownDiv2DivBtnImg"/>
                            </button>
                    </div>
                </div>
                <div className="SeventhSectionDownDiv3">
                    <img src="https://assets.asana.biz/transform/9f8d6271-7b63-461c-bdaa-f51650301c8f/Illustration-ProjectManagement?io=transform:fill,width:1440&format=webp" alt="" className="SeventhSectionDownDiv3Img"/>
                    <h1 className="SeventhSectionDownDiv3H1">Project intake</h1>
                    <h2 className="SeventhSectionDownDiv3H2">Capturte, prioritize, and assign
                        <br />request automatically so your 
                        <br />teams have more time to work.</h2>
                    <div className="SeventhSectionDownDiv3Div">
                        <h1 className="SeventhSectionDownDiv3Divh1">See project intake</h1>
                            <button className="SeventhSectionDownDiv3DivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="SeventhSectionDownDiv3DivBtnImg"/>
                            </button>
                    </div>
                </div>
                <div className="SeventhSectionDownDiv4">
                    <img src="https://assets.asana.biz/transform/e8d4bf6c-013f-4913-806d-c400279f18c0/Illustration-GetStartedRocket?io=transform:fill,width:1440&format=webp" alt="" className="SeventhSectionDownDiv4Img"/>
                    <h1 className="SeventhSectionDownDiv4H1">Product launches</h1>
                    <h2 className="SeventhSectionDownDiv4H2">Coordinate teams, tasks, and
                        <br />timelines to keep every launch 
                        <br />on schedule.</h2>
                    <div className="SeventhSectionDownDiv4Div">
                        <h1 className="SeventhSectionDownDiv4Divh1">See project launches</h1>
                            <button className="SeventhSectionDownDiv4DivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="SeventhSectionDownDiv4DivBtnImg"/>
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="EightSection">
            <div className="EightSectionUp">
                <h1 className="EightSectionUpH1">What sets Asana apart</h1>
            </div>
            <div className="EightSectionDown">
                <div className="EightSectionDownL">
                    <div className="EightSectionDownLDivL">
                        <h1 className="EightSectionDownLDivLH1">Amplify your impact 
                            <br />with AI</h1>
                        <h2 className="EightSectionDownLDivLH2">Let Asana AI handle work for you—with the full
                            <br />context of your business—so your teams can
                            <br />achieve their goals faster.</h2>
                        <button className="EightSectionDownLDivLBtn">Meet AI Teammates</button>
                    </div>
                    <div className="EightSectionDownLDivR">
                        <img src="https://assets.asana.biz/transform/9c192ab3-d6e7-483b-abed-b2e08ba2e6c0/homepage_ai_update?io=transform:fill,width:1440&format=webp"alt="" className="EightSectionDownLDivRImg"/>
                    </div>
                </div>
                <div className="EightSectionDownR">
                    <h1 className="EightSectionDownRH1">More clarity and 
                        <br />accountability</h1>
                    <h2 className="EightSectionDownRH2">Connect strategic goals to the teams that help
                        <br />achieve them. Keep your company on track with AI
                        <br />working alongside your teams.</h2>
                    <button className="EightSectionDownRBtn">Learn about goals</button>
                </div>
            </div>
        </div>

        <div className="NinethSection">
            <div className="NinethSectionDiv">
                <div className="NinethSectionDivL">
                    <img src="https://assets.asana.biz/transform/9d71c62a-0d94-48e1-a980-68a38f671b00/web-uses-governmentindustry-asanagovdesktop-en-US?io=transform:fill,width:768&format=webp" alt="" className="NinethSectionDivLImg"/>
                </div>
                <div className="NinethSectionDivC">
                    <h1 className="NinethSectionDivCH1">Stay secure and compliant with Asana Gov</h1>
                    <h2 className="NinethSectionDivCH2">Asana Gov empowers government agencies to coordinate critical work—
                        <br />from strategic planning to rapid response—on a platform that's easy to
                        <br />implement, scales seamlessly, and meets your compliance needs.</h2>
                </div>
                <div className="NinethSectionDivR">
                    <button className="NinethSectionDivRBtn">Check out Asana Gov</button>
                </div>
            </div>
        </div>

        <div className="TenthSection">
            <h1 className="TenthSectionH1">Connect over 300+
                <br />integrations</h1>
            <h2 className="TenthSectionH2">Asana connects with the enterprise tools your
                <br />organization already uses, right out of the box.</h2>
            <button className="TenthSectionBtn">See all integrations</button>
        </div>

        <div className="TwelvethSection">
            <h1 className="TwelvethSectionH1">The world's top companies trust
                <br />Asana</h1>
                <button className="TwelvethSectionBtn">See all case studies</button>
        </div>
    </>
  )
}

export default Header
