import { Request, Response } from 'express';

export class ImportController {

  public oura(req: Request, res: Response) {
    res.status(200).send({
      message: 'Import oura',
    });
  }

  public strava(req: Request, res: Response) {
    res.status(200).send({
      message: 'Import strava',
    });
  }
}
