export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })

export async function getCroppedImg(
  imageSrc,
  pixelCrop,
  cropWidth,
  corpHeight,
) {

  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const scale = (cropWidth * window.devicePixelRatio) / pixelCrop.width;

  // origin img
  canvas.width = image.width * scale;
  canvas.height = image.height * scale;
  ctx.drawImage(image, 0, 0, image.width * scale, image.height * scale);

  // crop image
  const data = ctx.getImageData(
    pixelCrop.x * scale,
    pixelCrop.y * scale,
    pixelCrop.width * scale,
    pixelCrop.height * scale
  )

  canvas.width = cropWidth * window.devicePixelRatio;
  canvas.height = corpHeight * window.devicePixelRatio - 1;
  ctx.putImageData(data, 0, 0);

  // As Base64 string
  return canvas.toDataURL('image/jpeg');

  // As a blob
  //return new Promise((resolve, reject) => {
  //  canvas.toBlob((file) => {
  //    resolve(URL.createObjectURL(file))
  //  }, 'image/jpeg')
  //})
}