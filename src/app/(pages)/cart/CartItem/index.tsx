'use client'
import { useState } from 'react';
import classes from './index.module.scss';
import Link from 'next/link';
import { Media } from '../../../_components/Media';
import { Price } from '../../../_components/Price';
import Image from 'next/image';
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton';
const CartItem = ({product, title, metaImage, qty, addItemToCart}) => {
    const [quantity, setQuantity] = useState(qty);
    const decrementQuantity=()=>{
        const realQuantity = Number(quantity)
        const updatedQty = realQuantity > 1 ? realQuantity - 1 : 1
        setQuantity(updatedQty)
        addItemToCart({
            product, 
            quantity: updatedQty
        })
    }

    const incrementQuantity=()=>{
        const realQuantity = Number(quantity)
        const updatedQty = realQuantity + 1
        setQuantity(updatedQty)
        addItemToCart({
            product, 
            quantity: Number(updatedQty)
        })
    }

    const enterQuantity=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const updatedQty = e.target.value
        if(Number(updatedQty) === 0 ) return
        if(isNaN(parseInt(updatedQty, 10))) return
        setQuantity(updatedQty)
        addItemToCart({
            product,
            quantity: Number(updatedQty)
        })
    }

  return (
    <li key={title} className={classes.item}>
        <Link
            href={`/products/${product.slug}`}
            className={classes.mediaWrapper}
        >
            {!metaImage && (
                <span>No image</span>
            ) }
            {metaImage && typeof metaImage != 'string' && (
                <Media 
                    className={classes.media} 
                    imgClassName={classes.image} 
                    resource={metaImage}
                    fill
                />
            )}
        </Link>
        <div className={classes.itemDetails}>
            <div className={classes.titleWrapper}>
                <h6> {title} </h6>
                <Price product={product} button={false} />
            </div>
            <div className={classes.quantity}>
                <div className={classes.quantityBtn} onClick={decrementQuantity}>
                    <Image src="/assets/icons/minus.svg" alt="minus" width={25} height={25} className={classes.quantityBtn} />
                </div>
                <input 
                    type='text' 
                    className={classes.quantityInput} 
                    value={quantity}
                    onChange={enterQuantity}
                />
                <div className={classes.quantityBtn} onClick={incrementQuantity}>
                    <Image src="/assets/icons/plus.svg" alt="plus" width={25} height={25} className={classes.quantityBtn} />
                </div>
            </div>
        </div>
        <div className={classes.subtotalWrapper}>
            <Price product={product} button={false} quantity={quantity}/>
            <RemoveFromCartButton product={product} />
        </div>
    </li>
  )
}

export default CartItem