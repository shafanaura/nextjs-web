import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import NestedList from "../components/NestedList";
import SimpleBreadcrumbs from "./SimpleBreadcrumbs";
import Cards from "./Cards";

const drawerWidth = 240;

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
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		backgroundColor: "#FFF",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: {
		height: theme.spacing(4),
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		backgroundColor: "#f5f5f5",
	},
	grow: {
		flexGrow: 1,
	},
	headerBar: {
		direction: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

function ResponsiveDrawer(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Grid alignItems="center">
				<ListItem style={{ justifyContent: "center" }}>
					<img height={65} src="/images/logo_SDMtransparent 1.png" />
				</ListItem>
				<ListItem style={{ justifyContent: "center" }}>
					<Avatar className={classes.large} src="/images/avatar1.jpg" />
				</ListItem>
				<ListItemText
					style={{ textAlign: "center", justifyContent: "center" }}
					primary={
						<Typography style={{ fontWeight: 600 }}>Dudung Rohimat</Typography>
					}
					secondary={
						<Typography style={{ fontSize: 12 }}>
							ADMIN C - PT Berkah Nusantara
						</Typography>
					}
				/>
			</Grid>
			<div className={classes.toolbar} />
			{/* Nested List */}
			<NestedList />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="primary"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
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
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{/* Menu Utama */}
				<SimpleBreadcrumbs />
				<Cards />
			</main>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;
