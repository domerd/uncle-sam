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
        form.validateFields().then(({ name, max_weight }) => {
            changeRoadToToll(name, Number.parseInt(max_weight));
            closeModal();
            form.resetFields();
        });
    };

    const ModalContent = () => (
        <Form form={form} className="add-toll-modal">
            <Form.Item name="name" rules={[{ required: true, message: 'You muse choose a road!' }]}>
                <Select placeholder="Choose a road">
                    {
                        _.map(_.filter(roads, (road) => !road.toll),
                            (road) => (
                                <Select.Option value={road.name}>
                                    {road.name}
                                </Select.Option>
                            ))
                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="max_weight"
                rules={
                    [{
                        required: true,
                        message: 'You muse enter max weight!',
                        validator: (rule, value) => {
                            const number = Number.parseInt(value);
                            if (value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('You must enter a number!');
                        },
                    }]
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
