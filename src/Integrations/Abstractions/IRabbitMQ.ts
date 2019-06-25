import IResult from '../../Engine/IResult';

export default interface IRabbitMQIntegration {
  publish(data: any);
  consume(): Promise<IResult>;
}
