import { Container } from 'inversify';
import TYPES from './types';
import IConfig from './interfaces/IConfig';
import Config from '../global/config';
import IMarsRoverService from './interfaces/IMarsRoverService';
import MarsRoverService from '../services/MarsRoverService';

const container = new Container();

container.bind<IConfig>(TYPES.Config).toConstantValue(Config);

container.bind<IMarsRoverService>(TYPES.MarsRoverService).to(MarsRoverService).inSingletonScope();

export default container;
