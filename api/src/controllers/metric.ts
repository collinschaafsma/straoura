import { Request, Response } from 'express';

export class MetricController {

  public fetch(req: Request, res: Response) {
    res.status(200).send({
      message: 'Fetch metrics',
    });
  }
}
