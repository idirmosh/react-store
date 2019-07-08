import {ActionTypes} from './Types';
import { RestDataSource } from './RestDataSource';
//import {data as phData } from './placeholderData';

const dataSource = new RestDataSource();

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType).then(response => ({ dataType, data: response.data }))
});