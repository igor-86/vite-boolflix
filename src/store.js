import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?",
    api_key: "14152c5e090182b9de00cb70bbc025c3",
    searchKey: "",
    listFilm: [],
    listSeries: [],
    loading: false,
});