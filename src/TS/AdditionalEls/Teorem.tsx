import Paragraph, {ParagraphEl} from "./Paragrapg"
import '../../CSS/Structure/text.css'
import '../../CSS/Structure/additionalEls.css'

type TeoremParams = {
    data: TeoremEl
}

export type TeoremEl = {
    type: string,
    name: string,
    content: string,
    cons:  ParagraphEl | ParagraphEl[] | undefined
}

function Teorem({data}:TeoremParams){
    return (
        <div className="el">
            <h3 className="medium">{data.name}</h3>
            <p className="small">{data.content}</p>
            {
                Array.isArray(data.cons) ? 
                    data.cons.map(el => <Paragraph data={el}/>) : 
                    data.cons ? 
                        <Paragraph data={data.cons}/> : 
                        ''
            }
        </div>
    )
}

export default Teorem