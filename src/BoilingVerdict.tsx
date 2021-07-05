import React from 'react';

// <pasa las propiedades de la interface>
export const BoilingVerdict: React.FC<{celsius:number}> = ({celsius}) => {
    return(
        <div>
            {celsius >= 100 ?(
                <p>The water would boil</p>
            ) : (
                <p>The water would not boil</p>
            )}
        </div>
    );
};