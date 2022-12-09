import { Request, Response } from 'express';
// import { createmenuObject } from '../helpers/createmenuObject';
import { pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    let list = pet.getAll;

    res.render('pages/page', {
        homeMenu: 'active',
        banner: {
            title: 'Todos animais',
            background:'allanimals'
        },
        list

    });
}

export const dogs = (req: Request, res: Response) => {
    let list = pet.getFromType('dog');

    res.render('pages/page', {
        dogMenu: 'active',

        banner: {
            title: 'Cachorros',
            background:'banner_dog'
        },
        list
    })
}

export const cats = (req: Request, res: Response) => {
    let list = pet.getFromType('cat');
    res.render('pages/page', {
        catMenu: 'active',
        banner: {
            title: 'Gatos',
            background:'banner_cat'
        },
        list

    })
}

export const fishes = (req: Request, res: Response) => {
    let list = pet.getFromType('fish');
    res.render('pages/page', {
        fishMenu: 'active',
        banner: {
            title: 'Peixes',
            background:'banner_fish'
        },
        list
    })
}