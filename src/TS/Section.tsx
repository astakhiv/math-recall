import '../CSS/Structure/section.css'
import '../CSS/View/section.css'
import '../CSS/View/theme.css'
import '../CSS/Structure/text.css'
import { MouseEventHandler } from 'react'

type SectionParams = {
    name: string;
    content: string;
    onClick: Function|undefined;
    selected: boolean;
}

function Section({name, content, onClick, selected}: SectionParams){
    const styles = {
        section: 'section-not-selected section-hover',
        text: 'text-not-selected'
    }

    if (selected){
        styles.section = 'section-selected'
        styles.text = 'text-selected'
    }
    
    return (
        <article className={'section dark-theme ' + styles.section} onClick={onClick as MouseEventHandler}>
            <h2 className='medium'>{name}</h2>
            <span className={'text small ' + styles.text}>{content}</span>
        </article>
    )
}

export default Section