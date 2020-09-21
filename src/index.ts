import app from './app';
import { createConnection } from 'typeorm';

createConnection().then(db => db.isConnected ?
    console.log('DB is connected') :
    console.log('Connection fail'));

app.listen(app.get('port'), () => {
    console.log(`Listenning on http://localhost:${app.get('port')}`);
});