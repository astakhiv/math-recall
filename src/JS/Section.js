import "../CSS/Structure/section.css"
import "../CSS/View/section.css"
import "../CSS/View/theme.css"
import "../CSS/Structure/text.css"

function Section({name, content, onClick, selected}){
    const styles = {
        section: "section-not-selected section-hover",
        text: "text-not-selected"
    }

    if (selected){
        styles.section = "section-selected"
        styles.text = "text-selected"
    }
    
    return (
        <div className={"section dark-theme " + styles.section} onClick={onClick}>
            <h2 className="medium">{name}</h2>
            <span className={"text small " + styles.text}>{content}</span>
        </div>
    )
}

export default Section