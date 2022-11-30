import { Card, Radio , Title, Switch, useMantineTheme, ActionIcon } from "@mantine/core";
import { writeControl } from "../services/Puts";
import { WiRaindrops } from "react-icons/wi";
import { Actioner , Action} from "../model/Action";

export function WaterCard(){
    return <Card>
        <ActionIcon color="blue" size="xl" variant="filled" onClick={(event) => {
            var iAction:Action={
                value:5,
                actioner:Actioner.Water
            }
            writeControl(iAction)
        }}>
            <WiRaindrops size='4em' />
        </ActionIcon>
    </Card>
}