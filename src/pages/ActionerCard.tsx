import { Card, Radio , Title, Switch, useMantineTheme } from "@mantine/core";
import { writeControl } from "../services/Puts";
import { WiSunrise,  WiSunset, WiStrongWind, WiRaindrops, WiDegrees, WiNa} from "react-icons/wi";
import { Actioner , Action} from "../model/Action";

export function ActionerCard({actioner}:{actioner:Actioner}){
    const theme = useMantineTheme();

    return <Card>
        <Switch
            size="xl"
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
            onLabel={<IconOn actioner={actioner} />}
            offLabel={<IconOff actioner={actioner} />}
            onChange={(event)=>{
                var iAction:Action={
                    value:event.currentTarget.checked,
                    actioner:actioner
                }
                writeControl(iAction)
            }}
        />
    </Card>
}

function IconOn({actioner}:{actioner:Actioner}){
    const theme = useMantineTheme();

    switch(actioner){
        case Actioner.Fan:
            return <WiStrongWind size='3em' color={theme.colors.blue[4]}/>
        case Actioner.Light:
            return <WiSunrise size='3em' color={theme.colors.yellow[4]} />
        default:
            return <WiDegrees/>
    }
}

function IconOff({actioner}:{actioner:Actioner}){
    const theme = useMantineTheme();

    switch(actioner){
        case Actioner.Fan:
            return <WiNa size='3em' color={theme.colors.blue[4]}/>
        case Actioner.Light:
            return <WiSunset size='3em' color={theme.colors.yellow[4]} />
        default:
            return <WiDegrees/>
    }
}