import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import AuthToken from '../../lib/interfaces/AuthToken';
import HttpException from '../../lib/exceptions/HttpException';

export default async function auth(req: Request, res: Response, next: NextFunction) {
  const secret = '1234'; //TODO: Move to config var
  const authHeader = req.get('Authorization');

  if (authHeader) {
    try {
      const token = authHeader.replace('Bearer ', '');
      const decoded = jwt.verify(token, secret) as AuthToken;
      const id = decoded.id;

      next();
    } catch (error) {
      next(new HttpException(401, 'Bad token'));
    }
  } else {
    next(new HttpException(401, 'Missing token'));
  }
}
