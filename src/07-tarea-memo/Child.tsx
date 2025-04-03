import React from 'react';

interface ChildProps {
    num: number;
    increment: (num: number) => void;
}

export const Child = React.memo(({ num, increment }: ChildProps) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( num ) }
        >
            { num }
        </button>
    )
})
