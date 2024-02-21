import { Request, Response, NextFunction } from 'express';

// Function signature must be exactly this to be used as error handler
const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('[error-handler.ts] error: ', err);
  if (err) {
    res.send('<h1 style="color: red">Error</h1>');
  }
}

export { handleErrors };