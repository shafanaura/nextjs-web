import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const useStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: 20,
	},
	avatarIcon: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	text: {
		display: "flex",
		flexWrap: "wrap",
		direction: "column",
		alignItems: "center",
	},
}));

export default function UjianCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={3}>
			<List component="nav">
				<CardHeader
					avatar={
						<Avatar className={classes.avatarIcon}>
							<AssignmentOutlinedIcon fontSize="large" />
						</Avatar>
					}
					title={
						<Typography style={{ fontSize: 18, fontWeight: 600 }}>
							Ujian Tugas Final
						</Typography>
					}
					subheader={
						<div>
							<Grid container direction="row" alignItems="center">
								<Typography>Keterangan:</Typography>
								<Box color="error.main" pl={1}>
									Coba Lagi
								</Box>
							</Grid>
							<Box style={{ fontWeight: 500 }} color="secondary.main">
								Total Attempt 1/3
							</Box>
						</div>
					}
				/>
			</List>
		</Paper>
	);
}
