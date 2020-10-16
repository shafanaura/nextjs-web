import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
	},
	paper: {
		borderRadius: 20,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	paCallOut: {
		borderRadius: 5,
		fontWeight: 500,
		color: "#FFF",
		backgroundColor: theme.palette.error.main,
		fontSize: 12,
		paddingLeft: 5,
		paddingRight: 5,
		marginBottom: 10,
		fontWeight: 600,
	},
	pos: {
		marginBottom: 12,
	},
}));

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 10,
		borderRadius: 5,
	},
	colorPrimary: {
		backgroundColor:
			theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
	},
	bar: {
		borderRadius: 5,
		backgroundColor: theme.palette.secondary.main,
	},
}))(LinearProgress);

export default function ProgressCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={3}>
			<List>
				<ListItem>
					<Grid
						container
						direction="column"
						justify="flex-start"
						alignItems="flex-start"
					>
						<Typography style={{ fontWeight: 700, fontSize: 18 }}>
							Public Speaking King
						</Typography>
						<Typography className={classes.paCallOut} variant="body2">
							Face to Face
						</Typography>

						<Typography variant="body2" component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
							nisl a nulla lacus, augue porttitor ut turpis. Dapibus nunc tempus
							amet, nunc neque. Est in in condimentum potenti.
						</Typography>
					</Grid>
				</ListItem>
				<div style={{ margin: 15 }}>
					<Typography
						color="textSecondary"
						style={{ fontWeight: 600, color: "#797979" }}
					>
						PROGRESS LATIHAN
					</Typography>
					<Box display="flex" alignItems="center">
						<Box width="100%" mr={1}>
							<BorderLinearProgress variant="determinate" value={70} />
						</Box>
						<Box minWidth={35}>
							<Typography
								variant="body2"
								color="textSecondary"
								style={{ fontWeight: 600, color: "#797979" }}
							>
								70%
							</Typography>
						</Box>
					</Box>
				</div>
			</List>
		</Paper>
	);
}
