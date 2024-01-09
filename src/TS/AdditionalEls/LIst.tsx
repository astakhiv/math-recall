import Paragraph,{ ParagraphEl } from "./Paragrapg"
import NamedParagraph,{ NamedParagraphEl } from "./NamedParagraph"

export type ListParam = {
    data: ListEl,
    type: string
}

export type ListEl = {
    type: string,
    name: string,
    data: (ParagraphEl | NamedParagraphEl | ListEl)[]
}

function List({data, type}: ListParam){
    const list = data.data.map((el) => {
        if(el.type === 'ol' || el.type === 'ul'){
            return <li><List data={el as ListEl} type={el.type}/></li>
        } else if (el.type === 'p'){
            return <li><Paragraph data={el as ParagraphEl}/></li>
        } else if (el.type === 'np'){
            return <li><NamedParagraph data={el as NamedParagraphEl}/></li>
        }
    })

    return (
        <>
            <h3>{data.name}</h3>
            {type === 'ul' ? <ul>{list}</ul> : <ol>{list}</ol>}
        </>
    )
}

export default List