import React, { useContext, useState } from 'react';
import _ from 'lodash';
import {
    Form, Select, Input, Button, Modal,
} from 'antd';
import { SisternodeOutlined } from '@ant-design/icons';
import { RoadsStoreContext } from './RoadsStore';
import './AddTollRoad.sass';

const AddTollRoad = () => {
    const { roads, changeRoadToToll } = useContext(RoadsStoreContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [form] = Form.useForm();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const addTollRoad = () => {
        form.validateFields(({ name, max_weight }) => {
            changeRoadToToll(name, max_weight);
        });
    };

    const ModalContent = () => (
        <Form form={form}>
            <Form.Item name="name" rules={[{ required: true, message: 'You muse choose a road!' }]}>
                <Select
                    placeholder="Choose a road"
                    options={
                        _.map(_.filter(roads, (road) => !road.toll),
                            (road) => <Select.Option value={road.name}>{road.name}</Select.Option>)
                    }
                />
            </Form.Item>
            <Form.Item
                name="max_weight"
                rules={
                    [{ required: true, message: 'You muse enter max weight!', type: 'number' }]
                }
            >
                <Input placeholder="Max Weight in Kg" />
            </Form.Item>
        </Form>
    );

    return (
        <>
            <Button icon={<SisternodeOutlined />} shape="circle" className="add-toll-road" onClick={openModal} />
            {modalOpen && (
                <Modal
                    visible
                    closable={false}
                    className="config-modal"
                    title="User Configuration"
                    onOk={addTollRoad}
                    onCancel={closeModal}
                >
                    <ModalContent />
                </Modal>
            )}
        </>
    );
};

export default AddTollRoad;
