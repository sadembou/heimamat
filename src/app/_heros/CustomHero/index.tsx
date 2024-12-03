import React from 'react'

import { Media, Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  if(!media){
    return null
  }
  
  const mediaUrl = media && typeof(media) != "string" &&  `${media.cloudinary.secure_url}`
  if(!mediaUrl) return null
  return (
    <section className={classes.hero}>
      <div className={classes.heroWrapper} style={{backgroundImage: `url(${mediaUrl})`}}>
        <div className={classes.heroTextBox}>
            <RichText content={richText} />
            {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
                {links.map(({ link }, i) => {
                return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                )
                })}
            </ul>
            )}
        </div>
      </div>
    </section>
  )
}
