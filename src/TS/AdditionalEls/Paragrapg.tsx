import '../../CSS/Structure/text.css'
import '../../CSS/Structure/additionalEls.css'

export type ParagraphParam = {
    data: ParagraphEl
}

export type ParagraphEl = {
    type: string,
    content: string
}

function Paragraph({data}: ParagraphParam){
    return (
        <div className="el">
            <p className='small'>{data.content}</p>
        </div>
    )
}

export default Paragraph