
const apiUrl = "https://api.github.com/users/gfrancv/repos";

function getProjects() {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
        const projects = response.map(name => {
            const {id, full_name, description, html_url} =  name
            return {id, full_name, description, html_url}
        });
        return projects;
	})
}

export default getProjects;