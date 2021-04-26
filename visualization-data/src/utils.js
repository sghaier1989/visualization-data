// ADD function used

function arraySort(table)
{
	var arrSort = ([a, b], [c, d]) => a - c || d - b

	return table.sort(arrSort)
}

function arrayUnique(table)
{
    var filterUnique = (ele,pos)=> table.indexOf(ele) == pos

    return filterUnique
}

module.exports = {
    arraySort,
    arrayUnique

}