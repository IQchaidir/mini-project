import { EventController } from '@/controllers/event.controller';
import { uploader } from '@/middleware/uploader';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.get('/', this.eventController.getEvent);
    this.router.get('/:id', this.eventController.getEventById);
    this.router.post(
      '/create-event',
      uploader('IMG', '/image').single('image'),
      this.eventController.createEvent,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
