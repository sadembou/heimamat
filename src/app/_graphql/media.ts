export const MEDIA_FIELDS = `
mimeType
filename
width
height
alt
caption
cloudinary{
  secure_url
}
`

export const MEDIA = `media {
  ${MEDIA_FIELDS}
}`
