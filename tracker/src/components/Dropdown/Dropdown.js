import './Dropdown.css';

const Dropdown = (props) => {

    const filterItems = (event) => {
        const [lowerLimit, upperLimit] = event.target.value.split('.');
        const newList = props.list.filter((eachList) => {return (eachList.hours>=lowerLimit && eachList.hours<upperLimit)});
        props.onClick(newList, lowerLimit, upperLimit);
    }

    return (
    <div className="dropdownContainer">
        <select name="hours" id="hours" onChange={filterItems}>
            <option value="0.1000">All lists</option>
            <option value="0.50">less than 50 hours</option>
            <option value="50.100">greater than 50 hours and less than 100 hours</option>
            <option value="100.1000">greater than 100 hours</option>
        </select>
    </div>
    )
}

export default Dropdown;