import './Table.css';


const NotAvailable = ({
	emptyMessage,
	headerLength,
}: {
	emptyMessage?: string;
	headerLength: number;
}) => (<tr>
	<td colSpan={headerLength}>
		{emptyMessage}
	</td>
</tr>);
  
export const Table = ({
	headers,
	rows,
	emptyMessage,
}: {
	headers: string[];
	rows: Array<Array<string | number>>;
	emptyMessage?: string;
}) => {


	const isEmpty = !rows.length;

	return (
		<table className="react table">
			<thead>
				<tr>
					{headers.map((header) => (
						<th key={header}>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{isEmpty && (
					<NotAvailable
						emptyMessage={emptyMessage}
						headerLength={headers.length}
					/>
				)}
				{!isEmpty && (
					rows.map((row) => (
						<tr key={String(row)}>
							{row.map((cell) => (<td key={cell}>
								{cell}
							</td>))}
						</tr>
					))
				)}
			</tbody>
		</table>
	);
};
