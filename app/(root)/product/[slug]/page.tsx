import {getProductBySlug} from "@/lib/actions/product-actions";
import {notFound} from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import ProductImages from "@/components/shared/product/product-images";


const ProductDetailsPage = async (props: { params: Promise<{ slug: string }> }) => {

    const {slug} = await props.params
    const product = await getProductBySlug(slug);
    if (!product) notFound();

    return (
        <>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-5">

                    {/*images column */}
                    <div className="col-span-2">
                        <ProductImages images={product.images}/>
                    </div>


                    {/*details column*/}
                    <div className='col-span-2 p-5'>
                        <div className="flex flex-col gap-6">
                            <p>{product.brand} {product.category}</p>
                            <h1 className='h3-bold'>{product.name}</h1>
                            <p>{product.rating} of {product.numReviews} reviews</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <ProductPrice value={Number(product.price)}
                                              className='w-24 rounded-full px-5 py-2 bg-primary text-secondary'/>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h3 className='text-2xl mb-5 font-semibold'>Description👇</h3>
                            <p>{product.description}</p>
                        </div>

                    </div>


                    <div>
                        <Card>
                            <CardContent className='p-4'>
                                <div className="mb-4 flex items-center justify-between">
                                    <div>Price:</div>
                                    <div>
                                        <ProductPrice value={Number(product.price)}/>
                                    </div>
                                </div>

                                <div className="mb-4 flex items-center justify-between">
                                    <div>Status:</div>
                                    {product.stock > 0 ? <Badge>In Stock</Badge> :
                                        <Badge variant='outline'>Out Of Stock</Badge>}
                                </div>

                                {product.stock > 0 && (
                                    <div className='flex-center'>
                                        <Button className='w-full bg-foreground text-secondary'>Add To Cart</Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>


                </div>
            </section>
        </>
    );
};

export default ProductDetailsPage;