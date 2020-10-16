import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		basic: {
			main: "#313131",
		},
		primary: {
			main: "#FCC932",
		},
		secondary: {
			main: "#2DABFF",
		},
		error: {
			main: "#E74C3C",
		},
		success: {
			main: "#00BA42",
		},
		background: {
			default: "#fff",
		},
	},
	typography: {
		fontFamily: "Work Sans, sans-serif",
	},
});

export default theme;
