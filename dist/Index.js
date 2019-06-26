"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const elasticsearch_1 = __importDefault(require("elasticsearch"));
const Config_1 = require("./Config");
const client = new elasticsearch_1.default.Client({
    host: Config_1.config.env.SEARCHBOX_URL,
});
client
    .search({
    index: 'teste',
    type: 'document',
    body: {
        query: {
            query_string: {
                query: 'lsi',
            },
        },
    },
})
    .then((x) => {
    console.log(x.hits);
})
    .catch((x) => {
    console.log('err', x);
});
// client.index(
//   {
//     index: 'teste',
//     type: 'document',
//     id: '2',
//     body: {
//       name: '',
//       text:
//         'Resumidamente, o LSI é um processo de análise utilizado pelo Google. Essa ferramenta estabelece relações semânticas dentro de um site. O objetivo é auxiliar os mecanismos de busca a oferecerem resultados cada vez melhores para os seus visitantes.        E como como funciona a LSI? Ela atua de maneira inteligente. Assim, além de considerar a sua keyword utilizada para posicionar um conteúdo, a indexação semântica latente permite que sejam levados em conta termos semanticamente parecidos e relacionados.  Por exemplo: você escreveu um post sobre “gatos”. Assim, é bem possível que, ao longo do material, utilize outras palavras e expressões relacionadas a esse animal, como “felinos” ou “bichanos”. Anteriormente, o Google não interpretava essas palavras como um reforço à sua keyword. Porém, com a indexação semântica latente, seu material será avaliado de maneira mais inteligente – e o Google saberá que o seu texto é sobre gatos.  ',
//     },
//   },
//   (err, res) => {
//     console.log(err);
//     console.log(res);
//   },
// );
// import cron from 'cron';
// import moment from 'moment';
// const cronJob = new cron.CronJob('* * * * * *', () => {
//   console.log('moment()', moment());
//   console.log('moment().utc()', moment().utc());
// });
// cronJob.start();
// new Server(
//   [
//     //container.get<RedisRouter>(types.RedisRouter),
//     container.get<TokenRouter>(types.TokenRouter),
//     container.get<RabbitMQRouter>(types.RabbitMQRouter),
//   ],
//   [/*new AuthMiddleware(MiddlewareOrder.Begin)*/],
// ).start(process.env.PORT);
