import './character_style.css';
function CharacterComponent(props) {
    let cls = props.description === 'Model X' ? 'ModelX-class' : 'other-class'
    return <div className={cls}>
        <h2>
            {props.description}
        </h2>
        <img
            src={props.image}
            alt=""/>
    </div>

}
export default CharacterComponent;