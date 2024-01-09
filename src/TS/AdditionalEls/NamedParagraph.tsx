import '../../CSS/Structure/text.css'
import '../../CSS/Structure/additionalEls.css'

type NamedParagraphParam = {
    data: NamedParagraphEl
}

export type NamedParagraphEl = {
    type: string,
    name: string,
    content: string
}

function NamedParagraph({data}: NamedParagraphParam){
    return (
        <div className="el">
            <h3 className='medium'>{data.name}</h3>
            <p className='small'>{data.content}</p>
        </div>
    )
}

export default NamedParagraph