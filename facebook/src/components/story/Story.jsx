import React from 'react'
import "./Story.css";
import photoClub from "./../../image/photoclub.png";
import letterIcon from "./../../image/letter.png";
import { NavLink } from 'react-router-dom';
const Story = () => {
    return (
        <div>
            <div id="story-parent-div">
                <div id="stroy-left-area">
                    <div id="circles-close-logo">
                        <NavLink id="linker-above-circle-for-close" to={"http://localhost:3000/"}>
                            <div id="circle-for-close">
                                <i class="fa-solid fa-xmark fa-2xl"></i>
                            </div>
                        </NavLink>
                        <div id="circle-for-logo">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUYd/L///8NdPJTj/QAcfIAbPH7/v8Ab/E4gvO/1Pp6qPYAafHv9v7h6/2uxfjF2Pva5v1mnPWFrvcaevKhwPmOtfdqn/W4z/qWuvhVk/Q1hfOKsfdjmfV1pfZMjPQlfvPM3vsobh/GAAADrUlEQVRoga2a6aLiIAyFEVnsNrbWtV7n+v5POVRrrTSBQ53zt/I1AgkhqVgBKuvTOb90rXBqu0t+PtUlMk7EfmC217XUVkkpBkmprJbr69Z8BzdZoxxXEHJvUE0W5ofg1bXVJHh8gW6v1SJ43WgVIj+ldFMnw6tj2Oip+UfOehpudhawerTe7ui5J+GZsDi6lxUZCDc5OiNvSZ0Txs/hVZswI2+pdj7zM3gmk80ejJezqfHh+2IZulexD8MPejlbCH0IwXdfsR19x8O/s3tu+xS+/5rt6HsaniWtJbenioyCV2gsUbbQ4rdrW10U2lp/68pqDjctBJe6252qpzcaU95P+1v3OVC2ZgbPEb+URXOfufkfLxCp3IdnyGLa7u6TCbjQ2SfcsAs0UZETaAIuhfmA74AYq88kew4XdjeFVwDb0nZTcGGrCbyJr6bsGDYFV8c3vAZW07LnMAEXuh7hTXw1ZcOxSfjz5z28AgzXfAJBwYWuBvgVmPENy6bh6vqEmzZuuDokwkUfBATmnHrumvdD8/NQR65Y76YCWk4h/ZS56rRLfJ+iRzQ93CAR69cLV3U8R1DGwbeAd8q/nuGb+L+1WwcH9oqQa2++gUPL7RexWiNT7sEPmEGiRA4gH36BBpUCiSszOPJvnVOLE5ItL4LbkzhDZ+cSuDqLfMmcQ3CZC2xtFsEvogN+tgzu0EBIXAoPo+WoGfwt5DWENm/9fMJ/Jo82i9i6dNngS59wM3lQLoUjqgNeyM86COcPsjawFUH4mbW8CzgRCL9xAOdEvPuDcPZQcu7PBy4QzhrnAhcfcjF4ya6nC7n8YYHB7/z4OnDMYXA63+rljjk+CGFw9qLWH9B8aoHB2a38SC3YpAiD05miGJIiNp2Tt3yUl+Qexgc3ZvCQzvGJqFQvWS+d+2tfT9jt8ExEkRR6wUk0pNBA8r8APiT/QCqaDn9dW4ALVzp8vHDF7xbJ8PdVMX7JTYZPLrmrY2TWU+HT63m0sJAK/ygsxEoiifDPkkismJMG94s5ETdNg/tlqEgBLQk+L6CFS38pcKr0FyxaJsGJomWw3JoAp8utoUIxDucKxYESNwznS9x8cR6Fh4rzrO0gPNxW4BoiGDzWEGFaOQgcaOXQTSgADjWhyPZZFI62z1ZE4y8Gxxt/q3nLMgxPa1mu/GZrCJ7cbO01bRPz8EVt4of1Y4ObgS9vcPcy2fHRmifgfWv++EVr/snvPyoo/Cy3+A8fFQwqa2+nZdjnEP8A/SsrcWyWZckAAAAASUVORK5CYII=" />
                        </div>
                    </div>
                    <div id="your-story-div">
                        <div id="story-owner-name">
                            <div id="inside-owner-name">
                                <h1>Your story</h1>
                            </div>
                            <div id="inside-owner-namesetting-div">
                                <div id="setting-icon-holder">
                                    <i class="fa-solid fa-gear fa-lg"></i>
                                </div>
                            </div>
                        </div>
                        <div id="owner-name-pro-image-parent">
                            <div id="owner-pro-image-holder">
                                <img src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' />
                            </div>
                            <p><h4>Rocky Joseph Gomes</h4></p>
                        </div>
                    </div>
                </div>
                <div id="story-right-area">
                    <div id="story-right-area-top-logos">
                        <div id="right-conner-story-logo-parent">
                            <div>
                                <div id="right-conner-logo-holder-div">
                                    <i class="fa-solid fa-grip fa-lg"></i>
                                </div>
                                <div id="right-conner-logo-holder-div">
                                    <i class="fa-solid fa-bell"></i>
                                </div>
                                <div id="right-conner-logo-holder-div">
                                    <img src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="story-right-inner-frame">
                        <div id="story-uploading-parent-div">
                            <div id="story-image-upload-div">
                                <div className="story-uploading-logo-holder">
                                    <img src={photoClub} />
                                </div>
                                <p>Create photo story</p>
                            </div>
                            <div id="story-text-upload-div">
                                <div className="story-uploading-logo-holder">
                                    <img src={letterIcon} />
                                </div>
                                <p>create a text story</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
