import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Avatar from "@material-ui/core/Avatar";

const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: "#FCC932",
		color: "#FCC932",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "$ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

export default function TopBar() {
	const classes = useStyles();
	return (
		<div className={classes.grow}>
			<AppBar position="static" color="#FFF">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="primary"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.grow} />
					<div>
						<IconButton>
							<StyledBadge
								overlap="circle"
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								variant="dot"
							>
								<NotificationsNoneOutlinedIcon />
							</StyledBadge>
						</IconButton>
						<IconButton edge="end" aria-haspopup="true" color="primary">
							<Avatar src="/images/avatar1.jpg" />
						</IconButton>
					</div>
					<div>
						<IconButton
							aria-label="show more"
							aria-haspopup="true"
							color="primary"
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
