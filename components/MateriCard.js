import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
	},
	paper: {
		borderRadius: 20,
	},
	avatarIcon: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const TaskTitle = (props) => {
	const classes = useStyles();

	return (
		<ListItem>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
				className={classes.list}
			>
				<div>
					<Typography style={{ fontWeight: 600 }}>{props.title}</Typography>
				</div>
				<div>
					<Checkbox color="primary" defaultChecked indeterminate />
				</div>
			</Grid>
		</ListItem>
	);
};

const Task = (props) => {
	const classes = useStyles();

	return (
		<ListItem>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center"
			>
				<Box pl={1}>
					<Typography style={{ fontSize: 14 }}>{props.header}</Typography>
					<Grid container direction="row" alignItems="center">
						{props.icon}
						<Typography style={{ fontSize: 12, fontWeight: 500 }}>
							{props.name}
						</Typography>
					</Grid>
				</Box>
			</Grid>
			<Checkbox color="primary" />
		</ListItem>
	);
};

export default function MateriCard() {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={3}>
			<List component="nav">
				<CardHeader
					avatar={
						<Avatar className={classes.avatarIcon}>
							<MenuBookIcon fontSize="large" />
						</Avatar>
					}
					title={
						<Typography style={{ fontSize: 18, fontWeight: 600 }}>
							Materi
						</Typography>
					}
					subheader={
						<Box style={{ fontWeight: 500 }} color="secondary.main">
							Progress 3/10
						</Box>
					}
				/>
				<Divider />

				<TaskTitle title="Pengenalan Isi Pelatihan" />
				<Task
					header="Gambaran Umum Pelatihan"
					icon={<PlayCircleOutlineOutlinedIcon color="primary" />}
					name="Video"
				/>
				<Divider />
				<TaskTitle title="Rahasia Teknik Berbicara" />
				<Task
					header="Kesalahan Umum ketika Berbicara di Depan Umum."
					icon={<PlayCircleOutlineOutlinedIcon color="primary" />}
					name="Video"
				/>
				<Task
					header="Tipe-tipe Peserta"
					icon={<DescriptionOutlinedIcon color="primary" />}
					name="PPT"
				/>
				<Task
					header="Kuasai Panggung dan Kendalikan Rasa Takut."
					icon={<InsertDriveFileOutlinedIcon color="primary" />}
					name="PDF"
				/>
				<Divider />
				<TaskTitle title="Teknik Penutup Berkesan" />
				<Task
					header="Penutupan Berkesan"
					icon={<DescriptionOutlinedIcon color="primary" />}
					name="PPT"
				/>
			</List>
		</Paper>
	);
}
