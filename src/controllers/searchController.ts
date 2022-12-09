import {Request, Response}  from 'express';
import {pet} from '../models/Pet';

export const search = (req: Request, res: Response)=>{
    let nomePet: string = req.query.q as string;
    let list = pet.getFromName(nomePet);
    res.render('pages/page', {
       list,
       nomePet
    })
}