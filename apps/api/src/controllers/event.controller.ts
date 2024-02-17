import prisma from '@/prisma';
import { Request, Response } from 'express';

export class EventController {
  async getEvent(req: Request, res: Response) {
    const allEvent = await prisma.event.findMany();

    return res.status(200).send(allEvent);
  }

  async getEventById(req: Request, res: Response) {
    const id = req.params.id;

    const eventData = await prisma.event.findUnique({
      where: { id: parseInt(id) },
    });

    return res.status(200).send(eventData);
  }

  async createEvent(req: Request, res: Response) {
    // if (!req.file?.filename) return;
    console.log(`body`, req.body);
    if (req.file) {
      // Log the entire file object
      console.log('file', req.file);
    }
    res.sendStatus(200);
    // try {
    //   if (!req.file?.filename)
    //     return res.status(400).send('File tidak ditemukan');

    //   const newFileName = req.file.filename;

    //   const createEvent = await prisma.event.create({
    //     data: {
    //       title: req.body.title,
    //       image: `${newFileName}`,
    //     },
    //   });
    //   console.log('success');
    //   return res.status(200).send(createEvent);
    // } catch (error) {
    //   console.error(error);
    //   return res.status(500).send('Terjadi kesalahan saat membuat event');
    // }
  }
}
