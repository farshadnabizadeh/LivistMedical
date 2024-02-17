import React, { FC } from 'react'

interface ServiceDescriptionProps {
    TitleName?: string,
    TitleClassName?: string,
    Description?: string,
    DescriptionClassName?: string,
}
const ServiceDescription: FC<ServiceDescriptionProps> = ({
    TitleName,
    TitleClassName,
    Description,
    DescriptionClassName,
}) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='container'>
                <div className={TitleClassName}>{TitleName}</div>
                <div className={DescriptionClassName}>{Description}</div>
            </div>
        </div>
    )
}

export default ServiceDescription
