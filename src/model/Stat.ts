
export interface Stat{
    value:any;
    param:Parameter;
}

export enum Parameter{
    Temperature = 'temperature',
    Humidity = 'humidity',
    Brightness = 'brightness'
}