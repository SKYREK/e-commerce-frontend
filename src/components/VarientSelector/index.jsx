import { useState } from "react";

//must add varientsChanged variable to rerender the component when varients array changed in parent jsx
export default function VarientSelector({product, varientTypePostion , selectVarient , unselectVarient ,selctedVarient }){
    const [selectedVarient, setSelectedVarient] = useState(varientTypePostion);
    return(
        <div className="w-full flex flex-col">
            <span className="text-xl font-semibold text-primary-dark">{product.variedBy[varientTypePostion].name}</span>
            <div className="w-full flex flex-wrap flex-row ">
                {
                    product.variedBy[varientTypePostion].values.map((varient, index) => {
                        return(
                            <div key={index} className={`text-lh m-2 p-1 rounded-lg border-2  ${selectVarient==index?'border-primary-dark':'border-grey-700'}`}>
                                <span>{varient.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}