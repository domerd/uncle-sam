import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { UserStoreContext } from './UserStore';
import CountrySelect from './CountrySelect';

const ConfigCountryModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { defaultCountry } = useContext(UserStoreContext);

    const openModal = () => setModalOpen(true);

    useEffect(() => {
        if (!defaultCountry) {
            openModal();
        }
    }, []);

    const saveChanges = () => {
        setModalOpen(false);
    };

    return (
        <>
            {modalOpen && (
                <Modal
                    visible
                    closable={false}
                    className="config-modal"
                    title="User Configuration"
                    footer={[
                        <Button disabled={!defaultCountry} type="primary" key="back" onClick={saveChanges}>
                            Ok
                        </Button>,
                    ]}
                >
                    <CountrySelect />
                </Modal>
            )}
        </>
    );
};

export default ConfigCountryModal;
