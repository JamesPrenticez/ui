export const fetchListItems = async () => {
	const response = await fetch( '/api/list', { method: 'GET' })
  if (!response.ok) {	throw new Error(`HTTP error! status: ${response.status}`) }
	return await response.json()
}

// Verbose example
// export const fetchListItems = async () => {
//   console.log("Fetching...")

// 	const response = await fetch(
// 		'/api/list',
// 		{
// 			method: 'GET',
// 			headers: {}
// 		}
// 	)

//   if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}

// 	const data = await response.json()

//   console.log("Finished fetching: ", data)
  
//   return data
// }