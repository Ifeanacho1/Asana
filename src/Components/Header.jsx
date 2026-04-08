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

        <div className="EleventhSection">
            <div className="EleventhSectionUp">
                <div className="EleventhSectionUpDiv1">
                    <img src="https://assets.asana.biz/m/1eac689324ddc14c/original/Microsoft.svg" alt="" className="EleventhSectionUpDiv1Img"/>
                </div>
                <div className="EleventhSectionUpDiv2">
                    <img src="https://assets.asana.biz/m/150594e58876e038/original/Google-Drive.svg" alt="" className="EleventhSectionUpDiv2Img"/>
                </div>
                <div className="EleventhSectionUpDiv3">
                    <img src="https://assets.asana.biz/m/46e228ae7dab2f0f/original/Slack.svg" alt="" className="EleventhSectionUpDiv3Img"/>
                </div>
                <div className="EleventhSectionUpDiv4">
                    <img src="https://assets.asana.biz/m/49baba0ab294b013/original/Tableau.svg" alt="" className="EleventhSectionUpDiv4Img"/>
                </div>
            </div>
            <div className="EleventhSectionDown">
                <div className="EleventhSectionDownDiv1">
                    <img src="https://assets.asana.biz/m/1d7a9d3a9aa4ebd1/original/Nightfall.svg" alt="" className="EleventhSectionDownDiv1Img"/>
                </div>
                <div className="EleventhSectionDownDiv2">
                    <img src="https://assets.asana.biz/m/4e953904d53c54e/original/Microsoft-Outlook.svg" alt="" className="EleventhSectionDownDiv2Img"/>
                </div>
                <div className="EleventhSectionDownDiv3">
                    <img src="https://assets.asana.biz/m/717f7eae038a9050/original/Microsoft-Teams.svg" alt="" className="EleventhSectionDownDiv3Img"/>
                </div>
                <div className="EleventhSectionDownDiv4">
                    <img src="https://assets.asana.biz/m/3af9c9731a7fe964/original/Figma.svg" alt="" className="EleventhSectionDownDiv4Img"/>
                </div>
            </div>
        </div>

        <div className="TwelvethSection">
            <h1 className="TwelvethSectionH1">The world's top companies trust
                <br />Asana</h1>
                <button className="TwelvethSectionBtn">See all case studies</button>
        </div>

        <div className="ThirteenSection">
            <div className="ThirteenSectionUp">
                <button className="ThirteenSectionUpBtn1">
                    <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="" className="ThirteenSectionUpBtn1Img"/>
                </button>
                <button className="ThirteenSectionUpBtn2">
                    <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="ThirteenSectionUpBtn2Img"/>
                </button>
            </div>
            <div className="ThirteenSectionDown">
                <div className="ThirteenSectionDownL">
                    <div className="ThirteenSectionDownLUp">
                        <img src="https://assets.asana.biz/m/37f23cc2d55080f/original/Danone_40px_quote.svg" alt="" className="ThirteenSectionDownLUpImg"/>
                    </div>
                    <div className="ThirteenSectionDownLDown">
                        <h1 className="ThirteenSectionDownLDownH1">Company Size</h1>
                        <h2 className="ThirteenSectionDownLDownH2">Enterprise</h2>
                        <h3 className="ThirteenSectionDownLDownH3">Industry</h3>
                        <h4 className="ThirteenSectionDownLDownH4">Food & hospitality</h4>
                    </div>
                </div>
                <div className="ThirteenSectionDownR">
                    <h1 className="ThirteenSectionDownRH1">"Asana makes everything shareable, which</h1>
                    <h2 className="ThirteenSectionDownRH2">saves us time executing programs
                        <br />because it's so much easier to replicate
                        <br />and learn from what others have done.</h2>
                    <h3 className="ThirteenSectionDownRH3">Simon Levinson</h3>
                    <h4 className="ThirteenSectionDownRH4">Global Digital Manufacturing Process Innovation Manager, Danone</h4>
                    <button className="ThirteenSectionDownRBtn">Read case study</button>
                </div>
            </div>
        </div>

        <div className="ForteenSection">
            <div className="ForteenSectionDivC">
                <div className="ForteenSectionDivCL">
                    <h1 className="ForteenSectionDivCLH1">Get started easily</h1>
                    <h2 className="ForteenSectionDivCLH2">Tour the platform, read a few deep dives, or kickstart 
                        <br />your work management journey with the right
                        <br />template.</h2>
                </div>
                <div className="ForteenSectionDivCR">
                    <div className="ForteenSectionDivCRT">
                        <div className="ForteenSectionDivCRTDivL">
                            <h1 className="ForteenSectionDivCRTDivLH1">Try the Asana demo</h1>
                            <h2 className="ForteenSectionDivCRTDivLH2">See Asana in action</h2>
                        </div>
                        <div className="ForteenSectionDivCRTDivR">
                            <button className="ForteenSectionDivCRTDivRBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="ForteenSectionDivCRTDivRBtnImg"/>
                            </button>
                        </div>
                    </div>
                    <div className="ForteenSectionDivCRM">
                        <div className="ForteenSectionDivCRMDivL">
                            <h1 className="ForteenSectionDivCRMDivLH1">Discover resources</h1>
                            <h2 className="ForteenSectionDivCRMDivLH2">Help articles and tutorials</h2>
                        </div>
                        <div className="ForteenSectionDivCRMDivR">
                            <button className="ForteenSectionDivCRMDivRBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="ForteenSectionDivCRMDivRBtnImg"/>
                            </button>
                        </div>
                    </div>
                    <div className="ForteenSectionDivCRD">
                        <div className="ForteenSectionDivCRDDivL">
                            <h1 className="ForteenSectionDivCRDDivLH1">Start with a template</h1>
                            <h2 className="ForteenSectionDivCRDDivLH2">Get started faster with a template</h2>
                        </div>
                        <div className="ForteenSectionDivCRDDivR">
                            <button className="ForteenSectionDivCRDDivRBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="ForteenSectionDivCRDDivRBtnImg"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="FifteenSection">
            <div className="FifteenSectionUp">
                <img src="https://assets.asana.biz/transform/8d1a1cac-7296-49b4-b09a-f0e032bf7ae9/2025-Forrester-CWM-Card-Image?io=transform:fill,width:960&format=webp" alt="" className="FifteenSectionUpImg"/>
                <img src="https://assets.asana.biz/transform/ace1daba-48cc-4d84-8f77-b14f65bd9cff/thumbnail_gartnerlogoupdate_static?io=transform:fill,width:1120&format=webp" alt="" className="FifteenSectionUpImg"/>
                <img src="https://assets.asana.biz/transform/3fe8cd2a-6a9a-4c71-96d7-acd70b2682d0/compare-monday-fy26-experts-g2?io=transform:fill,width:960&format=webp" alt="" className="FifteenSectionUpImg"/>
            </div>
            <div className="FifteenSectionDown">
                <div className="FifteenSectionDownL">
                    <h1 className="FifteenSectionDownLH1">A Leader in The Forrester Wave:
                        <br />Collaborative Work Management Tools
                        <br />2025 Report</h1>
                    <div className="FifteenSectionDownLDiv">
                        <h1 className="FifteenSectionDownLDivH1">Get the Report</h1>
                            <button className="FifteenSectionDownLDivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="FifteenSectionDownLDivBtnImg"/>
                            </button>
                    </div>
                </div>
                <div className="FifteenSectionDownC">
                    <h1 className="FifteenSectionDownCH1">A Leader in the 2025 Gartner Magic
                        <br />Quadrant for Collaborative Work
                        <br />Management three years in a row</h1>
                    <div className="FifteenSectionDownCDiv">
                        <h1 className="FifteenSectionDownCDivH1">Learn more</h1>
                            <button className="FifteenSectionDownCDivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="FifteenSectionDownCDivBtnImg"/>
                            </button>
                    </div>
                </div>
                <div className="FifteenSectionDownR">
                    <h1 className="FifteenSectionDownRH1">A leader in Work Management and OKR
                        <br />Software with more than 12,000 user
                        <br />reviews</h1>
                    <div className="FifteenSectionDownRDiv">
                        <h1 className="FifteenSectionDownRDivH1">Read user reviews</h1>
                            <button className="FifteenSectionDownRDivBtn">
                                <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="FifteenSectionDownRDivBtnImg"/>
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div className="FooterDiv1">
                <h1 className="FooterDiv1H1">The only platform
                    <br />that can support
                    <br />your company at
                    <br />any scale</h1>
                <button className="FooterDiv1Btn">Get started</button>
                <h2 className="FooterDiv1H2">1. Accurate as of December 2023, includes free and paid users.</h2>
            </div>
            <div className="FooterDiv2">
                <div className="FooterDiv2Div">
                    <img src="https://companieslogo.com/img/orig/ASAN-1325de11.png?t=1751228060" alt="" className="FooterDiv2DivImg"/>
                </div>
                <ul>
                    <li className="Lis">New to Asana?</li>
                    <li>Product overview</li>
                    <li>All features</li>
                    <li>Latest feature release</li>
                    <li>Pricing</li>
                    <li>Starter plan</li>
                    <li>Advanced plan</li>
                    <li>Enterprise</li>
                    <li>App integrations</li>
                    <li>AI work management</li>
                    <li>Project management</li>
                    <li>Resource management</li>

                </ul>
                <ul>
                    <li className="Lis">Use cases</li>
                    <li>Campaign 
                        <br />management</li>
                    <li>Content calendar</li>
                    <li>Creative production</li>
                    <li>Goal management</li>
                    <li>New hire onboarding</li>
                    <li>Organizational planning</li>
                    <li>Product launches</li>
                    <li>Resource planning</li>
                    <li>Strategic planning</li>
                    <li>Project intake</li>
                    <li>All use cases</li>
                </ul>
                <ul>
                    <li className="Lis">Solutions</li>
                    <li>Small business</li>
                    <li>Marketing</li>
                    <li>Operations</li>
                    <li>IT</li>
                    <li>Product</li>
                    <li>Sales</li>
                    <li>Healthcare</li>
                    <li>Retail</li>
                    <li>Government</li>
                    <li>Education</li>
                    <li>Manufacturing</li>
                    <li>Nonprofits</li>
                    <li>Startups</li>
                    <li>All teams</li>
                </ul>
                <ul>
                    <li className="Lis">Resources</li>
                    <li>Help Center</li>
                    <li>Get support</li>
                    <li>Asana Academy</li>
                    <li>Certifications</li>
                    <li>Forum</li>
                    <li>Resource center</li>
                    <li>Events and webinars</li>
                    <li>Project templates</li>
                    <li>Customer Success</li>
                    <li>Developers and API</li>
                    <li>Partners</li>
                    <li>Sitemap</li>
                </ul>
                <ul>
                    <li className="Lis">Company</li>
                    <li>About us</li>
                    <li>Leadership</li>
                    <li>Customers</li>
                    <li>Careers</li>
                    <li>Inside Asana</li>
                    <li>Culture</li>
                    <li>Press</li>
                    <li>Investor relations</li>
                    <li>Trust and security</li>
                    <li>Privacy</li>
                    <li>Supplier responsibility</li>
                    <li>Sustainability and ESG</li>  
                </ul>
            </div>
            <div className="FooterDiv3">
                <h1 className="FooterDiv3H1">© 2026 Asana, Inc.</h1>
                <img src="https://assets.asana.biz/transform/3ac30492-304b-4644-a39b-e89fad0df303/SD040-web-nav-GlobeIcon-en-US" alt="" className="FooterDiv3Img1"/>
                <h2 className="FooterDiv3H2">English</h2>
                <img src="https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492396.png" alt="" className="FooterDiv3Img1"/>
                <img src="https://static.vecteezy.com/system/resources/previews/055/997/046/non_2x/linkedin-logo-icon-file-free-png.png" alt="" className="FooterDiv3Img1"/>
                <img src="https://static.vecteezy.com/system/resources/previews/065/386/514/non_2x/instagram-black-circle-logo-icon-ig-app-transparent-background-premium-social-media-design-for-digital-download-free-png.png" alt="" className="FooterDiv3ImgIg"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/3840px-Facebook_icon_%28black%29.svg.png" alt="" className="FooterDiv3Img1"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CIS-A2K_Youtube_Icon_%28Black%29.svg/960px-CIS-A2K_Youtube_Icon_%28Black%29.svg.png" alt="" className="FooterDiv3Img1"/>
                <h3 className="FooterDiv3H3">Terms & Privacy</h3>
                <img src="https://assets.asana.biz/m/789462af5a590563/original/Download_App_Store_Badge_US.svg" alt="" className="FooterDiv3Img2"/>
                <img src="https://assets.asana.biz/m/2830b6f5895bc51c/original/Google_Play_EN.svg" alt="" className="FooterDiv3Img2"/>
            </div>
        </footer>
    </>
  )
}

export default Header
