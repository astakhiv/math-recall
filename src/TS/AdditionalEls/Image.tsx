type ImageParams = {
    data: ImageEl
}

export type ImageEl = {
    type: string,
    src: string
    alt: string,
}

function Img({data}:ImageParams){
    return <img src={data.src} alt={data.alt}></img>
}

export default Img