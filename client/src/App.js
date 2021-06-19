import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = function () {
	const [locations, setLocations] = useState(null);

	const [locationName, setLocationName] = useState("");
	const [reason, setReason] = useState("");
	useEffect(() => {
		axios
			.get("/api/locations")
			.then((response) => {setLocations(response.data)
      console.log(response.data)
      })
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (locationName === "") {
			alert("Please fill the location name field");
			return;
		}
		if (reason === "") {
			alert("Please fill the reason field");
			return;
		}
		axios
			.post("/api/locations", {
				name: locationName,
				reason: reason,
			})
			.then(function () {
				alert("Location created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not create location. Please try again");
			});
	}

  function displayLocations() { 
    if (locations.length === 0) {
      return <p>Suggest locations now!</p>
    } else {
      return locations.map((l, i) => (
        <ul>
          <li>Name: {l.name}</li>
          <li>Reason: {l.reason}</li>
        </ul>
      ))
    }
  }

	return (
		<>
			<h1>Wonderful locations to explore</h1>
			{locations === null ? (
				<p>Loading...</p>
			) : displayLocations()}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setLocationName(e.target.value)}
					type="text"
					placeholder="Enter location name"
				/>
				<input
					onChange={(e) => setReason(e.target.value)}
					type="text"
					placeholder="Why you think its good place for vacation?"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App;
