import jwt from 'jsonwebtoken';

// promisify - tranforma uma função de callback
// em um padrão de assync await
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token no provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;

    console.log(decoded);
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token no invalid' });
  }
};