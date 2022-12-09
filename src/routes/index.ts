import { Router } from "express";
import * as PController from '../controllers/PageController';
import * as SController from '../controllers/SearchController'

const router = Router();

//rotas a função de cada rota fica no controller
router.get('/', PController.home)
router.get('/dogs', PController.dogs)
router.get('/cats', PController.cats)
router.get('/fishes', PController.fishes)

router.get('/search',SController.search)

export default router;

