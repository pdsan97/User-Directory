export const Table = ({ dataSource, columns, indexName, onSort }) => {
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					{indexName && <th scope="col">{indexName}</th>}
					{columns.map(col => (
						<th
							key={col.field}
							scope="col"
							role="button"
							onClick={() => onSort(col.field)}
						>
							{col.name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{dataSource.map((row, i) => (
					<tr key={i}>
						{indexName && <th scope="row">{i + 1}</th>}
						{columns.map(col => {
							const value = row[col.field];
							return (
								<td key={col.field}>
									{(col.render && col.render(value)) || value}
								</td>
							);
						})}
					</tr>
				))}
			</tbody>
		</table>
	);
};
