'use client'
import Image from "next/image";
import {useState} from "react";
import {cn} from "@/lib/utils";


const ProductImages = ({images}: {images: string[]}) => {

    const [current, setCurrent] = useState(0);

    return (
        <div className='space-y-4'>
         <Image src={images[current]} alt='product image' width={1000} height={1000} className='min-h-[300px] object-center object-cover rounded-3xl'/>

          <div className='flex gap-5 items-center'>
              {images.map((image, index) => (
                  <div key={image} onClick={() => setCurrent(index)} className={cn('border rounded-xl mr-2 cursor-pointer hover:border-primary', current === index && 'border-primary')}>
                      <Image className='rounded-xl cursor-pointer' src={image} alt={`${image} photo`} width={100} height={100}/>
                  </div>
              ))}
          </div>
        </div>
    );
};

export default ProductImages;