import {defineStore} from "pinia";


export const useFilmStore = defineStore('film', () =>
    {
const films = ref([]);
const fetchFilms = async () => {
    const res = await api.get(`/films`)
    films.value = res.date.films;
}
    }
);