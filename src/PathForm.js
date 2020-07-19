/**
 * Created by omerdoron on 16/07/2020.
 */

import React, {useEffect, useContext, useState} from 'react';
import {getFarmers} from './actions';
import {RoadsStoreContext} from './RoadsStore';
import {Button, Select} from 'antd';
import {ArrowRightOutlined, CloudFilled, HomeFilled} from '@ant-design/icons';
import "./PathForm.sass";
import _ from 'lodash';

const {Option} = Select;


function Child({color, source, options, pstate}) {
    const {edges, setEdges} = pstate;
    return <Select style={{width: 120, color: color, fontWeight: 'bold'}} onChange={(value) => {
        console.log(`selected ${value}`);
        setEdges([...edges, value]);
    }}>
        {options.map(i => <Option key={i} value={i}>{i}</Option>)}
    </Select>
}


const PathForm = () => {
    const {roads} = useContext(RoadsStoreContext);
    let [edges, setEdges] = useState([64]);
    let [homeEnding, setHomeEnding] = useState(false);

    useEffect(() => {
        getFarmers();
    }, []);

    useEffect(() => {
        if (_.isEqual(roads[edges[edges.length - 1]], ['HOME'])) {
            setHomeEnding(true);
        }
    }, [edges]);

    return (
        <div>
            <CloudFilled className={'Element'}/>
            {edges.map(i =>
                <div className={'Element'}>
                    <ArrowRightOutlined className={'Element'}/>
                    {!_.isEqual(roads[i], ['HOME']) ?
                        <Child key={i}
                               color={homeEnding ? 'green' : 'black'}
                               options={roads[i]}
                               pstate={{edges, setEdges}}/>
                        : <div className={'Element'}>
                            <HomeFilled/>
                            <Button className={'Element'} onClick={() => console.log(edges)} type="primary">send</Button>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default PathForm;
