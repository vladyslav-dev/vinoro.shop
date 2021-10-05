import React from 'react'
import styles from './FilterSelect.module.scss'
import Select from 'react-select'



const index = () => {

    const optionsList = [
        {value: 'priceHigher', label: 'По возростанию цены'},
        {value: 'priceLower', label: 'По убыванию цены'},
        {value: 'default', label: 'По умолчанию'},
    ]   

    const handleChange = (value) => {
        console.log(value)
    }

    const customStyles = {
        clearIndicator: () => ({
            display: 'none'
        }),
        control: (provided) => ({
            ...provided,
            boxShadow: "none",
            border: "none"
        }),
        menu: (provided) => ({
            ...provided,
            border: "none",
            boxShadow: "none",
            color: 'black'
        }),
        indicatorSeparator: () => ({
            display:'none'
        }),
        option: (provided) => ({
            ...provided,
            borderRadius: 0,
            color: 'black',
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            transition: 'all .2s ease',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null
        })    
    }

    return (
        <div className={styles.select}>
           <Select 
            options={optionsList}
            placeholder="Сортировать по"
            onChange={value => handleChange(value)}
            styles={customStyles}
            isSearchable={false}
            theme={(theme) => ({
                ...theme,   
                padding: '5px 0',
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'hotpink',
                  primary: '#D9D9D9',
                  primary50: 'green',
                  text: 'black'
                }
            })}
           /> 
        </div>
    )
}

export default index
