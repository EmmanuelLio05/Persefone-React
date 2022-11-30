import { Card, Text, Title, Grid } from "@mantine/core";
import { WiThermometer, WiDaySunny, WiRaindrop, WiDegrees } from "react-icons/wi";
import { Stat as IStat, Parameter as eParameter } from "../model/Stat";
import { getParameter } from "../services/Gets";
import { useState, useEffect } from "react";
import database from '../services/hermes'
import { ref, set, onValue } from "firebase/database";
import { Stat, Parameter } from "../model/Stat";

export function StatCard({param}:{param:eParameter}){
    const [sparam, setParam] = useState();
    const paramRef = ref(database, 'telemetry/' + param.toString())
    onValue(paramRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        if (Math.random() > 0.4) {
            setParam(data);
        }
    });

    var stat:IStat={
        param:param,
        value:sparam
    }
    
    return <Card color="green.5">
        <Grid columns={3}>
            <Grid.Col span='auto'>
                <Text fz='16px'>{stat.param.toString()}</Text>
                <Title fz='24px' order={3}>{stat.value}</Title>
            </Grid.Col>
            <Grid.Col span={1}>
                <ParamIcon param={stat.param}/>
            </Grid.Col>
        </Grid>
    </Card>
}

function ParamIcon({param}:{param:eParameter}){
    switch(param){
        case eParameter.Brightness:
            return <WiDaySunny color="gold" size='5em'/>
        case eParameter.Humidity:
            return <WiRaindrop color="aqua" size='5em'/>
        case eParameter.Temperature:
            return <WiThermometer size='5em'/>
        default:
            return <WiDegrees/>
    }
}