import React, { useContext, useEffect, useState } from 'react';
import {
    Button, Form, Modal, Popover, Select,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './ConfigCountryModal.sass';
import _ from 'lodash';
import { UserStoreContext } from './UserStore';
import { CountryStoreContext } from './CountryStore';

const ConfigCountryModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { defaultCountry, setDefaultCountry } = useContext(UserStoreContext);
    const { countries } = useContext(CountryStoreContext);
    const [form] = Form.useForm();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        if (!defaultCountry) {
            setModalOpen(true);
        }
    }, []);

    const saveChanges = () => {
        setDefaultCountry(form.getFieldValue('country'));
        setModalOpen(false);
    };

    return (
        <>
            <Button id="config-modal-button" shape="circle" icon={<SettingOutlined />} onClick={openModal} />
            {modalOpen && (
                <Modal
                    visible
                    closable={false}
                    className="config-modal"
                    title="User Configuration"
                    onOk={saveChanges}
                    onCancel={closeModal}
                >
                    <Form form={form} initialValues={{ country: defaultCountry }}>
                        <Form.Item name="country" label="Default Country">
                            <Select>
                                {!_.isEmpty(countries)
                && _.map(_.sortBy(countries, 'name'), (country) => (
                    <Select.Option value={country.country_id}>
                        {country.name}
                    </Select.Option>
                ))}
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            )}
        </>
    );
};

export default ConfigCountryModal;
