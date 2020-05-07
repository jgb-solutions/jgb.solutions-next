// import colors from "./src/utils/colors"
// const fs = require("fs")
// const jsonColors = fs.readFileSync("./src/utils/c-colors.json", "utf8")
// const colors = JSON.parse(jsonColors)

module.exports = {
	purge: ["./src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				dark: "#212121",
				grey: "#f0f3f5",
				orange: "#fb9801",
				// grey: "#a4a4a4",
				// darkGrey: "#272727",
				// contentGrey: "#181818",
				error: "#f44336",
				success: "#00FF00",
				facebook: "#1877f2",
				twitter: "#1da1f2",
				youtube: "#ff0000",
				instagram: "#c32aa3",
				whatsapp: "#25d366",
				telegram: "#0088cc",
				linkedin: "#0e76a8",
			},
			borderRadius: {
				large: "12px",
			},
		},
	},
	variants: {},
	plugins: [],
}
