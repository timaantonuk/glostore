import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "@/components/shared/product/product-price";
import {Product} from "@/types";


const ProductCard = ({product}: { product: Product }) => {
    return (
        <Link href={`/product/${product.slug}`}>
        <Card className='w-full max-w-sm hover:bg-accent transition-all duration-300 hover:scale-[1.02]'>
            <CardHeader className='p-2 items-center'>
                {/*<Link href={`/product/${product.slug}`}>*/}
                    <Image className='rounded-3xl' src={product.images[0]} alt={product.name} height={300} width={300} priority={true}/>
                {/*</Link>*/}
            </CardHeader>
            <CardContent className='p-4 grid gap-4'>
                <div className="text-xs">{product.brand}</div>
                {/*<Link href={`/product/${product.slug}`}>*/}
                    <h2 className="text-sm font-medium">{product.name}</h2>
                {/*</Link>*/}
                <div className="flex-between gap-4">
                    <p>{product.rating} Stars</p>
                    {product.stock > 0 ?
                        (<ProductPrice value={Number(product.price)}/>)
                        :
                        (<p className='text-destructive'>Out Of Stock</p>)}
                </div>
            </CardContent>
        </Card>
        </Link>
    );
};

export default ProductCard;