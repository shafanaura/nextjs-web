import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		borderRadius: 20,
	},
	paper: {
		borderRadius: 20,
	},
	cardActive: {
		borderLeftWidth: 5,
		borderRightWidth: 0,
		borderTop: 0,
		borderBottomWidth: 0,
		borderLeftColor: theme.palette.success.main,
		marginTop: 10,
	},
	bgText: {
		borderRadius: 5,
		color: "#FFF",
		padding: theme.spacing(1),
		alignItems: "center",
	},
	paCallOut: {
		borderRadius: 5,
		fontWeight: 500,
		color: "#FFF",
		backgroundColor: theme.palette.error.main,
		fontSize: 12,
		paddingLeft: 5,
		paddingRight: 5,
		fontWeight: 600,
	},
}));

export default function ReminderCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={3}>
			<List component="nav" className={classes.root}>
				<ListItem>
					<ListItemText style={{ marginBottom: -15 }}>
						<Typography
							style={{ fontWeight: 600, fontSize: 22, color: "#797979" }}
						>
							Reminder
						</Typography>
					</ListItemText>
				</ListItem>
				<ListItem>
					<Card variant="outlined" className={classes.cardActive}>
						<Grid
							container
							direction="column"
							justify="flex-start"
							alignItems="flex-start"
						>
							<div style={{ paddingLeft: 5 }}>
								<Typography className={classes.paCallOut} variant="body2">
									Besok
								</Typography>
							</div>
							<div style={{ paddingLeft: 5 }}>
								<Typography style={{ fontWeight: 600 }}>
									Mengatasi Kaki Bergetar
								</Typography>
								<Typography style={{ fontSize: 12 }}>
									Rabu, 15 Juli 2020 15:00 - 18:00 WIB
								</Typography>
								<Typography style={{ fontSize: 12 }}>
									Gojek Office Kemang Lantai 3
								</Typography>
							</div>
						</Grid>
					</Card>
				</ListItem>
			</List>
		</Paper>
	);
}
