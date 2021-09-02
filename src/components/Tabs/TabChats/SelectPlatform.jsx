import React from "react";


const  SelectPlatform = ({selectPlatform}) => {
    return (
        <React.Fragment>
            <div className="container select-platform pt-1">
                <div className="btn-group btn-group-toggle btn-group-sm" data-toggle="buttons">
                    <input 
                        type="radio" 
                        className="btn-check" 
                        id="btn-check" 
                        name="select-platform"
                        value="instagram"
                        onClick={selectPlatform} />
                    <label 
                        className="btn btn-outline-warning" 
                        htmlFor="btn-check">Инстаграм
                    </label>

                    <input 
                        type="radio" 
                        className="btn-check" 
                        id="btn-check-2-outlined" 
                        name="select-platform"
                        value="telegram" 
                        onClick={selectPlatform}/>
                    <label 
                        className="btn btn-outline-warning" 
                        htmlFor="btn-check-2-outlined">Телеграм
                    </label>
                </div>
            </div>
        </React.Fragment>
        
    )
}
{/*  <div>
                <label htmlFor="insta">Инстаграм</label>
                <input
                    id="insta" 
                    type="radio" 
                    value="instagram" 
                    name="selectPlatform"
                    onChange={props.setPlatform}/>
                <label htmlFor="telega">Телеграм</label>
                <input
                    id="telega" 
                    type="radio" 
                    value="telegram" 
                    name="selectPlatform"
                    onChange={props.setPlatform}/>
        </div> */}
export default SelectPlatform;