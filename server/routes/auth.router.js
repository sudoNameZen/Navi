import {Router} from 'express';

const authRouter = Router();

authRouter.get('/signin', (req, res) => {
  res.send({message: 'Sign In'});
});

authRouter.get('/signup', (req, res) => {
    res.send({message: 'Sign Up'});
  });

  authRouter.get('/signout', (req, res) => {
    res.send({message: 'Sign Out'});
  });

    

export default authRouter;