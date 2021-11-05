import {
	AppBar,
	Button,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from "@mui/material";
import * as React from "react";
import { MdMenu } from "react-icons/md";

type ReactChildren = {
	children: React.ReactNode;
};

const Navigation = ({ children }: ReactChildren) => {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={toggleDrawer}>
						<MdMenu />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>

			{children}

			<SwipeableDrawer
				anchor={"left"}
				open={open}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}>
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? "inbox" : "mail"}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? "inbox" : "mail"}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>
		</>
	);
};
export default Navigation;
