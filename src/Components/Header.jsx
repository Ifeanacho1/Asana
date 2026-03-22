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
                <button className="SevenSectionUpBtn1"></button>
                <button className="SevenSectionUpBtn2">
                    <img src="https://assets.asana.biz/transform/2603c4c3-768f-4e45-af40-0ac03be4084d/SD040-web-nav-ForwardArrowIcon-en-US" alt="" className="SevenSectionUpBtn2Img"/>
                </button>
            </div>
            <div className="SeventhSectionDown">
                <div className="SeventhSectionDownDiv1">

                </div>
                <div className="SeventhSectionDownDiv2">

                </div>
                <div className="SeventhSectionDownDiv3">

                </div>
                <div className="SeventhSectionDownDiv4">

                </div>

            </div>
        </div>
    </>
  )
}

export default Header
