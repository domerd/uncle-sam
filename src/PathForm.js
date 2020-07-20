/**
 * Created by omerdoron on 16/07/2020.
 */

import React, {useEffect, useContext, useState} from 'react';
import {getFarmers} from './actions';
import {Button, Select} from 'antd';
import {ArrowRightOutlined, CloudFilled, HomeFilled} from '@ant-design/icons';
import "./PathForm.sass";
import _ from 'lodash';
import {AdjacencyListStoreContext} from "./AdjacencyListStore";

const {Option} = Select;


function RoadSelector({color, source, options, pstate}) {
    const {pathRoads, setPathRoads} = pstate;
    return <Select style={{width: 120, color: color, fontWeight: 'bold'}}
                   onChange={(value) => {
                       setPathRoads([...pathRoads, value]);
                   }}>
        {options.map(i => <Option key={i} value={i}>{i}</Option>)}
    </Select>
}


const PathForm = () => {
    const {adjacencyList} = useContext(AdjacencyListStoreContext);
    let [pathRoads, setPathRoads] = useState([64]);
    let [homeEnding, setHomeEnding] = useState(false);

    useEffect(() => {
        getFarmers();
    }, []);

    useEffect(() => {
        if (_.isEqual(adjacencyList[pathRoads[pathRoads.length - 1]], ['HOME'])) {
            setHomeEnding(true);
        }
    }, [pathRoads]);

    return (
        <div>
            <CloudFilled className={'Element'}/>
            {pathRoads.map(i =>
                <div className={'Element'}>
                    <ArrowRightOutlined className={'Element'}/>
                    {!_.isEqual(adjacencyList[i], ['HOME']) ?
                        <RoadSelector key={i}
                                      color={homeEnding ? 'LawnGreen' : 'black'}
                                      options={adjacencyList[i]}
                                      pstate={{pathRoads, setPathRoads}}/>
                        : <div className={'Element'}>
                            <HomeFilled/>
                            <Button className={'Element'} onClick={() => console.log(pathRoads)}
                                    type="primary">send</Button>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default PathForm;
