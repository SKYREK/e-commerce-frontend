
//must add varientsChanged variable to rerender the component when varients array changed in parent jsx
//prop validations must be added to the component.
import PropTypes from 'prop-types';

export default function VarientSelector({ product, varientTypePostion, varientsAttributesArray, setVarientAttributesArray, setIsVarientUpdated }) {
    // component code here    
    const selectedVarient = varientsAttributesArray[varientTypePostion] || "non-selected";
    const iconType = product.variedBy[varientTypePostion].iconType;
    return(
        <div className="w-full flex flex-col">
            <span className="text-xl font-semibold text-primary-dark">{
            product.variedBy[varientTypePostion].name
            }</span>
            <div className="w-full flex flex-wrap flex-row ">
                {
                    product.variedBy[varientTypePostion].values.map((varient, index) => {
                        
                        return(
                            <div key={index} className={`text-lh m-2 p-1 rounded-lg border-2 cursor-pointer flex flex-row ${selectedVarient==varient.name?'border-primary-dark':'border-grey-700'}`}
                            onClick={()=>{                                
                                varientsAttributesArray[varientTypePostion] = varient.name;
                                setVarientAttributesArray([...varientsAttributesArray]);
                                setIsVarientUpdated(true);
                            }}>
                                {iconType === "color" && <div className="w-6 h-6 mr-2" style={{backgroundColor:varient.icon}}></div>}                                
                                {iconType === "image" && <img src={varient.icon} className="w-6 h-6 mr-2" alt=""/>}
                                <span>{varient.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
VarientSelector.propTypes = {
    product: PropTypes.object.isRequired,
    varientTypePostion: PropTypes.number.isRequired,
    varientsAttributesArray: PropTypes.array.isRequired,
    setVarientAttributesArray: PropTypes.func.isRequired,
    setIsVarientUpdated: PropTypes.func.isRequired,
};