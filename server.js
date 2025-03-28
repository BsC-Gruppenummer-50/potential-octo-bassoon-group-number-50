// Har null funksjon per til nå/ kan brukes hvis vi trenger
//  server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve everything in the "public" folder as static assets
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission at /submit
app.post("/submit", (req, res) => {
	// req.body contains form fields as key/value pairs
	console.log("Form submission received:", req.body);

	// You could store or process the data here. For now, we’ll just send a response.
	// Respond with a simple “Thank you” page
	res.send(`
    <h2>Takk for at du bekrefter informasjonen!</h2>
    <p>Navn: ${req.body.fullName}</p>
    <p>E-post: ${req.body.emailAddress}</p>
    <p>Passord: ${req.body.password}</p>
    <p>Personnummer: ${req.body.personnummer}</p>
    <p><em>Dette er kun en testside.</em></p>
  `);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
