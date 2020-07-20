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


const PathForm = ({recordId, sourceFarmer, resultState}) => {
    const {adjacencyList} = useContext(AdjacencyListStoreContext);
    const {result, setResult} = resultState;
    let [pathRoads, setPathRoads] = useState([sourceFarmer]);
    let [homeEnding, setHomeEnding] = useState(false);


    useEffect(() => {
        getFarmers();
    }, []);

    useEffect(() => {
        if (_.isEqual(adjacencyList[pathRoads[pathRoads.length - 1]], ['HOME'])) {
            setHomeEnding(true);
            setResult({...result, [sourceFarmer]: pathRoads.slice(1)});
        }
    }, [pathRoads]);


    return (
        <div>
            <CloudFilled className={'element'}/>
            {pathRoads.map(i =>
                <div className={'element'}>
                    <ArrowRightOutlined className={'element'}/>
                    {!_.isEqual(adjacencyList[i], ['HOME']) ?
                        <RoadSelector key={i}
                                      color={homeEnding ? 'LawnGreen' : 'black'}
                                      options={adjacencyList[i]}
                                      pstate={{pathRoads, setPathRoads}}/>
                        :
                        <HomeFilled className={'element'}/>}
                </div>)
            }
        </div>
    );
};

export default PathForm;
