import PropTypes from "prop-types";
import s from "./filter.module.css"


export default function Filter({ value, filter }) {
    
    return (
        <div className={s.filter}>
            <label>
                Find contact by name
            </label>
            <input className={s.input} onChange={ filter } value={ value } type="text" name="filter"/>
        </div>
    )
};

Filter.protoType = {
    value: PropTypes.func.isRequired,
    filter:PropTypes.func.isRequired,
}