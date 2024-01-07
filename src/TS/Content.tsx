import { useState } from 'react'

import Section from './Section'
import pages, {Page} from '../db'

import '../CSS/Structure/contentDescription.css'
import '../CSS/Structure/changeButtons.css'
import '../CSS/Structure/content.css'
import '../CSS/Structure/text.css'
import '../CSS/View/changeButtons.css'
import '../CSS/View/content.css'

const pagesEls: string[] = ['algebra', 'geometry']
const data = [
    {
        name: 'Algebra',
        content: 'is the study of variables and the rules for manipulating these variables in formulas; it is a unifying thread of almost all of mathematics.',
        bg: 'algebra-selected'
    },
    {
        name: 'Geometry',
        content: 'is a branch of mathematics concerned with properties of space such as the distance, shape, size, and relative position of figures.',
        bg: 'geometry-selected'
    }
]

const buttons = ['A', 'G']

function Content(){
    const [topic, setTopic] = useState(-1);
    let bg = '';
    let content = (
        <>
            {
                data.map((topic, index) => { 
                    return (
                        <Section
                            name={topic.name}
                            content={topic.content}
                            onClick={() => (setTopic(index))}
                            selected={false}
                        />
                    )
                })
            }
        </>
    );

    if (topic !== -1) {
        bg = data[topic].bg
        content = (
            <>
                <div className='change-buttons'>
                    {
                        buttons.map((text, index) => {
                            return <div>
                                    <button 
                                        className='change-button change-button-view medium'
                                        onClick={() => setTopic(index)}
                                        disabled={topic === index}
                                    >{text}</button>
                                </div>
                        })
                    }
                </div>
                <Section 
                    key={data[topic].name}
                    name={data[topic].name}
                    content={pages[pagesEls[topic]] as Page}
                    onClick={undefined}
                    selected={true}
                />
            </>
        )
    }

    return (
        <section className={`body-bg content content-view ${bg} ` + (topic === -1 ? 'content-not-selected' : 'content-selected')}>
            { content }
        </section>
    )
}

export default Content