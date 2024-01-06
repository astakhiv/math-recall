import Paragraph, {ParagraphEl} from "./Paragrapg"

type TeoremParams = {
    data: TeoremEl
}

type TeoremEl = {
    type: string,
    name: string,
    content: string,
    cons:  ParagraphEl | ParagraphEl[] | undefined
}

function Teorem({data}:TeoremParams){
    return (
        <>
            <h3>{data.name}</h3>
            <p>{data.content}</p>
            {
                Array.isArray(data.cons) ? 
                    data.cons.map(el => <Paragraph data={el}/>) : 
                    data.cons ? 
                        <Paragraph data={data.cons}/> : 
                        ''
            }
        </>
    )
}

export default Teorem