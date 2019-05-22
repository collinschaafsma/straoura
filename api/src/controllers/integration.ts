import { Request, Response } from 'express';

export class IntegrationController {

  public create(req: Request, res: Response) {
    res.status(200).send({
      message: 'Integration create',
    });
  }

  public update(req: Request, res: Response) {
    res.status(200).send({
      message: 'Integration update',
    });
  }
}
