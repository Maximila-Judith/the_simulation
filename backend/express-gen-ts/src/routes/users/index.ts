import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Liste des utilisateurs');
});

router.post('/', (req: Request, res: Response) => {
  res.send('Création d\'un nouvel utilisateur');
});

router.put('/:id', (req: Request, res: Response) => {
  res.send('Mise à jour d\'un utilisateur');
});

router.delete('/:id', (req: Request, res: Response) => {
  res.send('Suppression d\'un utilisateur');
});

export default router;