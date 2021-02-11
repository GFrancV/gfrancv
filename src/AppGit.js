import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import getProjects from "./services/getProjects";

function AppGit() {
	const [projects, setProjects] = useState([]);

	useEffect(function () {
		getProjects().then((projects) => setProjects(projects));
	}, []);

	return (
		<div className="container">
            <h2 className="title">  Table of Projects </h2>
			<table className="table table-hover table-active">
				<thead>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Description</th>
                    <th scope="col">URL</th>
				</thead>
				<tbody>
					{projects.map(projects => 
                    <Table 
                        key={projects.id}
                        id={projects.id} 
                        full_name={projects.full_name} 
                        description={projects.description} 
                        url={projects.html_url}
                    />
                    )}
				</tbody>
			</table>
		</div>
	);
}

export default AppGit;
