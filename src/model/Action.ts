
export interface Action{
    value:any;
    actioner:Actioner;
}

export enum Actioner{
    Fan = 'fan',
    Water = 'water',
    Light = 'light'
}