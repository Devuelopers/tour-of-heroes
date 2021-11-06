import axios from 'axios';

export default class HeroService {
	async getHeroes() {
		const res = await axios.get('../data/heroes.json');
        return res.data.data;
    }
}