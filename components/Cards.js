import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProgressCard from "./ProgressCard";
import ReminderCard from "./ReminderCard";
import MateriCard from "./MateriCard";
import QuizCard from "./QuizCard";
import UjianCard from "./UjianCard";
import JadwalCard from "./JadwalCard";
import ProfileCard from "./ProfileCard";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	margin: {
		paddingTop: theme.spacing(3),
	},
}));

export default function Cards() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item sm={8}>
					<ProgressCard />
				</Grid>
				<Grid item sm>
					<ReminderCard />
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item sm>
					<MateriCard />
				</Grid>
				<Grid item sm>
					<QuizCard />
					<Grid className={classes.margin}>
						<UjianCard />
					</Grid>
					<Grid className={classes.margin}>
						<JadwalCard />
					</Grid>
				</Grid>
				<Grid item sm>
					<ProfileCard />
				</Grid>
			</Grid>
		</div>
	);
}
