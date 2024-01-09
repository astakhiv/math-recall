import '../CSS/Structure/section.css'
import '../CSS/View/section.css'
import '../CSS/View/theme.css'
import '../CSS/Structure/text.css'
import { MouseEventHandler, useState } from 'react'
import { ArticleData, Page, SectionType } from '../db'
import Paragraph, { ParagraphEl } from './AdditionalEls/Paragrapg'
import NamedParagraph, { NamedParagraphEl } from './AdditionalEls/NamedParagraph'
import Teorem, { TeoremEl } from './AdditionalEls/Teorem'
import Img, { ImageEl } from './AdditionalEls/Image'
import List, {ListEl} from './AdditionalEls/LIst'

type SectionParams = {
    name: string;
    content: string | Page;
    onClick: Function|undefined;
    selected: boolean;
}

type Headers = {
    [key: string]: string[]
}
const headers: Headers = {
    Algebra: ['Рівняння', 'Нерівності', 'Проміжки та прогресії', 'Функції', 'Оператори', 'Одночлени та многочлени', 'Інше'],
    Geometry: ['Базові елементи', 'Коло, круг', 'Трикутники', 'Чотирикутники', 'Многокутники', 'Тригонометрія', 'Теореми', 'Вектори', 'Інше']
}

function Section({name, content, onClick, selected}: SectionParams){
    const [header, setHeader] = useState(0)
    const section = []

    const styles = {
        section: 'section-not-selected section-hover',
        text: 'text-not-selected'
    }

    if (selected){
        styles.section = 'section-selected'
        styles.text = 'text-selected'
        
        section.push(
            (
                <div>
                    {
                        headers[name].map((k, i) => 
                            <button className="controlButton small" disabled={header===i} key={i} onClick={() => setHeader(i)}>{k}</button>)
                    }
                </div>
            ))

        content = content as Page
        section.push(
            (
                <div>
                    {Els(content[headers[name][header]])}
                </div>
            )
        )
    } else {
        section.push(<h2 className='medium'>{name}</h2>)
        section.push(<span className={'text small ' + styles.text}>{content as string}</span>)
    }

    return (
        <article className={'section dark-theme ' + styles.section} onClick={onClick as MouseEventHandler}>
            {section}
        </article>
        )
}


function Els(content: ArticleData[]){
    return content.map((el: ArticleData) => {
        return <article>{Article(el)}</article>    
    })
}

function Article(data: ArticleData){
    return data.elements.map((el: SectionType) => {
        if (el.type === 'p'){
            return <Paragraph data={el as ParagraphEl}/>
        } else if (el.type === 'np'){
            return <NamedParagraph data={el as NamedParagraphEl}/>
        } else if (el.type === 't'){
            return <Teorem data={el as TeoremEl}/>
        } else if (el.type === 'i'){
            return <Img data={el as ImageEl}/>
        } else{
            return <List data={el as ListEl} type={el.type}/>
        }
    })
}

export default Section