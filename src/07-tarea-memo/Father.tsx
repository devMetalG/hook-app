import { Child } from './Child'
import { useCallback, useState } from 'react';

export const Father = () => {

    const numeros = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback(( num:number ) => {
      setValue( (value) => value + num )
    }, []);



    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numeros.map( n => (
                    <Child 
                        key={ n }
                        num={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
