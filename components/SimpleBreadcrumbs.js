import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	grid: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
}));

const LinkProgress = (props) => {
	return (
		<Link color="inherit" onClick={handleClick}>
			<Typography style={{ fontSize: 13 }}>{props.judul}</Typography>
		</Link>
	);
};

const LinkSite = (props) => {
	return (
		<Link color="textPrimary" onClick={handleClick}>
			<Typography style={{ fontSize: 13, fontWeight: 550 }}>
				{props.judul}
			</Typography>
		</Link>
	);
};

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function SimpleBreadcrumbs(props) {
	const classes = useStyles();

	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			className={classes.grid}
		>
			<Typography variant="h5" style={{ paddingRight: 20, fontWeight: 800 }}>
				Progress Peserta
			</Typography>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" onClick={handleClick}>
					<HomeOutlinedIcon color="primary" />
				</Link>
				<LinkProgress judul="Manajemen Pelatihan" />
				<LinkProgress judul="List Pelatihan" />
				<LinkProgress judul="Detail Pelatihan" />
				<LinkProgress judul="Detail Peserta" />
				<LinkSite judul="Progress Peserta" />
			</Breadcrumbs>
		</Grid>
	);
}
