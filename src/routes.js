import { Router } from 'express';
import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Humberto Luksevicius',
    email: 'email@email.com.br',
    password_hash: '12345678',
  });
  return res.json(user);
});

module.exports = routes;
