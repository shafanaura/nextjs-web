import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		borderRadius: 20,
	},
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
	text: { minWidth: 200 },
	desc: {
		maxWidth: 200,
	},
	card: {
		borderLeftWidth: 5,
		borderRightWidth: 0,
		borderTop: 0,
		borderBottomWidth: 0,
	},
	cardActive: {
		borderLeftWidth: 5,
		borderRightWidth: 0,
		borderTop: 0,
		borderBottomWidth: 0,
		borderLeftColor: theme.palette.success.main,
		marginTop: 10,
	},
	cardNonActive: {
		borderLeftWidth: 5,
		borderRightWidth: 0,
		borderTop: 0,
		borderBottomWidth: 0,
		borderLeftColor: "#C4C4C4",
		marginTop: 10,
	},
	paCallOut: {
		borderRadius: 5,
		fontWeight: 700,
		color: "#FFF",
		backgroundColor: theme.palette.primary.main,
		fontSize: 14,
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 10,
		paddingRight: 10,
	},
}));

const ScheduleNonActive = (props) => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.cardNonActive}>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
			>
				<div style={{ paddingLeft: 5, maxWidth: 230, minWidth: 230 }}>
					<Typography variant="caption" style={{ color: "#848484" }}>
						{props.check}
					</Typography>
					<Typography style={{ fontWeight: 600 }}>{props.task}</Typography>
					<Typography style={{ fontSize: 12 }}>{props.time}</Typography>
					<Typography style={{ fontSize: 12 }}>{props.place}</Typography>
				</div>
				<Checkbox color="primary" />
			</Grid>
		</Card>
	);
};

const ScheduleActive = (props) => {
	const classes = useStyles();

	return (
		<Card variant="outlined" className={classes.cardActive}>
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
			>
				<div style={{ paddingLeft: 5, maxWidth: 230, minWidth: 230 }}>
					<Typography variant="caption" style={{ color: "#848484" }}>
						{props.check}
					</Typography>
					<Typography style={{ fontWeight: 600 }}>{props.task}</Typography>
					<Typography style={{ fontSize: 12 }}>{props.time}</Typography>
					<Typography style={{ fontSize: 12 }}>{props.place}</Typography>
				</div>
				<Checkbox color="primary" />
			</Grid>
		</Card>
	);
};

export default function JadwalCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={3}>
			<List component="nav" className={classes.root}>
				<CardHeader
					avatar={
						<Avatar className={classes.avatarIcon}>
							<PeopleAltIcon fontSize="large" />
						</Avatar>
					}
					action={
						<IconButton>
							<Typography className={classes.paCallOut} variant="body2">
								Jadwal A
							</Typography>
						</IconButton>
					}
					title={
						<Typography style={{ fontSize: 18, fontWeight: 600 }}>
							Tatap Muka
						</Typography>
					}
					subheader={
						<Box style={{ fontWeight: 500 }} color="secondary.main">
							Progress 3/3
						</Box>
					}
				/>
				<Divider />
				<ListItem>
					<ScheduleNonActive
						check="Sudah selesai"
						task="Gambaran Umum Pelatihan"
						time="Sabtu, 14 Juni 2020 15:00 - 18:00 WIB"
						place="Sudirman Plaza Lt 3"
					/>
				</ListItem>
				<ListItem>
					<ScheduleNonActive
						check="Sudah selesai"
						task="Solve Problem"
						time="Minggu, 25 Juni 2020 15:00 - 18:00 WIB "
						place="Sudirman Plaza Lt 2"
					/>
				</ListItem>
				<ListItem>
					<ScheduleActive
						check="Besok"
						task="Mengatasi kaki bergetar"
						time="Rabu, 15 Juli 2020 15:00 - 18:00 WIB"
						place="Sudirman Plaza Lt 1"
					/>
				</ListItem>
			</List>
		</Paper>
	);
}
