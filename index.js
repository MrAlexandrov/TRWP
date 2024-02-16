import express from 'express';
import path from 'path';
import { rootRouter } from './rootRouter.js';

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(__dirname + '/static'));
app.use('/', rootRouter);
app.set('view engine', 'ejs');

/* ==================================================*/
/* START */

app.set('port', process.env.PORT || 5050);

app.listen(app.get('port'), () => {
    console.log(`Server is running at http://localhost:${app.get('port')}`);
});