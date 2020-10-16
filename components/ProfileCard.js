import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "36ch",
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: "inline",
	},
	paper: {
		borderRadius: 20,
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	paperInput: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	cardInput: {
		backgroundColor: "#F7F7F9",
		borderColor: "#ababab",
		borderRadius: 10,
		width: "100%",
	},
	submitText: {
		color: theme.palette.secondary.main,
		fontWeight: 600,
	},
	username: {},
}));

const HeaderTitle = (props) => {
	return (
		<ListItemText style={{ marginBottom: -10 }}>
			<Typography style={{ fontWeight: 600, fontSize: 22, color: "#797979" }}>
				{props.title}
			</Typography>
		</ListItemText>
	);
};

const Contact = (props) => {
	return (
		<ListItemText
			style={{ marginTop: -15 }}
			primary={
				<Typography style={{ fontSize: 14 }}>{props.primary}</Typography>
			}
			secondary={
				<Typography style={{ fontSize: 14, fontWeight: 600 }}>
					{props.secondary}
				</Typography>
			}
		/>
	);
};

const Comment = (props) => {
	return (
		<div>
			<ListItem>
				<ListItemAvatar>
					<Avatar src={props.avatarUser} />
				</ListItemAvatar>
				<ListItemText
					primary={
						<Typography style={{ fontSize: 14, fontWeight: 600 }}>
							{props.username}
						</Typography>
					}
					secondary={
						<Typography style={{ fontSize: 12 }}>{props.userTitle}</Typography>
					}
				/>
			</ListItem>
			<ListItem>
				<Typography style={{ fontSize: 12, marginTop: -15 }}>
					Feugiat sit vulputate fringilla etiam quis facilisi. Pellentesque leo
					dictum vel, enim ac. Nunc, justo enim vel.
				</Typography>
			</ListItem>
		</div>
	);
};

export default function ProfileCard() {
	const classes = useStyles();
	return (
		<Paper className={classes.paper} elevation={3}>
			<List>
				<ListItem>
					<HeaderTitle title="Profil Peserta" />
				</ListItem>
				<CardHeader
					avatar={
						<Avatar className={classes.large} src="/images/avatar2.png" />
					}
					title="Elya Stamfordbridge"
					subheader="Peserta - PT Samitha Mandiri"
				/>

				<ListItem>
					<Contact primary="No Telefon" secondary="+62 859 10001 212" />
				</ListItem>

				<ListItem divider>
					<Contact primary="Email" secondary="elya@samitha.co" />
				</ListItem>

				<ListItem>
					<HeaderTitle title="Komentar" />
				</ListItem>

				<Comment
					avatarUser="/images/avatar1.jpg"
					username="Donny Oldtrafford"
					userTitle="Trainer - PT Berkah Nusantara"
				/>
				<Comment
					avatarUser="/images/avatar2.png"
					username="Elya Stamfordbridge"
					userTitle="Admin C - PT Berkah Nusantara"
				/>
				<Comment
					avatarUser="/images/avatar3.jpg"
					username="Dudung Rohimat"
					userTitle="Admin C - PT Berkah Nusantara"
				/>
			</List>
			<Divider />
			<ListItem style={{ paddingTop: 30, paddingBottom: 30 }}>
				<Card variant="outlined" className={classes.cardInput}>
					<Grid container>
						<InputBase
							className={classes.input}
							placeholder="Beri Komentar..."
						/>
						<IconButton type="submit" className={classes.iconButton}>
							<Typography className={classes.submitText}>Kirim</Typography>
						</IconButton>
					</Grid>
				</Card>
			</ListItem>
		</Paper>
	);
}
