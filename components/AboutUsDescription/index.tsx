import React , {FC} from 'react'
interface IndexProps{
    description?:string,
}
const Index:FC<IndexProps> = ({description}) => {
  return (
    <div className='text-[#626262] text-[18px] font-normal'>
      {description}
    </div>
  )
}

export default Index
