import  Express  from "express";
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'


dotenv.config();

const server = Express();

server.set('view engine', 'mustache'); //qual engine de visualização
server.set('views', path.join(__dirname, 'views')); //diretório padra a pasta views
server.engine('mustache', mustache()); //roda função da engine

server.use(Express.static(path.join(__dirname, '../public'))); //diretorio das paginas estáticas


//erro 404
server.use(mainRoutes, (req, res)=>{
    res.render('pages/404');
})

server.listen(process.env.PORT);