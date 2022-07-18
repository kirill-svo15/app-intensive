import {useState} from "react";

import Select from "react-select"

import "./reactSelect.scss"

const ReactSelect = ({classNamePrefix}) => {

    const [currentValue, setCurrentValue] = useState('push up')

    const isMulti = true

    const options = [
        {value: 'push-up', label: 'Push up'},
        {value: 'pull-up', label: 'Pull up'},
    ]

    const getValue = () => {
        if (currentValue) {
            isMulti ? options.filter(o => currentValue.indexOf(o.value) >= 0)
                : options.find(c => c.value === currentValue)
        } else {
            return isMulti ? [] : ''
        }

    }

    const onChangeValue = (newValue) => {
        setCurrentValue(isMulti ? newValue.map(v => v.value) : newValue.value)
    }

    return (
        <Select
            classNamePrefix={'selectReact'}
            onChange={onChangeValue}
            value={getValue()}
            options={options}
            isMulti={isMulti}
            placeholder={'Exercises'}
            // defaultMenuIsOpen={true}
        />
    );
};

export default ReactSelect;