import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import TransferWithinAStationOutlinedIcon from "@material-ui/icons/TransferWithinAStationOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	text: {
		marginLeft: -15,
		fontWeight: 600,
		color: "#797979",
		fontSize: 14,
		minWidth: 140,
		maxWidth: 140,
	},
	childText: { marginLeft: 25 },
}));

const ListTitle = (props) => {
	const classes = useStyles();

	return (
		<ListItem button>
			<ListItemIcon>{props.icon}</ListItemIcon>
			<Typography className={classes.text}>{props.title}</Typography>
		</ListItem>
	);
};

function ListGroup(props) {
	const classes = useStyles();

	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<div>
			<ListItem button onClick={handleClick}>
				<ListItemIcon>{props.icon}</ListItemIcon>
				<Typography className={classes.text}>{props.title}</Typography>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<Typography className={classes.childText}>•</Typography>
						</ListItemIcon>
						<Typography className={classes.text}>{props.child1}</Typography>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<Typography className={classes.childText}>•</Typography>
						</ListItemIcon>
						<Typography className={classes.text}>{props.child2}</Typography>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<Typography className={classes.childText}>•</Typography>
						</ListItemIcon>
						<Typography className={classes.text}>{props.child3}</Typography>
					</ListItem>
				</List>
			</Collapse>
		</div>
	);
}

export default function NestedList() {
	const classes = useStyles();

	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			className={classes.root}
		>
			<ListTitle icon={<HomeOutlinedIcon />} title="Dashboard" />

			<ListGroup
				icon={<ApartmentOutlinedIcon />}
				title="Manajemen Perusahaan"
				child1="Data Company"
				child2="Ketua Klien"
				child3="Trainer"
			/>

			<ListGroup
				icon={<GroupAddOutlinedIcon />}
				title="Manajemen Peserta"
				child1="Peserta Teregestrasi"
				child2="Tambah Peserta"
				child3="Tambah Bulk Peserta"
			/>

			<ListGroup
				icon={<SupervisorAccountOutlinedIcon />}
				title="Manajemen Pelatihan"
				child1="List Pelatihan"
				child2="Tambah Pelatihan"
				child3="Cek Sertifikat"
			/>

			<ListGroup
				icon={<TransferWithinAStationOutlinedIcon />}
				title="Transaksi"
				child1="Transaksi Peserta"
				child2="Transaksi Perusahaan"
				child3="Kode Promo Perusahaan"
			/>

			<ListTitle icon={<QuestionAnswerOutlinedIcon />} title="Chat" />
			<ListTitle icon={<PersonOutlineOutlinedIcon />} title="Profile" />
		</List>
	);
}
