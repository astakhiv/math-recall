export type ParagraphParam = {
    data: ParagraphEl
}

export type ParagraphEl = {
    type: string,
    content: string
}

function Paragraph({data}: ParagraphParam){
    return (
        <p>{data.content}</p>
    )
}

export default Paragraph