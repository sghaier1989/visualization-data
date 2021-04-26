

function arraySort(table)
{
	var arrSort = ([a, b], [c, d]) => a - c || d - b

	return table.sort(arrSort)
}


export default arraySort;