type NamedParagraphParam = {
    data: NamedParagraphEl
}

type NamedParagraphEl = {
    type: string,
    name: string,
    content: string
}

function NamedParagraph({data}: NamedParagraphParam){
    return (
        <>
            <h3>{data.name}</h3>
            <p>{data.content}</p>
        </>
    )
}

export default NamedParagraph