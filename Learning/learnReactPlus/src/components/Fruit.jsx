
export default function Fruit({fruitInfo, onClick, symbol}) {
    //state
    // const fruitInfo = props.fruitInfo;
    // const actionClick = props.actionClick;
    // const {fruitInfo, actionClick} = props;

    // comportements

    // render
    return (
    <div>
        <li>{fruitInfo.nom} <button onClick={onClick} >{symbol}</button></li></div>
    )
}