import React from 'react';
import { Select } from 'antd';
import './antdesign.css'
import { useSelector } from 'react-redux';

const App = () => {
    const cities = useSelector(state => state.city.city)
    
    const options = cities.map(city => ({
        value: city.id,
        label: city.name
    }));

    return (<Select
        showSearch
        placeholder="Şəhər seçin"
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={options}
    />)
};

export default App;