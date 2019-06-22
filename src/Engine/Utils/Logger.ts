import winston from 'winston';

export default class Logger {
  constructor() {
    console.log(230498290);
  }
  static log() {
    const log = winston.createLogger({
      // level: 'info',
      // format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
        }),
      ],
    });

    log.silent = true;
    log.on('data', () => {
      console.log('recebido');
    });

    log.error('oisdoifsdf');
    log.info('teste');
  }
}
