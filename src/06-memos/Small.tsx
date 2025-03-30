import { memo } from 'react';

interface SmallProps {
  value: number;
}

export const Small:React.FC<SmallProps> = memo(({value}) => {
  console.log('Me dibuje bb :(')
  return (
    <small>
      {value}
    </small>
  )
})
