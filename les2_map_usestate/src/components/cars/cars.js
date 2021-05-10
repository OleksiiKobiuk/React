export default function Cars(props) {
    let {producer, model, year, color} = props;
    // let classColor = props.color;
    return (
        <div>
            <h2> {producer} {model}</h2>
            <h3> {year}</h3>
            <div style={{background: color}}>
                {color}
            </div>
        </div>
    )
}
