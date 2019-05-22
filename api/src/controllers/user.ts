import { Request, Response } from 'express';

export class UserController {

  public create(req: Request, res: Response) {
    res.status(200).send({
      message: 'Create User',
    });
  }
}
