import { Stack, Center, Grid} from "@mantine/core";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { StatCard } from "./StatCard";
import { ActionerCard } from "./ActionerCard";
import { WaterCard } from "./WaterCard";
import { Parameter } from "../model/Stat";
import { Actioner } from "../model/Action";

export function ControlPanel(){

    return <Stack align='center' justify='center' h='100%' w='70%'>
        <Grid columns={6}>
            <Grid.Col ><StatCard param={Parameter.Brightness}></StatCard></Grid.Col>
            <Grid.Col ><StatCard param={Parameter.Humidity}></StatCard></Grid.Col>
            <Grid.Col ><StatCard param={Parameter.Temperature}></StatCard></Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col><ActionerCard actioner={Actioner.Light}/></Grid.Col>
            <Grid.Col><ActionerCard actioner={Actioner.Fan}/></Grid.Col>
            <Grid.Col><Center><WaterCard/></Center></Grid.Col>
        </Grid>
    </Stack>
}