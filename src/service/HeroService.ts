import axios from 'axios';
import { Hero } from '../models/Hero';

export default class HeroService {
	async getHeroes() : Promise<Array<Hero>>{
		const res = await axios.get<Array<Hero>>('../data/heroes.json');
        return res.data;
    }
}