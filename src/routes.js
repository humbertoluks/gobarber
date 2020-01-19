import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import AppointmentController from './app/controllers/AppointmentController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import ProviderController from './app/controllers/ProviderController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.get('/provider', ProviderController.index);
routes.put('/users', UserController.update);

module.exports = routes;
