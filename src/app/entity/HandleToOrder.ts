import { Handle } from "./Handle";

export class HandleToOrder{
    private handleId: string;
    private handleColorsId: string;
    private handleParamsId: string;
    private count: string;
    private type: string;;
    private moduleId: string;

    constructor( handleId: string,
         handleColor: string,
         handleCD: string,
         count: string,
         moduleId: string,
         type: string ){
             this.handleId = handleId;
             this.handleColorsId = handleColor;
             this.handleParamsId = handleCD;
             this.count = count;
             this.moduleId = moduleId;
             this.type = type;
    }
}