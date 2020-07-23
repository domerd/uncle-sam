import React, { useContext } from 'react';
import _ from 'lodash';
import { UserStoreContext } from './UserStore';
import { CountryStoreContext } from './CountryStore';
import './CountrySelect.sass';
import { Select } from 'antd';

const CountrySelect = () => {
    const { defaultCountry, setDefaultCountry } = useContext(UserStoreContext);
    const { countries } = useContext(CountryStoreContext);

    return (
        <Select
            className="country-selector"
            defaultValue={defaultCountry}
            placeholder="Select country"
            onChange={(value) => setDefaultCountry(value)}
        >
            {!_.isEmpty(countries)
            && _.map(_.sortBy(countries, 'name'), (country) => (
                <Select.Option value={country.country_id}>
                    {country.name}
                </Select.Option>
            ))}
        </Select>
    );
};

export default CountrySelect;
