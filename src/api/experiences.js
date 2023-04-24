import api from "./index";

function getExperiences() {
    return api.get('/experiences');
}

export default getExperiences