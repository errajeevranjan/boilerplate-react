import {
	Box,
	CssBaseline,
	Divider,
	FormControlLabel,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { BrandIcon } from "assets";
import React, { useState } from "react";
import {
	MdChevronRight,
	MdClose,
	MdInbox,
	MdMail,
	MdMenu,
} from "react-icons/md";
import { useAppDispatch } from "reduxStore";
import { toggleDarkModeReducer } from "reduxStore/app/appSlice";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { AppBar, Drawer, DrawerHeader } from "./NavigationComponents";

type ReactChildren = {
	children: React.ReactNode;
};

const Navigation = ({ children }: ReactChildren) => {
	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position='fixed' color='inherit'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={toggleDrawer}
						edge='start'>
						{open ? <MdClose /> : <MdMenu />}
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						<BrandIcon /> Brand Name
					</Typography>
					<FormControlLabel
						control={
							<DarkModeSwitch
								sx={{ m: 1 }}
								onClick={() => dispatch(toggleDarkModeReducer())}
							/>
						}
						label={""}
					/>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={toggleDrawer}>
						<MdChevronRight />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <MdInbox /> : <MdMail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <MdInbox /> : <MdMail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3, overflow: "hidden" }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
};
export default Navigation;
