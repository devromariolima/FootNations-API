import { Router } from "express";
import selecaoController from "./app/controllers/selecaoController.js";

const router = Router();

// ROTAS
router.get('/selecoes', selecaoController.index)
router.get('/selecoes/:id', selecaoController.show)
router.post('/selecoes', selecaoController.store)
router.delete('/selecoes/:id',selecaoController.delete)
router.put('/selecoes/:id', selecaoController.update)

export default router