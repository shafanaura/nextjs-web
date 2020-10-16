import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { LibraryBooksOutlined, EditOutlined } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		display: "flex",
		flexWrap: "wrap",
	},
	paper: {
		borderRadius: 20,
	},
	grid: {
		display: "flex",
		flexWrap: "wrap",
		direction: "column",
	},
	gridText: {
		display: "flex",
		flexWrap: "wrap",
		direction: "column",
		padding: 5,
	},
	avatarIcon: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const Task = (props) => {
	const classes = useStyles();

	return (
		<ListItem>
			<Grid container>
				<Typography>Quiz 1 Public Speaking</Typography>
				<Grid container direction="row">
					<EditOutlined color="primary" fontSize="small" />
					<Typography style={{ fontSize: 14 }}>Kuis</Typography>
				</Grid>
				<Typography>
					<Grid className={classes.grid}>
						<div className={classes.gridText}>
							<Typography>Benar</Typography>
							<Typography style={{ paddingLeft: 5, fontWeight: 600 }}>
								20
							</Typography>
						</div>
						<div className={classes.gridText}>
							<Typography>Salah</Typography>
							<Box color="error.main" pl={0.5} style={{ fontWeight: 600 }}>
								5
							</Box>
						</div>
						<div className={classes.gridText}>
							<Typography>Nilai</Typography>
							<Box color="secondary.main" pl={0.5} style={{ fontWeight: 600 }}>
								80
							</Box>
						</div>
					</Grid>
				</Typography>
			</Grid>
		</ListItem>
	);
};

export default function QuizCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={3}>
			<List component="nav">
				<CardHeader
					avatar={
						<Avatar className={classes.avatarIcon}>
							<LibraryBooksOutlined fontSize="large" />
						</Avatar>
					}
					title={
						<Typography style={{ fontSize: 18, fontWeight: 600 }}>
							Quiz
						</Typography>
					}
					subheader={
						<Box style={{ fontWeight: 500 }} color="secondary.main">
							Progress Quiz 1/3
						</Box>
					}
				/>
			</List>
			<Divider />
			<Task />
			<Task />
		</Paper>
	);
}
