import React, { Component } from "react";

function Table({ id, full_name, description, url }) {
	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{full_name}</td>
			<td>{description}</td>
			<td><a href={url} target="_blank">[Link]</a></td>
		</tr>
	);
}

export default Table;
